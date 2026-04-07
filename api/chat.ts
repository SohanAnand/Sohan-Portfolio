import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const supabase = createClient(
  process.env.VITE_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function getRelevantContext(question: string): Promise<string> {
  const embeddingResponse = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: question,
  });
  const queryEmbedding = embeddingResponse.data[0].embedding;

  const { data, error } = await supabase.rpc("match_documents", {
    query_embedding: queryEmbedding,
    match_threshold: 0.5,
    match_count: 5,
  });

  if (error) throw new Error(`Supabase RPC error: ${error.message}`);
  if (!data || data.length === 0) return "";

  return data.map((d: { content: string }) => d.content).join("\n\n---\n\n");
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { question } = req.body as { question?: string };

  if (!question || typeof question !== "string" || question.trim().length === 0) {
    res.status(400).json({ error: "Question is required" });
    return;
  }

  if (question.length > 500) {
    res.status(400).json({ error: "Question too long" });
    return;
  }

  try {
    const context = await getRelevantContext(question.trim());

    const hasContext = context.trim().length > 0;

    const systemPrompt = `You are a portfolio assistant for Sohan Hanagandi, an AI-Native Product Builder and Systems Orchestrator with 5+ years of B2B SaaS enterprise product management experience.

CRITICAL RULES — follow these exactly:
- You ONLY answer using the CONTEXT section below. Do NOT use any general knowledge, training data, or assumptions.
- Sohan is a PRODUCT MANAGER, not a software engineer or developer. Never describe him as a software engineer, developer, or coder.
- If the CONTEXT section is empty or does not contain the answer, respond with exactly: "I don't have that detail handy. Reach out to Sohan directly at connect.sohananand@gmail.com"
- Never invent, assume, or infer any projects, roles, skills, or experiences not explicitly stated in CONTEXT
- Keep answers concise and professional (2-4 sentences max)
- Refer to Sohan in third person
- Never discuss salary, compensation, or provide references

${hasContext ? `CONTEXT:\n${context}` : "CONTEXT: [empty — no relevant information found]"}`;

    const message = await anthropic.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: "user", content: question.trim() }],
    });

    const responseText =
      message.content[0].type === "text" ? message.content[0].text : "";

    res.status(200).json({ answer: responseText });
  } catch (err) {
    console.error("Chat API error:", err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
}

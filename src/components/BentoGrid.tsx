import { motion } from "framer-motion";
import "../components/styles/BentoGrid.css";

interface BentoCardProps {
  title: string;
  items?: string[];
  size?: "large" | "medium" | "small";
  highlight?: boolean;
}

const BentoCard = ({ title, items, size = "medium", highlight = false }: BentoCardProps) => (
  <motion.div
    className={`bento-card bento-${size} ${highlight ? "bento-highlight" : ""}`}
    whileHover={{ scale: 1.02, y: -4 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
  >
    <div className="bento-card-inner">
      <h3 className="bento-title">{title}</h3>
      {items && (
        <ul className="bento-items">
          {items.map((item) => (
            <li key={item} className="bento-item">{item}</li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
);

const BentoGrid = () => (
  <section className="bento-section">
    <div className="section-container">
      <p className="bento-label">TOOLKIT</p>
      <h2 className="bento-heading">WHAT I BUILD WITH</h2>
      <div className="bento-grid">
        <BentoCard
          title="AI / ML & GenAI"
          items={[
            "LLMs",
            "NLP",
            "RAG Pipelines",
            "AI Agents",
            "Generative AI",
            "Prompt Engineering",
            "Recommendation Systems",
            "Responsible AI",
            "Model Evaluation",
          ]}
          size="large"
          highlight={true}
        />
        <BentoCard
          title="Product & Strategy"
          items={[
            "Product Discovery",
            "A/B Testing",
            "GTM Strategy",
            "RICE Prioritization",
            "OKRs & PRDs",
            "Product-Led Growth",
            "Competitive Analysis",
            "Agile / Scrum",
          ]}
          size="large"
        />
        <BentoCard
          title="Data & Analytics"
          items={[
            "SQL",
            "Mixpanel",
            "Amplitude",
            "Power BI",
            "Tableau",
            "Domo",
            "Cohort Analysis",
            "Funnel Optimization",
          ]}
          size="large"
        />
        <BentoCard
          title="AI Frameworks & Infra"
          items={[
            "LangChain",
            "LangGraph",
            "pgvector",
            "Claude API",
            "OpenAI APIs",
            "MLOps",
            "AI/ML Pipelines",
          ]}
          size="large"
        />
        <BentoCard
          title="Technical Skills"
          items={[
            "Python",
            "SQL",
            "API Integration",
            "Data Pipelines",
            "GitHub",
          ]}
          size="medium"
        />
        <BentoCard
          title="SaaS Metrics"
          items={[
            "ARR / MRR",
            "NPS",
            "Churn Analysis",
            "Retention Analysis",
          ]}
          size="medium"
        />
        <BentoCard
          title="Tools & Workflow"
          items={[
            "Jira",
            "Azure DevOps",
            "Confluence",
            "Figma",
            "Cursor",
            "Claude Code",
          ]}
          size="medium"
        />
      </div>
    </div>
  </section>
);

export default BentoGrid;

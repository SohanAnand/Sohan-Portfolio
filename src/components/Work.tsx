import { useState, useCallback, useRef, useEffect } from "react";
import "./styles/Work.css";
import ProjectModal from "./ProjectModal";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects: {
  title: string;
  category: string;
  shortDescription: string;
  story: string;
  tools: string;
  thinking: string;
  image?: string;
  link?: string;
}[] = [
  {
    title: "Trip Booking Concierge",
    category: "Autonomous AI Agent",
    shortDescription:
      "An autonomous AI agent that books flights and hotels end-to-end, with a two-step approval gate so it never charges your card without asking first.",
    story:
      "Autonomous travel agents fail when they book the wrong flight. I defined the 0→1 vision for a trip-booking agent built to eliminate those irreversible errors. Spec'd a two-step approval gate balancing UX friction vs. financial safety, cutting unsafe-booking risk to 0 across 12+ adversarial red-team scenarios. Delivered 100% fact provenance and zero approval bypasses. Trust-by-default isn't a feature. It's the product.",
    tools:
      "Built an autonomous AI trip-booking agent end-to-end, designed the multi-step planning loop with tool-calling for flight search, hotel availability, and itinerary assembly. Engineered a two-step approval gate that surfaces every irreversible action (bookings, payments, schedule changes) for explicit user confirmation before execution. Wired structured outputs and fact provenance into every agent response so users can trace every claim back to its source. Deployed as a live demo with adversarial red-team test coverage and zero approval bypasses across 12+ scenarios.",
    thinking:
      "Most autonomous agents optimize for speed. I optimized for trust. The insight was uncomfortable: a $2K booking error isn't a UX bug, it's a refund nightmare. If someone hands their wallet to an AI, the agent's job isn't to be fast. It needs to be right, and to ask before it bets the user's money on being right. I built the trust-by-default approval gate because the prevailing pattern (full autonomy) breaks the moment a hallucination meets a credit card. Choosing a two-step approval over silent execution was deliberate. The friction is the feature. Across 12+ adversarial red-team scenarios, the gate cut unsafe-booking risk to zero: zero bypasses, 100% fact provenance. Shipping a live demo where reviewers can try to break it is the proof of concept.",
    image: "/images/Concierge.png",
    link: "https://trip-booking-ai-agent.vercel.app/",
  },
  {
    title: "Kira AI",
    category: "Production RAG Voice Agent",
    shortDescription:
      "A RAG voice agent recruiters can talk to instead of scheduling a screening call, answering questions about my projects and experience in real time.",
    story:
      "Recruiters skim portfolios in 90 seconds. I built Kira AI so they get answers about my work in 2 minutes instead, replacing the screening calls I used to take. Engineered pgvector on Supabase, OpenAI embeddings, and Claude Haiku streaming with context windowing and refusal logic. Deployed with prompt guardrails for out-of-scope queries. Live on Vercel and proof I ship the AI products I talk about.",
    tools:
      "Claude API · Supabase · pgvector · TypeScript · React. Built a context-aware AI assistant from scratch. Designed the RAG pipeline, chunked and embedded a knowledge base using pgvector, and wired retrieval to Claude's API for grounded, accurate responses. Deployed as a persistent chat interface on this portfolio with real-time streaming and fallback handling.",
    thinking:
      "Most portfolios are static. A recruiter visits, skims, and leaves. I wanted mine to be a conversation. The insight was simple: if someone is curious about my work, they shouldn't have to hunt through pages. They should just be able to ask. I built Kira AI because I wanted to demonstrate product thinking, not just describe it. Choosing RAG over a fine-tuned model was deliberate. The knowledge base evolves, and retrieval keeps answers grounded and accurate without retraining. Shipping it on this portfolio is itself the proof of concept.",
    image: "/images/Kira AI.png",
  },
  {
    title: "BrandBrief AI",
    category: "RAG Template Matching Engine",
    shortDescription:
      "A RAG engine that reads a creative brief and instantly surfaces the right design template from 4,500+ options, cutting hours of manual search.",
    story:
      "Diagnosed brief-to-template matching as the conversion blocker. Manual search was eating hours per week. Shipped a Claude + pgvector RAG engine processing 4,500+ records, no LangChain. Hit ~70% top-1 retrieval accuracy with under 3s P50 latency on Claude inference. Moved the full template library to live production with auth. The win wasn't the model. It was deciding manual search was the bottleneck worth automating.",
    tools:
      "Claude API · pgvector · RAG · Python · PostgreSQL. Built a natural-language template discovery system for Canva Teams after identifying that 60% of users bypassed Brand Templates due to flat folder-based UX. Designed and shipped a RAG pipeline using Claude and pgvector that matches briefs to brand-compliant templates at 72% accuracy in under 3 seconds, projecting 40% fewer design-team requests and 22 minutes saved per asset.",
    thinking:
      "The problem wasn't that users disliked Brand Templates. They couldn't find the right one fast enough, so they skipped them entirely. That 60% bypass rate was a discovery failure, not a quality failure. I didn't want to add more filters or folders. I wanted to remove the need to know what to search for. Natural language input means users describe what they need in their own words, and the system does the matching. The bet was that reducing time-to-template below the threshold of frustration would change the behaviour entirely.",
    image: "/images/Brand brief AI.png",
    link: "https://on-brief-ai.vercel.app/",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [modalProject, setModalProject] = useState<(typeof projects)[0] | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setSlideWidth(el.offsetWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  // Only stop propagation when there is actually somewhere to navigate.
  // If there's no link (e.g. BrandBrief AI), let the click bubble up to
  // the card handler so the modal opens instead.
  const handleTitleClick = (e: React.MouseEvent, project: (typeof projects)[0]) => {
    if (project.title === "Kira AI") {
      e.stopPropagation();
      window.dispatchEvent(new CustomEvent("openKiraChat"));
    } else if (project.link) {
      e.stopPropagation();
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
    // No link and not Kira: bubble up → card click → modal
  };

  const handleImageClick = (e: React.MouseEvent, project: (typeof projects)[0]) => {
    if (project.title === "Kira AI") {
      e.stopPropagation();
      window.dispatchEvent(new CustomEvent("openKiraChat"));
    } else if (project.link) {
      e.stopPropagation();
      window.open(project.link, "_blank", "noopener,noreferrer");
    }
    // No link: bubble up → card click → modal
  };

  const handleCardClick = (project: (typeof projects)[0]) => {
    setModalProject(project);
  };

  const hasExternalLink = (project: (typeof projects)[0]) =>
    project.title === "Kira AI" || !!project.link;

  return (
    <>
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <h2>
            My <span>Work</span>
          </h2>

          <div className="carousel-wrapper">
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={goToPrev}
              aria-label="Previous project"
              data-cursor="disable"
            >
              <MdArrowBack />
            </button>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={goToNext}
              aria-label="Next project"
              data-cursor="disable"
            >
              <MdArrowForward />
            </button>

            <div className="carousel-track-container" ref={containerRef}>
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
              >
                {projects.map((project, index) => (
                  <div
                    className="carousel-slide"
                    key={index}
                    style={{ width: slideWidth || undefined }}
                  >
                    <div
                      className="project-card"
                      onClick={() => handleCardClick(project)}
                      role="button"
                      tabIndex={0}
                      aria-label={`View details for ${project.title}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") handleCardClick(project);
                      }}
                    >
                      {/* Left: number + text */}
                      <div className="project-card-left">
                        <span className="project-card-number">0{index + 1}</span>

                        <div className="project-card-info">
                          <h4
                            className={
                              hasExternalLink(project)
                                ? "project-card-title project-card-title--link"
                                : "project-card-title"
                            }
                            onClick={(e) => handleTitleClick(e, project)}
                          >
                            {project.title}
                          </h4>
                          <p className="project-card-category">{project.category}</p>
                          <p className="project-card-desc">{project.shortDescription}</p>
                        </div>
                      </div>

                      {/* Right: thumbnail */}
                      {project.image && (
                        <div
                          className="project-card-thumb"
                          onClick={(e) => handleImageClick(e, project)}
                          aria-label={`Open ${project.title}`}
                        >
                          <img src={project.image} alt={project.title} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-dots">
              {projects.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to project ${index + 1}`}
                  data-cursor="disable"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </>
  );
};

export default Work;

import { useState, useCallback, useRef, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects: {
  title: string;
  category: string;
  tools: string;
  thinking: string;
  image?: string;
  link?: string;
}[] = [
  {
    title: "Kira AI",
    category: "AI-Powered Assistant",
    tools: "Claude API · Supabase · pgvector · TypeScript · React. Built a context-aware AI assistant from scratch. Designed the RAG pipeline, chunked and embedded a knowledge base using pgvector, and wired retrieval to Claude's API for grounded, accurate responses. Deployed as a persistent chat interface on this portfolio with real-time streaming and fallback handling.",
    thinking: "Most portfolios are static. A recruiter visits, skims, and leaves. I wanted mine to be a conversation. The insight was simple: if someone is curious about my work, they shouldn't have to hunt through pages. They should just be able to ask. I built Kira AI because I wanted to demonstrate product thinking, not just describe it. Choosing RAG over a fine-tuned model was deliberate. The knowledge base evolves, and retrieval keeps answers grounded and accurate without retraining. Shipping it on this portfolio is itself the proof of concept.",
  },
  {
    title: "BrandBrief AI",
    category: "0→1 AI Prototype",
    tools: "Claude API · pgvector · RAG · Python · PostgreSQL. Built a natural-language template discovery system for Canva Teams after identifying that 60% of users bypassed Brand Templates due to flat folder-based UX. Designed and shipped a RAG pipeline using Claude and pgvector that matches briefs to brand-compliant templates at 72% accuracy in under 3 seconds, projecting 40% fewer design-team requests and 22 minutes saved per asset.",
    thinking: "The problem wasn't that users disliked Brand Templates. They couldn't find the right one fast enough, so they skipped them entirely. That 60% bypass rate was a discovery failure, not a quality failure. I didn't want to add more filters or folders. I wanted to remove the need to know what to search for. Natural language input means users describe what they need in their own words, and the system does the matching. The bet was that reducing time-to-template below the threshold of frustration would change the behaviour entirely.",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
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

          {/* Slides */}
          <div className="carousel-track-container" ref={containerRef}>
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * slideWidth}px)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  className="carousel-slide"
                  key={index}
                  style={{ width: slideWidth || undefined }}
                >
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4
                          onClick={
                            project.title === "Kira AI"
                              ? () => window.dispatchEvent(new CustomEvent("openKiraChat"))
                              : project.title === "BrandBrief AI"
                              ? () => window.open("https://on-brief-ai.vercel.app/", "_blank", "noopener,noreferrer")
                              : undefined
                          }
                          className={
                            project.title === "Kira AI" || project.title === "BrandBrief AI"
                              ? "carousel-title-clickable"
                              : undefined
                          }
                        >{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-thinking">
                          <span className="tools-label">Product Thinking</span>
                          <p>{project.thinking}</p>
                        </div>
                      </div>
                    </div>
                    {project.image && (
                      <div className="carousel-image-wrapper">
                        <WorkImage
                          image={project.image}
                          alt={project.title}
                          link={project.link}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

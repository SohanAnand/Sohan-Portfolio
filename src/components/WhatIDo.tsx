import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI PRODUCT STRATEGY</h3>
              <h4>AI-Native Products at Enterprise Scale</h4>
              <p>
                I build AI-native products and orchestrate complex systems
                at scale. From scoping multi-agent AI workflows that cut
                enterprise onboarding by 40% to shipping RAG pipelines and
                the AI assistant powering this portfolio. I obsess over
                activation, retention, and time-to-value.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">AI Product Strategy</div>
                <div className="what-tags">Agentic Workflows</div>
                <div className="what-tags">RAG Pipelines</div>
                <div className="what-tags">LLMs &amp; Gen AI</div>
                <div className="what-tags">Vector Embeddings</div>
                <div className="what-tags">Context Engineering</div>
                <div className="what-tags">MCP</div>
                <div className="what-tags">A/B Testing</div>
                <div className="what-tags">Product-Led Growth</div>
                <div className="what-tags">B2B SaaS</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>SYSTEMS ORCHESTRATOR</h3>
              <h4>From Discovery to Shipped Product</h4>
              <p>
                I identify root causes, design solutions, and build them
                using AI-assisted development. From scoping to launch,
                I drive activation and retention outcomes end to end,
                backed by A/B testing, cohort analysis, and relentless
                discovery.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">AI-Assisted Dev</div>
                <div className="what-tags">Multi-Agent Systems</div>
                <div className="what-tags">SQL · Mixpanel · Amplitude</div>
                <div className="what-tags">Supabase · pgvector</div>
                <div className="what-tags">RICE Prioritization</div>
                <div className="what-tags">OKRs · SaaS Metrics</div>
                <div className="what-tags">Cohort Analysis</div>
                <div className="what-tags">Root Cause Analysis</div>
                <div className="what-tags">Activation &amp; Retention</div>
                <div className="what-tags">Data-Driven Discovery</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}

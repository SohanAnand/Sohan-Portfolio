import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager</h4>
                <h5>Community Dreams Foundation · San Francisco Bay Area, CA</h5>
                <h3>Feb 2026 – Present</h3>
              </div>
            </div>
            <p>
              Manual ops workflows were the bottleneck. I shipped intake, triage, and doc-generation AI agents to production across 2 legacy products, replacing them with LLM pipelines I owned end-to-end: prompts, orchestration, and eval harnesses (golden-set, LLM-as-judge). Ran blind comparisons vs. staff baselines before every rollout. Aligned 3 stakeholder groups on the AI roadmap and unlocked engineering capacity for 2 priority initiatives.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Product Co-op</h4>
                <h5>Fabrix.ai (fka CloudFabrix) · Pleasanton, CA</h5>
                <h3>Jan 2025 – Jul 2025</h3>
              </div>
            </div>
            <p>
              Drove multi-agent orchestration for Tata Communications and 2 Fortune 500 accounts, cutting onboarding ~10%. Shipped RAG pipelines with custom chunking and reusable retrieval, lifting golden-set eval relevance ~10pp. Replaced GPT-4 with a fine-tuned open-source LLM in prod; eval quality held flat, per-token cost dropped. Caught at-risk accounts via telemetry pre-value; shipped 4 fixes that closed the renewal.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager</h4>
                <h5>Sony Interactive Entertainment, PlayStation · $28B Division, 120M+ MAU</h5>
                <h3>Dec 2022 – Sep 2023</h3>
              </div>
            </div>
            <p>
              PlayStation's Developer Portal was stuck at 800 partners. I led a 14-person cross-functional team and scaled it 5x to 4,000+ in 10 months. Diagnosed funnel drop-off in onboarding, redesigned the compliance workflow, and cut partner activation ~22%. Built a SQL-backed ROI model that secured VP approval to expand into 2 regional markets. The portal didn't need more features; it needed less friction.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager</h4>
                <h5>Qliken Technology · B2B SaaS Analytics Platform</h5>
                <h3>Jan 2020 – Nov 2022</h3>
              </div>
            </div>
            <p>
              My first PM role taught me when to kill things. Killed 2 features with &lt;5% adoption ($250K pipeline) and redirected 4 engineers to retention, recovering $285K ARR. Caught a 90-day churn spike in SQL/Mixpanel; shipped 2 targeted interventions that recovered $180K ARR over 3 quarters. Ran vendor eval across 8 tools, surfacing 3 gaps that reshaped the roadmap and unlocked 2 enterprise wins ($95K ACV).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

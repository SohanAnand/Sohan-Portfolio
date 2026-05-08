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
                <h5>Community Dreams Foundation · Remote</h5>
                <h3>Feb 2026 – Present</h3>
              </div>
            </div>
            <p>
              Shipped intake, triage, and document-generation AI agents to production across two legacy products, replacing manual ops workflows with LLM pipelines I owned end to end — prompt engineering, orchestration, evals, and monitoring. Built a per-agent eval harness (golden-set + LLM-as-judge) and ran blind comparisons against staff baselines before each rollout, so quality wasn't a guess. Aligned three stakeholder groups around a quarterly AI roadmap, which freed up engineering capacity for two priority initiatives.
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
              Drove multi-agent orchestration for Tata Communications and two Fortune 500 accounts, cutting onboarding by ~10%, and shipped RAG pipelines with custom chunking and reusable retrieval that lifted golden-set eval relevance by ~10pp. The bigger bet was replacing GPT-4 with a fine-tuned open-source LLM in production — eval quality held flat, per-token cost dropped meaningfully. On the customer side, I caught at-risk enterprise accounts pre-value through telemetry, reprioritized the backlog, and shipped four fixes that closed the renewal.
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
              Led a 14-person cross-functional team to scale PlayStation's Developer Portal from 800 to 4,000+ partners in ten months. Diagnosed a funnel drop-off in dev-portal onboarding and redesigned the compliance workflow with the team, cutting partner activation time by ~22%. Then built a SQL-backed ROI model that earned VP approval to expand into two new regional markets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager</h4>
                <h5>Qliken Technology · B2B SaaS Analytics Platform</h5>
                <h3>Jul 2021 – Nov 2022</h3>
              </div>
            </div>
            <p>
              The hardest call was killing two features tied to $250K of sales pipeline after cohort data showed under 5% adoption — and redirecting four engineers onto retention work that ultimately recovered $285K in ARR. Earlier in the year, I caught a 90-day churn spike in SQL and Mixpanel and shipped two targeted interventions that recovered another $180K in ARR across three quarters. A vendor evaluation across eight tools surfaced three gaps that reshaped the roadmap and unlocked two enterprise wins at $95K ACV each.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Product Manager</h4>
                <h5>Qliken Technology · B2B SaaS Analytics Platform</h5>
                <h3>Jan 2020 – Jun 2021</h3>
              </div>
            </div>
            <p>
              Caught a drop-off at the config step in onboarding and partnered with UX to redesign the activation flow, materially cutting time-to-value. Ran 20+ customer discovery sessions, surfaced three top friction points, and resolved each — lifting product satisfaction two quarters running.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

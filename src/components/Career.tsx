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
                <h4>AI Product Manager</h4>
                <h5>Community Dreams Foundation · Remote</h5>
                <h3>Feb 2026 – Present</h3>
              </div>
            </div>
            <ul>
              <li>Designed an AI training program with Claude and OpenAI for non-technical staff, upskilling 30+ team members in 6 weeks.</li>
              <li>Built playbooks, prompt libraries, and hands-on guides that demystified AI for 4 departments and lifted tool adoption by 60%.</li>
              <li>Identified 8 AI integration opportunities across ops, then scoped and deployed 3 agentic workflows that cut manual work by 45%.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Product Manager</h4>
                <h5>Fabrix.ai (fka CloudFabrix) · Pleasanton, CA</h5>
                <h3>Jan 2025 – Jul 2025</h3>
              </div>
            </div>
            <ul>
              <li>Owned end-to-end AI deployments across 8 enterprise accounts, managing Claude and OpenAI vendor relationships and SOWs.</li>
              <li>Built agentic AI workflows with function calling and RAG on 1.2M+ events, cutting incident triage by 38% and lifting resolution by 31%.</li>
              <li>Defined success metrics for 5 AI initiatives, tracked outcomes, and briefed exec leadership monthly with rollup dashboards.</li>
              <li>Partnered with IT, legal, and compliance on AI governance, data privacy, and responsible AI guardrails for rollout.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager</h4>
                <h5>Sony Interactive Entertainment, PlayStation · $28B Division, 120M+ MAU</h5>
                <h3>Dec 2022 – Sep 2023</h3>
              </div>
            </div>
            <ul>
              <li>Led complex cross-functional projects from inception to launch on a 120M+ MAU platform, driving $4.1M in annual revenue impact.</li>
              <li>Translated technical concepts for design, marketing, finance, and legal, running 12+ training sessions on data and tooling.</li>
              <li>Owned vendor evaluation and integration for 3 third-party platforms, hitting 100% on-time delivery in ambiguous scope.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager</h4>
                <h5>Qliken Technology · B2B SaaS Analytics Platform</h5>
                <h3>Jul 2021 – Nov 2022</h3>
              </div>
            </div>
            <ul>
              <li>Owned roadmap and end-to-end delivery for an analytics platform serving 4,200+ accounts, shipping 14 features at 92% on-time.</li>
              <li>Built a community of internal champions across 5 teams, running enablement sessions that lifted product adoption by 28%.</li>
              <li>Translated 40+ monthly customer conversations into requirements, partnering with engineering, design, and ops to ship.</li>
            </ul>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Product Manager</h4>
                <h5>Qliken Technology · B2B SaaS Analytics Platform</h5>
                <h3>Jan 2020 – Jun 2021</h3>
              </div>
            </div>
            <ul>
              <li>Built training docs and onboarding guides for 30+ stakeholders, cutting time-to-productivity by 45% across new hires.</li>
              <li>Managed vendor evaluation for 4 third-party tools, deploying Stripe and Plaid integrations that added $680K in new ARR.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

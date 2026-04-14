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
                <h4>Product Manager (Volunteer)</h4>
                <h5>Community Dreams Foundation · Remote</h5>
                <h3>Feb 2026 – Present</h3>
              </div>
            </div>
            <p>
              Orchestrating AI transformation of 3 legacy products, defining roadmap to migrate 5 manual workflows to LLM automation.
              Architecting 0→1 AI feature processing 500+ monthly requests, owning PRD, data pipeline, and success metrics.
              Facilitating alignment across 4 non-technical stakeholder groups, securing buy-in for 6-month transformation roadmap.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Product Manager</h4>
                <h5>Fabrix.ai · Pleasanton, CA</h5>
                <h3>Jan 2025 – Jul 2025</h3>
              </div>
            </div>
            <p>
              Scoped AI agent workflows for Tata Communications and two Fortune 500 accounts, cutting onboarding time by 40% and driving 20% higher engagement through ML-powered A/B testing.
              Diagnosed that 72% of churned users dropped before reaching core value, then shipped 6 targeted fixes improving win rate by 12%.
              Architected a composable dashboard framework that became the GTM centerpiece for the AWS Marketplace launch, shifting Fabrix from services-led to product-led onboarding.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager</h4>
                <h5>Sony Interactive Entertainment, PlayStation</h5>
                <h3>Dec 2022 – Sep 2023</h3>
              </div>
            </div>
            <p>
              Led a 14-person cross-functional team to scale the Developer Portal from 800 to 60,000+ partners in 10 months.
              Simplified a 6-hour registration process to 90 minutes after discovering it drove 40% of developer churn.
              Built a SQL-driven ROI case that secured 2 new regional markets and 20K+ developers with zero incremental budget.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager</h4>
                <h5>Qliken Technology</h5>
                <h3>Jul 2021 – Nov 2022</h3>
              </div>
            </div>
            <p>
              Detected a 90-day churn spike through SQL and Mixpanel cohort analysis, launched 2 targeted interventions recovering $180K ARR.
              Benchmarked 8 vendors across 42 feature dimensions, shaping a roadmap that secured 2 enterprise wins at $95K ACV each.
              Deprioritized $250K in sales-requested features after cohort data showed under 5% adoption, redirecting engineering toward retention fixes that recovered $285K ARR.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Product Manager</h4>
                <h5>Qliken Technology</h5>
                <h3>Jan 2020 – Jun 2021</h3>
              </div>
            </div>
            <p>
              Inherited NPS at 6.5 with no discovery framework; built structured research from scratch, ran 20+ sessions, and drove NPS to 8.0 in two quarters.
              Uncovered a 40% onboarding drop-off where the product assumed technical proficiency users lacked, then partnered with UX to redesign activation with guided wizards.
              Improved time-to-value by 30% through a redesigned onboarding flow backed by user research and iterative testing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

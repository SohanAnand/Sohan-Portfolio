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
              Leading the AI transformation of three legacy products, defining a roadmap to migrate five manual workflows to LLM automation. Architecting a 0→1 AI feature now processing 500+ monthly requests, owning the PRD, data pipeline, and success metrics end to end. Most of the work, though, is alignment — translating the case for a six-month transformation across four non-technical stakeholder groups and getting them to bet on it.
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
              Joined Fabrix to scope AI agent workflows for Tata Communications and two Fortune 500 accounts, cutting onboarding time by 40% and lifting engagement 20% through ML-powered A/B testing. Along the way, I caught that 72% of churned users were dropping before reaching core value, and shipped six targeted fixes that pulled win rate up 12%. The biggest bet was architecting a composable dashboard framework — Fabrix's first self-serve integration layer — which became the GTM centerpiece for the AWS Marketplace launch and shifted the company from services-led to product-led onboarding.
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
              Led a 14-person cross-functional team across engineering, partnerships, legal, and regional ops to scale PlayStation's Developer Portal from 800 to over 60,000 partners in ten months. Diagnosed that a six-hour registration flow was driving 40% of developer churn, and rebuilt it down to 90 minutes by simplifying GDPR licensing. Then made a SQL-driven ROI case to VP leadership that unlocked two new regional markets with zero incremental budget, adding another 20K+ developers.
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
              Caught a 90-day churn spike through SQL and Mixpanel cohort analysis, built a retention dashboard from scratch, and launched two targeted interventions that recovered $180K in ARR. Benchmarked eight competing vendors across 42 feature dimensions to shape a roadmap that secured two enterprise wins at $95K ACV each. The hardest call was deprioritizing $250K of sales-requested features after cohort data showed under 5% adoption — redirecting engineering toward retention fixes that recovered another $285K in ARR.
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
              Inherited an NPS of 6.5 with no discovery framework in place, so I built structured user research from scratch and ran 20+ sessions to surface three core friction points — moving NPS to 8.0 in two quarters. The biggest unlock came from spotting a 40% onboarding drop-off where the product quietly assumed technical proficiency users didn't have; partnering with UX to redesign activation around guided wizards improved time-to-value by 30%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

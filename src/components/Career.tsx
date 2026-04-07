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
                <h4>Product Manager, Co-Op</h4>
                <h5>Fabrix.ai (fka CloudFabrix) · Pleasanton, CA</h5>
              </div>
              <h3>Jan 2025 - Jul 2025</h3>
            </div>
            <p>
              Scoped AI agent workflows for Tata Communications and two Fortune 500 accounts, cutting onboarding time by 40%.
              Ran 3 A/B tests proving ML recommendations drove 20% higher engagement.
              Diagnosed that 72% of churned users dropped before reaching core value, then shipped 6 targeted fixes improving win rate by 12%.
              Architected composable dashboard framework that became the GTM centerpiece for the AWS Marketplace launch, shifting Fabrix from services-led to product-led onboarding.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager</h4>
                <h5>Sony Interactive Entertainment, PlayStation · San Mateo, CA</h5>
              </div>
              <h3>Dec 2022 - Sep 2023</h3>
            </div>
            <p>
              Led a 14-person cross-functional team across engineering, partnerships, legal, and regional ops to scale the Developer Portal from 800 to 60,000+ partners in 10 months.
              Discovered 40% of developer churn occurred during a 6-hour registration process, simplified it to 90 minutes.
              Built a SQL-driven ROI case that secured 2 new regional markets and 20K+ developers with zero incremental budget.
              Streamlined game submission and FQA certification, cutting partner approval time by 25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager</h4>
                <h5>Qliken Technology · Bengaluru, India</h5>
              </div>
              <h3>Jul 2021 - Nov 2022</h3>
            </div>
            <p>
              Detected a 90-day churn spike through SQL and Mixpanel cohort analysis, launched 2 targeted interventions recovering $180K ARR.
              Benchmarked 8 vendors across 42 feature dimensions, shaped a roadmap securing 2 enterprise wins at $95K ACV each.
              Made the difficult call to deprioritize $250K in sales-requested pipeline features after cohort data showed under 5% adoption, redirected engineering toward retention fixes that recovered $285K ARR.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Product Manager</h4>
                <h5>Qliken Technology · Bengaluru, India</h5>
              </div>
              <h3>Jan 2020 - Jun 2021</h3>
            </div>
            <p>
              Inherited NPS at 6.5 with no discovery framework in place. Built structured research from scratch, ran 20+ sessions, identified 3 friction points, and drove NPS to 8.0 in two quarters.
              Uncovered a 40% onboarding drop-off at configuration where the product assumed technical proficiency users lacked, partnered with UX to redesign activation with guided wizards, improving time-to-value by 30%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

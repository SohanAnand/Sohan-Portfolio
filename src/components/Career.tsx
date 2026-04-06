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
              <h3>Jan 2025 – Jul 2025</h3>
            </div>
            <p>
              Scoped 3 AI agent workflows for Tata Communications and 2 Fortune 500 accounts, cutting onboarding time by 40%.
              Validated ML recommendations over dashboards through 3 A/B tests, boosting user engagement by 20% in 8 weeks.
              Identified 72% of churned users before core value, ran 15+ discovery sessions, shipped 6 fixes, improved win rate by 12%.
              Architected composable dashboard framework as first self-serve integration layer, cutting deployment time by 30% for AWS Marketplace launch.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager</h4>
                <h5>Sony Interactive Entertainment — PlayStation · San Mateo, CA</h5>
              </div>
              <h3>Dec 2022 – Sep 2023</h3>
            </div>
            <p>
              Built GTM playbook across 14-person cross-functional team, scaling Developer Portal from 800 → 60,000+ partners in 10 months.
              Simplified onboarding and GDPR licensing, cutting developer registration time from 6 hours to 90 minutes.
              Secured 2 new regional markets with zero budget via SQL-driven ROI case for VP leadership, adding 20K+ developers.
              Streamlined Content Pipeline game submission and FQA certification workflow, reducing partner approval time by 25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Product Manager</h4>
                <h5>Qliken Technology · Bengaluru, India</h5>
              </div>
              <h3>Jul 2021 – Nov 2022</h3>
            </div>
            <p>
              Detected 90-day churn spike, built SQL/Mixpanel retention dashboard, launched 2 targeted interventions, recovered $180K ARR.
              Benchmarked 8 vendors, isolated 3 critical feature gaps, shaped roadmap that secured 2 enterprise wins at $95K ACV.
              Deprioritized $250K-pipeline features after cohort data showed &lt;5% adoption, redirected engineering toward retention fixes recovering $285K ARR.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Product Manager</h4>
                <h5>Qliken Technology · Bengaluru, India</h5>
              </div>
              <h3>Jan 2020 – Jun 2021</h3>
            </div>
            <p>
              Diagnosed NPS at 6.5 with no framework, ran 20+ discovery sessions, improved NPS to 8.0 in 2 quarters.
              Uncovered 40% onboarding drop-off at configuration, partnered with UX to redesign activation, improved time-to-value by 30%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

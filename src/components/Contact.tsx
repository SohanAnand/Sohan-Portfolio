import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/sohhhan/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                linkedin.com/in/sohhhan/
              </a>
            </p>
            <p style={{ marginTop: 0 }}>
              <a
                href="mailto:connect.sohananand@gmail.com"
                data-cursor="disable"
              >
                connect.sohananand@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              Northeastern University, Boston MA, M.S. Project Management, Dec 2025
            </p>
            <p>
              Gogte Institute of Technology, Belgaum, B.E. Computer Science, Mar 2020
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/SohanAnand"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/sohhhan/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Sohan Hanagandi</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

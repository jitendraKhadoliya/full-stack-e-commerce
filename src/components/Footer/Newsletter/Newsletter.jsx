import "./Newsletter.scss";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletters</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
          <input type="email" name="email" id="" placeholder="Email Adderss" />
          <button type="submit">Subscribe</button>
        </div>
        <span className="text">
          Will be used in accordence with our privacy policy
        </span>
        <div className="social-icons">
          <div className="icon">
            {/* <a href="http://" target={"_blank"} rel="noreferrer"> */}
              <FaGithub size={17} />
            {/* </a> */}
          </div>
          <div className="icon">
            {/* <a href="http://" target={"_blank"} rel="noreferrer"> */}
              <FaInstagram size={17} />
            {/* </a> */}
          </div>
          <div className="icon">
            {/* <a href="http://" target={"_blank"} rel="noreferrer"> */}
              <FaLinkedinIn size={17} />
            {/* </a> */}
          </div>
          <div className="icon">
            {/* <a href="http://" target={"_blank"} rel="noreferrer"> */}
              <FaTwitter size={17} />
            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

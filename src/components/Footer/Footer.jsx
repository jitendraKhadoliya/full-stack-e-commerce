import { FaLocationArrow, FaMobile, FaEnvelope } from "react-icons/fa";
import payment from '../../assets/payments.png'

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* here i will create 4 colume for footer */}
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            ZenBazaar offers high-quality headphones and audio products designed
            to help you find balance and mindfulness. Tune in to your inner
            voice with our thoughtfully curated selection of products that
            deliver the perfect blend of sound and serenity. Join us on our
            journey towards mindfulness and find your rhythm with ZenBazaar's
            premium headphones and audio accessories
          </div>
        </div>
        <div className="col">
          <div className="title">Content</div>

          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Near Khemi Sati Road,Jhunjhunu,Rajasthan</div>
          </div>
          <div className="c-item">
            <FaMobile />
            <div className="text">Phone : +91 123 4567 890</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email : store@ZenBazaar.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Category</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooh Speaker</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Page</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privecy Policy</span>
          <span className="text">Reaturns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">ZenBazaar 2023 CREATED BY JITENDRA KHADOLIYA, PREMIUM E-COMMERCE SOLUTIONS.</div>
            <img src={payment} alt="payment" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

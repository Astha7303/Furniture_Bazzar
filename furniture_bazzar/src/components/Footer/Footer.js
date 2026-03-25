import "./Footer.css";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import facebook from "../../images/icons/facebook-icon.svg";
import instagram from "../../images/icons/instagram-icon.svg";
import youtube from "../../images/icons/youtube-icon.svg";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* logo */}
        <div className="footer-col">
          <img src={logo} alt="logo" className="footer-logo" />
        </div>

        {/* links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/aboutus")}>About Us</p>
          <p onClick={() => navigate("/contactus")}>Contact Us</p>
          <p>Investors</p>
          <p onClick={() => navigate("/broucher")}>Brochure</p>
        </div>

        {/* useful */}
        <div className="footer-col">
          <h3>Useful Links</h3>
          <p onClick={() => navigate("/ourproducts")}>Our Products</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p onClick={() => navigate("/ourservice")}>Our Serivce</p>
          <p>Cancellation Policy</p>
        </div>

        {/* contact */}
        <div className="footer-col">
          <h3>Contact Details</h3>

          <p>Email: asthajethava@gmail.com</p>
          <p>Phone: +91 93282 19976</p>

          <div className="social-icons">
            <a href="#">
              <img src={facebook} alt="facebook-icon" width={20} />
            </a>

            <a href="#">
              <img src={instagram} alt="instagram-icon" width={20} />
            </a>

            <a href="#">
              <img src={youtube} alt="youtube-icon" width={20} />
            </a>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="footer-bottom">
        Copyright 2026 © web design by Astha | All rights Reserved to Furniture
        Bazzar
      </div>
    </footer>
  );
}

export default Footer;

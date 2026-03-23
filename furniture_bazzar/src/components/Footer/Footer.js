import "./Footer.css";
import logo from "../../images/logo.png";

function Footer() {
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
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Investors</p>
          <p>Brochure</p>
        </div>

        {/* useful */}
        <div className="footer-col">
          <h3>Useful Links</h3>
          <p>Our Products</p>
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
          <p>Return & Refund</p>
          <p>Cancellation Policy</p>
        </div>

        {/* contact */}
        <div className="footer-col">
          <h3>Contact Details</h3>

          <p>Email: asthajethava@gmail.com</p>
          <p>Phone: +91 93282 19976</p>

          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="#">
              <i className="fab fa-youtube"></i>
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

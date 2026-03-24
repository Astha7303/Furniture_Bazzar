import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logoheader from "../../images/logo-header.png";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo-box" onClick={() => handleNavigate("/")}>
          <img src={logoheader} alt="logo" />
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Menu */}
        <nav className={`menu ${menuOpen ? "show" : ""}`}>
          <button onClick={() => handleNavigate("/")}>Home</button>
          <button onClick={() => handleNavigate("/aboutus")}>About Us</button>
          <button onClick={() => handleNavigate("/contactus")}>Contact Us</button>
          {/* <button onClick={() => handleNavigate("/booknow")}>Book Now</button> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;

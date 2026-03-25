import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logoheader from "../../images/logo-header.png";

const menuData = {
  products: [
    { menu: "Bedroom", link: "/bedroomfurniture" },
    { menu: "Living Room", link: "/livingroomfurniture" },
    { menu: "Kitchen", link: "/kitchenfurniture" },
    { menu: "Office", link: "/officefurniture" },
    { menu: "Library", link: "/libraryfurniture" },
    { menu: "Studyroom", link: "/studyroomfurniture" },
    { menu: "Hospital", link: "/hospitalfurniture" },
  ],

  newArrivals: [
    { menu: "Latest Beds", link: "/beds" },
    { menu: "Modern Sofas", link: "/sofas" },
    { menu: "Trending Chairs", link: "/chairs" },
  ],

  deals: [
    { menu: "Discount in Beds", link: "/beds" },
    { menu: "Combo Offers", link: "/combooffers" },
  ],

  ask: [
    { menu: "Customised Furniture", link: "/customisedfurniture" },
    { menu: "Our service", link: "/ourservice" },
  ],
};

function Header() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const [openMenu, setOpenMenu] = useState(null);

  const handleNavigate = (path) => {
    navigate(path);

    setMenuOpen(false);
  };

  const toggleSubMenu = (key) => {
    setOpenMenu(openMenu === key ? null : key);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-box" onClick={() => handleNavigate("/")}>
          <img src={logoheader} alt="logo" />
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`menu ${menuOpen ? "show" : ""}`}>
          <button onClick={() => handleNavigate("/")}>Home</button>

          <button onClick={() => handleNavigate("/aboutus")}>About Us</button>

          <button onClick={() => handleNavigate("/contactus")}>
            Contact Us
          </button>

          {/* mobile only menus */}

          <div className="mobile-only">
            <div>
              <p onClick={() => toggleSubMenu("products")}>Product Category</p>

              {openMenu === "products" && (
                <div className="mobile-submenu">
                  {menuData.products.map((item) => (
                    <span
                      key={item.menu}
                      onClick={() => handleNavigate(item.link)}
                    >
                      {item.menu}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div>
              <p onClick={() => toggleSubMenu("newArrivals")}>New Arrivals</p>

              {openMenu === "newArrivals" && (
                <div className="mobile-submenu">
                  {menuData.newArrivals.map((item) => (
                    <span
                      key={item.menu}
                      onClick={() => handleNavigate(item.link)}
                    >
                      {item.menu}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div>
              <p onClick={() => toggleSubMenu("deals")}>Deal Zone</p>

              {openMenu === "deals" && (
                <div className="mobile-submenu">
                  {menuData.deals.map((item) => (
                    <span
                      key={item.menu}
                      onClick={() => handleNavigate(item.link)}
                    >
                      {item.menu}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div>
              <p onClick={() => toggleSubMenu("ask")}>Ask Anything</p>

              {openMenu === "ask" && (
                <div className="mobile-submenu">
                  {menuData.ask.map((item) => (
                    <span
                      key={item.menu}
                      onClick={() => handleNavigate(item.link)}
                    >
                      {item.menu}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

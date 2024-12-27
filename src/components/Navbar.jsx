import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/navbar.css";
import logo from "../assets/logo.png"; // Adjust the path as needed

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const menuItems = [
    { id: 1, link: "/", text: "Home", bgColor: "black" },
    { id: 2, link: "/about", text: "About Us", bgColor: "#FF5733" },
    { id: 3, link: "/skills", text: "Talent", bgColor: "#3d405b" },
    { id: 4, link: "/projects", text: "Our Services", bgColor: "#FF8C00" },
    { id: 5, link: "/contact", text: "Contact us", bgColor: "#32CD32" },
    { id: 6, link: "/booking", text: "Book a Session", bgColor: "#1E90FF" },
    { id: 7, link: "/blog", text: "Blog", bgColor: "#800080" },
  ];

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navbar-container">
      {/* Logo and Brand */}
      <div className="navbar-brand">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            width="90"
            height="90"
            className="d-inline-block align-top"
            style={{ mixBlendMode: "multiply", marginTop: "20px" }}
          />
        </Link>
        <div className="brand-text">TRG-ENT</div>
      </div>
      {/* Overlay Menu */}
      <div
        className={`overlay ${
          isActive ? "overlay-slide-right" : "overlay-slide-left"
        }`}
      >
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.id}
                id={`nav-${item.id}`}
                className={`${
                  isActive ? `slide-in-${item.id}` : `slide-out-${item.id}`
                } center`}
                style={{ backgroundColor: item.bgColor }}
              >
                <Link to={item.link} className="center" onClick={toggleNav}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Hamburger Menu */}
      <div
        className={`hamburger-menu ${isActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <div className="menu-bar1"></div>
        <div className="menu-bar2"></div>
        <div className="menu-bar3"></div>
      </div>
    </div>
  );
}

export default Navbar;

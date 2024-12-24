import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/navbar.css";
import logo from "../assets/logo.jpg"; // Adjust the path as needed

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const menuItems = [
    { id: 1, link: "/", text: "Home", bgColor: "#626059" },
    { id: 2, link: "/about", text: "About", bgColor: "#9d5543" },
    { id: 3, link: "/skills", text: "Skills", bgColor: "#3d405b" },
    { id: 4, link: "/projects", text: "Projects", bgColor: "#5a7d6c" },
    { id: 5, link: "/contact", text: "Contact", bgColor: "#917a56" },
  ];

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="navbar-container">
      {/* Logo and Brand */}
      <div className="navbar-brand">
        <img
          src={logo}
          alt="Logo"
          width="90"
          height="90"
          className="d-inline-block align-top"
        />
        <div className="brand-text">TRG Entertainment</div>
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

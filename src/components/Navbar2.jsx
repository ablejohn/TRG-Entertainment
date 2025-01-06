import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../styling/navbar2.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <div className="container-fluid px-4 px-lg-5">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img src={Logo} alt="Logo" className="logo" />
          <div className="brand-text">
            TRG - <span className="brand-accent">ENT</span>
          </div>
        </a>

        <button
          className={`navbar-toggler d-lg-none ${isOpen ? "open" : ""}`}
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                <span className="nav-link-content">
                  <span className="nav-link-text">Home</span>
                  <span className="nav-link-line"></span>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                <span className="nav-link-content">
                  <span className="nav-link-text">About</span>
                  <span className="nav-link-line"></span>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#talent">
                <span className="nav-link-content">
                  <span className="nav-link-text">Talent</span>
                  <span className="nav-link-line"></span>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                <span className="nav-link-content">
                  <span className="nav-link-text">Services</span>
                  <span className="nav-link-line"></span>
                </span>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                <span className="nav-link-content">
                  <span className="nav-link-text">Blog</span>
                  <span className="nav-link-line"></span>
                </span>
              </a>
            </li>
          </ul>

          <div className="nav-actions d-flex align-items-center">
            <a href="tel:+1234567890" className="contact-link">
              <FontAwesomeIcon icon={faPhone} className="me-2" />
              <span className="d-none d-xl-inline ms-2">+123 456 7890</span>
            </a>
            <a href="mailto:contact@rhythmlab.com" className="contact-link">
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              <span className="d-none d-xl-inline ms-2">
                contact@trgentertainment.com
              </span>
            </a>
            <a href="#book" className="btn btn-custom">
              Book Session
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

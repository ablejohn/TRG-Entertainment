import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faChevronRight,
  faStore,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const handleAppDownload = (platform) => {
    alert("Collab Tunes app coming soon to " + platform + "!");
  };

  return (
    <footer
      className="position-relative"
      style={{ backgroundColor: "#0A0F1C" }}
    >
      {/* Diagonal Top Border */}
      <div
        className="position-absolute w-100"
        style={{
          height: "4px",
          background:
            "linear-gradient(90deg, transparent 0%, #ff0048 50%, transparent 100%)",
          top: 0,
          opacity: 0.7,
        }}
      />

      <div className="container-fluid px-4 px-lg-5 pt-5">
        {/* Main Footer Content */}
        <div className="row g-5 pb-5">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-3 mb-4">
              <div className="position-relative">
                <img
                  src={logo}
                  alt="TRG Logo"
                  style={{
                    width: "50px",
                    height: "50px",
                    filter: "drop-shadow(0 0 10px rgba(255, 0, 72, 0.3))",
                  }}
                />
                <div
                  className="position-absolute"
                  style={{
                    top: -5,
                    left: -5,
                    right: -5,
                    bottom: -5,
                    border: "2px solid #ff0048",
                    borderRadius: "50%",
                    animation: "pulse 2s infinite",
                  }}
                />
              </div>
              <h2
                className="h3 fw-bold mb-0"
                style={{
                  color: "#ffffff",
                  textShadow: "0 0 15px rgba(255, 255, 255, 0.3)",
                }}
              >
                TRG-<span style={{ color: "#ff0048" }}>ENT</span>
              </h2>
            </div>
            <p className="text-secondary mb-4 lead">
              Where Entertainment Connects
            </p>
            <div className="d-flex flex-column gap-3">
              <a
                href="https://maps.google.com"
                className="text-decoration-none text-secondary contact-link d-flex align-items-center gap-3 p-2 rounded transition-all"
              >
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <div>
                  2882, Canyon Drive
                  <br />
                  Orlando FL 32822-3828
                </div>
              </a>
              <a
                href="tel:+18573132118"
                className="text-decoration-none text-secondary contact-link d-flex align-items-center gap-3 p-2 rounded transition-all"
              >
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <span>+1 857 3132 118</span>
              </a>
              <a
                href="mailto:contact@trgentertainment.com"
                className="text-decoration-none text-secondary contact-link d-flex align-items-center gap-3 p-2 rounded transition-all"
              >
                <div className="icon-wrapper">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <span>contact@trgentertainment.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-5 col-md-6">
            <div className="row">
              {/* Company */}
              <div className="col-sm-4">
                <h5
                  className="fw-bold mb-4 text-uppercase"
                  style={{ color: "#ff0048" }}
                >
                  Company
                </h5>
                <ul className="list-unstyled footer-links">
                  {["About", "Our Vision", "What We Do", "Contact"].map(
                    (item) => (
                      <li key={item} className="mb-2">
                        <Link
                          to="/about-us"
                          className="text-secondary text-decoration-none d-flex align-items-center gap-2 py-1 link-hover"
                        >
                          <FontAwesomeIcon
                            icon={faChevronRight}
                            className="font-sm transition-all"
                          />
                          <span>{item}</span>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Services */}
              <div className="col-sm-4">
                <h5
                  className="fw-bold mb-4 text-uppercase"
                  style={{ color: "#ff0048" }}
                >
                  Services
                </h5>
                <ul className="list-unstyled footer-links">
                  {[
                    "Music Production",
                    "Video Production",
                    "Event Planning",
                    "Marketing",
                  ].map((item) => (
                    <li key={item} className="mb-2">
                      <Link
                        to="/services"
                        className="text-secondary text-decoration-none d-flex align-items-center gap-2 py-1 link-hover"
                      >
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="font-sm transition-all"
                        />
                        <span>{item}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Talent */}
              <div className="col-sm-4">
                <h5
                  className="fw-bold mb-4 text-uppercase"
                  style={{ color: "#ff0048" }}
                >
                  Talent
                </h5>
                <ul className="list-unstyled footer-links">
                  {["Artists", "Sports"].map((item) => (
                    <li key={item} className="mb-2">
                      <Link
                        to="/talents"
                        className="text-secondary text-decoration-none d-flex align-items-center gap-2 py-1 link-hover"
                      >
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className="font-sm transition-all"
                        />
                        <span>{item}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter and App Download */}
          <div className="col-lg-3 col-md-6">
            <h5
              className="fw-bold mb-4 text-uppercase"
              style={{ color: "#ff0048" }}
            >
              Newsletter
            </h5>
            <p className="text-secondary mb-4">
              Join our community for exclusive updates and insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="position-relative">
                <input
                  type="email"
                  className="form-control bg-transparent text-white border-2"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    padding: "16px 20px",
                    borderRadius: "8px",
                    borderColor: "rgba(255, 0, 72, 0.3)",
                  }}
                  required
                />
                <button
                  className="btn position-absolute end-0 top-50 translate-middle-y me-2"
                  type="submit"
                  style={{
                    backgroundColor: "#ff0048",
                    color: "white",
                    borderRadius: "6px",
                    padding: "8px 20px",
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* App Download Section */}
            <div className="mt-4">
              <h6
                className="fw-bold mb-3 text-uppercase"
                style={{ color: "#ff0048" }}
              >
                Download Collab Tunes
              </h6>
              <div className="d-flex gap-3">
                <button
                  onClick={() => handleAppDownload("App Store")}
                  className="btn text-white app-store-btn"
                  style={{
                    backgroundColor: "rgba(255, 0, 72, 0.1)",
                    border: "1px solid rgba(255, 0, 72, 0.3)",
                    borderRadius: "8px",
                    padding: "8px 16px",
                  }}
                >
                  <FontAwesomeIcon icon={faStore} className="me-2" />
                  App Store
                </button>
                <button
                  onClick={() => handleAppDownload("Google Play")}
                  className="btn text-white app-store-btn"
                  style={{
                    backgroundColor: "rgba(255, 0, 72, 0.1)",
                    border: "1px solid rgba(255, 0, 72, 0.3)",
                    borderRadius: "8px",
                    padding: "8px 16px",
                  }}
                >
                  <FontAwesomeIcon icon={faMobileScreen} className="me-2" />
                  Play Store
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-5">
              <h6
                className="fw-bold mb-4 text-uppercase"
                style={{ color: "#ff0048" }}
              >
                Follow Us
              </h6>
              <div className="d-flex gap-3">
                {[
                  { icon: faFacebookF, link: "#" },
                  { icon: faTwitter, link: "https://x.com/topreeferent?s=21" },
                  {
                    icon: faInstagram,
                    link: "https://www.instagram.com/topreeferent?igsh=MThrM2FodGFxaW53ZQ==",
                  },
                  {
                    icon: faYoutube,
                    link: "https://www.youtube.com/@topreeferent",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{
                      width: "40px",
                      height: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 0, 72, 0.1)",
                      color: "#ff0048",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="border-top py-4"
          style={{ borderColor: "rgba(255, 255, 255, 0.1) !important" }}
        >
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0 text-secondary">
                © {new Date().getFullYear()} TRG-ENT. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="#" className="text-secondary text-decoration-none me-3">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary text-decoration-none">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1);
            opacity: 0.5;
          }
        }

        .contact-link {
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          background-color: rgba(255, 0, 72, 0.1);
          color: white !important;
        }

        .icon-wrapper {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 0, 72, 0.1);
          border-radius: 50%;
          color: #ff0048;
        }

        .footer-links .link-hover:hover {
          color: white !important;
          transform: translateX(5px);
        }

        .footer-links .link-hover:hover .font-sm {
          color: #ff0048;
        }

        .social-link:hover {
          background-color: #ff0048 !important;
          color: white !important;
          transform: translateY(-3px);
        }

        .newsletter-form input:focus {
          box-shadow: 0 0 15px rgba(255, 0, 72, 0.2);
          border-color: #ff0048 !important;
        }

        .app-store-btn {
          transition: all 0.3s ease;
        }

        .app-store-btn:hover {
          background-color: #ff0048 !important;
          border-color: #ff0048 !important;
          transform: translateY(-2px);
        }

        .transition-all {
          transition: all 0.3s ease;
        }
      `}</style>
    </footer>
  );
};

export default Footer;

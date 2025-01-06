import React, { useState } from "react";
import logo from "../assets/logo.png";
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

const Footer = () => {
  const [email, setEmail] = useState("");
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingForm({ name: "", email: "", service: "", message: "" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#0A0F1C",
        width: "100%",
        padding: "80px 0 0 0",
      }}
      className="text-white"
    >
      <div className="container-fluid px-4 px-lg-5">
        <div className="row justify-content-between">
          {/* Company Info */}
          <div className="col-6 col-lg-2 mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <img
                src={logo}
                alt="TRG Logo"
                style={{ width: "40px", height: "40px" }}
              />
              <h2 className="h3 fw-bold mb-0" style={{ color: "#ffffff" }}>
                TRG-<span style={{ color: "#ff0048" }}>ENT</span>
              </h2>
            </div>
            <p className="text-secondary mb-4">Where Entertainment Connects</p>
            <div className="d-flex flex-column gap-3">
              <p className="mb-0 text-secondary">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                123 Entertainment Ave
                <br />
                Los Angeles, CA 90028
              </p>
              <a
                href="tel:+15551234567"
                className="text-decoration-none text-secondary hover-white"
              >
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                +1 (555) 123-4567
              </a>
              <a
                href="mailto:info@trg-ent.com"
                className="text-decoration-none text-secondary hover-white"
              >
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                info@trg-ent.com
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-6 col-lg-2 mb-5">
            <h5 className="fw-bold mb-4" style={{ color: "#ff0048" }}>
              Company
            </h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="me-2 text-secondary"
                />
                <a
                  href="#"
                  className="text-secondary text-decoration-none hover-white"
                >
                  About
                </a>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="me-2 text-secondary"
                />
                <a
                  href="#"
                  className="text-secondary text-decoration-none hover-white"
                >
                  Projects
                </a>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="me-2 text-secondary"
                />
                <a
                  href="#"
                  className="text-secondary text-decoration-none hover-white"
                >
                  Team
                </a>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="me-2 text-secondary"
                />
                <a
                  href="#"
                  className="text-secondary text-decoration-none hover-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-6 col-lg-2 mb-5">
            <h5 className="fw-bold mb-4" style={{ color: "#ff0048" }}>
              Services
            </h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="me-2 text-secondary"
                />
                <a
                  href="#"
                  className="text-secondary text-decoration-none hover-white"
                >
                  Music Production
                </a>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="me-2 text-secondary"
                />
                <a
                  href="#"
                  className="text-secondary text-decoration-none hover-white"
                >
                  Video Production
                </a>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="me-2 text-secondary"
                />
                <a
                  href="#"
                  className="text-secondary text-decoration-none hover-white"
                >
                  Event Planning
                </a>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="me-2 text-secondary"
                />
                <a
                  href="#"
                  className="text-secondary text-decoration-none hover-white"
                >
                  Marketing
                </a>
              </li>
            </ul>
          </div>

          {/* Talent */}
          <div className="col-6 col-lg-2 mb-5">
            <h5 className="fw-bold mb-4" style={{ color: "#ff0048" }}>
              Talent
            </h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="me-2 text-secondary"
                />
                <a
                  href="#"
                  className="text-secondary text-decoration-none hover-white"
                >
                  Artists
                </a>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="me-2 text-secondary"
                />
                <a
                  href="#"
                  className="text-secondary text-decoration-none hover-white"
                >
                  Producers
                </a>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="me-2 text-secondary"
                />
                <a
                  href="#"
                  className="text-secondary text-decoration-none hover-white"
                >
                  Directors
                </a>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="me-2 text-secondary"
                />
                <a
                  href="#"
                  className="text-secondary text-decoration-none hover-white"
                >
                  Photographers
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-lg-4 mb-5">
            <h5 className="fw-bold mb-4" style={{ color: "#ff0048" }}>
              Stay Updated
            </h5>
            <p className="text-secondary mb-4">
              Subscribe to our newsletter for exclusive updates.
            </p>
            <form onSubmit={handleNewsletterSubmit}>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control bg-transparent text-white border-secondary"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ padding: "12px 20px" }}
                  required
                />
                <button className="btn btn-outline-light px-4" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Social Media Links */}
          <div className="col-12 col-lg-4 mb-5 text-center text-lg-start">
            <h5 className="fw-bold mb-4" style={{ color: "#ff0048" }}>
              Follow Us
            </h5>
            <div className="d-flex justify-content-center justify-content-lg-start gap-3">
              <a href="#" className="text-secondary">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" className="text-secondary">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="text-secondary">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="text-secondary">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-top border-secondary mt-4">
            <div className="row py-4">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-0 text-secondary">
                  © {new Date().getFullYear()} TRG-ENT. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="mb-0 text-secondary">
                  Privacy Policy | Terms of Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

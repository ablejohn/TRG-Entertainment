import React from "react";
import "../styling/Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome-section">
      {/* Abstract background elements */}
      <div className="background-effects">
        <div className="gradient-bg"></div>
        <div className="animated-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="noise-overlay"></div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <div className="welcome-content">
              {/* Badge */}
              <div className="badge-wrapper mb-4">
                <span className="welcome-badge">
                  Innovate • Create • Inspire
                </span>
              </div>
              {/* Welcome Text */}
              <h2 className="welcome-text">
                Welcome <span className="highlighted-text">to</span>
              </h2>
              {/* Title */}
              <h1 className="main-title mb-4">TRG Entertainment</h1>

              {/* Description */}
              <p className="main-description mb-5">
                Where Entertainment connects. We specialize in Music Publishing,
                Licensing, Recording, Distribution, & Comprehensive
                Entertainment Management.
              </p>

              {/* Buttons */}
              <div className="button-group mb-5">
                <a href="#services" className="btn btn-glow me-3">
                  Get Started
                </a>
                <a href="#contact" className="btn btn-outline-glow">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircle, Bold } from "lucide-react";

const Welcome = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="position-relative vh-100 overflow-hidden"
      style={{
        background: "black",
        fontFamily: "'Poppins', sans-serif",
        color: "white",
      }}
    >
      {/* Background Effects */}
      <div className="position-absolute w-100 h-100" style={{ zIndex: 0 }}>
        <div
          className="position-absolute bg-effect-1"
          style={{
            top: "-15%",
            left: "-10%",
            width: "400px",
            height: "400px",
            background: "linear-gradient(135deg, #ff0055, #ff0055",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: "0.5",
            animation: "floatShape 15s infinite alternate",
          }}
        />
        <div
          className="position-absolute bg-effect-2"
          style={{
            bottom: "-20%",
            right: "-10%",
            width: "500px",
            height: "500px",
            background: "linear-gradient(135deg, #32cd32, #008000)",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: "0.5",
            animation: "floatShape 15s infinite alternate",
          }}
        />
      </div>

      <div className="container position-relative h-100" style={{ zIndex: 2 }}>
        <div className="row h-100">
          <div className="col-12">
            {/* Welcome Title with Arrow */}
            <div className="welcome-header d-flex align-items-center mt-5 mb-4 pop-out">
              <div
                className="d-flex align-items-center pulsing"
                style={{
                  background: "#ff0055",
                  padding: "12px 24px",
                  borderRadius: "30px",
                }}
              >
                <span className="text-uppercase fw-bold me-2">
                  Welcome to TRG-ENTERTAINMENT
                </span>
                <ArrowRightCircle size={24} />
              </div>
            </div>

            {/* Main Content */}
            <div className="row justify-content-end">
              <div className="col-12 col-md-8">
                <div
                  ref={contentRef}
                  className="mobile-content content-wrapper"
                >
                  <h1
                    className="mb-5 title-animate"
                    style={{
                      fontSize: "3.5rem",
                      fontWeight: "bold",
                      background:
                        "linear-gradient(to right, #ff0055, #ff5733, #ff0055)",
                      backgroundSize: "200% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Where Entertainment Connects.
                  </h1>

                  <p
                    className="mb-5 text-animate"
                    style={{
                      fontSize: "1.3rem",
                      lineHeight: "1.8",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    We specialize in Music Publishing, Licensing, Recording,
                    Distribution, & Comprehensive Entertainment Management.
                  </p>

                  {/* Services Icons */}
                  <div className="services-grid mb-5 services-animate">
                    <div className="row g-4">
                      <div className="col-4 text-center service-item">
                        <div className="d-flex flex-column align-items-center">
                          <i
                            className="bi bi-music-note"
                            style={{
                              fontSize: "2.5rem",
                              color: "#ff0055",
                              marginBottom: "1rem",
                              fontWeight: "bold",
                            }}
                          ></i>
                          <span style={{ color: "#fff" }}>PUBLISHING</span>
                        </div>
                      </div>
                      <div className="col-4 text-center service-item">
                        <div className="d-flex flex-column align-items-center">
                          <i
                            className="bi bi-globe"
                            style={{
                              fontSize: "2.5rem",
                              color: "#ff0055",
                              marginBottom: "1rem",
                              fontWeight: "bold",
                            }}
                          ></i>
                          <span style={{ color: "#fff" }}>DISTRIBUTION</span>
                        </div>
                      </div>
                      <div className="col-4 text-center service-item">
                        <div className="d-flex flex-column align-items-center">
                          <i
                            className="bi bi-star"
                            style={{
                              fontSize: "2.5rem",
                              color: "#ff0055",
                              marginBottom: "1rem",
                              fontWeight: "bold",
                            }}
                          ></i>
                          <span style={{ color: "#fff" }}>MANAGEMENT</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="text-start button-animate">
                    <Link
                      to="/about-us" 
                      className="btn hover-effect"
                      style={{
                        background: "#ff0055",
                        color: "white",
                        padding: "12px 30px",
                        borderRadius: "30px",
                        fontSize: "1rem",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                    >
                      Read More
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .content-wrapper {
            opacity: 0;
            transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .content-wrapper.in-view {
            opacity: 1;
          }

          .title-animate {
            transform: translateY(30px);
            opacity: 0;
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .in-view .title-animate {
            transform: translateY(0);
            opacity: 1;
            animation: gradientFlow 8s linear infinite;
          }

          .text-animate {
            transform: translateY(30px);
            opacity: 0;
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
          }

          .in-view .text-animate {
            transform: translateY(0);
            opacity: 1;
          }

          .services-animate {
            opacity: 0;
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
          }

          .in-view .services-animate {
            opacity: 1;
          }

          .service-item {
            transform: translateY(30px);
            opacity: 0;
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .in-view .service-item:nth-child(1) {
            transition-delay: 0.4s;
            transform: translateY(0);
            opacity: 1;
          }

          .in-view .service-item:nth-child(2) {
            transition-delay: 0.5s;
            transform: translateY(0);
            opacity: 1;
          }

          .in-view .service-item:nth-child(3) {
            transition-delay: 0.6s;
            transform: translateY(0);
            opacity: 1;
          }

          .button-animate {
            transform: translateY(30px);
            opacity: 0;
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s;
          }

          .in-view .button-animate {
            transform: translateY(0);
            opacity: 1;
          }

          .hover-effect {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .hover-effect:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(255, 0, 85, 0.3);
          }

          /* Original animations */
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes floatShape {
            0% {
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
            100% {
              transform: translate(50px, 25px) scale(1.1) rotate(180deg);
            }
          }

          @keyframes pulsing {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }

          @keyframes popOut {
            0% {
              transform: scale(0.8);
              opacity: 0;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes gradientFlow {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          .pulsing {
            animation: pulsing 1.5s infinite;
          }

          .pop-out {
            animation: popOut 1s ease-out;
          }

          /* Media Queries */
          @media (max-width: 768px) {
            .welcome-header {
              margin-top: 1rem !important;
              margin-bottom: 2rem !important;
            }
            
            .welcome-header span {
              font-size: 0.9rem;
            }

            .mobile-content {
              padding: 0 1rem;
            }

            h1 {
              font-size: 2rem !important;
              margin-bottom: 2rem !important;
            }

            p {
              font-size: 1rem !important;
              margin-bottom: 3rem !important;
            }

            .services-grid {
              margin-bottom: 3rem !important;
            }

            .services-grid i {
              font-size: 1.8rem !important;
              margin-bottom: 0.5rem !important;
            }

            .services-grid span {
              font-size: 0.8rem;
            }

            .btn {
              width: auto;
              padding: 10px 25px !important;
              font-size: 0.9rem !important;
            }

            .col-12 {
              padding: 0;
            }

            .bg-effect-1 {
              width: 200px !important;
              height: 200px !important;
              top: -10% !important;
              left: -5% !important;
            }

            .bg-effect-2 {
              width: 250px !important;
              height: 250px !important;
              bottom: -10% !important;
              right: -5% !important;
            }
          }

          @media screen and (max-width: 480px) {
            h1 {
              font-size: 1.9rem !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Welcome;

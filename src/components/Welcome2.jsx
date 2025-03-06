import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRightCircle, Mic, Globe, Star } from "lucide-react";

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
            background: "linear-gradient(135deg, #ff0055, #ff0055)",
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
        <div className="row h-100 align-items-center">
          <div className="col-12">
            {/* Welcome Title with Arrow */}
            <div className="welcome-header d-flex align-items-center mt-5 mb-4 pop-out">
              <div
                className="d-flex align-items-center pulsing"
                style={{
                  background: "rgba(255, 0, 85, 0.2)",
                  padding: "14px 28px",
                  borderRadius: "40px",
                  backdropFilter: "blur(5px)",
                  boxShadow: "0 0 15px rgba(255, 0, 85, 0.5)",
                }}
              >
                <span
                  className="text-uppercase fw-bold me-2"
                  style={{ letterSpacing: "1.5px" }}
                >
                  Welcome to TRG-ENTERTAINMENT
                </span>
                <ArrowRightCircle size={28} strokeWidth={2} />
              </div>
            </div>

            {/* Main Content */}
            <div className="row justify-content-center">
              <div className="col-12 col-md-8">
                <div
                  ref={contentRef}
                  className="mobile-content content-wrapper"
                >
                  <h1
                    className="mb-5 title-animate"
                    style={{
                      fontSize: "3.8rem",
                      fontWeight: "800",
                      background:
                        "linear-gradient(to right, #ff0055, #ff5733, #ffcc00)",
                      backgroundSize: "300% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      lineHeight: "1.1",
                    }}
                  >
                    Where Entertainment <br /> Connects.
                  </h1>

                  <p
                    className="mb-5 text-animate"
                    style={{
                      fontSize: "1.4rem",
                      lineHeight: "1.8",
                      color: "rgba(255, 255, 255, 0.9)",
                      maxWidth: "650px",
                    }}
                  >
                    We specialize in Music Publishing, Licensing, Recording,
                    Distribution, & Comprehensive Entertainment Management.
                  </p>

                  {/* Services Icons - Horizontal on Desktop, Vertical on Mobile */}
                  <div className="services-grid mb-5 services-animate">
                    <div className="services-container d-flex gap-3 justify-content-center">
                      <div className="service-item">
                        <Mic size={24} className="me-2" />
                        <span className="service-text">Publishing</span>
                      </div>
                      <div className="service-item">
                        <Globe size={24} className="me-2" />
                        <span className="service-text">Distribution</span>
                      </div>
                      <div className="service-item">
                        <Star size={24} className="me-2" />
                        <span className="service-text">Management</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="text-center button-animate">
                    <Link
                      to="/about-us"
                      className="btn hover-effect"
                      style={{
                        background: "linear-gradient(45deg, #ff0055, #ff5733)",
                        color: "white",
                        padding: "14px 35px",
                        borderRadius: "40px",
                        fontSize: "1.1rem",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        boxShadow: "0 0 10px rgba(255, 0, 85, 0.5)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span>Discover More</span>
                      <i className="bi bi-arrow-right"></i>
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
            transform: translateY(40px);
            opacity: 0;
            transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
          }

          .in-view .title-animate {
            transform: translateY(0);
            opacity: 1;
            animation: gradientFlow 6s ease infinite;
          }

          .text-animate {
            transform: translateY(40px);
            opacity: 0;
            transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1) 0.2s;
          }

          .in-view .text-animate {
            transform: translateY(0);
            opacity: 1;
          }

          .services-animate {
            opacity: 0;
            transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1) 0.4s;
          }

          .in-view .services-animate {
            opacity: 1;
          }

          .service-item {
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 0, 85, 0.3);
            padding: 12px 20px;
            border-radius: 50px;
            transform: translateY(40px);
            opacity: 0;
            transition: all 0.5s ease;
            white-space: nowrap;
          }

          .service-item:hover {
            background: rgba(255, 0, 85, 0.15);
            transform: translateY(0) scale(1.05);
            border-color: #ff0055;
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

          .service-text {
            color: white;
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }

          .button-animate {
            transform: translateY(40px);
            opacity: 0;
            transition: all 0.9s cubic-bezier(0.25, 0.8, 0.25, 1) 0.8s;
          }

          .in-view .button-animate {
            transform: translateY(0);
            opacity: 1;
          }

          .hover-effect:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(255, 0, 85, 0.4);
          }

          /* Enhanced Animations */
          @keyframes floatShape {
            0% {
              transform: translate(0, 0) scale(1) rotate(0deg);
            }
            50% {
              transform: translate(40px, 20px) scale(1.05) rotate(90deg);
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
              transform: scale(1.03);
            }
          }

          @keyframes popOut {
            0% {
              transform: scale(0.7);
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
            animation: pulsing 2s infinite ease-in-out;
          }

          .pop-out {
            animation: popOut 0.8s ease-out;
          }

          /* Media Queries */
          @media (max-width: 768px) {
            .welcome-header {
              margin-top: 2rem !important;
              margin-bottom: 2rem !important;
              
            }
            
            .welcome-header span {
              font-size: 0.9rem;
            }

            .mobile-content {
              padding: 0 1rem;
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            h1 {
              font-size: 2.5rem !important;
              margin-bottom: 1.5rem !important;
            }

            p {
              font-size: 1.1rem !important;
              margin-bottom: 1.5rem !important;
              max-width: 100%;
            }

            .services-grid {
              margin-bottom: 2rem !important;
            }

            .services-container {
              flex-direction: column;
              gap: 1rem;
              width: 100%;
              max-width: 300px;
              margin: 0 auto;
            }

            .service-item {
              padding: 10px 20px;
              background: rgba(255, 0, 85, 0.1);
              border: 1px solid rgba(255, 0, 85, 0.5);
              box-shadow: 0 0 10px rgba(255, 0, 85, 0.3);
              justify-content: center;
              transition: all 0.3s ease;
            }

            .service-item:hover {
              background: rgba(255, 0, 85, 0.2);
              transform: scale(1.05);
              border-color: #ff0055;
            }

            .service-text {
              font-size: 0.9rem;
            }

            .btn {
              padding: 12px 30px !important;
              font-size: 1rem !important;
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
              font-size: 2rem !important;
            }

            .service-text {
              font-size: 0.85rem;
            }

            .service-item {
              padding: 8px 16px;
            }

            .services-container {
              gap: 0.75rem;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Welcome;

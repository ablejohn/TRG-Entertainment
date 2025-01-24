import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ArrowRight,
  Music,
  Globe2,
  PlayCircle,
  Award,
  Users,
  Star,
} from "lucide-react";
import WWD from "../components/WWD";
import CombinedSection from "../components/Combinedsection";
import StatsSection from "../components/StatsSection";

const AboutUs = () => {
  // Create refs for WWD and Combined sections
  const wdSectionRef = useRef(null);
  const combinedSectionRef = useRef(null);

  // Function to scroll to WWD section
  const scrollToWWDSection = () => {
    wdSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Combined section
  const scrollToCombinedSection = () => {
    combinedSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section - New Design */}
      <div className="bg-black text-white">
        <div className="container">
          <div className="row min-vh-100 align-items-center py-5">
            {/* About Us Section */}
            <div className="col-lg-6 order-2 order-md-1">
              <div
                className="p-4 rounded-3"
                style={{
                  backgroundColor: "rgba(255,0,85,0.1)",
                  border: "1px solid rgba(255,0,85,0.2)",
                }}
              >
                <span
                  className="badge px-4 py-3 mb-3 fs-6"
                  style={{ backgroundColor: "#ff0055" }}
                >
                  About Us
                </span>
                <h1 className="display-3 fw-bold mb-4 lh-1">
                  Where Entertainment Connects
                </h1>
                <p className="lead mb-4 opacity-75">
                  We specialize in turning creative visions into global success
                  stories through comprehensive entertainment solutions.
                </p>
                <div className="d-flex gap-3">
                  <button
                    className="btn btn-lg px-4 py-2"
                    style={{ backgroundColor: "#ff0055", color: "white" }}
                    onClick={scrollToWWDSection}
                  >
                    Our Services
                  </button>
                  <button
                    className="btn btn-lg btn-outline-light px-4 py-2"
                    onClick={scrollToWWDSection}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Global Reach Section - Unchanged */}
            <div className="col-lg-6 order-1 order-md-2 mb-5 mb-lg-0">
              <div className="text-center text-lg-end mt-5 mt-lg-0">
                <div className="d-inline-flex gap-4 mb-4">
                  <div
                    className="p-4 rounded-circle"
                    style={{ backgroundColor: "#ff0055" }}
                  >
                    <Music size={32} />
                  </div>
                  <div
                    className="p-4 rounded-circle bg-white"
                    style={{ color: "#ff0055" }}
                  >
                    <PlayCircle size={32} />
                  </div>
                  <div
                    className="p-4 rounded-circle"
                    style={{ backgroundColor: "#ff0055" }}
                  >
                    <Globe2 size={32} />
                  </div>
                </div>
                <h3 className="h2 fw-bold mb-3">Global Reach</h3>
                <p className="lead opacity-75">
                  Connecting artists with audiences worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section Bar */}
      <div style={{ marginTop: "-70px" }}>
        <StatsSection />
      </div>

      {/* Services Section - Added ref */}
      <div ref={wdSectionRef}>
        <WWD />
      </div>

      {/* Vision & CTA Section - Unchanged */}
      <div className="bg-black text-white py-5 mt-5">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Vision Section */}
            <div className="col-lg-6 pe-lg-5">
              <div className="mb-4 mb-lg-0">
                <span
                  className="badge px-4 py-3 mb-3 fs-6"
                  style={{
                    backgroundColor: "#ff0055",
                    fontWeight: "bold",
                  }}
                >
                  Our Vision
                </span>
                <h2
                  className="display-5 fw-bold mb-4"
                  style={{ color: "#ffff" }}
                >
                  Creating Tomorrow's Entertainment Today
                </h2>
                <p className="lead opacity-75">
                  Our goal is to revolutionize the entertainment industry by
                  providing innovative solutions that empower artists and
                  creators to reach their full potential.
                </p>
                <button
                  className="btn btn-lg btn-outline-light px-4 py-2 mt-3"
                  style={{
                    borderWidth: "2px",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#ff0055";
                    e.target.style.borderColor = "#ff0055";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.borderColor = "white";
                  }}
                  onClick={scrollToWWDSection}
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Vertical Separator */}
            <div className="col-lg-1 d-none d-lg-block">
              <div
                className="h-100 mx-auto"
                style={{
                  width: "1px",
                  background: "rgba(255,0,85,0.5)",
                }}
              />
            </div>

            {/* CTA Section */}
            <div className="col-lg-5 ps-lg-4">
              <div className="text-lg-start text-center">
                <h3 className="display-5 fw-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="lead mb-4 opacity-75">
                  Let's turn your creative vision into reality
                </p>
                <button
                  className="btn btn-lg px-5 py-3"
                  style={{
                    backgroundColor: "#ff0055",
                    color: "white",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = "0.9";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = "1";
                  }}
                  onClick={scrollToCombinedSection}
                >
                  Contact Us Today
                  <ArrowRight className="ms-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Added ref to Combined Section */}
      <div ref={combinedSectionRef}>
        <CombinedSection />
      </div>
    </div>
  );
};

export default AboutUs;

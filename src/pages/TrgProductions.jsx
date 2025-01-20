import React, { useState } from "react";
import {
  Film,
  Music2,
  Camera,
  Clapperboard,
  Cast,
  ImagePlus,
  ArrowRight,
  Play,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import video from "../assets/video.mp4";

const HeroText = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="position-absolute top-50 start-50 translate-middle text-center w-100">
      <div className="container px-4">
        {/* Main Heading */}
        <h1
          className="display-1 fw-bold text-white mb-4"
          style={{ fontSize: "calc(2.5rem + 3.5vw)" }}
        >
          TRG{" "}
          <span
            style={{
              color: "#ff0055",
              fontFamily: "'Fredoka', sans-serif",
              letterSpacing: "1px",
            }}
          >
            Productions
          </span>
        </h1>

        {/* Animated underline */}
        <div className="position-relative">
          <div
            className="mx-auto mb-4"
            style={{
              width: isHovered ? "144px" : "96px",
              height: "4px",
              backgroundColor: "#ff0055",
              transition: "all 0.3s ease",
            }}
          />
        </div>

        {/* Typewriter text */}
        <p className="display-6 text-white-50 mb-5">
          <Typewriter
            words={["Bringing Your Vision To Life", "Unleashing Creativity"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        {/* Modern button */}
        <div className="d-inline-block">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="btn btn-lg rounded-pill d-inline-flex align-items-center gap-2 px-4 py-3"
            style={{
              backgroundColor: "#ff0055",
              color: "white",
              fontSize: "1.25rem",
              transition: "all 0.3s ease",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              boxShadow: isHovered ? "0 0 20px rgba(255, 0, 85, 0.5)" : "none",
            }}
          >
            <span>Start Your Project</span>
            <Play
              size={24}
              style={{
                transition: "transform 0.3s ease",
                transform: isHovered ? "translateX(4px)" : "translateX(0)",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ title, icon: Icon, description, isActive, onClick }) => (
  <div
    className={`card h-100 text-white p-4 ${
      isActive ? "shadow-lg" : "shadow-sm"
    }`}
    onClick={onClick}
    style={{
      cursor: "pointer",
      transition: "all 0.3s ease",
      backgroundColor: isActive ? "#ff0055" : "#222",
      transform: isActive ? "scale(1.05)" : "scale(1)",
      borderRadius: "16px",
    }}
  >
    <div className="card-body d-flex flex-column">
      <div className="d-flex align-items-center mb-3">
        <Icon
          className="me-3"
          size={32}
          style={{ color: isActive ? "#fff" : "#ff0055" }}
        />
        <h5
          className="card-title mb-0"
          style={{
            color: isActive ? "#fff" : "#ff0055",
          }}
        >
          {title}
        </h5>
      </div>
      {isActive && (
        <ul className="list-unstyled mt-3 mb-0">
          {description.map((item, idx) => (
            <li key={idx} className="d-flex align-items-center mb-2">
              <ArrowRight size={16} className="me-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const TRGProductionsPage = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: "Video Production",
      icon: Film,
      description: [
        "Commercial Video Production",
        "Documentary Filmmaking",
        "Music Video Creation",
        "Corporate Video Solutions",
        "Event Videography",
      ],
    },
    {
      title: "Music Production",
      icon: Music2,
      description: [
        "Professional Recording",
        "Audio Mixing & Mastering",
        "Sound Design",
        "Voice-over Production",
        "Music Composition",
      ],
    },
    {
      title: "Equipment Rental",
      icon: Camera,
      description: [
        "Professional Camera Gear",
        "Lighting Equipment",
        "Audio Recording Tools",
        "Studio Space Rental",
        "Production Accessories",
      ],
    },
    {
      title: "Post-Production",
      icon: Clapperboard,
      description: [
        "Video Editing",
        "Color Grading",
        "Visual Effects",
        "Motion Graphics",
        "Audio Post-Production",
      ],
    },
    {
      title: "Live Events",
      icon: Cast,
      description: [
        "Live Streaming",
        "Multi-Camera Production",
        "Event Coverage",
        "Technical Direction",
        "Real-time Graphics",
      ],
    },
    {
      title: "Photography",
      icon: ImagePlus,
      description: [
        "Commercial Photography",
        "Event Photography",
        "Product Photography",
        "Portrait Sessions",
        "Architectural Shoots",
      ],
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="position-relative vh-100">
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <video
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)",
            }}
          />
        </div>

        <HeroText />
      </div>

      {/* Services Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold" style={{ color: "#ff0055" }}>
            Our Services
          </h2>

          <p className="fs-5 text-white-50">
            Comprehensive production solutions powered by cutting-edge
            technology and creative expertise
          </p>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <ServiceCard
                {...service}
                isActive={activeService === index}
                onClick={() =>
                  setActiveService(activeService === index ? null : index)
                }
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-5 text-center">
        <h2 className="display-4 fw-bold mb-4" style={{ color: "#ff0055" }}>
          Ready to Create?
        </h2>
        <p className="fs-5 mb-4 text-white-50">
          Let's transform your ideas into reality
        </p>
        <button
          className="btn btn-lg rounded-pill px-5 py-3 d-inline-flex align-items-center gap-2"
          style={{
            backgroundColor: "#ff0055",
            color: "#fff",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 0, 85, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <span>Get Started</span>
          <ArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TRGProductionsPage;

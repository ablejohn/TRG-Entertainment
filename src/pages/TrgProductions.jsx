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
import video from "../assets/video.mp4";
import { Typewriter } from "react-simple-typewriter";

const HeroText = () => (
  <div className="position-absolute top-50 start-50 translate-middle text-center">
    <h1 className="display-1 fw-bold text-white mb-4">
      TRG <span style={{ color: "#ff0055" }}>Productions</span>{" "}
    </h1>
    <div
      className="mx-auto mb-4"
      style={{
        width: "96px",
        height: "4px",
        backgroundColor: "#ff0055",
      }}
    ></div>
    <p className="fs-4 text-white-50">
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
  </div>
);

const ServiceCard = ({ title, icon: Icon, description, isActive, onClick }) => (
  <div
    className={`card h-100 text-white p-4 ${
      isActive ? "shadow-lg scale-105" : "shadow-sm"
    }`}
    onClick={onClick}
    style={{
      cursor: "pointer",
      transition: "transform 0.3s, box-shadow 0.3s",
      backgroundColor: isActive ? "#ff0055" : "#222",
      borderRadius: "16px",
    }}
  >
    <div className="card-body d-flex flex-column align-items-start">
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
        <ul className="list-unstyled mt-3">
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
        <video
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: "cover" }}
          autoPlay
          loop
          muted
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-75"></div>
        <HeroText />
        <div className="position-absolute bottom-5 start-50 translate-middle-x">
          <button
            className="btn btn-lg rounded-pill d-flex align-items-center text-white px-4"
            style={{
              backgroundColor: "#ff0055",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow =
                "0 0 15px rgba(255, 0, 85, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Start Your Project
            <Play size={20} className="ms-2" />
          </button>
        </div>
      </div>

      {/* Services Grid Section */}
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
      <div className="py-5 bg-gradient text-center text-white">
        <h2 className="display-4 fw-bold mb-4" style={{ color: "#ff0055" }}>
          Ready to Create?
        </h2>
        <p className="fs-5 mb-4">Let's transform your ideas into reality</p>
        <button
          className="btn btn-lg rounded-pill px-5"
          style={{ backgroundColor: "#ff0055", color: "#fff" }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TRGProductionsPage;

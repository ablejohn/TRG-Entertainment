import React, { useState } from "react";
import "../styling/wwd.css";

const ServiceCard = ({ service, description, icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="col-md-4 mb-4 service-card-wrapper"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className={`service-card ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="service-card-content">
          <div className="service-icon">
            {icon}
            <div className="icon-backdrop"></div>
          </div>
          <h3 className="service-title">{service}</h3>
          <p className="service-description">{description}</p>
          <div className="service-hover-content">
            <span className="learn-more">Learn More →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const WWD = () => {
  const services = [
    {
      title: "Management",
      description:
        "Expert artist management services to guide and develop your career in the music industry.",
      icon: "🎭",
    },
    {
      title: "Music Publishing",
      description:
        "Comprehensive publishing services to protect and monetize your musical works.",
      icon: "📝",
    },
    {
      title: "Music Licensing",
      description:
        "Strategic licensing solutions to maximize your music's commercial potential.",
      icon: "⚖️",
    },
    {
      title: "Recording Services",
      description:
        "State-of-the-art recording facilities and professional audio production.",
      icon: "🎙️",
    },
    {
      title: "Video Recording",
      description:
        "High-quality video production services for music videos and visual content.",
      icon: "🎥",
    },
    {
      title: "Music Distribution",
      description:
        "Global digital and physical distribution to reach your audience worldwide.",
      icon: "🌐",
    },
  ];

  return (
    <section className="wwd-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What We Do</h2>
          <div className="title-underline"></div>
        </div>

        <div className="row services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WWD;

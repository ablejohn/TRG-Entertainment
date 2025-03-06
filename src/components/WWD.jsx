import React, { useState, useRef } from "react";
import {
  Users,
  BookOpenText,
  Scale,
  Mic,
  Video,
  Globe,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import "../styling/wwd.css";

const ServiceCard = ({ title, description, icon, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
      }}
      className="service-card-wrapper"
      whileHover={{ y: -10 }}
    >
      {/* Opening service-card-wrapper div */}
      <div
        className={`service-card ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Opening service-card div */}
        <div className="service-card-content">
          {/* Opening service-card-content div */}
          <div className="service-icon-wrapper">
            {/* Opening service-icon-wrapper div */}
            {React.cloneElement(icon, { className: "service-icon" })}
            <div className="icon-glow"></div>
          </div>
          {/* Closing service-icon-wrapper div */}

          <div className="service-card-body">
            {/* Opening service-card-body div */}
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
          </div>
          {/* Closing service-card-body div */}

          <motion.div
            className="service-card-footer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Opening service-card-footer div */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="service-explore-btn"
            >
              <span>Explore Service</span>
              <ArrowUpRight size={20} strokeWidth={2} />
            </motion.button>
          </motion.div>
          {/* Closing service-card-footer div */}
        </div>
        {/* Closing service-card-content div */}
      </div>
      {/* Closing service-card div */}
    </motion.div>
    /* Closing service-card-wrapper div */
  );
};

const WWD = () => {
  const services = [
    {
      title: "Artist Development",
      description:
        "Tailored career strategies, brand positioning, and industry networking to transform emerging talents into global icons.",
      icon: <Users />,
    },
    {
      title: "Music Publishing",
      description:
        "Comprehensive intellectual property management, global royalty tracking, and strategic musical asset development.",
      icon: <BookOpenText />,
    },
    {
      title: "Music Licensing",
      description:
        "Strategic placement and negotiation of musical works across film, TV, advertising, and emerging digital platforms.",
      icon: <Scale />,
    },
    {
      title: "Recording Production",
      description:
        "State-of-the-art studio recording, advanced mixing techniques, and world-class mastering for pristine audio quality.",
      icon: <Mic />,
    },
    {
      title: "Visual Production",
      description:
        "Cinematic music video production, creative storytelling, and cutting-edge visual content creation for artists.",
      icon: <Video />,
    },
    {
      title: "Global Distribution",
      description:
        "Advanced digital distribution strategies, multi-platform streaming optimization, and international market expansion.",
      icon: <Globe />,
    },
  ];

  return (
    <section className="wwd-section">
      {/* Opening wwd-section section */}
      <div className="background-gradient"></div>
      {/* Standalone background-gradient div */}
      <div className="container">
        {/* Opening container div */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="section-header"
        >
          {/* Opening section-header div */}
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-title">Innovative Music Services</h2>
          <motion.div
            className="title-underline"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          ></motion.div>
          {/* Standalone title-underline div */}
          <p className="section-subtitle">
            Empowering Artists, Transforming Music Careers
          </p>
        </motion.div>
        {/* Closing section-header div */}

        <div className="services-grid">
          {/* Opening services-grid div */}
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
        {/* Closing services-grid div */}
      </div>
      {/* Closing container div */}
    </section>
    /* Closing wwd-section section */
  );
};

export default WWD;

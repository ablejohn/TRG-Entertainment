import React, { useState, useRef } from "react";
import { 
  Users, 
  BookOpenText, 
  Scale, 
  Mic, 
  Video, 
  Globe, 
  ArrowUpRight,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import '../styling/wwd.css';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  index 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 80 
      }}
      className="service-card-wrapper"
    >
      <div 
        className={`service-card ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="service-card-content">
          <div className="service-icon-wrapper">
            {icon}
            <div className="icon-glow"></div>
          </div>
          
          <div className="service-card-body">
            <h3 className="service-title">{title}</h3>
            <p className="service-description">{description}</p>
          </div>

          <motion.div 
            className="service-card-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="service-explore-btn"
            >
              <span>Explore Service</span>
              <ArrowUpRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const WWD = () => {
  const services = [
    {
      title: "Artist Development",
      description: "Tailored career strategies, brand positioning, and industry networking to transform emerging talents into global icons.",
      icon: <Users className="service-icon" />
    },
    {
      title: "Music Publishing",
      description: "Comprehensive intellectual property management, global royalty tracking, and strategic musical asset development.",
      icon: <BookOpenText className="service-icon" />
    },
    {
      title: "Music Licensing",
      description: "Strategic placement and negotiation of musical works across film, TV, advertising, and emerging digital platforms.",
      icon: <Scale className="service-icon" />
    },
    {
      title: "Recording Production",
      description: "State-of-the-art studio recording, advanced mixing techniques, and world-class mastering for pristine audio quality.",
      icon: <Mic className="service-icon" />
    },
    {
      title: "Visual Production",
      description: "Cinematic music video production, creative storytelling, and cutting-edge visual content creation for artists.",
      icon: <Video className="service-icon" />
    },
    {
      title: "Global Distribution",
      description: "Advanced digital distribution strategies, multi-platform streaming optimization, and international market expansion.",
      icon: <Globe className="service-icon" />
    }
  ];

  return (
    <section className="wwd-section">
      <div className="background-gradient"></div>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-eyebrow">What We Offer</span>
          <h2 className="section-title">Innovative Music Services</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Empowering Artists, Transforming Music Careers
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WWD;
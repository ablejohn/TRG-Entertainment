import React, { useState, useRef, useEffect } from "react";
import {
  Film,
  Music2,
  Camera,
  Clapperboard,
  Cast,
  ImagePlus,
  ArrowRight,
  Play,
  ChevronDown
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import video from "../assets/video.mp4";
import CombinedSection from "../components/Combinedsection";

// Enhanced Hero text with animation and better typography
const HeroText = ({ scrollToCombinedSection }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Animation on mount
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`position-absolute top-50 start-50 translate-middle text-center w-100 ${visible ? 'opacity-100' : 'opacity-0'}`} 
         style={{ transition: "opacity 1s ease-in-out" }}>
      <div className="container px-4">
        <h1
          className="display-1 fw-bold text-white mb-4"
          style={{ 
            fontSize: "calc(2.5rem + 3.5vw)",
            textShadow: "0 0 15px rgba(0,0,0,0.5)"
          }}
        >
          <span className="position-relative">
            TRG{" "}
            <span
              style={{
                color: "#ff0055",
                fontFamily: "'Fredoka', sans-serif",
                letterSpacing: "1px",
                textShadow: "0 0 10px rgba(255,0,85,0.6)"
              }}
            >
              Productions
            </span>
            <div 
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{
                width: isHovered ? "80%" : "40%",
                height: "4px",
                backgroundColor: "#ff0055",
                transition: "all 0.5s ease",
                boxShadow: "0 0 8px rgba(255,0,85,0.8)"
              }}
            />
          </span>
        </h1>

        <p className="display-6 text-white mb-5" style={{ textShadow: "0 0 10px rgba(0,0,0,0.7)" }}>
          <Typewriter
            words={["Bringing Your Vision To Life", "Unleashing Creativity", "Crafting Visual Stories", "Elevating Your Brand"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <div className="d-flex justify-content-center gap-3">
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={scrollToCombinedSection}
            className="btn btn-lg rounded-pill d-inline-flex align-items-center gap-2 px-4 py-3"
            style={{
              backgroundColor: "#ff0055",
              color: "white",
              fontSize: "1.25rem",
              transition: "all 0.3s ease",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              boxShadow: isHovered ? "0 0 20px rgba(255, 0, 85, 0.7)" : "0 0 10px rgba(255, 0, 85, 0.3)",
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
          
          <button
            className="btn btn-lg btn-outline-light rounded-pill d-inline-flex align-items-center gap-2 px-4 py-3"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            style={{
              transition: "all 0.3s ease",
              borderWidth: "2px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <span>Our Services</span>
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="position-absolute bottom-5 start-50 translate-middle-x">
        <div 
          className="d-flex flex-column align-items-center"
          style={{ animation: "bounce 2s infinite" }}
        >
          <span className="text-white-50 mb-2">Scroll to explore</span>
          <ChevronDown size={24} color="white" />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
      `}</style>
    </div>
  );
};

// Enhanced ServiceCard with animation and better hover effects
const ServiceCard = ({ title, icon: Icon, description, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className={`card h-100 text-white p-4 ${
        isActive ? "shadow-lg" : "shadow-sm"
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        backgroundColor: isActive ? "#ff0055" : isHovered ? "#333" : "#222",
        transform: isActive ? "scale(1.05)" : isHovered ? "scale(1.03)" : "scale(1)",
        borderRadius: "16px",
        borderColor: isActive ? "#ff0055" : isHovered ? "#ff0055" : "transparent",
        borderWidth: "2px",
        borderStyle: "solid",
        overflow: "hidden"
      }}
    >
      <div className="card-body d-flex flex-column">
        <div className="d-flex align-items-center mb-3">
          <div 
            className="me-3 rounded-circle d-flex align-items-center justify-content-center" 
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "rgba(255,0,85,0.1)",
              transition: "all 0.3s ease"
            }}
          >
            <Icon
              size={28}
              style={{ 
                color: isActive ? "#fff" : "#ff0055",
                transition: "all 0.3s ease",
                transform: isHovered && !isActive ? "scale(1.1)" : "scale(1)"
              }}
            />
          </div>
          <h5
            className="card-title mb-0"
            style={{
              color: isActive ? "#fff" : isHovered ? "#fff" : "#ff0055",
              transition: "color 0.3s ease"
            }}
          >
            {title}
          </h5>
        </div>
        
        <div className="mt-2" style={{ 
          maxHeight: isActive ? "500px" : "0", 
          overflow: "hidden",
          transition: "max-height 0.5s ease-in-out"
        }}>
          <ul className="list-unstyled mt-3 mb-0">
            {description.map((item, idx) => (
              <li 
                key={idx} 
                className="d-flex align-items-center mb-2"
                style={{
                  animation: isActive ? `fadeIn 0.3s ease forwards ${0.1 + idx * 0.1}s` : "none",
                  opacity: 0
                }}
              >
                <ArrowRight size={16} className="me-2" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {!isActive && (
          <div className="mt-auto text-end">
            <span className="text-white-50" style={{ fontSize: "0.8rem" }}>
              Click to expand
            </span>
          </div>
        )}
      </div>
      
      {/* Background decoration */}
      {isActive && (
        <div 
          className="position-absolute"
          style={{
            bottom: "-20px",
            right: "-20px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.1)",
            zIndex: 0
          }}
        />
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const TRGProductionsPage = () => {
  const [activeService, setActiveService] = useState(null);
  const combinedSectionRef = useRef(null);
  const servicesRef = useRef(null);

  const scrollToCombinedSection = () => {
    combinedSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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

  // Animated section headers
  const SectionHeader = ({ title, subtitle }) => (
    <div className="text-center mb-5 position-relative">
      <div
        className="position-absolute start-50 translate-middle-x"
        style={{
          top: "-15px",
          fontSize: "5rem",
          fontWeight: "bold",
          color: "rgba(255,0,85,0.05)",
          zIndex: 0,
          letterSpacing: "10px",
          textTransform: "uppercase"
        }}
      >
        {title.toUpperCase()}
      </div>
      <h2 
        className="display-4 fw-bold position-relative" 
        style={{ 
          color: "#ff0055", 
          zIndex: 1,
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)"
        }}
      >
        {title}
        <div 
          className="mx-auto mt-2"
          style={{
            width: "80px",
            height: "4px",
            backgroundColor: "#ff0055",
            boxShadow: "0 0 8px rgba(255,0,85,0.5)"
          }}
        />
      </h2>

      <p className="fs-5 text-white-50 mt-3">
        {subtitle}
      </p>
    </div>
  );

  return (
    <div className="bg-black text-white" style={{ overflowX: "hidden" }}>
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
                "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8) 100%)",
            }}
          />
        </div>

        <HeroText scrollToCombinedSection={scrollToCombinedSection} />
      </div>

      {/* Services Section with Parallax Effect */}
      <div ref={servicesRef} className="position-relative py-5" style={{ 
        background: "linear-gradient(to bottom, #000, #111)",
        boxShadow: "0 -20px 20px -20px rgba(0,0,0,0.5) inset"
      }}>
        <div className="container py-5">
          <SectionHeader 
            title="Our Services" 
            subtitle="Comprehensive production solutions powered by cutting-edge technology and creative expertise"
          />

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
        
        {/* Background graphic elements */}
        <div className="position-absolute" style={{ 
          top: "20%",
          left: "-5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,0,85,0.1) 0%, rgba(255,0,85,0) 70%)",
          zIndex: 0
        }} />
        
        <div className="position-absolute" style={{ 
          bottom: "10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,0,85,0.1) 0%, rgba(255,0,85,0) 70%)",
          zIndex: 0
        }} />
      </div>

      

      {/* CTA Section with Enhanced Design */}
      <div className="py-5 position-relative" style={{ 
        background: "linear-gradient(135deg, #111 0%, #222 100%)",
        overflow: "hidden" 
      }}>
        <div 
          className="position-absolute top-0 start-0 w-100 h-100" 
          style={{ 
            backgroundImage: "url('https://via.placeholder.com/1920x1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1
          }}
        />
        
        <div className="container py-5 position-relative">
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-4 fw-bold mb-4" style={{ 
                color: "#ff0055",
                textShadow: "0 0 10px rgba(255,0,85,0.3)"
              }}>
                Ready to Create Something Amazing?
              </h2>
              
              <p className="fs-5 mb-4 text-white-50">
                Let's transform your ideas into compelling visual stories that captivate your audience
              </p>
              
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <button
                  className="btn btn-lg rounded-pill px-5 py-3 d-inline-flex align-items-center gap-2"
                  style={{
                    backgroundColor: "#ff0055",
                    color: "#fff",
                    transition: "all 0.3s ease",
                  }}
                  onClick={scrollToCombinedSection}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 0, 85, 0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={24} />
                </button>
                
                <button
                  className="btn btn-lg btn-outline-light rounded-pill px-5 py-3"
                  style={{
                    borderWidth: "2px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <span>View Our Portfolio</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="position-absolute" style={{
          bottom: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "2px solid rgba(255,0,85,0.1)",
          zIndex: 0
        }} />
        
        <div className="position-absolute" style={{
          top: "-50px",
          right: "-50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          border: "2px solid rgba(255,0,85,0.1)",
          zIndex: 0
        }} />
      </div>

      {/* Combined Section with Ref */}
      <div ref={combinedSectionRef}>
        <CombinedSection />
      </div>
      
      {/* Added custom CSS for global animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse {
          0% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0.8; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default TRGProductionsPage;
import React, { useRef } from "react";
import {
  MoveRight,
  Briefcase,
  Tv,
  Palette,
  Camera,
  ArrowRight,
  Building2,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import agencyImage from "../assets/agency.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import CombinedSection from "../components/Combinedsection";

const TRGAgencyLanding = () => {
  // Refs for scrolling
  const expertiseRef = useRef(null);
  const combinedSectionRef = useRef(null);

  // Scroll handler functions
  const scrollToExpertise = () => {
    expertiseRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCombinedSection = () => {
    combinedSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const capabilities = [
    {
      icon: <Target size={32} />,
      title: "Strategic Planning",
      description:
        "Crafting detailed roadmaps that harmonize with your company's goals and industry positioning.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Brand Growth",
      description:
        "Propelling brand expansion through cutting-edge marketing approaches and industry insights.",
    },
    {
      icon: <Users size={32} />,
      title: "Audience Engagement",
      description:
        "Establishing genuine connections with your desired demographic through powerful narratives.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Quality Assurance",
      description:
        "Maintaining superior standards in every initiative through meticulous oversight and precision.",
    },
    {
      icon: <Camera size={32} />,
      title: "Content Production",
      description:
        "Developing compelling visual and digital assets that command attention and foster interaction.",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Professional Management",
      description:
        "Delivering end-to-end management solutions to maximize brand achievement.",
    },
  ];

  const services = [
    {
      title: "Sports Marketing",
      icon: <Briefcase size={32} className="mb-3" />,
      description:
        "Collaborating with prominent sports figures to generate profitable ventures that enhance brand recognition.",
    },
    {
      title: "Entertainment",
      icon: <Tv size={32} className="mb-3" />,
      description:
        "Our expert team is dedicated to amplifying your presence, regardless of your entertainment sector.",
    },
    {
      title: "Brand Development",
      icon: <Palette size={32} className="mb-3" />,
      description:
        "We examine the complete landscape to ensure each brand maintains a distinctive identity through calculated growth.",
    },
    {
      title: "Digital Media",
      icon: <Camera size={32} className="mb-3" />,
      description:
        "Our state-of-the-art studio transforms concepts into reality with a fully-equipped team ready for any digital challenge.",
    },
  ];

  const customStyles = `
  .hero-section {
      background-color: black;
      position: relative;
      min-height: 100vh;
      color: white;
      margin-top: 150px;
      overflow: hidden;
    }

    .hero-image-container {
      position: relative;
      height: 100%;
      background: linear-gradient(45deg, #ff0055 0%, #ff0055 50%, transparent 50%);
      border-radius: 20px;
      overflow: hidden;
    }

    .hero-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.9;
      mix-blend-mode: luminosity;
    }

    .capability-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .capability-card:hover {
      transform: translateY(-10px);
      background: rgba(255, 0, 85, 0.1);
      border-color: #ff0055;
    }

    .capability-icon {
      background: linear-gradient(45deg, #ff0055, #ff4081);
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
    }
     
    .stats-container {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 15px;
      backdrop-filter: blur(10px);
    }

    .stat-item {
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }

    .stat-item:last-child {
      border-right: none;
    }
       .agency-label {
      position: absolute;
      top: 2rem;
      left: 0;
      right: 0;
      z-index: 2;
      margin-top:110px;
    }

    .story-card {
      border-left: 4px solid #ff1493;
      background: rgba(255, 20, 147, 0.03);
    }

    .story-year {
      color: #ff1493;
      font-size: 3rem;
      font-weight: bold;
      line-height: 1;
    }

    .pink-text {
      color: #ff1493;
    }

    .btn-pink {
      background-color: #ff1493;
      border-color: #ff1493;
      color: white;
    }

    .btn-pink:hover {
      background-color: #ff1493dd;
      border-color: #ff1493dd;
      color: white;
    }

    .service-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    }

    .black-section {
      background-color: black;
      color: white;
    }

    @media (max-width: 768px) {
      .hero-section {
        margin-top: 190px;
      }
      .hero-image-container {
        height: 300px;
        margin-top: 2rem;
      }
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div>
        {/* Agency Label */}
        <div className="agency-label">
          <div className="container">
            <div className="d-flex align-items-center gap-2">
              <Building2
                size={24}
                className="text"
                style={{ color: "#ff0055" }}
              />
              <h4 className="m-0" style={{ color: "white" }}>
                TRG AGENCY
              </h4>
            </div>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <section className="hero-section d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <h1 className="display-4 fw-bold mb-4">
                  SUCCESS EMERGES FROM REAL WORLD EXPERIENCE
                  <span className="d-block" style={{ color: "#ff0055" }}>
                    NOT CORPORATE MEETINGS.
                  </span>
                </h1>
                <p className="lead mb-4">
                  A cutting-edge management and marketing firm delivering
                  excellence through groundbreaking strategies.
                </p>
                <button
                  onClick={scrollToExpertise}
                  className="btn btn-lg d-inline-flex align-items-center gap-2"
                  style={{ background: "#ff0055", color: "white" }}
                >
                  Explore Our Solutions <MoveRight />
                </button>
              </div>
              <div className="col-lg-6">
                <div className="hero-image-container">
                  <img
                    src={agencyImage}
                    alt="Professional agency team member"
                    className="hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Our Story Section */}
        <section className="py-5 bg-light">
          <div className="container py-5">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2
                  className="display-5 fw-bold mb-4"
                  style={{ color: "#ff0055" }}
                >
                  Our Journey
                </h2>
                <p className="lead text-muted mb-5">
                  From modest origins to market leadership, our evolution has
                  been guided by one core principle: fostering authentic
                  connections through impactful storytelling.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="story-card p-4 h-100">
                  <div className="story-year mb-3">2020</div>
                  <h3 className="h4 mb-3">The Beginning</h3>
                  <p className="text-muted">
                    Yungmusterg, a young visionary from Lagos, established his
                    company with an innovative mission: crafting brand
                    identities through genuine storytelling and meaningful
                    relationships. What started as a small startup quickly
                    evolved into an industry powerhouse.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="story-card p-4 h-100">
                  <h3 className="h4 mb-3">The Vision Master</h3>
                  <p className="text-muted">
                    Distinguished for his unique methodology, Yungmusterg earned
                    recognition as the "Vision Master" behind numerous business
                    transformations. His philosophy centers on capturing each
                    brand's essence and transforming it into captivating stories
                    that connect with audiences.
                  </p>
                </div>
              </div>

              <div className="col-12">
                <div className="story-card p-4">
                  <h3 className="h4 mb-3">Our Philosophy</h3>
                  <p className="text-muted mb-0">
                    In the present day, we continue to challenge conventions
                    through our extensive resource network and collaborative
                    team strategy. We embrace unconventional paths, believing
                    they lead to the most authentic narratives. Our dedication
                    to innovation and genuine storytelling has established us as
                    the preferred partner for brands seeking enduring impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid with ref */}
        <section ref={expertiseRef} className="py-5 bg-light">
          <div className="container py-5">
            <h2
              className="display-5 fw-bold text-center mb-5"
              style={{ color: "#ff0055" }}
            >
              Our Expertise
            </h2>
            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card service-card h-100 border-0 p-4">
                    <div className="card-body text-center">
                      <div className="pink-text">{service.icon}</div>
                      <h3 className="h4 mb-3" style={{ color: "black" }}>
                        {service.title}
                      </h3>
                      <p className="text-muted">{service.description}</p>
                      <button className="btn btn-link text-decoration-none pink-text d-inline-flex align-items-center gap-2">
                        Discover More <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Capabilities Section */}
        <section className="black-section py-5">
          <div className="container py-5">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2
                  className="display-5 fw-bold mb-4"
                  style={{ color: "#ff0055" }}
                >
                  Core Strengths
                </h2>
                <p className="lead mb-4 text-light">
                  We excel at identifying untapped potential and transforming it
                  into measurable success.
                </p>
              </div>
            </div>

            <div className="row g-4 mb-5">
              {capabilities.map((cap, index) => (
                <div key={index} className="col-md-4">
                  <div className="capability-card p-4 h-100">
                    <div className="capability-icon">{cap.icon}</div>
                    <h3 className="h4 mb-3" style={{ color: "#ff0055" }}>
                      {cap.title}
                    </h3>
                    <p className="mb-0" style={{ color: "white" }}>
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="stats-container p-4 mt-5">
              <div className="row text-center g-4">
                <div className="col-md-3 stat-item">
                  <h3 className="h2 mb-2" style={{ color: "#ff0055" }}>
                    20+
                  </h3>
                  <p className="mb-0">Years of Excellence</p>
                </div>
                <div className="col-md-3 stat-item">
                  <h3 className="h2 mb-2" style={{ color: "#ff0055" }}>
                    500+
                  </h3>
                  <p className="mb-0">Successful Ventures</p>
                </div>
                <div className="col-md-3 stat-item">
                  <h3 className="h2 mb-2" style={{ color: "#ff0055" }}>
                    300+
                  </h3>
                  <p className="mb-0">Satisfied Partners</p>
                </div>
                <div className="col-md-3 stat-item">
                  <h3 className="h2 mb-2" style={{ color: "#ff0055" }}>
                    50+
                  </h3>
                  <p className="mb-0">Expert Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5 bg-white">
          <div className="container py-5 text-center">
            <h2 className="display-5 fw-bold mb-4" style={{ color: "#ff0055" }}>
              Ready to Make Your Mark?
            </h2>
            <p className="lead text-black mb-4">
              Experience exceptional outcomes through our integrated team
              approach.
            </p>
            <button
              onClick={scrollToCombinedSection}
              className="btn btn-dark btn-lg d-inline-flex align-items-center gap-2"
            >
              Get in Touch <MoveRight />
            </button>
          </div>
        </section>
      </div>
      <div>
        {/* Combined Section */}
        <section ref={combinedSectionRef}>
          <CombinedSection />
        </section>
      </div>
    </>
  );
};

export default TRGAgencyLanding;

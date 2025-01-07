import React from "react";
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
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const TRGAgencyLanding = () => {
  const capabilities = [
    {
      icon: <Target size={32} />,
      title: "Strategic Planning",
      description:
        "Developing comprehensive strategies that align with your business objectives and market position.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Brand Growth",
      description:
        "Accelerating brand growth through innovative marketing solutions and market analysis.",
    },
    {
      icon: <Users size={32} />,
      title: "Audience Engagement",
      description:
        "Creating meaningful connections with your target audience through compelling storytelling.",
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Quality Assurance",
      description:
        "Ensuring excellence in every project through rigorous quality control and attention to detail.",
    },
    {
      icon: <Camera size={32} />,
      title: "Content Production",
      description:
        "Creating high-impact visual and digital content that captures attention and drives engagement.",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Professional Management",
      description:
        "Providing comprehensive management solutions to help brands reach their full potential.",
    },
  ];
  const services = [
    {
      title: "Sports Marketing",
      icon: <Briefcase size={32} className="mb-3" />,
      description:
        "Working with recognizable names in sports, we create revenue-driving opportunities that build distinguished brand portfolios.",
    },
    {
      title: "Entertainment",
      icon: <Tv size={32} className="mb-3" />,
      description:
        "Whatever kind of spotlight shines on you, we're here to make it brighter, with a team of specialized professionals.",
    },
    {
      title: "Brand Development",
      icon: <Palette size={32} className="mb-3" />,
      description:
        "We look at the big picture, ensuring every brand has a memorable voice and image through strategic development.",
    },
    {
      title: "Digital Media",
      icon: <Camera size={32} className="mb-3" />,
      description:
        "Our in-house studio turns visions into reality with a well-equipped production team ready for all digital media needs.",
    },
  ];

  const customStyles = `
  .hero-section {
      background-color: black;
      position: relative;
      min-height: 100vh;
      color: white;
      margin-top: 190px;
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
      margin-top:140px;
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
                  BRANDS ARE CREATED IN THE STREETS
                  <span className="d-block" style={{ color: "#ff0055" }}>
                    NOT IN THE BOARD ROOM.
                  </span>
                </h1>
                <p className="lead mb-4">
                  An industry-leading management and marketing agency delivering
                  results through innovative strategies.
                </p>
                <button
                  className="btn btn-lg d-inline-flex align-items-center gap-2"
                  style={{ background: "#ff0055", color: "white" }}
                >
                  See Our Services <MoveRight />
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
                  Our Story
                </h2>
                <p className="lead text-muted mb-5">
                  From humble beginnings to industry leadership, our journey has
                  been driven by a singular vision: creating emotional
                  connections through powerful storytelling.
                </p>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="story-card p-4 h-100">
                  <div className="story-year mb-3">2001</div>
                  <h3 className="h4 mb-3">The Foundation</h3>
                  <p className="text-muted">
                    Brian Stretch founded TRG Agency with a revolutionary
                    vision: to build brands through authentic storytelling and
                    emotional connections. What started in a small office has
                    grown into an industry-leading force.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="story-card p-4 h-100">
                  <h3 className="h4 mb-3">The Brand Whisperer</h3>
                  <p className="text-muted">
                    Quickly recognized for our unique approach, Mr. Stretch
                    became known as the "Brand Whisperer" behind many corporate
                    success stories. Our methodology focuses on understanding
                    the heart of each brand and translating it into compelling
                    narratives that resonate with audiences.
                  </p>
                </div>
              </div>

              <div className="col-12">
                <div className="story-card p-4">
                  <h3 className="h4 mb-3">Our Approach</h3>
                  <p className="text-muted mb-0">
                    Today, we continue to push boundaries with our vast network
                    of resources and cross-functional team approach. We're never
                    lost when taking the road less traveled, because we believe
                    that's where the most compelling stories are found. Our
                    commitment to innovation and authentic storytelling has made
                    us the trusted partner for brands seeking to make a lasting
                    impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-5 bg-light">
          <div className="container py-5">
            <h2
              className="display-5 fw-bold text-center mb-5"
              style={{ color: "#ff0055" }}
            >
              What We Do
            </h2>
            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="card service-card h-100 border-0 p-4">
                    <div className="card-body text-center">
                      <div className="pink-text">{service.icon}</div>
                      <h3 className="h4 mb-3">{service.title}</h3>
                      <p className="text-muted">{service.description}</p>
                      <button className="btn btn-link text-decoration-none pink-text d-inline-flex align-items-center gap-2">
                        Learn More <ArrowRight size={16} />
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
                  Capabilities
                </h2>
                <p className="lead mb-4 text-light">
                  We specialize in recognizing brand potential and turning it
                  into market success.
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
                  <p className="mb-0">Years Experience</p>
                </div>
                <div className="col-md-3 stat-item">
                  <h3 className="h2 mb-2" style={{ color: "#ff0055" }}>
                    500+
                  </h3>
                  <p className="mb-0">Projects Completed</p>
                </div>
                <div className="col-md-3 stat-item">
                  <h3 className="h2 mb-2" style={{ color: "#ff0055" }}>
                    300+
                  </h3>
                  <p className="mb-0">Happy Clients</p>
                </div>
                <div className="col-md-3 stat-item">
                  <h3 className="h2 mb-2" style={{ color: "#ff0055" }}>
                    50+
                  </h3>
                  <p className="mb-0">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5 bg-white">
          <div className="container py-5 text-center">
            <h2 className="display-5 fw-bold mb-4" style={{ color: "#ff0055" }}>
              Ready to Stand Out?
            </h2>
            <p className="lead text-black mb-4">
              Let us maximize your results through our cross-functional team
              approach.
            </p>
            <button className="btn btn-dark btn-lg d-inline-flex align-items-center gap-2">
              Contact Us <MoveRight />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default TRGAgencyLanding;

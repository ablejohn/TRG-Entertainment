import React from "react";
import {
  MoveRight,
  Briefcase,
  Tv,
  Palette,
  Camera,
  ArrowRight,
  Building2, // Correctly imported icon
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const TRGAgencyLanding = () => {
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
    height: 100vh;
    color: white;
    margin-top: 140px;
  }
  
  .hero-gradient {
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .agency-label {
    position: absolute;
    top: 2rem;
    left: 0;
    right: 0;
    z-index: 2;
    margin-top:80px;
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
      margin-top: 150px;
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
              <Building2 size={24} className="pink-text" />
              <h4 className="m-0">TRG AGENCY</h4>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero-section d-flex align-items-center">
          <div className="hero-gradient">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <h1 className="display-4 fw-bold mb-4">
                    BRANDS ARE CREATED IN THE STREETS
                    <span className="d-block pink-text">
                      NOT IN THE BOARD ROOM.
                    </span>
                  </h1>
                  <p className="lead mb-4">
                    An industry-leading management and marketing agency
                    delivering results through innovative strategies.
                  </p>
                  <button className="btn btn-pink btn-lg d-inline-flex align-items-center gap-2">
                    See Our Services <MoveRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Our Story Section */}
        <section className="py-5 bg-white">
          <div className="container py-5">
            <div className="row justify-content-center mb-5">
              <div className="col-lg-8 text-center">
                <h2 className="display-5 fw-bold mb-4">Our Story</h2>
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
            <h2 className="display-5 fw-bold text-center mb-5">What We Do</h2>
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

        {/* Capabilities Section */}
        <section className="black-section py-5">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="display-5 fw-bold mb-4">Capabilities</h2>
                <p className="lead mb-4">
                  We specialize in recognizing brand potential. We identify the
                  perfect connection between brands and their respective
                  industries, leveraging creative ideas and unique attributes to
                  tell individual brand stories, ultimately driving revenue.
                </p>
                <button className="btn btn-pink btn-lg d-inline-flex align-items-center gap-2">
                  Explore Our Capabilities <MoveRight />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5 bg-white">
          <div className="container py-5 text-center">
            <h2 className="display-5 fw-bold mb-4">Ready to Stand Out?</h2>
            <p className="lead text-muted mb-4">
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

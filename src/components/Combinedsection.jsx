import React from "react";

const CombinedSection = () => {
  // Define the gradient overlay style
  const gradientOverlay = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, rgba(255,0,85,0.5), rgba(255,0,162,0.5))",
    borderRadius: "inherit",
  };

  return (
    <section
      className="py-5"
      style={{
        background:
          "linear-gradient(135deg, black 0%, rgb(17, 8, 8) 60%, black 100%)",
        borderRadius: "25px",
        overflow: "hidden",
      }}
      id="booking"
    >
      <div className="container py-5">
        {/* Header Section */}
        <div className="row mb-5 text-center">
          <div className="col-lg-8 mx-auto">
            <h2
              className="display-6 fw-bolder mb-4"
              style={{ color: "#ff0055" }}
            >
              Elevate Your Music Career
            </h2>
            <div className="title-underline"></div>
            <p className="lead text-white-50">
              Join us to explore and elevate your musical talents
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Playlist Card */}
          <div className="col-lg-4">
            <div className="card h-100 bg-transparent border-0 shadow-lg position-relative">
              <div style={gradientOverlay}></div>
              <div className="card-body p-4 position-relative">
                <h3 className="text-white fw-bold h4 mb-4">
                  <span className="text-danger me-2">⬤</span> Featured Playlist
                </h3>
                <div className="rounded-4 overflow-hidden shadow-lg">
                  <iframe
                    className="w-100"
                    src="https://open.spotify.com/embed/playlist/2gyQt8GeSWbNawYsi0WRsB"
                    height="380"
                    frameBorder="0"
                    allow="encrypted-media"
                    title="Spotify Playlist"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="col-lg-4">
            <div className="card h-100 bg-transparent border-0 shadow-lg position-relative">
              <div style={gradientOverlay}></div>
              <div className="card-body p-4 position-relative">
                <h3 className="text-white fw-bold h4 mb-4">
                  <span className="text-primary me-2">⬤</span> Get in Touch
                </h3>
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="contactName"
                      className="form-label text-white-50 fw-bold"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-dark bg-opacity-75 border-light border-opacity-25 text-white py-3"
                      id="contactName"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="contactEmail"
                      className="form-label text-white-50 fw-bold"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control bg-dark bg-opacity-75 border-light border-opacity-25 text-white py-3"
                      id="contactEmail"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="contactMessage"
                      className="form-label text-white-50 fw-bold"
                    >
                      Your Message
                    </label>
                    <textarea
                      className="form-control bg-dark bg-opacity-75 border-light border-opacity-25 text-white py-3"
                      id="contactMessage"
                      placeholder="Write your message"
                      rows="4"
                    ></textarea>
                  </div>
                  <button
                    className="btn btn-lg w-100"
                    style={{ backgroundColor: "#ff0055", color: "#fff" }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="col-lg-4">
            <div className="card h-100 bg-transparent border-0 shadow-lg position-relative">
              <div style={gradientOverlay}></div>
              <div className="card-body p-4 position-relative">
                <h3 className="text-white fw-bold h4 mb-4">
                  <span className="text-success me-2">⬤</span> Book Your Session
                </h3>
                <form>
                  <div className="mb-3">
                    <label
                      htmlFor="bookingName"
                      className="form-label text-white-50 fw-bold"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-dark bg-opacity-75 border-light border-opacity-25 text-white py-3"
                      id="bookingName"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="bookingEmail"
                      className="form-label text-white-50 fw-bold"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control bg-dark bg-opacity-75 border-light border-opacity-25 text-white py-3"
                      id="bookingEmail"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="bookingService"
                      className="form-label text-white-50 fw-bold"
                    >
                      Service Type
                    </label>
                    <select
                      className="form-select bg-dark bg-opacity-75 border-light border-opacity-25 text-white py-3"
                      id="bookingService"
                    >
                      <option value="">Select a service</option>
                      <option value="consultation">Music Consultation</option>
                      <option value="coaching">Private Coaching</option>
                      <option value="custom">Custom Session</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="bookingDate"
                      className="form-label text-white-50 fw-bold"
                    >
                      Select Date
                    </label>
                    <input
                      type="date"
                      className="form-control bg-dark bg-opacity-75 border-light border-opacity-25 text-white py-3"
                      id="bookingDate"
                    />
                  </div>
                  <button className="btn btn-success btn-lg w-100">
                    Book Session
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="row mt-5">
          <div className="col text-center">
            <p className="text-white-50 small mb-0">
              Available 24/7 • Professional Support • Worldwide Sessions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedSection;
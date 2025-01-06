import React from "react";

const CombinedSection = () => {
  const cardStyles =
    "card bg-dark bg-opacity-90 border-0 shadow-lg h-100 overflow-hidden";
  const gradientOverlay =
    "position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10";
  const inputStyles =
    "form-control bg-dark bg-opacity-75 border-light border-opacity-25 text-white py-3";
  const labelStyles = "form-label text-white-50 fw-bold";

  return (
    <section
      className="py-5"
      style={{ background: "linear-gradient(145deg, #000 0%, #1a1a1a 100%)" }}
    >
      <div className="container py-5">
        {/* Header Section */}
        <div className="row mb-5 text-center">
          <div className="col-lg-8 mx-auto">
            <h2 className="display-4 text-white fw-bold mb-4">
              Experience the Music
            </h2>
            <p className="lead text-white-50">
              Connect with us and discover your musical journey
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Playlist Card */}
          <div className="col-lg-4">
            <div className={cardStyles}>
              <div className={gradientOverlay}></div>
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
            <div className={cardStyles}>
              <div className={gradientOverlay}></div>
              <div className="card-body p-4 position-relative">
                <h3 className="text-white fw-bold h4 mb-4">
                  <span className="text-primary me-2">⬤</span> Get in Touch
                </h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="contactName" className={labelStyles}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      className={inputStyles}
                      id="contactName"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactEmail" className={labelStyles}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={inputStyles}
                      id="contactEmail"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contactMessage" className={labelStyles}>
                      Your Message
                    </label>
                    <textarea
                      className={inputStyles}
                      id="contactMessage"
                      placeholder="Write your message"
                      rows="4"
                    ></textarea>
                  </div>
                  <button className="btn btn-primary btn-lg w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="col-lg-4">
            <div className={cardStyles}>
              <div className={gradientOverlay}></div>
              <div className="card-body p-4 position-relative">
                <h3 className="text-white fw-bold h4 mb-4">
                  <span className="text-success me-2">⬤</span> Book Your Session
                </h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="bookingName" className={labelStyles}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      className={inputStyles}
                      id="bookingName"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bookingEmail" className={labelStyles}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      className={inputStyles}
                      id="bookingEmail"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bookingService" className={labelStyles}>
                      Service Type
                    </label>
                    <select className={inputStyles} id="bookingService">
                      <option value="">Select a service</option>
                      <option value="consultation">Music Consultation</option>
                      <option value="coaching">Private Coaching</option>
                      <option value="custom">Custom Session</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="bookingDate" className={labelStyles}>
                      Select Date
                    </label>
                    <input
                      type="date"
                      className={inputStyles}
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

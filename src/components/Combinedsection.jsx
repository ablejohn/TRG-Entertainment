import React from "react";

const CombinedSection = () => {
  const cardStyles =
    "card bg-dark bg-opacity-90 border-0 shadow-lg h-100 overflow-hidden";
  const gradientOverlay =
    "position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10";
  const floatingInputStyles =
    "form-control form-control-lg bg-dark bg-opacity-75 border-light border-opacity-25 text-white";
  const floatingLabelStyles = "form-label text-white-50";

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
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      className={floatingInputStyles}
                      id="contactName"
                      placeholder="Your Name"
                    />
                    <label
                      htmlFor="contactName"
                      className={floatingLabelStyles}
                    >
                      Your Name
                    </label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="email"
                      className={floatingInputStyles}
                      id="contactEmail"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="contactEmail"
                      className={floatingLabelStyles}
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="form-floating mb-4">
                    <textarea
                      className={floatingInputStyles}
                      id="contactMessage"
                      placeholder="Your Message"
                      style={{ height: "120px" }}
                    ></textarea>
                    <label
                      htmlFor="contactMessage"
                      className={floatingLabelStyles}
                    >
                      Your Message
                    </label>
                  </div>
                  <button className="btn btn-primary btn-lg w-100 text-uppercase fw-bold">
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
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      className={floatingInputStyles}
                      id="bookingName"
                      placeholder="Full Name"
                    />
                    <label
                      htmlFor="bookingName"
                      className={floatingLabelStyles}
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="email"
                      className={floatingInputStyles}
                      id="bookingEmail"
                      placeholder="Email Address"
                    />
                    <label
                      htmlFor="bookingEmail"
                      className={floatingLabelStyles}
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="form-floating mb-4">
                    <select
                      className={`${floatingInputStyles} form-select`}
                      id="bookingService"
                      placeholder="Service Type"
                    >
                      <option value="">Service Type</option>
                      <option value="consultation" className="bg-dark">
                        Music Consultation
                      </option>
                      <option value="coaching" className="bg-dark">
                        Private Coaching
                      </option>
                      <option value="custom" className="bg-dark">
                        Custom Session
                      </option>
                    </select>
                    <label
                      htmlFor="bookingService"
                      className={floatingLabelStyles}
                    >
                      Service Type
                    </label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="date"
                      className={floatingInputStyles}
                      id="bookingDate"
                      placeholder="Select Date"
                    />
                    <label
                      htmlFor="bookingDate"
                      className={floatingLabelStyles}
                    >
                      Select Date
                    </label>
                  </div>
                  <button className="btn btn-success btn-lg w-100 text-uppercase fw-bold">
                    Book Session
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Closing div for row g-4 */}
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

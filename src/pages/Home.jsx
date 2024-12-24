import React from "react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold text-danger">
            Where Entertainment Connects
          </h1>
          <p className="lead text-light">
            Empowering Creativity. Amplifying Success.
          </p>
          <button className="btn btn-danger btn-lg mt-4">
            Visit TRG Agency
          </button>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-5 bg-white text-black">
        <div className="container">
          <h2 className="text-center text-danger mb-4">What We Do</h2>
          <div className="row">
            {[
              "Management",
              "Music Publishing",
              "Music Licensing",
              "Recording Services",
              "Video Recording Services",
              "Music Distribution",
            ].map((service) => (
              <div className="col-md-4 mb-4" key={service}>
                <div className="card bg-black text-white h-100">
                  <div className="card-body text-center">
                    <h5 className="card-title text-danger">{service}</h5>
                    <p className="card-text">
                      High-quality {service.toLowerCase()} to meet your needs.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotify Playlist & Contact Section */}
      <section className="py-5 bg-black text-white">
        <div className="container">
          <div className="row">
            {/* Spotify Playlist */}
            <div className="col-md-6 mb-4">
              <h2 className="text-danger">Featured Playlist</h2>
              <iframe
                className="w-100 rounded"
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
                frameBorder="0"
                allow="encrypted-media"
                title="Spotify Playlist"
                height="300"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="col-md-6">
              <h2 className="text-danger">Contact Us</h2>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Your Message"
                    rows="4"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-danger w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

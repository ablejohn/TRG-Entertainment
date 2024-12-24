import React from "react";
import Footer from "../components/Footer";
import "../styling/Home.css";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Core Services Section */}
      <section className="py-16 bg-white text-black">
        <div className="container">
          <h2 className="text-center text-danger mb-8 text-4xl font-bold">
            What We Do
          </h2>
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

      {/* Rest of the code remains the same */}
      {/* Spotify Playlist & Contact Section */}
      <section className="py-16 bg-black text-white">
        <div className="container">
          <div className="row">
            {/* Spotify Playlist */}
            <div className="col-md-6 mb-4">
              <h2 className="text-danger text-3xl font-bold mb-6">
                Featured Playlist
              </h2>
              <iframe
                className="w-100 rounded"
                src="https://open.spotify.com/embed/playlist/37i9dQZF1EVHGWrwldPRtj?si=kQi3V5TOTlSglskrLApOQg&pi=e-GeIa8cVfTXC4"
                frameBorder="0"
                allow="encrypted-media"
                title="Spotify Playlist"
                height="300"
                onLoad={() =>
                  console.log("Spotify playlist loaded successfully")
                }
                onError={() => console.error("Failed to load Spotify playlist")}
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="col-md-6">
              <h2 className="text-danger text-3xl font-bold mb-6">
                Contact Us
              </h2>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-4">
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

      <Footer />
    </div>
  );
};

export default Home;

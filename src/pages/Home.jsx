import React from "react";
import Footer from "../components/Footer";
import "../styling/Home.css";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import WWD from "../components/WWD";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Welcome Section */}
      <Welcome />

      {/* WWD Section */}
      <WWD />
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
                src="https://open.spotify.com/embed/playlist/2gyQt8GeSWbNawYsi0WRsB"
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

import React from "react";
import Footer from "../components/Footer";
import "../styling/Home.css";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome2";
import WWD from "../components/WWD";
import Playlist from "../components/Playlist";
import Contactus from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <WWD />

      {/* Playlist and Contact Section */}
      <section style={{ background: "#000", minHeight: "100vh" }}>
        <div className="container py-5">
          <div className="row justify-content-center align-items-start g-4">
            <div className="col-md-6">
              <Playlist />
            </div>
            <div className="col-md-6">
              <Contactus />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

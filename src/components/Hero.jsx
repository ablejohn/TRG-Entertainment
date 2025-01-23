import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import videoBg from "../assets/video.mp4";
import "../styling/Hero.css";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const texts = [
    "Where <span class='script'>Entertainment</span> Connects",
    "The Gatewaysss to <span class='script'>Music</span> & <span class='script'>Talent</span>",
    "Bringing <span class='script'>Artists</span> & <span class='script'>Audiences</span> Together",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 500); // Half of the transition time
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline>
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="hero-content">
        <div className="sliding-text-container">
          <div
            className={`sliding-text ${isAnimating ? "fade-out" : "fade-in"}`}
            dangerouslySetInnerHTML={{ __html: texts[currentTextIndex] }}
          />
        </div>

        <div className="hero-buttons">
          <Link to="/trg-productions" className="hero-button">
            TRG Productions
          </Link>
          <Link to="/trg-agency" className="hero-button hero-button-secondary">
            TRG Agency
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

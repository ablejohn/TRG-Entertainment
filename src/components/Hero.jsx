import React, { useState, useEffect } from "react";
import videoBg from "../assets/video.mp4";
import "../styling/Hero.css";

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = [
    "Where <span class='script'>Entertainment</span> Connects",
    "The Gateway to <span class='script'>Music</span> & <span class='script'>Talent</span>",
    "Bringing <span class='script'>Artists</span>&<span class='script'>Audiences</span> Together",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds
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
            className="sliding-text"
            dangerouslySetInnerHTML={{ __html: texts[currentTextIndex] }}
          />
        </div>
        <div className="hero-buttons">
          <a href="/trg-music" className="hero-button">
            TRG Music Production
          </a>
          <a href="/trg-agency" className="hero-button hero-button-secondary">
            TRG Agency
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

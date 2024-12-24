import React, { useState, useEffect } from "react";
import videoBg from "../assets/video.mp4";
import "../styling/Home.css";
const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      title: "Where Entertainment Connects",
      subtitle: "Your Gateway to Music and Talent.",
    },
    {
      title: "Discover New Talent",
      subtitle: "Bringing Artists and Audiences Together.",
    },
    {
      title: "Create Your Future",
      subtitle: "Empowering Creativity, Amplifying Success.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      <div className="relative z-10 h-full bg-black/50 flex items-center justify-center">
        <div className="text-center px-4 relative h-48 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                transition: "all 2s ease-in-out",
                position: "absolute",
                width: "100%",
                transform: `translateX(${(index - activeSlide) * 100}%)`,
                opacity: index === activeSlide ? 1 : 0,
              }}
            >
              <h1 className="text-6xl font-bold text-red-600 mb-4">
                {slide.title}
              </h1>
              <p className="hero-subtitle mb-8">{slide.subtitle}</p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors">
                Visit TRG Agency
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

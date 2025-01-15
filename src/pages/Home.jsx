import React, { useState, useEffect } from "react";
import "../styling/Home.css";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome2";
import WWD from "../components/WWD";
import CombinedSection from "../components/Combinedsection";
import Blog from "../components/Blog";

const Home = () => {
  const [showArrow, setShowArrow] = useState(false);

  // Show arrow when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <div>
      <Hero />
      <Welcome />
      <WWD />
      <Blog />
      <CombinedSection />

      {/* Back to Top Arrow */}
    </div>
  );
};

export default Home;

// src/components/Loader.jsx
import React from "react";
import "../styling/loader.css";
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-background-effects">
        <div className="loader-gradient-bg"></div>
        <div className="loader-animated-shapes">
          <div className="loader-shape loader-shape-1"></div>
          <div className="loader-shape loader-shape-2"></div>
          <div className="loader-shape loader-shape-3"></div>
          <div className="loader-noise-overlay"></div>
        </div>
      </div>

      <div className="loader-content">
        <div className="loader-spinner">
          <div className="spinner-ring"></div>
        </div>
        <div className="loader-text">
          <span>I</span>
          <span>N</span>
          <span>N</span>
          <span>O</span>
          <span>V</span>
          <span>A</span>
          <span>T</span>
          <span>E</span>
          <span>•</span>
          <span>C</span>
          <span>R</span>
          <span>E</span>
          <span>A</span>
          <span>T</span>
          <span>E</span>
          <span>•</span>
          <span>I</span>
          <span>N</span>
          <span>S</span>
          <span>P</span>
          <span>I</span>
          <span>R</span>
          <span>E</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;

import React from "react";
import "../styling/Home.css";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome2";
import WWD from "../components/WWD";
import CombinedSection from "../components/Combinedsection";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <WWD />
      <Blog />
      <CombinedSection />
    </div>
  );
};

export default Home;

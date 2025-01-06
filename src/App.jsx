import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar2";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Talents from "./pages/Talents";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="Poppins,sans-serif">
        <Navbar />
        {/* Define routes for the app */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          {/* About Page */}
          <Route path="/aboutus" element={<Aboutus />} />
          {/* Talent Page */}
          <Route path="/services" element={<Services />} />
          {/* Services Page */}
          <Route path="/talents" element={<Talents />} />
        </Routes>
        <Footer /> {/* Add the Footer component here */}
      </div>
    </Router>
  );
};

export default App;

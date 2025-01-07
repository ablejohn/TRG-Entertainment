import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar2";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Talents from "./pages/Talents";
import TrgProductions from "./pages/TrgProductions";
import TrgAgency from "./pages/TrgAgency";
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
          <Route path="/trg-productions" element={<TrgProductions />} />
          <Route path="/trg-agency" element={<TrgAgency />} />
        </Routes>
        <Footer /> {/* Add the Footer component here */}
      </div>
    </Router>
  );
};

export default App;

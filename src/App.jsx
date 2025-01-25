import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar2";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Talents from "./pages/Talents";
import ArtistProfile from "./components/artistProfile";
import SportsProfile from "./components/sportsProfile";
import TrgProductions from "./pages/TrgProductions";
import News from "./pages/News";
import TrgAgency from "./pages/TrgAgency";
import Footer from "./components/Footer";

// ScrollToTop component to handle scroll reset
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [location]);

  return null;
};

const App = () => {
  const [showArrow, setShowArrow] = useState(false);

  // Show the arrow when scrolled down
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
    <Router>
      <div className="Poppins,sans-serif">
        <Navbar />
        {/* ScrollToTop component will reset the scroll position */}
        <ScrollToTop />
        {/* Define routes for the app */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          {/* About Page */}
          <Route path="/about-us" element={<Aboutus />} />
          {/* Services Page */}
          <Route path="/services" element={<Services />} />
          {/* Talent Page */}
          <Route path="/talents" element={<Talents />} />
          <Route path="/trg-productions" element={<TrgProductions />} />
          <Route path="/trg-agency" element={<TrgAgency />} />
          <Route path="/news" element={<News />} />
          <Route path="/artist/:id" element={<ArtistProfile />} />
          <Route path="/sport/:id" element={<SportsProfile />} />
        </Routes>
        <Footer /> {/* Add the Footer component here */}
        {/* Back to Top Button */}
        {showArrow && (
          <div
            className="back-to-top"
            onClick={scrollToTop}
            title="Back to Top"
          >
            <i className="bi bi-caret-up-fill"></i>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;

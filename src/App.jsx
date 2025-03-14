import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
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
import AdminLogin from "./admin/adminLogin";
import AdminDashboard from "./admin/adminDashboard";
import SportDashboard from "./admin/sportDashboard";
import TalentDashboard from "./components/talentDashboard";
import AdminDashboard2 from "./components/adminDashboard";

// ScrollToTop component to handle scroll reset
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on route change
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <div className="Poppins,sans-serif">
        <Routes>
          <Route path="*" element={<MainApp />} />
        </Routes>
      </div>
    </Router>
  );
};

const MainApp = () => {
  const [showArrow, setShowArrow] = useState(false);
  const location = useLocation();
  const isDashboard =
    location.pathname === "/sportadmin" ||
    location.pathname === "/talentadmin" ||
    location.pathname === "/admin" ||
    location.pathname === "/adminlogin";

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
    <>
      {!isDashboard && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/talents" element={<Talents />} />
        <Route path="/trg-productions" element={<TrgProductions />} />
        <Route path="/trg-agency" element={<TrgAgency />} />
        <Route path="/news" element={<News />} />
        <Route path="/artist/:id" element={<ArtistProfile />} />
        <Route path="/sport/:id" element={<SportsProfile />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/sportadmin" element={<SportDashboard />} />
        <Route path="/talentadmin" element={<TalentDashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard2 />} />
      </Routes>
      {!isDashboard && <Footer />}
      {showArrow && (
        <div className="back-to-top" onClick={scrollToTop} title="Back to Top">
          <i className="bi bi-caret-up-fill"></i>
        </div>
      )}
    </>
  );
};

export default App;

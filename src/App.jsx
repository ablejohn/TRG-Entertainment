import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase"; // Adjust path if needed
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
import AdminDashboard2 from "./admin/adminDashboard";
import Loader from "./components/loader"; // Import the new Loader component
import HomepageTemp from "./pages/HomepageTemp"; // Temporary expiration page

// ScrollToTop component
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

// ProtectedRoute component with state management
const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(null); // null means "checking"

  useEffect(() => {
    const checkAdmin = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          setIsAdmin(userDoc.exists() && userDoc.data().role === "admin");
        } catch (error) {
          console.error("Error checking admin status:", error);
          setIsAdmin(false); // Default to non-admin on error
        }
      } else {
        setIsAdmin(false); // Not logged in
      }
    };

    if (!loading) {
      checkAdmin();
    }
  }, [user, loading]);

  if (loading || isAdmin === null) {
    return <Loader />; // Use our custom loader
  }

  if (!user || !isAdmin) {
    return <Navigate to="/adminlogin" replace />;
  }

  return children; // Render the protected component if authorized
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
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
 
  const isDashboard =
    location.pathname === "/adminlogin" ||
    location.pathname === "/admindashboard";

  // Loading effect when route changes
  // TEMPORARY: Skip loader on homepage (expiration page)
  useEffect(() => {
    if (location.pathname === "/") {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loader for 1.5 seconds

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isLoading && <Loader />}
      {!isDashboard && <Navbar />}
      <ScrollToTop />
      <Routes>
        {/* TEMPORARY: To restore original homepage, change HomepageTemp back to Home 
        <Route path="/" element={<Home />} />*/}
       
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
        <Route
          path="/admindashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard2 />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!isDashboard && <Footer />}
      {showArrow && !isDashboard && (
        <div className="back-to-top" onClick={scrollToTop} title="Back to Top">
          <i className="bi bi-caret-up-fill"></i>
        </div>
      )}
    </>
  );
};

export default App;

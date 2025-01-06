import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar2";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="Poppins,sans-serif">
        <Navbar />
        {/* Define routes for the app */}
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          {/* Add other pages here in the future */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

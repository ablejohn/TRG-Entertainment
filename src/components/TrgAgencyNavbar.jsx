// components/TrgAgencyNavbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const TrgAgencyNavbar = () => {
  return (
    <nav className="bg-black text-white shadow-lg w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="font-bold text-2xl text-pink-500 hover:text-pink-400 transition-colors"
          >
            TRG Agency
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="#talents"
              className="hover:text-pink-500 transition-colors"
            >
              Talents
            </Link>
            <Link
              to="#services"
              className="hover:text-pink-500 transition-colors"
            >
              Services
            </Link>
            <Link to="#about" className="hover:text-pink-500 transition-colors">
              About
            </Link>
            <Link
              to="#contact"
              className="hover:text-pink-500 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Home Button */}
          <Link
            to="/"
            className="px-4 py-2 rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300"
          >
            Main Site
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TrgAgencyNavbar;

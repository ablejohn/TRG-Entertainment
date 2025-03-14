import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, Users } from "lucide-react";

const MainAdminDashboard = () => {
  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container text-center">
        <h1 className="text-white mb-4 fw-bold">Admin Dashboard</h1>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3">
            <Link
              to="/talentadmin"
              className="btn w-100 py-3 d-flex align-items-center justify-content-center shadow"
              style={{
                background: "linear-gradient(45deg, #ff0055, #ff3366)",
                color: "#fff",
                borderRadius: "10px",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.target.style.boxShadow =
                  "0px 0px 15px rgba(255, 0, 85, 0.7)")
              }
              onMouseOut={(e) => (e.target.style.boxShadow = "none")}
            >
              <Users size={20} className="me-2" /> Manage Clients & Talents
            </Link>
          </div>
          <div className="col-md-4 mb-3">
            <Link
              to="/sportadmin"
              className="btn w-100 py-3 d-flex align-items-center justify-content-center shadow"
              style={{
                background: "linear-gradient(45deg, #ff0055, #ff3366)",
                color: "#fff",
                borderRadius: "10px",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseOver={(e) =>
                (e.target.style.boxShadow =
                  "0px 0px 15px rgba(255, 0, 85, 0.7)")
              }
              onMouseOut={(e) => (e.target.style.boxShadow = "none")}
            >
              <LayoutDashboard size={20} className="me-2" /> Manage Sports
              Section
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAdminDashboard;

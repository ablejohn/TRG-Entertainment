import React, { useState } from "react";
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists() && userDoc.data().role === "admin") {
        navigate("/admindashboard");
      } else {
        setError("You do not have admin privileges.");
        await auth.signOut();
      }
    } catch (err) {
      setError(getErrorMessage(err.code));
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/user-not-found":
        return "No user found with this email.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/too-many-requests":
        return "Too many attempts. Please try again later.";
      default:
        return "An error occurred. Please try again.";
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Admin Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              disabled={loading}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>

      {/* Fixed styled-jsx syntax */}
      <style jsx>{`
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #121212;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .login-card {
          background-color: #1c1c1c;
          border-radius: 10px;
          padding: 40px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .login-title {
          color: #ff0055;
          font-size: 2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 30px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          color: #ddd;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .form-group input {
          width: 100%;
          padding: 12px;
          background-color: #2c2c2c;
          border: 1px solid #444;
          border-radius: 5px;
          color: white;
          font-size: 0.9rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus {
          border-color: #ff0055;
          outline: none;
        }

        .error-message {
          color: #ff4444;
          font-size: 0.9rem;
          margin-bottom: 20px;
          text-align: center;
          background-color: rgba(255, 68, 68, 0.1);
          padding: 10px;
          border-radius: 5px;
        }

        .login-btn {
          width: 100%;
          background-color: #ff0055;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .login-btn:hover {
          background-color: #e6004c;
        }

        .login-btn:disabled {
          background-color: #666;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default AdminLogin;

import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Adjust path as needed
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDashboard = () => {
  const [sportForm, setSportForm] = useState({
    name: "",
    imageUrl: "",
    bio: "",
    instagram: "",
    twitter: "",
    facebook: "",
    highlights: "",
  });

  const [artistForm, setArtistForm] = useState({
    name: "",
    imageUrl: "",
    bio: "",
    instagram: "",
    twitter: "",
    youtube: "",
    music: "",
    highlights: "",
  });

  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState({ type: null, id: null });
  const [athletes, setAthletes] = useState([]);
  const [artists, setArtists] = useState([]);
  const [activeTab, setActiveTab] = useState("athletes");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const athletesSnapshot = await getDocs(collection(db, "athletes"));
      const artistsSnapshot = await getDocs(collection(db, "artists"));
      setAthletes(
        athletesSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      setArtists(
        artistsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSportChange = (e) => {
    const { name, value } = e.target;
    setSportForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleArtistChange = (e) => {
    const { name, value } = e.target;
    setArtistForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSportSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const athleteData = {
        name: sportForm.name,
        image: sportForm.imageUrl,
        bio: sportForm.bio,
        instagram: sportForm.instagram,
        twitter: sportForm.twitter,
        facebook: sportForm.facebook,
        highlights: sportForm.highlights
          ? sportForm.highlights.split(",").map((item) => item.trim())
          : [],
        createdAt: new Date().toISOString(),
      };
      if (editMode.type === "athlete" && editMode.id) {
        await updateDoc(doc(db, "athletes", editMode.id), athleteData);
        setEditMode({ type: null, id: null });
        toast("Athlete updated successfully!");
      } else {
        await addDoc(collection(db, "athletes"), athleteData);
        toast("Athlete added successfully!");
      }
      setSportForm({
        name: "",
        imageUrl: "",
        bio: "",
        instagram: "",
        twitter: "",
        facebook: "",
        highlights: "",
      });
      setShowForm(false);
      fetchData();
    } catch (error) {
      console.error("Error adding/updating athlete:", error);
      toast("Failed to add/update athlete.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleArtistSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const artistData = {
        name: artistForm.name,
        image: artistForm.imageUrl,
        bio: artistForm.bio,
        instagram: artistForm.instagram,
        twitter: artistForm.twitter,
        youtube: artistForm.youtube,
        music: artistForm.music,
        highlights: artistForm.highlights
          ? artistForm.highlights.split(",").map((item) => item.trim())
          : [],
        createdAt: new Date().toISOString(),
      };
      if (editMode.type === "artist" && editMode.id) {
        await updateDoc(doc(db, "artists", editMode.id), artistData);
        setEditMode({ type: null, id: null });
        toast("Artist updated successfully!");
      } else {
        await addDoc(collection(db, "artists"), artistData);
        toast("Artist added successfully!");
      }
      setArtistForm({
        name: "",
        imageUrl: "",
        bio: "",
        instagram: "",
        twitter: "",
        youtube: "",
        music: "",
        highlights: "",
      });
      setShowForm(false);
      fetchData();
    } catch (error) {
      console.error("Error adding/updating artist:", error);
      toast("Failed to add/update artist.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (type, id, data) => {
    setEditMode({ type, id });
    if (type === "athlete") {
      setSportForm({
        name: data.name,
        imageUrl: data.image,
        bio: data.bio,
        instagram: data.instagram,
        twitter: data.twitter,
        facebook: data.facebook,
        highlights: data.highlights ? data.highlights.join(", ") : "",
      });
      setActiveTab("athletes");
    } else {
      setArtistForm({
        name: data.name,
        imageUrl: data.image,
        bio: data.bio,
        instagram: data.instagram,
        twitter: data.twitter,
        youtube: data.youtube,
        music: data.music,
        highlights: data.highlights ? data.highlights.join(", ") : "",
      });
      setActiveTab("artists");
    }
    setShowForm(true);
  };

  const handleDelete = async (type, id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        await deleteDoc(
          doc(db, type === "athlete" ? "athletes" : "artists", id)
        );
        toast(
          `${
            type.charAt(0).toUpperCase() + type.slice(1)
          } deleted successfully!`
        );
        fetchData();
      } catch (error) {
        console.error(`Error deleting ${type}:`, error);
        toast("Failed to delete entry.", "error");
      }
    }
  };

  // Simple toast notification function
  const toast = (message, type = "success") => {
    const toastDiv = document.createElement("div");
    toastDiv.className = `toast-notification toast-${type}`;
    toastDiv.textContent = message;
    document.body.appendChild(toastDiv);

    setTimeout(() => {
      toastDiv.classList.add("show");
      setTimeout(() => {
        toastDiv.classList.remove("show");
        setTimeout(() => document.body.removeChild(toastDiv), 300);
      }, 3000);
    }, 100);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2 style={{ marginTop: "70px" }}>Admin Panel</h2>
        </div>
        <div className="sidebar-menu">
          <div
            className={`sidebar-item ${
              activeTab === "athletes" ? "active" : ""
            }`}
            onClick={() => setActiveTab("athletes")}
          >
            <i className="bi bi-person-badge"></i>
            <span>Athletes</span>
          </div>
          <div
            className={`sidebar-item ${
              activeTab === "artists" ? "active" : ""
            }`}
            onClick={() => setActiveTab("artists")}
          >
            <i className="bi bi-music-note-beamed"></i>
            <span>Artists</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="top-bar">
          <h1>Dashboard</h1>
          <button
            className="add-btn"
            onClick={() => {
              setShowForm(!showForm);
              setEditMode({ type: null, id: null });
              if (activeTab === "athletes") {
                setSportForm({
                  name: "",
                  imageUrl: "",
                  bio: "",
                  instagram: "",
                  twitter: "",
                  facebook: "",
                  highlights: "",
                });
              } else {
                setArtistForm({
                  name: "",
                  imageUrl: "",
                  bio: "",
                  instagram: "",
                  twitter: "",
                  youtube: "",
                  music: "",
                  highlights: "",
                });
              }
            }}
          >
            {showForm
              ? "Cancel"
              : `Add ${activeTab === "athletes" ? "Athlete" : "Artist"}`}
          </button>
        </div>

        {/* Dashboard Stats */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon athletes-icon">
              <i className="bi bi-person-badge"></i>
            </div>
            <div className="stat-info">
              <span className="stat-label">Athletes</span>
              <span className="stat-value">{athletes.length}</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon artists-icon">
              <i className="bi bi-music-note-beamed"></i>
            </div>
            <div className="stat-info">
              <span className="stat-label">Artists</span>
              <span className="stat-value">{artists.length}</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-icon total-icon">
              <i className="bi bi-people"></i>
            </div>
            <div className="stat-info">
              <span className="stat-label">Total Talents</span>
              <span className="stat-value">
                {athletes.length + artists.length}
              </span>
            </div>
          </div>
        </div>

        {/* Forms */}
        {showForm && (
          <div className="form-container">
            {activeTab === "athletes" ? (
              <div className="form-card">
                <h2>
                  {editMode.type === "athlete" && editMode.id
                    ? "Edit Athlete"
                    : "Add Athlete"}
                </h2>
                <form onSubmit={handleSportSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        value={sportForm.name}
                        onChange={handleSportChange}
                        placeholder="Enter athlete name"
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="form-group">
                      <label>Image URL</label>
                      <input
                        type="url"
                        name="imageUrl"
                        value={sportForm.imageUrl}
                        onChange={handleSportChange}
                        placeholder="Paste image URL"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Bio</label>
                    <textarea
                      name="bio"
                      value={sportForm.bio}
                      onChange={handleSportChange}
                      placeholder="Write a short bio"
                      rows="2"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Instagram</label>
                      <input
                        type="text"
                        name="instagram"
                        value={sportForm.instagram}
                        onChange={handleSportChange}
                        placeholder="Instagram handle"
                        disabled={loading}
                      />
                    </div>
                    <div className="form-group">
                      <label>Twitter</label>
                      <input
                        type="text"
                        name="twitter"
                        value={sportForm.twitter}
                        onChange={handleSportChange}
                        placeholder="Twitter handle"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Facebook</label>
                      <input
                        type="text"
                        name="facebook"
                        value={sportForm.facebook}
                        onChange={handleSportChange}
                        placeholder="Facebook profile"
                        disabled={loading}
                      />
                    </div>
                    <div className="form-group">
                      <label>Highlights</label>
                      <input
                        type="text"
                        name="highlights"
                        value={sportForm.highlights}
                        onChange={handleSportChange}
                        placeholder="Highlights (e.g., MVP 2023, 50 goals)"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={loading}
                  >
                    {loading
                      ? "Saving..."
                      : editMode.type === "athlete" && editMode.id
                      ? "Update Athlete"
                      : "Add Athlete"}
                  </button>
                </form>
              </div>
            ) : (
              <div className="form-card">
                <h2>
                  {editMode.type === "artist" && editMode.id
                    ? "Edit Artist"
                    : "Add Artist"}
                </h2>
                <form onSubmit={handleArtistSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        value={artistForm.name}
                        onChange={handleArtistChange}
                        placeholder="Enter artist name"
                        required
                        disabled={loading}
                      />
                    </div>
                    <div className="form-group">
                      <label>Image URL</label>
                      <input
                        type="url"
                        name="imageUrl"
                        value={artistForm.imageUrl}
                        onChange={handleArtistChange}
                        placeholder="Paste image URL"
                        required
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Bio</label>
                    <textarea
                      name="bio"
                      value={artistForm.bio}
                      onChange={handleArtistChange}
                      placeholder="Write a short bio"
                      rows="2"
                      required
                      disabled={loading}
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Instagram</label>
                      <input
                        type="text"
                        name="instagram"
                        value={artistForm.instagram}
                        onChange={handleArtistChange}
                        placeholder="Instagram handle"
                        disabled={loading}
                      />
                    </div>
                    <div className="form-group">
                      <label>Twitter</label>
                      <input
                        type="text"
                        name="twitter"
                        value={artistForm.twitter}
                        onChange={handleArtistChange}
                        placeholder="Twitter handle"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>YouTube</label>
                      <input
                        type="text"
                        name="youtube"
                        value={artistForm.youtube}
                        onChange={handleArtistChange}
                        placeholder="YouTube channel"
                        disabled={loading}
                      />
                    </div>
                    <div className="form-group">
                      <label>Music Link</label>
                      <input
                        type="url"
                        name="music"
                        value={artistForm.music}
                        onChange={handleArtistChange}
                        placeholder="Music link (e.g., Spotify)"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Highlights</label>
                    <input
                      type="text"
                      name="highlights"
                      value={artistForm.highlights}
                      onChange={handleArtistChange}
                      placeholder="Highlights (e.g., Album 2023, Grammy)"
                      disabled={loading}
                    />
                  </div>
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={loading}
                  >
                    {loading
                      ? "Saving..."
                      : editMode.type === "artist" && editMode.id
                      ? "Update Artist"
                      : "Add Artist"}
                  </button>
                </form>
              </div>
            )}
          </div>
        )}

        {/* Data Tables */}
        <div className="table-container">
          {activeTab === "athletes" ? (
            <>
              <h2>Athletes List</h2>
              <div className="table-responsive">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Bio</th>
                      <th>Social Media</th>
                      <th>Highlights</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {athletes.map((athlete) => (
                      <tr key={athlete.id}>
                        <td>
                          <div className="avatar">
                            <img src={athlete.image} alt={athlete.name} />
                          </div>
                        </td>
                        <td>{athlete.name}</td>
                        <td className="bio-cell">{athlete.bio}</td>
                        <td>
                          <div className="social-icons">
                            {athlete.instagram && (
                              <i className="bi bi-instagram"></i>
                            )}
                            {athlete.twitter && (
                              <i className="bi bi-twitter"></i>
                            )}
                            {athlete.facebook && (
                              <i className="bi bi-facebook"></i>
                            )}
                          </div>
                        </td>
                        <td>
                          {athlete.highlights &&
                          athlete.highlights.length > 0 ? (
                            <ul className="highlights-list">
                              {athlete.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                              ))}
                            </ul>
                          ) : (
                            "No highlights"
                          )}
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button
                              className="edit-btn"
                              onClick={() =>
                                handleEdit("athlete", athlete.id, athlete)
                              }
                            >
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button
                              className="delete-btn"
                              onClick={() =>
                                handleDelete("athlete", athlete.id)
                              }
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <>
              <h2>Artists List</h2>
              <div className="table-responsive">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Bio</th>
                      <th>Social Media</th>
                      <th>Music</th>
                      <th>Highlights</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {artists.map((artist) => (
                      <tr key={artist.id}>
                        <td>
                          <div className="avatar">
                            <img src={artist.image} alt={artist.name} />
                          </div>
                        </td>
                        <td>{artist.name}</td>
                        <td className="bio-cell">{artist.bio}</td>
                        <td>
                          <div className="social-icons">
                            {artist.instagram && (
                              <i className="bi bi-instagram"></i>
                            )}
                            {artist.twitter && (
                              <i className="bi bi-twitter"></i>
                            )}
                            {artist.youtube && (
                              <i className="bi bi-youtube"></i>
                            )}
                          </div>
                        </td>
                        <td>
                          {artist.music ? (
                            <a
                              href={artist.music}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="bi bi-music-note"></i> Listen
                            </a>
                          ) : (
                            "No music link"
                          )}
                        </td>
                        <td>
                          {artist.highlights && artist.highlights.length > 0 ? (
                            <ul className="highlights-list">
                              {artist.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                              ))}
                            </ul>
                          ) : (
                            "No highlights"
                          )}
                        </td>
                        <td>
                          <div className="action-buttons">
                            <button
                              className="edit-btn"
                              onClick={() =>
                                handleEdit("artist", artist.id, artist)
                              }
                            >
                              <i className="bi bi-pencil"></i>
                            </button>
                            <button
                              className="delete-btn"
                              onClick={() => handleDelete("artist", artist.id)}
                            >
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>
        {`
          /* Import Bootstrap Icons */
          @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css");

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .dashboard-container {
            display: flex;
            min-height: 100vh;
            background-color: #121212;
            color: #fff;
            font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          }

          /* Sidebar */
          .sidebar {
            width: 250px;
            background-color: #1c1c1c;
            border-right: 1px solid #333;
            display: flex;
            flex-direction: column;
            transition: width 0.3s ease;
          }

          .sidebar-header {
            padding: 20px;
            border-bottom: 1px solid #333;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .sidebar-header h2 {
            color: #ff0055;
            font-size: 1.5rem;
            margin: 0;
            font-weight: 700;
          }

          .sidebar-menu {
            padding: 20px 0;
          }

          .sidebar-item {
            padding: 15px 20px;
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: all 0.3s ease;
            border-left: 4px solid transparent;
          }

          .sidebar-item:hover {
            background-color: #2c2c2c;
          }

          .sidebar-item.active {
            background-color: #2c2c2c;
            border-left: 4px solid #ff0055;
          }

          .sidebar-item i {
            font-size: 1.2rem;
            margin-right: 15px;
            color: #ff0055;
          }

          .sidebar-item span {
            font-size: 1rem;
          }

          /* Main Content */
          .main-content {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
          }

          .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
          }

          .top-bar h1 {
            font-size: 2rem;
            font-weight: 700;
            color: #ff0055;
          }

          .add-btn {
            background-color: #ff0055;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
            transition: background-color 0.3s ease;
          }

          .add-btn:hover {
            background-color: #e6004c;
          }

          /* Stats Cards */
          .stats-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
          }

          .stat-card {
            background-color: #1c1c1c;
            border-radius: 10px;
            padding: 20px;
            display: flex;
            align-items: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }

          .stat-card:hover {
            transform: translateY(-5px);
          }

          .stat-icon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
          }

          .stat-icon i {
            font-size: 1.8rem;
            color: white;
          }

          .athletes-icon {
            background-color: #ff0055;
          }

          .artists-icon {
            background-color: #00c2ff;
          }

          .total-icon {
            background-color: #8a2be2;
          }

          .stat-info {
            display: flex;
            flex-direction: column;
          }

          .stat-label {
            font-size: 0.9rem;
            color: #aaa;
            margin-bottom: 5px;
          }

          .stat-value {
            font-size: 1.8rem;
            font-weight: 700;
          }

          /* Form Styles */
          .form-container {
            margin-bottom: 30px;
          }

          .form-card {
            background-color: #1c1c1c;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .form-card h2 {
            color: #ff0055;
            margin-bottom: 20px;
            font-size: 1.5rem;
            font-weight: 600;
          }

          .form-row {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 20px;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-group label {
            display: block;
            margin-bottom: 8px;
            font-size: 0.9rem;
            color: #ddd;
            font-weight: 500;
          }

          .form-group input,
          .form-group textarea {
            width: 100%;
            padding: 12px;
            background-color: #2c2c2c;
            border: 1px solid #444;
            border-radius: 5px;
            color: white;
            font-size: 0.9rem;
            transition: border-color 0.3s ease;
          }

          .form-group input:focus,
          .form-group textarea:focus {
            border-color: #ff0055;
            outline: none;
          }

          .submit-btn {
            background-color: #ff0055;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: 600;
            width: 100%;
            transition: background-color 0.3s ease;
            margin-top: 10px;
          }

          .submit-btn:hover {
            background-color: #e6004c;
          }

          /* Table Styles */
          .table-container {
            background-color: #1c1c1c;
            border-radius: 10px;
            padding: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .table-container h2 {
            color: #ff0055;
            margin-bottom: 20px;
            font-size: 1.5rem;
            font-weight: 600;
          }

          .table-responsive {
            overflow-x: auto;
          }

          .data-table {
            width: 100%;
            border-collapse: collapse;
            background-color: #1c1c1c;
          }

          .data-table th,
          .data-table td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid #333;
          }

          .data-table th {
            background-color: #2c2c2c;
            color: #ff0055;
            font-weight: 600;
          }

          .data-table tr:hover {
            background-color: #2c2c2c;
          }

          .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
          }

          .avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .bio-cell {
            max-width: 200px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .social-icons {
            display: flex;
            gap: 10px;
          }

          .social-icons i {
            font-size: 1.2rem;
            color: #ff0055;
          }

          .highlights-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .highlights-list li {
            margin-bottom: 5px;
            font-size: 0.9rem;
          }

          .action-buttons {
            display: flex;
            gap: 10px;
          }

          .edit-btn,
          .delete-btn {
            border: none;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            background-color: #ff0055;
            color: white;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .edit-btn:hover,
          .delete-btn:hover {
            background-color: #e6004c;
          }
        `}
      </style>
    </div>
  );
};
export default AdminDashboard;

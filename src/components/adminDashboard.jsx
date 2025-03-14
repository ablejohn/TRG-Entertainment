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
import "bootstrap/dist/css/bootstrap.min.css"; // Assuming Bootstrap is available

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
        alert("Athlete updated successfully!");
      } else {
        await addDoc(collection(db, "athletes"), athleteData);
        alert("Athlete added successfully!");
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
      fetchData();
    } catch (error) {
      console.error("Error adding/updating athlete:", error);
      alert("Failed to add/update athlete.");
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
        alert("Artist updated successfully!");
      } else {
        await addDoc(collection(db, "artists"), artistData);
        alert("Artist added successfully!");
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
      fetchData();
    } catch (error) {
      console.error("Error adding/updating artist:", error);
      alert("Failed to add/update artist.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (type, id, data) => {
    setEditMode({ type, id });
    if (type === "athlete") {
      setSportForm(data);
    } else {
      setArtistForm(data);
    }
  };

  const handleDelete = async (type, id) => {
    if (window.confirm("Are you sure you want to delete this entry?")) {
      try {
        await deleteDoc(
          doc(db, type === "athlete" ? "athletes" : "artists", id)
        );
        alert(
          `${
            type.charAt(0).toUpperCase() + type.slice(1)
          } deleted successfully!`
        );
        fetchData();
      } catch (error) {
        console.error(`Error deleting ${type}:`, error);
        alert("Failed to delete entry.");
      }
    }
  };

  return (
    <div className="min-vh-100 bg-dark text-white py-5">
      <div className="container">
        <h1
          className="text-center mb-5 fw-bold"
          style={{ color: "#ff0055", marginTop: "80px" }}
        >
          Admin Dashboard
        </h1>
        <div className="row g-4">
          {/* Athlete Form */}
          <div className="col-md-6">
            <div className="card bg-dark border-warning shadow-lg p-4">
              <h2 className="h4 mb-4 text-warning text-center">
                {editMode.type === "athlete" && editMode.id
                  ? "Edit Athlete"
                  : "Add Athlete"}
              </h2>
              <form onSubmit={handleSportSubmit}>
                <div className="mb-3">
                  <label className="form-label text-warning">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={sportForm.name}
                    onChange={handleSportChange}
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Enter athlete name"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-warning">Image URL</label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={sportForm.imageUrl}
                    onChange={handleSportChange}
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Paste image URL"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-warning">Bio</label>
                  <textarea
                    name="bio"
                    value={sportForm.bio}
                    onChange={handleSportChange}
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Write a short bio"
                    rows="2"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <label className="form-label text-warning">Instagram</label>
                    <input
                      type="text"
                      name="instagram"
                      value={sportForm.instagram}
                      onChange={handleSportChange}
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Instagram handle"
                      disabled={loading}
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label text-warning">Twitter</label>
                    <input
                      type="text"
                      name="twitter"
                      value={sportForm.twitter}
                      onChange={handleSportChange}
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Twitter handle"
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label text-warning">Facebook</label>
                  <input
                    type="text"
                    name="facebook"
                    value={sportForm.facebook}
                    onChange={handleSportChange}
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Facebook profile"
                    disabled={loading}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-warning">Highlights</label>
                  <input
                    type="text"
                    name="highlights"
                    value={sportForm.highlights}
                    onChange={handleSportChange}
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Highlights (e.g., MVP 2023, 50 goals)"
                    disabled={loading}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-warning w-100 fw-bold"
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
            {/* Athlete List */}
            <div className="mt-4">
              <h3 className="h5 text-warning mb-3">Existing Athletes</h3>
              {athletes.map((athlete) => (
                <div
                  key={athlete.id}
                  className="card bg-dark border-secondary mb-2 p-2 d-flex justify-content-between align-items-center"
                >
                  <span>{athlete.name}</span>
                  <div>
                    <button
                      className="btn btn-info btn-sm me-2"
                      onClick={() => handleEdit("athlete", athlete.id, athlete)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete("athlete", athlete.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Artist Form */}
          <div className="col-md-6">
            <div className="card bg-dark border-warning shadow-lg p-4">
              <h2 className="h4 mb-4 text-warning text-center">
                {editMode.type === "artist" && editMode.id
                  ? "Edit Artist"
                  : "Add Artist"}
              </h2>
              <form onSubmit={handleArtistSubmit}>
                <div className="mb-3">
                  <label className="form-label text-warning">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={artistForm.name}
                    onChange={handleArtistChange}
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Enter artist name"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-warning">Image URL</label>
                  <input
                    type="url"
                    name="imageUrl"
                    value={artistForm.imageUrl}
                    onChange={handleArtistChange}
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Paste image URL"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-warning">Bio</label>
                  <textarea
                    name="bio"
                    value={artistForm.bio}
                    onChange={handleArtistChange}
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Write a short bio"
                    rows="2"
                    required
                    disabled={loading}
                  />
                </div>
                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <label className="form-label text-warning">Instagram</label>
                    <input
                      type="text"
                      name="instagram"
                      value={artistForm.instagram}
                      onChange={handleArtistChange}
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Instagram handle"
                      disabled={loading}
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label text-warning">Twitter</label>
                    <input
                      type="text"
                      name="twitter"
                      value={artistForm.twitter}
                      onChange={handleArtistChange}
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Twitter handle"
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="row g-2 mb-3">
                  <div className="col-6">
                    <label className="form-label text-warning">YouTube</label>
                    <input
                      type="text"
                      name="youtube"
                      value={artistForm.youtube}
                      onChange={handleArtistChange}
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="YouTube channel"
                      disabled={loading}
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label text-warning">
                      Music Link
                    </label>
                    <input
                      type="url"
                      name="music"
                      value={artistForm.music}
                      onChange={handleArtistChange}
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Music link (e.g., Spotify)"
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label text-warning">Highlights</label>
                  <input
                    type="text"
                    name="highlights"
                    value={artistForm.highlights}
                    onChange={handleArtistChange}
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Highlights (e.g., Album 2023, Grammy)"
                    disabled={loading}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-warning w-100 fw-bold"
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
            {/* Artist List */}
            <div className="mt-4">
              <h3 className="h5 text-warning mb-3">Existing Artists</h3>
              {artists.map((artist) => (
                <div
                  key={artist.id}
                  className="card bg-dark border-secondary mb-2 p-2 d-flex justify-content-between align-items-center"
                >
                  <span>{artist.name}</span>
                  <div>
                    <button
                      className="btn btn-info btn-sm me-2"
                      onClick={() => handleEdit("artist", artist.id, artist)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete("artist", artist.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .card {
          border-radius: 15px;
          transition: transform 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .form-control {
          font-size: 0.9rem;
          padding: 0.75rem;
          border-radius: 8px;
        }
        .form-control:focus {
          border-color: #ff0055;
          box-shadow: 0 0 0 0.2rem rgba(255, 0, 85, 0.25);
        }
        .btn-warning {
          background-color: #ff0055;
          border-color: #ff0055;
          transition: background-color 0.3s ease;
        }
        .btn-warning:hover {
          background-color: #e6004c;
          border-color: #e6004c;
        }
        .form-label {
          font-size: 0.9rem;
          font-weight: 500;
        }
        .btn-info {
          background-color: #17a2b8;
          border-color: #17a2b8;
        }
        .btn-info:hover {
          background-color: #138496;
          border-color: #138496;
        }
        .btn-danger {
          background-color: #dc3545;
          border-color: #dc3545;
        }
        .btn-danger:hover {
          background-color: #c82333;
          border-color: #c82333;
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;

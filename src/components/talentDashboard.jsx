import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Upload,
  Save,
  User,
  Edit,
  Trash2,
  Search,
  LogOut,
  Music,
  Video,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Filter,
  Plus,
} from "lucide-react";

const TalentAdminDashboard = () => {
  const navigate = useNavigate();
  const [talents, setTalents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [newTalent, setNewTalent] = useState({
    name: "",
    bio: "",
    type: "artist", // Default type (artist or model)
    instagram: "",
    twitter: "",
    facebook: "",
    youtube: "",
    music: "",
    portfolio: ["", "", ""], // For images, videos, or work samples
  });

  useEffect(() => {
    // Simulate fetching talent data
    setTimeout(() => {
      // In production, you would fetch from your API
      // This is just mock data based on your artistsData
      const mockData = [
        {
          id: 1,
          name: "Samurai Chi",
          image: "/path/to/image",
          type: "artist",
          bio: "Samurai Chi Born in Lagos Nigeria chigozie Samuel is an afro fusion singer and songwriter...",
          instagram: "samiwize15",
          twitter: "samiwize15",
        },
        {
          id: 2,
          name: "Spvce Boii",
          image: "/path/to/image",
          type: "artist",
          bio: "Spvceboii is an emerging recording artist and producer...",
          instagram: "spvceboiitrg",
          twitter: "spvceboiitrg",
          music: "https://on.soundcloud.com/bzWca79Bovs2og8A6",
        },
        {
          id: 5,
          name: "Remi Chester Alade",
          image: "/path/to/image",
          type: "model",
          bio: "Remi Chester Alade is a six-footer who is signed to Gadal Model Management...",
          instagram: "remi_chester_alade",
          twitter: "remi_chester",
          facebook: "remichesteralade",
        },
      ];
      setTalents(mockData);
      setLoading(false);
    }, 1000);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTalent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePortfolioChange = (index, value) => {
    const updatedPortfolio = [...newTalent.portfolio];
    updatedPortfolio[index] = value;
    setNewTalent((prev) => ({
      ...prev,
      portfolio: updatedPortfolio,
    }));
  };

  const addPortfolioField = () => {
    setNewTalent((prev) => ({
      ...prev,
      portfolio: [...prev.portfolio, ""],
    }));
  };

  const removePortfolioField = (index) => {
    const updatedPortfolio = [...newTalent.portfolio];
    updatedPortfolio.splice(index, 1);
    setNewTalent((prev) => ({
      ...prev,
      portfolio: updatedPortfolio,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real application, you would upload the image to a server/CDN
    // and get back a URL to store in your database
    const newId = talents.length + 1;

    if (isEditing) {
      // Update existing talent
      const updatedTalents = talents.map((talent) =>
        talent.id === editId
          ? {
              ...newTalent,
              id: editId,
              image: imagePreview || talent.image,
            }
          : talent
      );
      setTalents(updatedTalents);
      setIsEditing(false);
      setEditId(null);
    } else {
      // Add new talent
      const talentToAdd = {
        ...newTalent,
        id: newId,
        image: imagePreview || "/path/to/default-image.jpg",
      };
      setTalents([...talents, talentToAdd]);
    }

    // Reset form
    setNewTalent({
      name: "",
      bio: "",
      type: "artist",
      instagram: "",
      twitter: "",
      facebook: "",
      youtube: "",
      music: "",
      portfolio: ["", "", ""],
    });
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleEdit = (talent) => {
    setIsEditing(true);
    setEditId(talent.id);
    setNewTalent({
      name: talent.name,
      bio: talent.bio,
      type: talent.type || "artist",
      instagram: talent.instagram || "",
      twitter: talent.twitter || "",
      facebook: talent.facebook || "",
      youtube: talent.youtube || "",
      music: talent.music || "",
      portfolio: talent.portfolio || ["", "", ""],
    });
    setImagePreview(talent.image);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this talent?")) {
      setTalents(talents.filter((talent) => talent.id !== id));
    }
  };

  // Filter talents based on search term and type filter
  const filteredTalents = talents.filter((talent) => {
    const matchesSearch = talent.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || talent.type === filterType;
    return matchesSearch && matchesFilter;
  });

  // Get social media icon based on platform
  const getSocialIcon = (platform) => {
    switch (platform) {
      case "instagram":
        return <Instagram size={16} />;
      case "twitter":
        return <Twitter size={16} />;
      case "facebook":
        return <Facebook size={16} />;
      case "youtube":
        return <Youtube size={16} />;
      case "music":
        return <Music size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-vh-100 bg-dark">
      {/* Sidebar */}
      <div className="d-flex">
        <div
          className="bg-black text-white"
          style={{ width: "250px", minHeight: "100vh", position: "fixed" }}
        >
          <div className="d-flex flex-column h-100">
            <div className="p-4 border-bottom border-secondary">
              <h4 className="d-flex align-items-center mb-0">
                <div
                  className="rounded-circle p-2 me-3"
                  style={{ background: "#ff0055" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2v20M2 12h20" />
                  </svg>
                </div>
                TALENT ADMIN
              </h4>
            </div>

            <div className="p-4">
              <div className="nav flex-column">
                <Link
                  to="/admin/talent"
                  className="nav-link active text-warning mb-3 d-flex align-items-center"
                >
                  <User size={18} className="me-2" />
                  Talent Management
                </Link>
                <Link
                  to="/admin"
                  className="nav-link text-white-50 mb-3 d-flex align-items-center"
                >
                  <User size={18} className="me-2" />
                  Sports Clients
                </Link>
                <Link
                  to="/admin/settings"
                  className="nav-link text-white-50 mb-3 d-flex align-items-center"
                >
                  <Edit size={18} className="me-2" />
                  Settings
                </Link>
              </div>
            </div>

            <div className="mt-auto p-4 border-top border-secondary">
              <Link
                to="/"
                className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center"
              >
                <LogOut size={18} className="me-2" />
                Exit Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1" style={{ marginLeft: "250px" }}>
          <div className="container-fluid py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="text-white">Talent Dashboard</h2>
              <div className="d-flex align-items-center">
                <div className="dropdown me-2">
                  <button
                    className="btn btn-dark border-secondary dropdown-toggle d-flex align-items-center"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Filter size={18} className="me-2" />
                    {filterType === "all"
                      ? "All Talent"
                      : filterType === "artist"
                      ? "Artists"
                      : "Models"}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => setFilterType("all")}
                      >
                        All Talent
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => setFilterType("artist")}
                      >
                        Artists
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => setFilterType("model")}
                      >
                        Models
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Search talent..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search
                    size={18}
                    className="position-absolute text-secondary"
                    style={{ right: "10px", top: "10px" }}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              {/* Talent Form */}
              <div className="col-lg-5 mb-4">
                <div className="card bg-black border-0 shadow text-white">
                  <div className="card-header bg-black border-0">
                    <h5 className="mb-0">
                      {isEditing ? "Edit Talent" : "Add New Talent"}
                    </h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      {/* Image Upload */}
                      <div className="mb-4 text-center">
                        <div
                          className="position-relative d-inline-block mb-3"
                          style={{
                            width: "150px",
                            height: "150px",
                            backgroundColor: "#2a2a2a",
                            borderRadius: "50%",
                          }}
                        >
                          {imagePreview ? (
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="img-fluid rounded-circle"
                              style={{
                                width: "150px",
                                height: "150px",
                                objectFit: "cover",
                              }}
                            />
                          ) : (
                            <div className="d-flex justify-content-center align-items-center h-100 rounded-circle border border-warning">
                              <Upload size={40} className="text-warning" />
                            </div>
                          )}

                          <label
                            htmlFor="imageUpload"
                            className="position-absolute bottom-0 end-0 bg-warning text-dark rounded-circle p-2 m-2 cursor-pointer"
                            style={{ cursor: "pointer" }}
                          >
                            <Upload size={18} />
                          </label>
                          <input
                            type="file"
                            id="imageUpload"
                            className="d-none"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </div>
                      </div>

                      {/* Talent Type Radio Buttons */}
                      <div className="mb-3">
                        <label className="form-label">Talent Type</label>
                        <div className="d-flex">
                          <div className="form-check me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="type"
                              id="artistType"
                              value="artist"
                              checked={newTalent.type === "artist"}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="artistType"
                            >
                              Artist
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="type"
                              id="modelType"
                              value="model"
                              checked={newTalent.type === "model"}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="modelType"
                            >
                              Model
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Talent Details */}
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control bg-dark text-white border-secondary"
                          id="name"
                          name="name"
                          value={newTalent.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="bio" className="form-label">
                          Biography
                        </label>
                        <textarea
                          className="form-control bg-dark text-white border-secondary"
                          id="bio"
                          name="bio"
                          rows="4"
                          value={newTalent.bio}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>

                      {/* Social Media */}
                      <div className="mb-3">
                        <label className="form-label mb-2">Social Media</label>
                        <div className="row g-2">
                          <div className="col-md-6">
                            <div className="input-group mb-2">
                              <span className="input-group-text bg-dark border-secondary">
                                <Instagram size={16} className="text-pink" />
                              </span>
                              <input
                                type="text"
                                className="form-control bg-dark text-white border-secondary"
                                placeholder="Instagram handle"
                                name="instagram"
                                value={newTalent.instagram}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-group mb-2">
                              <span className="input-group-text bg-dark border-secondary">
                                <Twitter size={16} className="text-info" />
                              </span>
                              <input
                                type="text"
                                className="form-control bg-dark text-white border-secondary"
                                placeholder="Twitter handle"
                                name="twitter"
                                value={newTalent.twitter}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-group mb-2">
                              <span className="input-group-text bg-dark border-secondary">
                                <Facebook size={16} className="text-primary" />
                              </span>
                              <input
                                type="text"
                                className="form-control bg-dark text-white border-secondary"
                                placeholder="Facebook handle"
                                name="facebook"
                                value={newTalent.facebook}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-group mb-2">
                              <span className="input-group-text bg-dark border-secondary">
                                <Youtube size={16} className="text-danger" />
                              </span>
                              <input
                                type="text"
                                className="form-control bg-dark text-white border-secondary"
                                placeholder="YouTube handle"
                                name="youtube"
                                value={newTalent.youtube}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Music Link (for artists) */}
                      {newTalent.type === "artist" && (
                        <div className="mb-3">
                          <label htmlFor="music" className="form-label">
                            Music Link
                          </label>
                          <div className="input-group">
                            <span className="input-group-text bg-dark border-secondary">
                              <Music size={16} className="text-success" />
                            </span>
                            <input
                              type="text"
                              className="form-control bg-dark text-white border-secondary"
                              id="music"
                              name="music"
                              placeholder="SoundCloud, Spotify, or other music link"
                              value={newTalent.music}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      )}

                      {/* Portfolio Links */}
                      <div className="mb-4">
                        <label className="form-label d-flex justify-content-between align-items-center">
                          Portfolio Links
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-warning"
                            onClick={addPortfolioField}
                          >
                            <Plus size={16} className="me-1" />
                            Add More
                          </button>
                        </label>
                        <small className="text-secondary d-block mb-2">
                          {newTalent.type === "model"
                            ? "Add photo shoot links, portfolio images, etc."
                            : "Add videos, work samples, etc."}
                        </small>
                        {newTalent.portfolio.map((item, index) => (
                          <div key={index} className="input-group mb-2">
                            <input
                              type="text"
                              className="form-control bg-dark text-white border-secondary"
                              value={item}
                              onChange={(e) =>
                                handlePortfolioChange(index, e.target.value)
                              }
                              placeholder={`Portfolio item ${index + 1}`}
                            />
                            {newTalent.portfolio.length > 1 && (
                              <button
                                type="button"
                                className="btn btn-outline-danger"
                                onClick={() => removePortfolioField(index)}
                              >
                                <Trash2 size={16} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>

                      <button
                        type="submit"
                        className="btn btn-warning w-100 d-flex align-items-center justify-content-center"
                      >
                        <Save size={18} className="me-2" />
                        {isEditing ? "Update Talent" : "Save New Talent"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Talents List */}
              <div className="col-lg-7">
                <div className="card bg-black border-0 shadow text-white">
                  <div className="card-header bg-black border-0 d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Talent Roster</h5>
                    <div>
                      <span className="badge bg-primary me-2">
                        {talents.filter((t) => t.type === "artist").length}{" "}
                        Artists
                      </span>
                      <span className="badge bg-info">
                        {talents.filter((t) => t.type === "model").length}{" "}
                        Models
                      </span>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    {loading ? (
                      <div className="text-center p-5">
                        <div
                          className="spinner-border text-warning"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : filteredTalents.length === 0 ? (
                      <div className="text-center p-5 text-secondary">
                        <div className="mb-3">
                          <Search size={40} className="text-warning" />
                        </div>
                        <p>No talents found matching your criteria</p>
                      </div>
                    ) : (
                      <div className="table-responsive">
                        <table className="table table-dark table-hover mb-0">
                          <thead>
                            <tr>
                              <th scope="col" className="border-0">
                                Image
                              </th>
                              <th scope="col" className="border-0">
                                Name
                              </th>
                              <th
                                scope="col"
                                className="border-0 d-none d-md-table-cell"
                              >
                                Type
                              </th>
                              <th
                                scope="col"
                                className="border-0 d-none d-md-table-cell"
                              >
                                Socials
                              </th>
                              <th scope="col" className="border-0">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredTalents.map((talent) => (
                              <tr key={talent.id}>
                                <td
                                  className="align-middle"
                                  style={{ width: "60px" }}
                                >
                                  <img
                                    src={talent.image}
                                    alt={talent.name}
                                    className="rounded-circle"
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      objectFit: "cover",
                                    }}
                                  />
                                </td>
                                <td className="align-middle">
                                  <div className="fw-bold">{talent.name}</div>
                                  <div
                                    className="text-secondary small text-truncate"
                                    style={{ maxWidth: "250px" }}
                                  >
                                    {talent.bio.substring(0, 60)}...
                                  </div>
                                </td>
                                <td className="align-middle d-none d-md-table-cell">
                                  <span
                                    className={`badge ${
                                      talent.type === "artist"
                                        ? "bg-primary"
                                        : "bg-info"
                                    }`}
                                  >
                                    {talent.type === "artist"
                                      ? "Artist"
                                      : "Model"}
                                  </span>
                                </td>
                                <td className="align-middle d-none d-md-table-cell">
                                  <div className="d-flex gap-2">
                                    {talent.instagram && (
                                      <span className="badge bg-dark border border-secondary p-1">
                                        <Instagram size={14} />
                                      </span>
                                    )}
                                    {talent.twitter && (
                                      <span className="badge bg-dark border border-secondary p-1">
                                        <Twitter size={14} />
                                      </span>
                                    )}
                                    {talent.facebook && (
                                      <span className="badge bg-dark border border-secondary p-1">
                                        <Facebook size={14} />
                                      </span>
                                    )}
                                    {talent.youtube && (
                                      <span className="badge bg-dark border border-secondary p-1">
                                        <Youtube size={14} />
                                      </span>
                                    )}
                                    {talent.music && (
                                      <span className="badge bg-dark border border-secondary p-1">
                                        <Music size={14} />
                                      </span>
                                    )}
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex gap-2">
                                    <button
                                      className="btn btn-sm btn-outline-primary"
                                      onClick={() => handleEdit(talent)}
                                    >
                                      <Edit size={16} />
                                    </button>
                                    <button
                                      className="btn btn-sm btn-outline-danger"
                                      onClick={() => handleDelete(talent.id)}
                                    >
                                      <Trash2 size={16} />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentAdminDashboard;

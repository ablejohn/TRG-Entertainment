import React, { useState, useEffect } from "react";
import {
  Upload,
  Pencil,
  Trash2,
  Plus,
  X,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Music,
} from "lucide-react";

const TalentAdminDashboard = () => {
  const [talents, setTalents] = useState([]);
  const [editingTalent, setEditingTalent] = useState(null);
  const [newTalent, setNewTalent] = useState({
    name: "",
    bio: "",
    bgColor: "#00204C",
    image: null,
    instagram: "",
    twitter: "",
    facebook: "",
    youtube: "",
    music: "",
  });

  useEffect(() => {
    // In a real app, fetch from backend
    const loadTalents = async () => {
      // Using your sample data
      setTalents([
        {
          id: 1,
          name: "Samurai Chi",
          bio: "Samurai Chi Born in Lagos Nigeria chigozie Samuel is an afro fusion singer and songwriter...",
          bgColor: "#FF6229",
          imageUrl: "/api/placeholder/350/450",
          instagram: "@samiwize15",
          twitter: "@samiwize15",
        },
      ]);
    };
    loadTalents();
  }, []);

  const handleImageUpload = (e, isEditing = false) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (isEditing) {
          setEditingTalent((prev) => ({ ...prev, imageUrl: reader.result }));
        } else {
          setNewTalent((prev) => ({ ...prev, image: reader.result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddTalent = () => {
    if (newTalent.name && newTalent.image) {
      setTalents((prev) => [
        ...prev,
        {
          id: Date.now(),
          ...newTalent,
          imageUrl: newTalent.image,
        },
      ]);
      setNewTalent({
        name: "",
        bio: "",
        bgColor: "#00204C",
        image: null,
        instagram: "",
        twitter: "",
        facebook: "",
        youtube: "",
        music: "",
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 bg-dark text-white min-vh-100 p-3">
          <h4 className="mb-4">Admin Panel</h4>
          <div className="list-group list-group-flush">
            <button className="list-group-item list-group-item-action active bg-primary">
              Talent Management
            </button>
            <button className="list-group-item list-group-item-action text-white bg-dark">
              Dashboard
            </button>
            <button className="list-group-item list-group-item-action text-white bg-dark">
              Settings
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-10 bg-light">
          <div className="p-4">
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Add New Talent</h5>
                <button
                  className="btn btn-light btn-sm"
                  data-bs-toggle="collapse"
                  data-bs-target="#addTalentForm"
                >
                  <Plus size={18} />
                </button>
              </div>
              <div className="card-body collapse" id="addTalentForm">
                <div className="row g-3">
                  {/* Basic Info */}
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Talent Name"
                      value={newTalent.name}
                      onChange={(e) =>
                        setNewTalent((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                    <textarea
                      className="form-control mb-3"
                      rows="4"
                      placeholder="Artist Bio"
                      value={newTalent.bio}
                      onChange={(e) =>
                        setNewTalent((prev) => ({
                          ...prev,
                          bio: e.target.value,
                        }))
                      }
                    />
                    <div className="d-flex gap-3 mb-3">
                      <input
                        type="color"
                        className="form-control form-control-color"
                        value={newTalent.bgColor}
                        onChange={(e) =>
                          setNewTalent((prev) => ({
                            ...prev,
                            bgColor: e.target.value,
                          }))
                        }
                        title="Choose background color"
                      />
                      <input
                        type="file"
                        className="d-none"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e)}
                        id="new-talent-image"
                      />
                      <button
                        className="btn btn-secondary flex-grow-1"
                        onClick={() =>
                          document.getElementById("new-talent-image").click()
                        }
                      >
                        <Upload size={18} className="me-2" />
                        Upload Image
                      </button>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="col-md-6">
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <Instagram size={18} />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Instagram Handle"
                        value={newTalent.instagram}
                        onChange={(e) =>
                          setNewTalent((prev) => ({
                            ...prev,
                            instagram: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <Twitter size={18} />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Twitter Handle"
                        value={newTalent.twitter}
                        onChange={(e) =>
                          setNewTalent((prev) => ({
                            ...prev,
                            twitter: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <Facebook size={18} />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Facebook Handle"
                        value={newTalent.facebook}
                        onChange={(e) =>
                          setNewTalent((prev) => ({
                            ...prev,
                            facebook: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <Youtube size={18} />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="YouTube Channel"
                        value={newTalent.youtube}
                        onChange={(e) =>
                          setNewTalent((prev) => ({
                            ...prev,
                            youtube: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <Music size={18} />
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Music Link"
                        value={newTalent.music}
                        onChange={(e) =>
                          setNewTalent((prev) => ({
                            ...prev,
                            music: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100"
                      onClick={handleAddTalent}
                    >
                      <Plus size={18} className="me-2" />
                      Add New Talent
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Talents Grid */}
            <div className="row g-4">
              {talents.map((talent) => (
                <div key={talent.id} className="col-md-6 col-lg-4">
                  <div className="card shadow-sm h-100">
                    <div className="position-relative">
                      <img
                        src={talent.imageUrl}
                        alt={talent.name}
                        className="card-img-top"
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                      <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                          backgroundColor: talent.bgColor,
                          opacity: 0.2,
                        }}
                      />
                      <div className="position-absolute top-0 end-0 p-2">
                        <div className="btn-group">
                          <button
                            className="btn btn-light btn-sm"
                            onClick={() => setEditingTalent(talent)}
                          >
                            <Pencil size={16} />
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDeleteTalent(talent.id)}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{talent.name}</h5>
                      <p className="card-text small text-muted">
                        {talent.bio?.substring(0, 100)}...
                      </p>
                      <div className="d-flex gap-2 mt-2">
                        {talent.instagram && <Instagram size={18} />}
                        {talent.twitter && <Twitter size={18} />}
                        {talent.facebook && <Facebook size={18} />}
                        {talent.youtube && <Youtube size={18} />}
                        {talent.music && <Music size={18} />}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentAdminDashboard;

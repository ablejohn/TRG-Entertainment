import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Upload, Save, User, Edit, Trash2, Search, LogOut } from "lucide-react";

const AdminDashboard = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newClient, setNewClient] = useState({
    name: "",
    bio: "",
    instagram: "",
    twitter: "",
    facebook: "",
    highlights: ["", "", ""],
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Simulate fetching clients data
    setTimeout(() => {
      // Use your sportsData here in production
      const mockData = Object.values({
        1: {
          id: 1,
          name: "Abdul Mumin",
          image: "/path/to/image", // Would be actual path in production
          bio: "Ghanaian professional footballer who plays as a centre-back for La Liga club Rayo Vallecano.",
          instagram: "abdul_mumin",
          twitter: "AbdulMumin_16",
          facebook: "AbdulMuminFootballer",
          highlights: [
            "Ghana international defender",
            "La Liga experience with Rayo Vallecano",
            "Former FC Nordsjælland player",
          ],
        },
        2: {
          id: 2,
          name: "Christopher Wooh",
          image: "/path/to/image", // Would be actual path in production
          bio: "Professional footballer who plays as a defender for Ligue 1 club Rennes.",
          instagram: "chris_wooh",
          twitter: "Christopher_Wooh",
          facebook: "ChristopherWoohOfficial",
          highlights: [
            "Cameroon international defender",
            "Ligue 1 experience with Rennes",
            "Former RC Lens player",
          ],
        },
      });
      setClients(mockData);
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
    setNewClient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleHighlightChange = (index, value) => {
    const updatedHighlights = [...newClient.highlights];
    updatedHighlights[index] = value;
    setNewClient((prev) => ({
      ...prev,
      highlights: updatedHighlights,
    }));
  };

  const addHighlightField = () => {
    setNewClient((prev) => ({
      ...prev,
      highlights: [...prev.highlights, ""],
    }));
  };

  const removeHighlightField = (index) => {
    const updatedHighlights = [...newClient.highlights];
    updatedHighlights.splice(index, 1);
    setNewClient((prev) => ({
      ...prev,
      highlights: updatedHighlights,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // In a real application, you would upload the image to a server/CDN
    // and get back a URL to store in your database
    const newId = clients.length + 1;

    if (isEditing) {
      // Update existing client
      const updatedClients = clients.map((client) =>
        client.id === editId
          ? {
              ...newClient,
              id: editId,
              image: imagePreview || client.image,
            }
          : client
      );
      setClients(updatedClients);
      setIsEditing(false);
      setEditId(null);
    } else {
      // Add new client
      const clientToAdd = {
        ...newClient,
        id: newId,
        image: imagePreview || "/path/to/default-image.jpg",
      };
      setClients([...clients, clientToAdd]);
    }

    // Reset form
    setNewClient({
      name: "",
      bio: "",
      instagram: "",
      twitter: "",
      facebook: "",
      highlights: ["", "", ""],
    });
    setSelectedImage(null);
    setImagePreview(null);
  };

  const handleEdit = (client) => {
    setIsEditing(true);
    setEditId(client.id);
    setNewClient({
      name: client.name,
      bio: client.bio,
      instagram: client.instagram || "",
      twitter: client.twitter || "",
      facebook: client.facebook || "",
      highlights: client.highlights || ["", "", ""],
    });
    setImagePreview(client.image);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      setClients(clients.filter((client) => client.id !== id));
    }
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                DASHBOARD
              </h4>
            </div>

            <div className="p-4">
              <div className="nav flex-column">
                <Link
                  to="/admin"
                  className="nav-link active text-warning mb-3 d-flex align-items-center"
                >
                  <User size={18} className="me-2" />
                  Clients
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
              <h2 className="text-white">Client Management</h2>
              <div className="d-flex align-items-center">
                <div className="position-relative me-3">
                  <input
                    type="text"
                    className="form-control bg-dark text-white border-secondary"
                    placeholder="Search clients..."
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
              {/* Client Form */}
              <div className="col-lg-5 mb-4">
                <div className="card bg-black border-0 shadow text-white">
                  <div className="card-header bg-black border-0">
                    <h5 className="mb-0">
                      {isEditing ? "Edit Client" : "Add New Client"}
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

                      {/* Client Details */}
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control bg-dark text-white border-secondary"
                          id="name"
                          name="name"
                          value={newClient.name}
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
                          value={newClient.bio}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>

                      {/* Social Media */}
                      <div className="row mb-3">
                        <div className="col-md-4">
                          <label htmlFor="instagram" className="form-label">
                            Instagram
                          </label>
                          <input
                            type="text"
                            className="form-control bg-dark text-white border-secondary"
                            id="instagram"
                            name="instagram"
                            value={newClient.instagram}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="twitter" className="form-label">
                            Twitter
                          </label>
                          <input
                            type="text"
                            className="form-control bg-dark text-white border-secondary"
                            id="twitter"
                            name="twitter"
                            value={newClient.twitter}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="facebook" className="form-label">
                            Facebook
                          </label>
                          <input
                            type="text"
                            className="form-control bg-dark text-white border-secondary"
                            id="facebook"
                            name="facebook"
                            value={newClient.facebook}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-4">
                        <label className="form-label d-flex justify-content-between align-items-center">
                          Highlights
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-warning"
                            onClick={addHighlightField}
                          >
                            Add More
                          </button>
                        </label>
                        {newClient.highlights.map((highlight, index) => (
                          <div key={index} className="input-group mb-2">
                            <input
                              type="text"
                              className="form-control bg-dark text-white border-secondary"
                              value={highlight}
                              onChange={(e) =>
                                handleHighlightChange(index, e.target.value)
                              }
                              placeholder={`Highlight ${index + 1}`}
                            />
                            {newClient.highlights.length > 1 && (
                              <button
                                type="button"
                                className="btn btn-outline-danger"
                                onClick={() => removeHighlightField(index)}
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
                        {isEditing ? "Update Client" : "Save New Client"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/* Clients List */}
              <div className="col-lg-7">
                <div className="card bg-black border-0 shadow text-white">
                  <div className="card-header bg-black border-0 d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Existing Clients</h5>
                    <span className="badge bg-warning text-dark">
                      {clients.length} Total
                    </span>
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
                    ) : filteredClients.length === 0 ? (
                      <div className="text-center p-5 text-secondary">
                        <div className="mb-3">
                          <Search size={40} className="text-warning" />
                        </div>
                        <p>No clients found matching "{searchTerm}"</p>
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
                                Social
                              </th>
                              <th scope="col" className="border-0">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredClients.map((client) => (
                              <tr key={client.id}>
                                <td
                                  className="align-middle"
                                  style={{ width: "60px" }}
                                >
                                  <img
                                    src={client.image}
                                    alt={client.name}
                                    className="rounded-circle"
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      objectFit: "cover",
                                    }}
                                  />
                                </td>
                                <td className="align-middle">
                                  <div className="fw-bold">{client.name}</div>
                                  <div
                                    className="text-secondary small text-truncate"
                                    style={{ maxWidth: "250px" }}
                                  >
                                    {client.bio.substring(0, 60)}...
                                  </div>
                                </td>
                                <td className="align-middle d-none d-md-table-cell">
                                  <div className="d-flex gap-2">
                                    {client.instagram && (
                                      <span className="badge bg-dark border border-secondary">
                                        IG
                                      </span>
                                    )}
                                    {client.twitter && (
                                      <span className="badge bg-dark border border-secondary">
                                        TW
                                      </span>
                                    )}
                                    {client.facebook && (
                                      <span className="badge bg-dark border border-secondary">
                                        FB
                                      </span>
                                    )}
                                  </div>
                                </td>
                                <td className="align-middle">
                                  <div className="d-flex gap-2">
                                    <button
                                      className="btn btn-sm btn-outline-primary"
                                      onClick={() => handleEdit(client)}
                                    >
                                      <Edit size={16} />
                                    </button>
                                    <button
                                      className="btn btn-sm btn-outline-danger"
                                      onClick={() => handleDelete(client.id)}
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

export default AdminDashboard;

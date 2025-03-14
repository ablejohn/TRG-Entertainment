import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Instagram,
  Twitter,
  Facebook,
  ArrowLeft,
  Youtube,
  Music,
} from "lucide-react";
import { db } from "../firebase"; // Adjust the import path to your firebase.js
import { doc, getDoc } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";

const ArtistProfile = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        // Fetch the specific artist document from Firestore using the id
        const docRef = doc(db, "artists", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setArtist({
            id: docSnap.id,
            ...docSnap.data(),
          });
        } else {
          console.error("No such artist found!");
        }
      } catch (error) {
        console.error("Error fetching artist:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtist();
  }, [id]); // Re-run if id changes

  if (loading) {
    return <div className="min-vh-100 bg-dark text-white">Loading...</div>;
  }

  if (!artist) {
    return (
      <div className="min-vh-100 bg-dark text-white">Artist not found</div>
    );
  }

  return (
    <div className="min-vh-100 bg-dark text-white">
      {/* Hero Banner */}
      <div
        className="position-relative vh-50 d-flex align-items-end"
        style={{
          backgroundImage: `url(${artist.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
          style={{ opacity: "0.7" }}
        ></div>

        {/* Breadcrumb */}
        <nav className="position-absolute top-0 start-0 p-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/talents" className="text-warning text-decoration-none">
                Talents
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/sport" className="text-warning text-decoration-none">
                Sport
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-white"
              aria-current="page"
            >
              {artist.name}
            </li>
          </ol>
        </nav>
      </div>

      <div
        className="container position-relative"
        style={{ marginTop: "-100px" }}
      >
        <div className="row">
          {/* Profile Image */}
          <div className="col-md-3">
            <img
              src={artist.image}
              alt={artist.name}
              className="img-fluid rounded-circle border border-4 border-warning shadow-lg"
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>

          {/* Content */}
          <div className="col-md-9">
            <div className="bg-dark bg-opacity-75 p-4 rounded-3 shadow-lg">
              <h1 className="display-4 fw-bold mb-4">{artist.name}</h1>
              <p className="lead mb-5">{artist.bio}</p>

              {/* Highlights */}
              {artist.highlights && (
                <div className="mb-5">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div
                      className="bg-warning rounded-circle p-3 d-flex align-items-center justify-content-center"
                      style={{ width: "45px", height: "45px" }}
                    >
                      <span className="fw-bold fs-5">★</span>
                    </div>
                    <h2 className="h3 mb-0">Highlights</h2>
                  </div>

                  <div className="card bg-dark bg-opacity-50 border-0">
                    <div className="card-body">
                      <ul className="list-unstyled mb-0">
                        {artist.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="mb-3 d-flex align-items-center"
                          >
                            <span
                              className="bg-warning rounded-circle me-3"
                              style={{ width: "8px", height: "8px" }}
                            ></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Social Links */}
              <div className="d-flex gap-4 mb-5">
                {[
                  {
                    icon: Instagram,
                    link: artist.instagram
                      ? `https://instagram.com/${artist.instagram}`
                      : "#",
                  },
                  {
                    icon: Twitter,
                    link: artist.twitter
                      ? `https://twitter.com/${artist.twitter}`
                      : "#",
                  },
                  {
                    icon: Youtube,
                    link: artist.youtube
                      ? `https://youtube.com/${artist.youtube}`
                      : "#",
                  },
                  {
                    icon: Music,
                    link: artist.music ? artist.music : "#",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-lg rounded-circle p-3 border border-2 border-warning hover-warning"
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="d-flex gap-3">
                <button
                  className="btn btn-warning btn-lg px-4 d-flex align-items-center gap-2"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft size={20} />
                  Back
                </button>
                <button className="btn btn-outline-warning btn-lg px-4">
                  Enquiries
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;

import React, { useState, useEffect } from "react";
import {
  Clock,
  TrendingUp,
  Share2,
  BookmarkPlus,
  ChevronRight,
  Eye,
  Calendar,
} from "lucide-react";
import axios from "axios";

const API_KEY = "b957442e-6254-4f4a-9581-a76ed5b85d7f";
const API_URL = `https://content.guardianapis.com/search?q=Nigeria music&section=music&show-fields=thumbnail,trailText&api-key=${API_KEY}`;

const BlogSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        setNewsItems(response.data.response.results);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div style={{ backgroundColor: "#000000" }} className="py-5">
      <div className="container">
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <TrendingUp
              className="me-2"
              size={24}
              style={{ color: "#ff0055" }}
            />
            <h2 className="h3 mb-0 " style={{ color: "#ff0055" }}>
              Latest Entertainment News
            </h2>
          </div>
          <button className="btn btn-link text-warning text-decoration-none d-flex align-items-center">
            View All <ChevronRight size={16} className="ms-1" />
          </button>
        </div>

        {/* News Grid */}
        <div className="row g-4">
          {newsItems.map((item, index) => (
            <div key={index} className="col-md-6">
              <div
                className="card h-100 border-0 bg-white shadow-sm position-relative"
                onMouseEnter={() => setHoveredId(index)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ transition: "all 0.3s ease" }}
              >
                <div className="position-relative">
                  <img
                    src={
                      item.fields?.thumbnail ||
                      "https://via.placeholder.com/400"
                    }
                    alt={item.webTitle}
                    className="card-img-top"
                    style={{ height: "240px", objectFit: "cover" }}
                  />
                </div>

                <div className="card-body">
                  <div className="d-flex flex-wrap gap-3 mb-3">
                    <small className="text-muted d-flex align-items-center">
                      <Calendar size={14} className="me-1" />
                      {new Date(item.webPublicationDate).toLocaleDateString()}
                    </small>
                    <small className="text-muted d-flex align-items-center">
                      <Clock size={14} className="me-1" />2 min read
                    </small>
                    <small className="text-muted d-flex align-items-center">
                      <Eye size={14} className="me-1" />
                      N/A
                    </small>
                  </div>

                  <h3 className="h5 card-title mb-3 text-dark">
                    {item.webTitle}
                  </h3>

                  <p className="text-muted">{item.fields?.trailText || ""}</p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="badge bg-warning bg-opacity-10 text-warning">
                      The Guardian
                    </span>
                    <div className="d-flex gap-2">
                      <button className="btn btn-light btn-sm rounded-circle">
                        <Share2 size={16} />
                      </button>
                      <button className="btn btn-light btn-sm rounded-circle">
                        <BookmarkPlus size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                  style={{
                    background: "rgba(0,0,0,0.4)",
                    opacity: hoveredId === index ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: hoveredId === index ? "auto" : "none",
                  }}
                >
                  <button
                    className="btn btn-warning rounded-pill px-4"
                    onClick={() => window.open(item.webUrl, "_blank")}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-5">
          <button className="btn btn-warning rounded-pill px-4 py-2 d-inline-flex align-items-center">
            Load More Articles
            <ChevronRight size={16} className="ms-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

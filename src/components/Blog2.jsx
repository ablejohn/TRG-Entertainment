import React, { useState } from "react";
import {
  Clock,
  TrendingUp,
  Share2,
  BookmarkPlus,
  ChevronRight,
  Eye,
  Calendar,
} from "lucide-react";

import Ajebutter from "../assets/Ajebutter.jpeg";
import Israel from "../assets/isreal.jpg";
import Alozie from "../assets/alozie.jpeg";
import Davido from "../assets/davido.jpeg";

const BlogSection = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const newsItems = [
    {
      id: 1,
      image: Davido,
      title:
        "Davido And Adekunle Gold To Headline Africa's Biggest Youth Festival, The Blockparty",
      date: "December 13, 2023",
      category: "Entertainment",
      readTime: "5 min read",
      trending: true,
      views: "2.4k",
    },
    {
      id: 2,
      image: Israel,
      title:
        "Plug Sports Partners With Chosen Advisory And Attain Peace Sports For Israel Adesanya In Africa",
      date: "November 3, 2023",
      category: "Sports, Talent",
      readTime: "4 min read",
      trending: true,
      views: "1.8k",
    },
    {
      id: 3,
      image: Alozie,
      title:
        "Plug Sports Adds Super Falcons Star, Michelle Alozie To Star-Studded Talent Roster",
      date: "October 16, 2023",
      category: "Sports",
      readTime: "3 min read",
      views: "1.2k",
    },
    {
      id: 4,
      image: Ajebutter,
      title:
        "Alte Giants Ajebutter22 And Boj Return With Fresh Hit Single 'Rora'",
      date: "October 14, 2023",
      category: "Music",
      readTime: "6 min read",
      views: "3.1k",
    },
  ];

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
              Latest Updates
            </h2>
          </div>
          <button className="btn btn-link text-warning text-decoration-none d-flex align-items-center">
            View All <ChevronRight size={16} className="ms-1" />
          </button>
        </div>

        {/* News Grid */}
        <div className="row g-4">
          {newsItems.map((item) => (
            <div key={item.id} className="col-md-6">
              <div
                className="card h-100 border-0 bg-white shadow-sm position-relative"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ transition: "all 0.3s ease" }}
              >
                <div className="position-relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{ height: "240px", objectFit: "cover" }}
                  />
                  {item.trending && (
                    <div className="position-absolute top-0 start-0 m-3">
                      <span className="badge bg-warning d-flex align-items-center">
                        <TrendingUp size={14} className="me-1" />
                        Trending
                      </span>
                    </div>
                  )}
                </div>

                <div className="card-body">
                  <div className="d-flex flex-wrap gap-3 mb-3">
                    <small className="text-muted d-flex align-items-center">
                      <Calendar size={14} className="me-1" />
                      {item.date}
                    </small>
                    <small className="text-muted d-flex align-items-center">
                      <Clock size={14} className="me-1" />
                      {item.readTime}
                    </small>
                    <small className="text-muted d-flex align-items-center">
                      <Eye size={14} className="me-1" />
                      {item.views}
                    </small>
                  </div>

                  <h3 className="h5 card-title mb-3 text-dark">{item.title}</h3>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="badge bg-warning bg-opacity-10 text-warning">
                      {item.category}
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
                    opacity: hoveredId === item.id ? 1 : 0,
                    transition: "opacity 0.3s ease",
                    pointerEvents: hoveredId === item.id ? "auto" : "none",
                  }}
                >
                  <button className="btn btn-warning rounded-pill px-4">
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

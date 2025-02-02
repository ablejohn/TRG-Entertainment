import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "../styling/blog.css";

const API_KEY = "f0d4bae920b046b893469d41fb01dc9d";
const NEWS_URL = `https://newsapi.org/v2/everything?q=afrobeats+nigeria&apiKey=${API_KEY}`;

const BlogCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [announcements, setAnnouncements] = useState([]);

  const THEME_COLOR = "#ff0055";
  const DEFAULT_FONT = "'Poppins', sans-serif";

  useEffect(() => {
    fetch(NEWS_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles) {
          setAnnouncements(
            data.articles.slice(0, 5).map((article, index) => ({
              id: index,
              title: article.title,
              description: article.description || "No description available.",
              date: new Date(article.publishedAt).toLocaleDateString(),
              image: article.urlToImage || "https://via.placeholder.com/150",
              url: article.url,
            }))
          );
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  const getSlideWidth = () => (window.innerWidth < 768 ? 100 : 50);
  const [slideWidth, setSlideWidth] = useState(getSlideWidth());
  const visibleSlides = window.innerWidth < 768 ? 1 : 2;
  const maxShift = (announcements.length - visibleSlides) * slideWidth;

  useEffect(() => {
    const handleResize = () => setSlideWidth(getSlideWidth());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev * slideWidth >= maxShift ? 0 : prev + 1));
    }, 600000); // Changed to 600000ms (10 minutes)
    return () => clearInterval(interval);
  }, [maxShift, slideWidth]);

  const nextSlide = () =>
    setActiveSlide((prev) => (prev * slideWidth >= maxShift ? 0 : prev + 1));
  const prevSlide = () =>
    setActiveSlide((prev) => (prev === 0 ? maxShift / slideWidth : prev - 1));

  return (
    <div
      className="py-5"
      style={{
        backgroundColor: THEME_COLOR,
        borderRadius: "30px",
        fontFamily: DEFAULT_FONT,
      }}
    >
      <div className="container">
        <div className="d-flex align-items-center gap-2 mb-4">
          <div
            className="rounded-circle bg-white d-flex align-items-center justify-content-center"
            style={{ width: "25px", height: "25px", flexShrink: 0 }}
          >
            <h6 className="m-0 fw-bold" style={{ color: THEME_COLOR }}>
              ➜
            </h6>
          </div>
          <h2
            className="text-white m-0"
            style={{ fontSize: "1.25rem", fontWeight: "500" }}
          >
            ANNOUNCEMENTS
          </h2>
        </div>

        <div className="position-relative">
          <div className="overflow-hidden">
            <div
              className="d-flex"
              style={{
                transform: `translateX(-${activeSlide * slideWidth}%)`,
                transition: "transform 1.2s ease",
              }}
            >
              {announcements.map((post) => (
                <div
                  key={post.id}
                  style={{ width: `${slideWidth}%` }}
                  className="px-3 flex-shrink-0"
                >
                  <div className="card h-100 shadow-lg rounded-4 hover:shadow-xl transition-all duration-300">
                    <div className="card-body position-relative overflow-hidden">
                      <div className="row g-4">
                        {/* Image Section */}
                        <div className="col-12 col-md-4">
                          <div
                            className="position-relative"
                            style={{ height: "200px" }}
                          >
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-100 h-100 object-fit-cover rounded-3"
                              style={{ objectPosition: "center" }}
                            />
                            <div className="position-absolute top-0 end-0 m-2">
                              <span
                                className="badge"
                                style={{ backgroundColor: THEME_COLOR }}
                              >
                                {post.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="col-12 col-md-8">
                          <h3
                            className="h5 fw-bold mb-3"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: "2",
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {post.title}
                          </h3>
                          <p
                            className="mb-3 text-muted"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: "3",
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              fontSize: "0.9rem",
                            }}
                          >
                            {post.description}
                          </p>
                          <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn d-inline-flex align-items-center gap-2 hover:opacity-90"
                            style={{
                              backgroundColor: THEME_COLOR,
                              color: "white",
                              padding: "8px 20px",
                              borderRadius: "25px",
                              transition: "all 0.3s ease",
                            }}
                          >
                            Read More <ArrowRight className="ms-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="btn btn-light rounded-circle position-absolute start-0 top-50 translate-middle-y shadow-sm d-none d-md-flex align-items-center justify-content-center"
            style={{
              marginLeft: "-1rem",
              width: "40px",
              height: "40px",
              zIndex: 2,
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="btn btn-light rounded-circle position-absolute end-0 top-50 translate-middle-y shadow-sm d-none d-md-flex align-items-center justify-content-center"
            style={{
              marginRight: "-1rem",
              width: "40px",
              height: "40px",
              zIndex: 2,
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;

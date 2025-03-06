import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "../styling/blog.css";

const API_KEY = "b957442e-6254-4f4a-9581-a76ed5b85d7f";
const API_URL = `https://content.guardianapis.com/search?q=Nigeria music&section=music&show-fields=thumbnail,trailText&api-key=${API_KEY}`;

const BlogCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [announcements, setAnnouncements] = useState([]);
  const [slideWidth, setSlideWidth] = useState(100);
  const carouselRef = useRef(null);

  const THEME_COLOR = "#ff0055";
  const DEFAULT_FONT = "'Poppins', sans-serif";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.response.results) {
          setAnnouncements(
            data.response.results.slice(0, 5).map((article, index) => ({
              id: index,
              title: article.webTitle,
              description:
                article.fields?.trailText || "No description available.",
              date: new Date(article.webPublicationDate).toLocaleDateString(),
              image:
                article.fields?.thumbnail || "https://via.placeholder.com/150",
              url: article.webUrl,
            }))
          );
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSlideWidth(window.innerWidth < 768 ? 100 : 50);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getMaxShift = () => {
    const visibleSlides = window.innerWidth < 768 ? 1 : 2;
    return Math.max(0, announcements.length - visibleSlides);
  };

  const handleSlideChange = (newIndex) => {
    if (newIndex >= 0 && newIndex <= getMaxShift()) {
      setActiveSlide(newIndex);
    }
  };

  const nextSlide = () => {
    const maxShift = getMaxShift();
    handleSlideChange(activeSlide >= maxShift ? 0 : activeSlide + 1);
  };

  const prevSlide = () => {
    const maxShift = getMaxShift();
    handleSlideChange(activeSlide === 0 ? maxShift : activeSlide - 1);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (announcements.length > 0) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [activeSlide, announcements.length]);

  return (
    <div
      className="py-5 carousel-container"
      style={{
        backgroundColor: THEME_COLOR,
        borderRadius: "30px",
        fontFamily: DEFAULT_FONT,
      }}
    >
      <div className="container position-relative">
        <div className="d-flex align-items-center gap-2 mb-4">
          <div
            className="rounded-circle bg-white d-flex align-items-center justify-content-center"
            style={{ width: "25px", height: "25px" }}
          >
            <h6 className="m-0 fw-bold" style={{ color: THEME_COLOR }}>
              ➜
            </h6>
          </div>
          <h2
            className="text-white m-0"
            style={{ fontSize: "1.25rem", fontWeight: "500" }}
          >
            BLOGS
          </h2>
        </div>

        <div className="position-relative overflow-hidden">
          <div
            ref={carouselRef}
            className="d-flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${activeSlide * slideWidth}%)`,
              willChange: "transform",
            }}
          >
            {announcements.map((post) => (
              <div
                key={post.id}
                className="px-3 flex-shrink-0"
                style={{
                  width: `${slideWidth}%`,
                  transition: "transform 0.5s ease",
                }}
              >
                <div className="card h-100 shadow-lg rounded-4 hover:shadow-xl transition-all duration-300">
                  <div className="card-body position-relative overflow-hidden">
                    <div className="row g-4">
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
                          className="mb-3 text-white"
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

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="btn btn-light rounded-circle position-absolute start-0 top-50 translate-middle-y shadow-sm d-none d-md-flex"
            style={{ left: "-20px", width: "40px", height: "40px" }}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="btn btn-light rounded-circle position-absolute end-0 top-50 translate-middle-y shadow-sm d-none d-md-flex"
            style={{ right: "-20px", width: "40px", height: "40px" }}
          >
            <ChevronRight />
          </button>
        </div>

        {/* Mobile Dots */}
        <div className="d-flex justify-content-center gap-2 mt-4 d-md-none">
          {announcements.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`rounded-circle p-2 ${
                index === activeSlide ? "bg-white" : "bg-secondary"
              }`}
              style={{ width: "10px", height: "10px", border: "none" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;

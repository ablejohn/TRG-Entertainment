import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import "../styling/blog.css";
import Shine from "../assets/Shine.jpeg";
import Victony from "../assets/Victony.jpeg";
import Burna from "../assets/Burna.jpeg";
import Wizkid from "../assets/Wizkid.jpeg";
import Davido from "../assets/davido.jpeg";

const BlogCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const THEME_COLOR = "#ff0055";
  const DEFAULT_FONT = "'Poppins', sans-serif";
  const circleWidth = 150; // Set the width of the circles
  const circleHeight = 150; // Set the height of the circles

  const announcements = [
    {
      id: 1,
      title: "King Promise and Davido Shine at Ghana Music Awards 2024",
      date: "June 3, 2024",
      image: Davido,
    },
    {
      id: 2,
      title: "Victony Releases New Album, 'True To Self'",
      date: "June 17, 2024",
      image: Victony,
    },
    {
      id: 3,
      title: "Burna Boy Headlines Coachella Summer Festival",
      date: "June 18, 2024",
      image: Burna,
    },
    {
      id: 4,
      title: "Wizkid Announces Global Arena Tour",
      date: "June 19, 2024",
      image: Wizkid,
    },
    {
      id: 5,
      title: "African Giant Documentary: Behind The Scenes with Shine TTW",
      date: "June 20, 2024",
      image: Shine,
    },
  ];

  const getSlideWidth = () => {
    return window.innerWidth < 768 ? 100 : 50;
  };

  const [slideWidth, setSlideWidth] = useState(getSlideWidth());
  const totalSlides = announcements.length;
  const visibleSlides = window.innerWidth < 768 ? 1 : 2;
  const maxShift = (totalSlides - visibleSlides) * slideWidth;

  useEffect(() => {
    const handleResize = () => {
      setSlideWidth(getSlideWidth());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev * slideWidth >= maxShift ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [maxShift, slideWidth]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev * slideWidth >= maxShift ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? maxShift / slideWidth : prev - 1));
  };

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
            style={{
              width: "25px",
              height: "25px",
              flexShrink: 0,
            }}
          >
            <h6 className="m-0 fw-bold" style={{ color: THEME_COLOR }}>
              ➜
            </h6>
          </div>
          <h2
            className="text-white m-0"
            style={{
              fontFamily: DEFAULT_FONT,
              fontSize: "1.25rem",
              fontWeight: "500",
            }}
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
                transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {announcements.map((post) => (
                <div
                  key={post.id}
                  style={{ width: `${slideWidth}%` }}
                  className="px-3 flex-shrink-0"
                >
                  <div className="card h-100 shadow-sm hover-shadow-lg transition-all duration-300 rounded-4">
                    <div
                      className="card-body"
                      style={{ fontFamily: DEFAULT_FONT, background: "white" }}
                    >
                      <div
                        className="d-flex flex-column align-items-center gap-4"
                        style={{
                          flexDirection:
                            window.innerWidth < 768
                              ? "column"
                              : "column-reverse",
                        }}
                      >
                        <div
                          style={{
                            width: `${circleWidth}px`,
                            height: `${circleHeight}px`,
                          }}
                        >
                          <img
                            src={post.image}
                            alt={post.title}
                            className="rounded-circle w-100 h-100 object-fit-cover"
                            style={{ transition: "transform 0.3s ease" }}
                            onMouseOver={(e) =>
                              (e.target.style.transform = "scale(1.05)")
                            }
                            onMouseOut={(e) =>
                              (e.target.style.transform = "scale(1)")
                            }
                          />
                        </div>
                        <div className="text-center text-md-start flex-grow-1">
                          <h3
                            className="fs-4 fw-semibold mb-2"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: "2",
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                              fontFamily: DEFAULT_FONT,
                              fontSize: "1.25rem",
                              color: "black",
                            }}
                          >
                            {post.title}
                          </h3>
                          <p
                            className="small mb-3"
                            style={{
                              color: "white",
                              opacity: 0.9,
                              fontFamily: DEFAULT_FONT,
                              fontSize: "0.875rem",
                              color: "black",
                            }}
                          >
                            {post.date}
                          </p>
                          <button
                            className="btn d-inline-flex align-items-center gap-2"
                            style={{
                              backgroundColor: THEME_COLOR,
                              borderColor: THEME_COLOR,
                              color: "white",
                              transition: "all 0.3s ease",
                              padding: "8px 20px",
                              borderRadius: "25px",
                              fontFamily: DEFAULT_FONT,
                              fontSize: "1rem",
                            }}
                            onMouseOver={(e) => {
                              e.currentTarget.style.backgroundColor = "white";
                              e.currentTarget.style.color = THEME_COLOR;
                            }}
                            onMouseOut={(e) => {
                              e.currentTarget.style.backgroundColor =
                                THEME_COLOR;
                              e.currentTarget.style.color = "white";
                            }}
                          >
                            More
                            <ArrowRight
                              className="transition-transform duration-300"
                              style={{ transform: "translateX(0)" }}
                              onMouseOver={(e) =>
                                (e.target.style.transform = "translateX(4px)")
                              }
                              onMouseOut={(e) =>
                                (e.target.style.transform = "translateX(0)")
                              }
                            />
                          </button>
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
            className="btn btn-dark rounded-circle position-absolute start-0 top-50 translate-middle-y shadow-sm d-none d-md-block"
            style={{
              marginLeft: "-1rem",
              zIndex: 2,
              fontFamily: DEFAULT_FONT,
              fontSize: "1.5rem",
            }}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: "white" }} />
          </button>

          <button
            onClick={nextSlide}
            className="btn btn-dark rounded-circle position-absolute end-0 top-50 translate-middle-y shadow-sm d-none d-md-block"
            style={{
              marginRight: "-1rem",
              zIndex: 2,
              fontFamily: DEFAULT_FONT,
              fontSize: "1.5rem",
            }}
          >
            <ChevronRight className="w-6 h-6" style={{ color: "white" }} />
          </button>

          <div className="d-flex justify-content-center gap-2 mt-4">
            {[...Array(totalSlides - (window.innerWidth < 768 ? 0 : 1))].map(
              (_, index) => (
                <button
                  key={index}
                  className={`rounded-circle border-0 p-0 transition-opacity duration-300 ${
                    index === activeSlide ? "bg-white" : "bg-white opacity-50"
                  }`}
                  style={{ width: "8px", height: "8px" }}
                  onClick={() => setActiveSlide(index)}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;

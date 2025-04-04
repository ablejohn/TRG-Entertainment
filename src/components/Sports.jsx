import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase"; // Adjust the import path to your firebase.js
import { collection, getDocs } from "firebase/firestore";

const SportsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [athletes, setAthletes] = useState([]);
  const scrollContainerRef = useRef(null);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    // Fetch athletes from Firestore
    const fetchAthletes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "athletes"));
        const athletesData = querySnapshot.docs.map((doc, index) => ({
          id: doc.id, // Use Firestore document ID
          ...doc.data(),
          bgColor: [
            "rgb(255, 87, 34)", // Orange
            "rgb(33, 33, 33)", // Dark
            "rgb(46, 125, 50)", // Green
            "rgb(13, 71, 161)", // Blue
          ][index % 4], // Cycle through colors
        }));
        setAthletes(athletesData);
      } catch (error) {
        console.error("Error fetching athletes:", error);
      }
    };

    fetchAthletes();

    // Handle resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAutoScroll = () => {
    if (autoScrollRef.current) return;
    autoScrollRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % athletes.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
      autoScrollRef.current = null;
    }
  };

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = isMobile ? 280 : 400;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [athletes]); // Add athletes as dependency to restart scroll when data loads

  const handleScroll = (direction) => {
    stopAutoScroll();
    const newIndex =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(athletes.length - 1, activeIndex + 1);
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
    startAutoScroll();
  };

  return (
    <div className="container-fluid bg-black py-5">
      <div className="container">
        {/* Header */}
        <div className="d-flex align-items-center mb-4">
          <div
            className="rounded-circle p-2 me-3"
            style={{ background: "#ff0055", color: "white" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>
          <h1 className="text-white h3 mb-0">SPORT</h1>
        </div>

        {/* Main title */}
        <h2 className="text-white display-5 fw-bold mb-5">
          We Manage Africa's Leading Athletes.
        </h2>

        {/* Scrolling Athlete Cards */}
        <div className="position-relative mb-5">
          <div
            ref={scrollContainerRef}
            className="d-flex flex-nowrap overflow-hidden gap-3 gap-md-4"
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
            style={{ scrollBehavior: "smooth" }}
          >
            {athletes.map((athlete, index) => (
              <Link
                to={`/sport/${athlete.id}`}
                key={athlete.id}
                className="flex-shrink-0"
                style={{
                  width: isMobile ? "280px" : "350px",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className="position-relative overflow-hidden"
                  style={{
                    height: isMobile ? "350px" : "450px",
                    backgroundColor: athlete.bgColor,
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                    transform:
                      activeIndex === index ? "scale(1)" : "scale(0.95)",
                  }}
                >
                  <img
                    src={athlete.image}
                    alt={athlete.name}
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                      opacity: "0.9",
                    }}
                  />
                  <div
                    className="position-absolute bottom-0 start-0 p-4 w-100"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    }}
                  >
                    <h3 className="text-white h4 mb-0">{athlete.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Arrow Navigation */}
          <button
            className="btn position-absolute start-0 top-50 translate-middle-y d-none d-md-block"
            onClick={() => handleScroll("left")}
            style={{
              zIndex: 2,
              background: "rgba(0,0,0,0.5)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="btn position-absolute end-0 top-50 translate-middle-y d-none d-md-block"
            onClick={() => handleScroll("right")}
            style={{
              zIndex: 2,
              background: "rgba(0,0,0,0.5)",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Athlete Navigation */}
        <div className="d-flex flex-wrap gap-2 gap-md-3 justify-content-center justify-content-md-start">
          {athletes.map((athlete, index) => (
            <button
              key={athlete.id}
              className={`btn border-1 rounded-pill px-3 px-md-4 py-2 ${
                activeIndex === index
                  ? "btn-warning text-dark"
                  : "btn-outline-light text-white"
              }`}
              style={{ fontSize: isMobile ? "14px" : "16px" }}
              onClick={() => {
                stopAutoScroll();
                setActiveIndex(index);
                scrollToIndex(index);
                startAutoScroll();
              }}
            >
              {athlete.name}
              <svg
                className="ms-2"
                width={isMobile ? "12" : "16"}
                height={isMobile ? "12" : "16"}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SportsShowcase;

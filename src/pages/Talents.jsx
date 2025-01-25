import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Sport from "../components/Sports";
import CombinedSection from "../components/Combinedsection";
import Katheryn from "../assets/Katheryn.jpg";
import Miwasus from "../assets/Miwasus.jpg";
import QueenWinifred from "../assets/Queen Winifred.jpg";
import RemiChester from "../assets/Remi Chester Alade.jpg";
import TosinOyeneye from "../assets/TosinOyeneye.jpg";
import VictorNdigwe from "../assets/Victor Ndigwe.jpg";
import OssyBleu from "../assets/OssyBleu.jpg";
import "../styling/talent.css";

const TalentShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const scrollContainerRef = useRef(null);
  const autoScrollRef = useRef(null);

  const talents = [
    {
      id: 1,
      name: "Katheryn",
      image: Katheryn,
      bgColor: "rgb(0, 32, 76)",
    },
    {
      id: 2,
      name: "Miwa_sus",
      image: Miwasus,
      bgColor: "rgb(255, 98, 41)",
    },
    {
      id: 3,
      name: "Queen Winifred",
      image: QueenWinifred,
      bgColor: "rgb(237, 222, 197)",
    },
    {
      id: 4,
      name: "OssyBleu",
      image: OssyBleu,
      bgColor: "rgb(0, 32, 76)",
    },
    {
      id: 5,
      name: "Remi Chester Alade",
      image: RemiChester,
      bgColor: "rgb(255, 98, 41)",
    },
    {
      id: 6,
      name: "Tosin Oyeneye",
      image: TosinOyeneye,
      bgColor: "rgb(237, 222, 197)",
    },
    {
      id: 7,
      name: "Victor Ndigwe",
      image: VictorNdigwe,
      bgColor: "rgb(0, 32, 76)",
    },
  ];

  useEffect(() => {
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
        const nextIndex = (prev + 1) % talents.length;
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
  }, []);

  const handleScroll = (direction) => {
    stopAutoScroll();
    const newIndex =
      direction === "left"
        ? Math.max(0, activeIndex - 1)
        : Math.min(talents.length - 1, activeIndex + 1);

    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
    startAutoScroll();
  };

  return (
    <div className="container-fluid bg-black" style={{ marginTop: "80px" }}>
      <div className="container py-5">
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
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>
          <h1 className="text-white h3 mb-0">TALENTS</h1>
        </div>

        <h2 className="text-white display-5 fw-bold mb-5">
          We Manage Africa's Leading Talents.
        </h2>

        <div className="position-relative mb-5">
          <div
            ref={scrollContainerRef}
            className="d-flex flex-nowrap overflow-hidden gap-3 gap-md-4"
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
            style={{ scrollBehavior: "smooth" }}
          >
            {talents.map((talent, index) => (
              <Link
                to={`/artist/${talent.id}`}
                key={talent.id}
                className="flex-shrink-0 text-decoration-none"
                onClick={() => stopAutoScroll()}
              >
                <div
                  className="position-relative overflow-hidden"
                  style={{
                    width: isMobile ? "280px" : "350px",
                    height: isMobile ? "350px" : "450px",
                    backgroundColor: talent.bgColor,
                    borderRadius: "20px",
                    transition: "all 0.3s ease",
                    transform:
                      activeIndex === index ? "scale(1)" : "scale(0.95)",
                  }}
                >
                  <img
                    src={talent.image}
                    alt={talent.name}
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                      opacity: "0.9",
                    }}
                  />
                  <div className="position-absolute bottom-0 start-0 p-4">
                    <h3 className="text-white h4 mb-0">{talent.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>

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

        <div className="d-flex flex-wrap gap-2 gap-md-3 justify-content-center justify-content-md-start">
          {talents.map((talent, index) => (
            <button
              key={talent.id}
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
              {talent.name}
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
      <Sport />
      <CombinedSection />
    </div>
  );
};

export default TalentShowcase;

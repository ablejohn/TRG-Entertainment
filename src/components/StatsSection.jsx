import React, { useState, useEffect, useRef } from "react";
import { Award, Users, Music, Star } from "lucide-react";

// CountUp Component
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <>
      {count.toLocaleString()}
      {end === 1000000 ? "M+" : "+"}
    </>
  );
};

// StatsSection Component
const StatsSection = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black " ref={sectionRef} style={{ padding: "2rem 0" }}>
      <div className="container ">
        <div
          className="row py-4 text-center rounded-4 bg-white shadow-lg mx-2 mx-md-auto"
          style={{
            border: "1px solid rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          <div className="col-6 col-md-3 border-end">
            <Users className="text-muted mb-2" size={24} />
            <h4 className="fw-bold mb-0" style={{ color: "#ff0055" }}>
              {animate && <CountUp end={10} />}
            </h4>
            <small className="text-muted">Artists Managed</small>
          </div>
          <div className="col-6 col-md-3 border-end">
            <Music className="text-muted mb-2" size={24} />
            <h4 className="fw-bold mb-0" style={{ color: "#ff0055" }}>
              {animate && <CountUp end={25} />}
            </h4>
            <small className="text-muted">Songs Published</small>
          </div>
          <div className="col-6 col-md-3 border-end">
            <Award className="text-muted mb-2" size={24} />
            <h4 className="fw-bold mb-0" style={{ color: "#ff0055" }}>
              {animate && <CountUp end={7} />}
            </h4>
            <small className="text-muted">Years Experience</small>
          </div>
          <div className="col-6 col-md-3">
            <Star className="text-muted mb-2" size={24} />
            <h4 className="fw-bold mb-0" style={{ color: "#ff0055" }}>
              {animate && <CountUp end={8} />}
            </h4>
            <small className="text-muted">Countries Reached</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

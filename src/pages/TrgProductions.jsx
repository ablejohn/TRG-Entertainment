import React from "react";

const TrgProductions = () => {
  // Handle Notify Me button click
  const handleNotifyClick = () => {
    alert("We will notify you!");
  };

  return (
    <div className="bg-black text-white vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        {/* Logo or Icon */}
        <div className="mb-4">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
            style={{
              width: "120px",
              height: "120px",
              backgroundColor: "#ff0055",
              animation: "pulse 2s infinite",
            }}
          >
            <h1 className="display-4 fw-bold text-white mb-0">TRG</h1>
          </div>
          <span className="fs-4 fw-bold d-block mt-2">Productions</span>
        </div>

        {/* Coming Soon Text */}
        <h1 className="display-3 fw-bold mb-3">Coming Soon</h1>
        <p className="lead opacity-75 mb-4">
          We’re working hard to bring you something amazing. Stay tuned!
        </p>

        {/* Buttons */}
        <div className="d-flex gap-3 justify-content-center">
          <button
            className="btn btn-lg px-4 py-2"
            style={{ backgroundColor: "#ff0055", color: "white" }}
            onClick={handleNotifyClick}
          >
            Notify Me
          </button>
          <button className="btn btn-lg btn-outline-light px-4 py-2">
            Learn More
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8;
            }
            100% {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default TrgProductions;

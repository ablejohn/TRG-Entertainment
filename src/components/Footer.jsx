import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-light py-3">
      <div className="container text-center">
        <p>&copy; 2024 TRG Entertainment. All rights reserved.</p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a href="#" className="text-danger text-decoration-none">
            Facebook
          </a>
          <a href="#" className="text-danger text-decoration-none">
            Twitter
          </a>
          <a href="#" className="text-danger text-decoration-none">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

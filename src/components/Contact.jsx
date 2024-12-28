import React, { useState } from "react";
import "../styling/contact.css";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2 className="contact-title">Contact Us</h2>
      <div className="title-underline"></div>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder=" "
                value={formState.name}
                onChange={handleChange}
                required
              />
              <label className="form-label">Your Name</label>
            </div>
          </div>

          <div className="form-group">
            <div className="input-group">
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder=" "
                value={formState.email}
                onChange={handleChange}
                required
              />
              <label className="form-label">Your Email</label>
            </div>
          </div>

          <div className="form-group">
            <div className="input-group">
              <textarea
                name="message"
                className="form-input"
                placeholder=" "
                rows="4"
                value={formState.message}
                onChange={handleChange}
                required
              ></textarea>
              <label className="form-label">Your Message</label>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

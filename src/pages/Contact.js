// src/pages/Contact.js
import "../pages/Home.css";
import profilePic from "../assets/meghana-photo.png";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:mjagadish@umass.edu?subject=New Inquiry from ${formData.name}&body=${formData.message}%0A%0AContact Email: ${formData.email}`;
  };

  return (
    <div className="contact">
      <h2 className="section-title">Let’s Connect</h2>
      <div className="section-content">
        <div className="section-card animate-delay-1 profile-intro">
          <img src={profilePic} alt="Meghana Jagadish" className="profile-photo" />
          <div className="profile-text">
            <h3>Hi, I’m Meghana 👋</h3>
            <p>
              I enjoy turning complex ideas into impactful software — whether it’s AI-powered tools, full-stack systems, or smart automations.
              <br />
              Let’s connect to build, brainstorm, or just talk tech!
            </p>
          </div>
        </div>

        <div className="section-card animate-delay-2">
          <h3>📬 Get in Touch</h3>
          <p>
            Curious about my work or want to collaborate? Fill out the form
            below:
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="section-card animate-delay-3">
          <h3>🌐 Online Presence</h3>
          <p>
            <a
              href="https://github.com/Meghana057"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#00bcd4" }}
            >
              GitHub
            </a>
            <br />
            <a
              href="https://www.linkedin.com/in/meghana-jagadish/"
              target="_blank"
              rel="noreferrer"
              style={{ color: "#00bcd4" }}
            >
              LinkedIn
            </a>
            <br />
            <a
              href="mailto:mjagadish@umass.edu"
              style={{ color: "#00bcd4" }}
            >
              Email Me
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

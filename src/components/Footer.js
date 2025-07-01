// src/components/Footer.js
import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Meghana Jagadish. All rights reserved.</p>
        <div className="footer-links">
          <a href="mailto:mjagadish@umass.edu">Email</a>
          <a
            href="https://github.com/Meghana057"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/meghana-jagadish/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

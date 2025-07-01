// src/pages/Education.js
import "../pages/Home.css";
import umassLogo from "../assets/umass-logo.png";
import vtuLogo from "../assets/vtu-logo.png";

export default function Education() {
  return (
    <div className="education">
      <h2 className="section-title">Education</h2>
      <div className="section-content">
        <div className="section-card">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              src={umassLogo}
              alt="Umass Logo"
              style={{ width: "60px", height: "60px" }}
            />
            <h3 style={{ margin: 0 }}>University of Massachusetts Amherst</h3>
          </div>
          <p style={{ marginTop: "15px" }}>
            Master’s in Computer Science (2024 – 2026)
            <br />
            <strong>GPA:</strong> 3.6/4.0
            <br />
            <strong>Courses:</strong> Software Engineering, Distributed Systems, Machine Learning, Advanced Natural Language Processing, Reinforcement learning, Optimization in ML, Network Security
          </p>
        </div>
        <div className="section-card">
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              src={vtuLogo}
              alt="VTU Logo"
              style={{ width: "60px", height: "60px" }}
            />
            <h3 style={{ margin: 0 }}>
              Visvesvaraya Technological University
            </h3>
          </div>
          <p style={{ marginTop: "15px" }}>
            B.E in Computer Science & Engineering
            (2018 – 2022)
            <br />
            <strong>GPA:</strong> 8.9/10
            <br />
            <strong>Courses:</strong> Data Structures, Operating Systems,
            Database Management Systems, Artificial
            Intelligence, Machine Learning, Object Oriented Design & Development
          </p>
        </div>
      </div>
    </div>
  );
}

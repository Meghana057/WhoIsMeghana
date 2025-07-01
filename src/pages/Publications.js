// src/pages/Publications.js
import "../pages/Home.css";
export default function Publications() {
  return (
    <div className="publications">
      <h2 className="section-title">Beyond the Code</h2>

      <div className="achievement-section">
        <div className="achievement-card animate-delay-1">
          <div className="card-header">
            <span className="icon">📚</span>
            <h3>Publications</h3>
          </div>
          <ul>
            <li>
              Fabric Quality Assurance System{" "}
              <span className="tag">IJISAE Journal</span>
            </li>
            <li>
              Systematic Review of Textile Anomaly Detection{" "}
              <span className="tag">IEEE</span>
            </li>
            <li>
              Pneumonia Detection using DNNs{" "}
              <span className="tag">Springer</span>
            </li>
            <li>
              PikFresh – Fruit Quality Detection{" "}
              <span className="tag">IEEE</span>
            </li>
            <li>
              Food Surplus Recommendation System{" "}
              <span className="tag">IEEE</span>
            </li>
          </ul>
        </div>

        <div className="achievement-card animate-delay-2">
          <div className="card-header">
            <span className="icon">📜</span>
            <h3>Certifications</h3>
          </div>
          <ul>
            <li>
              Machine Learning for All{" "}
              <span className="tag">University of London</span>, Coursera, Dec
              2021
            </li>
            <li>
              Managing ML Projects <span className="tag">Google Cloud</span>,
              Coursera, Jan 2022
            </li>
            <li>
              ML with Python <span className="tag">IBM</span>, Coursera, Feb
              2022
            </li>
            <li>
              Deep Learning CV{" "}
              <span className="tag">University of Colorado</span>, Coursera, Feb
              2022
            </li>
            <li>
              Intro to CV & Image Processing <span className="tag">IBM</span>,
              Coursera, Mar 2022
            </li>
            <li>
              Predicting Safety Stock <span className="tag">LearnQuest</span>,
              Coursera, Mar 2022
            </li>
          </ul>
        </div>

        <div className="achievement-card animate-delay-3">
          <div className="card-header">
            <span className="icon">🏆</span>
            <h3>Hackathons & Leadership</h3>
          </div>
          <ul>
            <li>
              Co-Head Publicity <span className="tag">DJSCE ACM</span>: Led
              campaigns, hosted hackathons, formed partnerships, and scaled
              reach across 5+ colleges.
            </li>
            <li>
              Participated in <span className="tag">Lines of Code 4.0</span>,{" "}
              <span className="tag">Stratagem 2023</span>,{" "}
              <span className="tag">Smart India Hackathon - 2023</span>
            </li>
            <li>
              Developer –{" "}
              <span className="tag">e-Designs & e-GI Challenge</span>: Created
              web and mobile portal for Intellectual Property Office of India.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

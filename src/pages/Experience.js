import { FaCode, FaReact, FaLaptopCode, FaHandsHelping } from "react-icons/fa";
import "../pages/Home.css";

export default function Experience() {
  return (
    <div className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <FaCode />
          </div>
          <div className="timeline-card">
            <h3>CommerceIQ</h3>
            <p>
              <strong>Role:</strong> Application Engineer (Jan 2024 – Jul 2024)
            </p>
            <p>
              – Developed a high-throughput seed crawling platform that efficiently processed over 15 million SKUs daily, achieving a significant 40% reduction in total crawl volume through optimized algorithms.
              <br />
              – Built and maintained robust data pipelines for over nine major retailers, effectively addressing API rate limit challenges with advanced retry mechanisms and dynamic throttling strategies to ensure seamless operations.
              <br />
              – Deployed a comprehensive CI/CD pipeline with real-time monitoring for more than 600 crawlers; this initiative led to a dramatic decrease in customer-reported issues from over 70 per month to nearly zero.
              <br />– Collaborated closely with product managers and analysts to prioritize crawl coverage based on key business performance indicators, enhancing campaign effectiveness and tracking accuracy significantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

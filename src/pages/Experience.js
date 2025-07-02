import { FaCode, FaReact, FaLaptopCode, FaHandsHelping, FaDatabase } from "react-icons/fa";
import dfLogo from "../assets/demandFarm-logo.png";
import ciqLogo from "../assets/ciq-logo.png";
import betsolLogo from "../assets/betsol-logo.png";
import qmLogo from "../assets/qm-logo.png";
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
          <a href="https://www.demandfarm.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="timeline-card" style={{ cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <img src={dfLogo} alt="DemandFarm Logo" style={{ width: "40px", height: "40px", borderRadius: "6px" }}/>
            <h3 style={{ margin: 0 }}>DemandFarm</h3>
            </div>
            <p>
              <strong>Role:</strong> Engineering Intern (Jun 2025 – Present)
            </p>
            <p>
              – Designing proof-of-concept systems using Retrieval-Augmented Generation (RAG) to support contextual understanding in decision-making workflows.
              <br />
              – Exploring pattern classification and semantic tracking techniques with LLMs to evaluate feasibility for long-term integration.
              <br />
              – Prototyping AI agents to identify actionable tasks from transcripts of sales conversations, supporting smarter task workflows.
              <br />– Researching strategies for long-term memory retention and intent classification to drive sustained user engagement and smarter follow-ups. 
            </p>
          </div>
          </a>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaReact />
          </div>
          <a href="https://www.commerceiq.ai/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="timeline-card" style={{ cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <img src={ciqLogo} alt="CommerceIQ Logo" style={{ width: "40px", height: "40px", borderRadius: "6px" }}/>
            <h3 style={{ margin: 0 }}>CommerceIQ</h3>
            </div>
            <p>
              <strong>Role:</strong> Application Engineer (Jan 2024 – Jul
              2024)
            </p>
            <p>
              – Developed a high-throughput seed crawling platform that efficiently processed over 15 million SKUs daily, achieving a significant 40% reduction in total crawl volume through optimized algorithms.
              <br />
              – Built and maintained robust data pipelines for over nine major retailers, effectively addressing API rate limit challenges with advanced retry mechanisms and dynamic throttling strategies to ensure seamless operations.
              tools.
              <br />
              – Deployed a comprehensive CI/CD pipeline with real-time monitoring for more than 600 crawlers; this initiative led to a dramatic decrease in customer-reported issues from over 70 per month to nearly zero.
              <br />– Collaborated closely with product managers and analysts to prioritize crawl coverage based on key business performance indicators, enhancing campaign effectiveness and tracking accuracy significantly.
            </p>
          </div>
          </a>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaLaptopCode />
          </div>
          <a href="https://www.betsol.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="timeline-card" style={{ cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <img src={betsolLogo} alt="Betsol Logo" style={{ width: "40px", height: "40px", borderRadius: "6px" }}/>
            <h3 style={{ margin: 0 }}>Betsol</h3>
            </div>
            <p>
              <strong>Role:</strong> Associate Software Engineer (Jun 2022 –
              Dec 2023)
            </p>
            <p>
              – Led the development of core onboarding workflows for Zmanda Sentinel, achieving a 30% reduction in onboarding time across multiple tenants through streamlined customer provisioning processes.
              <br />
              – Implemented role-based access control (RBAC) and session token management strategies that significantly strengthened application-level security for a multi-tenant SaaS platform.
              <br />– Integrated Single Sign-On (SSO) using SAML 2.0 and OAuth 2.0 protocols to enable seamless cross-platform authentication for enterprise clients, enhancing user experience and security.
              <br />- Migrated front-end builds to Vite.js which resulted in a remarkable 70% reduction in build times while improving local development efficiency through hot-module reloading capabilities.
              <br/>- Refactored unit testing strategy with Jest to increase test coverage by over 40%, enhancing continuous integration stability and overall code quality across the application lifecycle.
              <br/>- Contributed to Docker-based containerization processes and deployed builds using Jenkins to improve deployment predictability and rollback safety during production releases.
            </p>
          </div>
          </a>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <FaHandsHelping />
          </div>
          <a href="https://www.betsol.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="timeline-card" style={{ cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <img src={betsolLogo} alt="Betsol Logo" style={{ width: "40px", height: "40px", borderRadius: "6px" }}/>
            <h3 style={{ margin: 0 }}>Betsol</h3>
            </div>
            <p>
              <strong>Role:</strong> Software Engineer Intern (Jan 2022 – Jun 2023)
            </p>
            <p>
              – Designed and implemented a scalable frontend architecture for the Zmanda Sentinel platform using Material-UI, enhancing modularity and reusability across multiple features by 30%.
              <br />
              – Achieved WCAG 2.1 AA compliance by auditing UI components, resulting in an increase in accessibility scores from 60% to 84%, significantly improving user experience for diverse audiences.
              <br />– Integrated i18next for internationalization, enabling seamless language switching that expanded the platform's usability to over 10 languages for a global user base.
              <br/>- Established static code analysis protocols using SonarQube during early development phases, proactively identifying code smells and reducing technical debt by approximately 25%.
              <br/>- Contributed to the setup of CI workflows for UI testing that improved deployment efficiency by reducing testing time by 40%, allowing faster iterations on feature development.
            </p>
          </div>
          </a>
        </div>
                <div className="timeline-item">
          <div className="timeline-icon">
            <FaDatabase />
          </div>
          <a href="https://quantmasters.in/home" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="timeline-card" style={{ cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <img src={qmLogo} alt="Quant Masters Technologies Pvt Ltd Logo" style={{ width: "40px", height: "40px", borderRadius: "6px" }}/>
            <h3 style={{ margin: 0 }}>Quant Masters Technologies Pvt Ltd</h3>
            </div>
            <p>
              <strong>Role:</strong> Machine Learning Intern (Jan 2022 – Jun 2023)
            </p>
            <p>
              – Built and evaluated classification models using scikit-learn techniques such as Logistic Regression and Random Forests, enhancing prediction accuracy on client data by approximately 20%.
              <br />
              – Cleaned and preprocessed extensive structured datasets with Pandas and NumPy, implementing feature selection techniques that effectively reduced overfitting while improving model generalizability.
              <br />– Visualized model performance through error analysis with matplotlib and seaborn, enabling stakeholders to better interpret results which informed iterative model enhancements.
              <br/>- Designed a basic recommendation prototype utilizing cosine similarity for effectively matching customer profiles to product clusters within the analytics framework.
              <br/>- Participated in weekly model review sessions to document experiments meticulously while applying evaluation metrics like F1-score, precision/recall, and AUC to practical business-oriented tasks.
            </p>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}
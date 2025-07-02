// src/pages/Projects.js
import "../pages/Home.css";
import appIcon from "../assets/app-icon.png";
import webIcon from "../assets/web-icon.png";

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="section-content">
        <div className="project-row left">
          <img src={appIcon} alt="App Icon" className="project-icon" />
          <div className="project-desc">
            <h3>Awake Emergency App</h3>
            <p>
              A dual <span className="tech">Android</span> application developed to assist elderly individuals during emergencies such as accidental falls.
              The victim-side app detects sudden motion using <span className="tech">accelerometer</span> and <span className="tech">gyroscope</span> sensors,
              triggering an automatic alert that shares the victim’s <span className="tech">live location</span>, a recorded <span className="tech">voice message</span>,
              and a real-time <span className="tech">image capture</span>. This information is instantly sent to the guardian-side app,
              which notifies the guardian with a <span className="tech">loud audio alert</span> and displays the victim’s details along with
              <span className="tech">nearby hospitals</span> and <span className="tech">emergency services</span> fetched via <span className="tech">REST APIs</span>.
              The system is designed for <span className="tech">hands-free operation</span>, ensuring rapid response with minimal user interaction.
          </p>
          </div>
        </div>

        <div className="project-row right">
          <img src={webIcon} alt="Web Icon" className="project-icon" />
          <div className="project-desc">
            <h3>Fitness and Calorie Tracker App</h3>
            <p>
              A full-stack web application designed to assist users in managing their nutrition and fitness goals through intelligent, image-based calorie tracking. The platform uses <span className="tech">Convolutional Neural Networks (CNNs)</span> to classify food items from uploaded images and estimate calorie intake automatically. Additional features include a <span className="tech">BMI calculator</span>, <span className="tech">step tracking</span> via device integration, and guided <span className="tech">breathing exercises</span> for relaxation. Users can securely sign up and manage their profiles through <span className="tech">OAuth-based authentication</span> and <span className="tech">Firebase</span> backend services. The frontend ensures a responsive, interactive experience using efficient <span className="tech">state management</span> for real-time updates and seamless navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

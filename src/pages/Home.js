import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "./Home.css";
import heroImg from "../assets/meghana-hero.png";

export default function Home() {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".fade-on-scroll")
      .forEach((el) => observer.observe(el));

    // Apply VanillaTilt
    skillRefs.current.forEach((ref) => {
      if (ref) {
        VanillaTilt.init(ref, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
        });
      }
    });
  }, []);

  const skills = [
    {
      icon: "🌐",
      title: "Scalable Web Development",
      desc: "I build full-stack, production-ready web applications, focusing on performance, scalability, and clean architecture. From setting up intuitive user flows to writing backend services and APIs, I ensure the systems I build are reliable and easy to maintain. I work across the stack using React, Next.js, Django, Flask, Node.js, TypeScript, and Python, with an emphasis on writing efficient code, integrating seamlessly with databases and APIs, and deploying at scale.",
    },
    {
      icon: "🤖",
      title: "LLM + Agent Workflows",
      desc: "I work on building modular, task-driven workflows powered by large language models. This includes designing RAG pipelines, building AI agents that can reason, retrieve information, and take actions, and automating multi-step logic across different types of data. I focus on making these systems work reliably in real-world settings, handling retrieval, routing, and orchestration using tools like LangChain, Hugging Face, OpenAI, and custom API integrations.",
    },
    {
      icon: "🧠",
      title: "Machine Learning & Data Science",
      desc: "I work on building data-driven systems that can learn from patterns and make predictions in real-world contexts. This includes training models for classification, forecasting, and anomaly detection, as well as working with structured data to extract insights and drive decisions. I’m comfortable across the pipeline, cleaning data, engineering features, training and evaluating models using tools like scikit-learn, TensorFlow, PyTorch, and Pandas.",
    },
  ];

  return (
    <div className="home">
      <div className="hero-section">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={heroImg}
            alt="Meghana working on laptop"
            className="hero-image"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="hero-title">Hey, I'm Meghana!</h1>
          <div className="hero-buttons">
            <a
              href="https://github.com/Meghana057"
              target="_blank"
              rel="noreferrer"
              className="btn github"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/meghana-jagadish/"
              target="_blank"
              rel="noreferrer"
              className="btn linkedin"
            >
              LinkedIn
            </a>
            <a
              href="https://drive.google.com/file/d/1XaCJ7Vvpbqhj_jr6mhdIIead0-pm3xax/view?usp=drive_link"
              className="btn resume"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </div>

      <h2 className="section-title">What I Do</h2>

      <div className="what-i-do-section">
        <div className="what-i-do-left">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <span className="icon">{skill.icon}</span>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="what-i-do-right">
          <div className="tech-stack-container">
            <h2 className="section-title">🚀 Tech Stack</h2>
            <div className="tech-grid">
              <div>
                <h3 className="tech-category">🧠 Languages</h3>
                <p>Python, JavaScript, TypeScript, Java, C++, SQL, HTML, CSS, Golang, Rust</p>
              </div>
              <div>
                <h3 className="tech-category">🗄️ Databases</h3>
                <p>MySQL, MongoDB, PostgreSQL, SQLite</p>
              </div>
              <div>
                <h3 className="tech-category">🧩 Frameworks</h3>
                <p>
                  React, Django, Node, Redux, REST
                  APIs
                </p>
              </div>
              <div>
                <h3 className="tech-category">🛠️ Tools & DevOps</h3>
                <p>Git, GitHub, AWS, Docker, Firebase, Kubernetes, AWS, GCP, Jira, Figma</p>
              </div>
              <div className="full-width">
                <h3 className="tech-category">📚 Machine Learning and Data Science</h3>
                <p>
                  LangChain, PyTorch, TensorFlow, Scikit-learn, OpenCV, Matplotlib,
                  NumPy, Pandas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

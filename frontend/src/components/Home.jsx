import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const skillsList = [
    "Java",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Data Structures & Algorithms",
    "AWS Cloud Practitioner",
    "Machine Learning",
    "Quantum Computing",
    "Information Theory",
    "Automata Theory",
    "Linear Block Codes"
  ];

  return (
    <main class="main-content">
      {/* Hero Section */}
      <div class="hero-box">
        <h2>Mahammad Galeeb</h2>
        <p class="hero-subtitle">Aspiring Software Engineer | VIT-AP University</p>
        
        <div class="goal-card">
          <p>
            "I am a dedicated computer science student focusing on algorithmic problem-solving and software development. My goal is to leverage my technical skills to secure a position at Google, building scalable and impactful technological solutions."
          </p>
        </div>

        <div class="cta-group">
          <Link to="/projects" class="btn btn-primary">
            <i class="fa-solid fa-folder-open"></i> View Projects
          </Link>
          <Link to="/certifications" class="btn btn-secondary">
            <i class="fa-solid fa-award"></i> Certifications
          </Link>
          <Link to="/contact" class="btn btn-outline">
            <i class="fa-solid fa-paper-plane"></i> Contact &amp; Resume
          </Link>
        </div>
      </div>

      {/* About Me Section */}
      <section class="card-section">
        <h2 class="section-title">
          <i class="fa-solid fa-user-tie"></i> About Me
        </h2>
        <p>
          I am a Computer Science student at <strong>VIT-AP University</strong> driven by a passion for algorithmic optimization, full-stack software development, and cloud computing architectures. My technical journey is focused on theoretical foundations and practical application engineering.
        </p>
        <br />
        <p>
          From exploring complex Automata Theory and Quantum Computing models to building MERN stack web applications and AWS cloud integrations, I maintain a rigorous dedication to engineering principles, clean code standards, and high-performance algorithms.
        </p>
      </section>

      {/* Technical Skills Section */}
      <section class="card-section">
        <h2 class="section-title">
          <i class="fa-solid fa-laptop-code"></i> Technical Skills &amp; Knowledge Areas
        </h2>
        <div class="skills-badge-grid">
          {skillsList.map((skill, index) => (
            <span key={index} class="skill-pill">
              <i class="fa-solid fa-check"></i> {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section class="card-section">
        <h2 class="section-title">
          <i class="fa-solid fa-language"></i> Languages
        </h2>
        <div class="languages-grid">
          <div class="lang-item">
            <span class="lang-name"><i class="fa-solid fa-comments"></i> English</span>
            <span class="lang-level">Full Professional</span>
          </div>
          <div class="lang-item">
            <span class="lang-name"><i class="fa-solid fa-code"></i> Java &amp; C++</span>
            <span class="lang-level">Advanced</span>
          </div>
          <div class="lang-item">
            <span class="lang-name"><i class="fa-solid fa-globe"></i> Hindi / Regional</span>
            <span class="lang-level">Native / Fluent</span>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section class="card-section">
        <h2 class="section-title">
          <i class="fa-solid fa-briefcase"></i> Experience &amp; Academic Timeline
        </h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-role">B.Tech in Computer Science &amp; Engineering</div>
              <div class="timeline-meta">
                <span><i class="fa-solid fa-graduation-cap"></i> VIT-AP University</span>
                <span><i class="fa-solid fa-calendar"></i> 2021 - Present</span>
              </div>
              <p class="timeline-desc">
                Focusing on Data Structures &amp; Algorithms, Machine Learning, Automata Theory, Information Theory, Quantum Computing, and MERN stack engineering.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-role">Software Engineering &amp; Project Lead</div>
              <div class="timeline-meta">
                <span><i class="fa-solid fa-code"></i> Academic &amp; Personal Projects</span>
                <span><i class="fa-solid fa-calendar"></i> 2023 - Present</span>
              </div>
              <p class="timeline-desc">
                Architected full-stack React applications, HTML5 Canvas interactive graphics tools, and AWS cloud storage services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

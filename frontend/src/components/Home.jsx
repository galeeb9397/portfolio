import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const skillsList = [
    "English",
    "Telugu",
    "Hindi",
    "Spanish"
  ];

  return (
    <main class="main-content">
      {/* Hero Section */}
      <div class="hero-box">
        <h2>Mahammad Galeeb</h2>
        <p class="hero-subtitle">Aspiring Software Engineer | VIT-AP University</p>

        <div class="goal-card">
          <p>
            "I am a dedicated computer science student focusing on algorithmic problem-solving and software development. My goal is to leverage my technical skills to building scalable and impactful technological solutions."
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
          I am a fourth-year Computer Science student at <strong>VIT-AP University</strong>, driven by a passion for algorithmic optimization, full-stack software development, and cloud computing architectures. My technical journey focuses on combining strong theoretical foundations with practical software engineering and application development.
        </p>
        <br />
        <p>
          I am AWS Certified Cloud Practitioner and AWS Certified Solutions Architect – Associate, with a CGPA of 9.49.
        </p>
      </section>

      {/* Technical Skills Section */}
      <section class="card-section">
        <h2 class="section-title">
          <i class="fa-solid fa-laptop-code"></i> Communication Skills
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
      {/* Tech Stack Section */}
      <section className="card-section">
        <h2 className="section-title">
          <i className="fa-solid fa-code"></i> Tech Stack
        </h2>

        <div className="skills-grid">
          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="skill-icon" />
            <p>Java</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" className="skill-icon" />
            <p>Python</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C/C++" className="skill-icon" />
            <p>C/C++</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="SQL" className="skill-icon" />
            <p>SQL</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" className="skill-icon" />
            <p>HTML</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" className="skill-icon" />
            <p>CSS</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-icon" />
            <p>JavaScript</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="skill-icon" />
            <p>Node.js</p>
          </div>

          <div className="skill-card">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="skill-icon" />
            <p>React</p>
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
                <span><i class="fa-solid fa-calendar"></i> 2023 - Present</span>
              </div>
              <p class="timeline-desc">
                Focusing on Data Structures &amp; Algorithms, Machine Learning,DBMS,Software engineering,OOPs and MERN stack engineering.
              </p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-role">Software Engineering &amp; Project Lead</div>
              <div class="timeline-meta">
                <span><i class="fa-solid fa-code"></i> Academic &amp; Personal Projects</span>
                <span><i class="fa-solid fa-calendar"></i> 2023 - 2025</span>
              </div>
              <p class="timeline-desc">
                1. Build the Samrt electronic Voting Machine and Won the "Most Social Revelaent Award".<span><i class="fa-solid fa-calendar"></i> 2023 - 2024</span><br />
                2. Worked as Co-lead for Technical team in Nextgen Cloud Club at VIT-AP University.<span><i class="fa-solid fa-calendar"></i> 2024 - 2025</span>

              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

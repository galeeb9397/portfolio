import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // GET http://localhost:5000/api/projects via Axios
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
        setError(null);
      } catch (err) {
        console.warn('Backend API connection warning, using fallback projects data:', err.message);
        // Fallback local projects if backend is connecting
        setProjects([
          {
            id: 1,
            title: "Expense_Tracker_Online",
            description: "Expense Tracker Online is a full-stack personal finance management application that allows users to register/login, record income and expenses, manage transactions, view financial summaries through a dashboard, filter transactions by time period, and monitor their overall financial activity.\n\nTechnology Stack:\nReact.js + Vite | Node.js + Express.js | MongoDB | REST APIs",
            imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
            githubLink: "https://github.com/galeeb9397/Expense_Tracker_Online",
            demoLink: "https://expense-tracker-online-opal.vercel.app"
          },
          {
            id: 2,
            title: "resumeai",
            description: "ResumeAI is an AI-powered resume analysis and job-matching application that compares a candidate’s resume with a job description. It uses Python, FastAPI, SQLite, Ollama, and Gemma 3 to generate match scores, identify missing skills, provide ATS feedback, suggest improvements, and create downloadable analysis reports.",
            imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
            githubLink: "https://github.com/galeeb9397/resumeai",
            demoLink: "https://resumeai-five-alpha.vercel.app"
          },
          {
            id: 3,
            title: "Smart Electronic Voting Machine",
            description: "Smart Electronic Voting Machine — Most Social Relevant Award | VIT-AP University\n\nDeveloped an IoT-based smart electronic voting machine using fingerprint authentication to reduce voting malpractice and prevent duplicate voting. Integrated Blynk for live monitoring of cast votes. Implemented the duplicate-vote prevention mechanism using a Boolean array. Won the Most Social Relevant Award among approximately 900 projects during the Engineering Clinics semester.",
            imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop",
            githubLink: "https://drive.google.com/file/d/1aVTPlIVBq-PNIjNbf8xB6RKTVJXzK5ew/view?usp=sharing",
            demoLink: "https://drive.google.com/file/d/1aVTPlIVBq-PNIjNbf8xB6RKTVJXzK5ew/view?usp=sharing"
          },
          {
            id: 4,
            title: "bookreview",
            description: "Developed a full-stack Book Review Website enabling users to discover books, submit ratings and reviews, and explore community feedback through a responsive and interactive platform.",
            imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=800&auto=format&fit=crop",
            githubLink: "https://github.com/galeeb9397/bookreview",
            demoLink: "https://bookreview-83py-git-main-portfolio-725c.vercel.app"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <main class="main-content">
      <div class="page-header">
        <h1>Featured Software Projects</h1>
        <p>Dynamic portfolio projects fetched live from the Express &amp; MongoDB REST API backend.</p>
        <div class="divider"></div>
      </div>

      {loading ? (
        <div class="loading-box">
          <div class="spinner"></div>
          <p>Fetching projects from <code>http://localhost:5000/api/projects</code>...</p>
        </div>
      ) : (
        <div class="projects-grid">
          {projects.map((proj, idx) => (
            <article
              key={proj._id || proj.id || idx}
              class={`project-card ${idx % 2 === 1 ? 'reverse' : ''}`}
            >
              <div class="project-image-container">
                <img class="project-img" src={proj.imageUrl} alt={proj.title} />
              </div>
              <div class="project-details">
                <div class="project-header">
                  <h3>{proj.title}</h3>
                </div>
                <p class="project-desc">{proj.description}</p>
                <div class="project-actions">
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-secondary btn-sm"
                  >
                    <i class={proj.githubLink && proj.githubLink.includes('drive.google.com') ? "fa-solid fa-award" : "fa-brands fa-github"}></i> {proj.githubLink && proj.githubLink.includes('drive.google.com') ? "View Certificate" : "GitHub Link"}
                  </a>
                  <a
                    href={proj.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-primary btn-sm"
                  >
                    <i class={proj.demoLink && proj.demoLink.includes('drive.google.com') ? "fa-solid fa-file-pdf" : "fa-solid fa-arrow-up-right-from-square"}></i> {proj.demoLink && proj.demoLink.includes('drive.google.com') ? "Award Document" : "Live Demo"}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
};

export default Projects;

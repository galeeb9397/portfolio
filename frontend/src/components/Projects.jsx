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
            title: "Advanced Drag & Drop Task Manager",
            description: "A highly responsive MERN web application featuring drag-and-drop state management, Kanban project boards, real-time sync, and user access control.",
            imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop",
            githubLink: "https://github.com/galeeb9397",
            demoLink: "https://github.com/galeeb9397"
          },
          {
            id: 2,
            title: "HTML5 Canvas Application",
            description: "An interactive graphics engine built with HTML5 Canvas and JavaScript to render and animate complex algorithmic visualizations, particle simulations, and tree traversals.",
            imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
            githubLink: "https://github.com/galeeb9397",
            demoLink: "https://github.com/galeeb9397"
          },
          {
            id: 3,
            title: "AWS Cloud Infrastructure Vault",
            description: "A resilient cloud-native document storage system leveraging AWS S3, EC2 instances, and automated CI/CD deployment pipelines with high availability.",
            imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
            githubLink: "https://github.com/galeeb9397",
            demoLink: "https://github.com/galeeb9397"
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
                    <i class="fa-brands fa-github"></i> GitHub Link
                  </a>
                  <a 
                    href={proj.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn btn-primary btn-sm"
                  >
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
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

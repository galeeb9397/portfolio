const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

// Middleware
app.use(cors());
app.use(express.json());

// Project Schema & Model
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  githubLink: { type: String, required: true },
  demoLink: { type: String, required: true }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

// Initial Seed Projects Data with user's github profile
const seedProjects = [
  {
    title: "Advanced Drag & Drop Task Manager",
    description: "A highly responsive MERN web application featuring drag-and-drop state management, Kanban project boards, real-time sync, and user access control.",
    imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop",
    githubLink: "https://github.com/galeeb9397",
    demoLink: "https://github.com/galeeb9397"
  },
  {
    title: "HTML5 Canvas Application",
    description: "An interactive graphics engine built with HTML5 Canvas and JavaScript to render and animate complex algorithmic visualizations, particle simulations, and tree traversals.",
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
    githubLink: "https://github.com/galeeb9397",
    demoLink: "https://github.com/galeeb9397"
  },
  {
    title: "AWS Cloud Infrastructure Vault",
    description: "A resilient cloud-native document storage system leveraging AWS S3, EC2 instances, and automated CI/CD deployment pipelines with high availability.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    githubLink: "https://github.com/galeeb9397",
    demoLink: "https://github.com/galeeb9397"
  }
];

// Helper to seed projects if DB is connected & empty
async function seedInitialProjectsIfEmpty() {
  try {
    const count = await Project.countDocuments();
    if (count === 0) {
      await Project.insertMany(seedProjects);
      console.log('Successfully seeded initial portfolio projects into MongoDB.');
    }
  } catch (err) {
    console.error('Error during initial project seeding:', err.message);
  }
}

// MongoDB Connection
let isDbConnected = false;

mongoose.connect(MONGODB_URI)
  .then(() => {
    isDbConnected = true;
    console.log('MongoDB connected successfully.');
    seedInitialProjectsIfEmpty();
  })
  .catch(err => {
    console.warn('MongoDB connection fallback: Database offline or URI unavailable.', err.message);
    console.log('Serving in fallback in-memory mode for projects API.');
  });

// API Routes

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Portfolio API is running', dbConnected: isDbConnected });
});

// GET /api/projects - Fetches all projects
app.get('/api/projects', async (req, res) => {
  try {
    if (isDbConnected) {
      const projects = await Project.find().sort({ createdAt: -1 });
      if (projects.length === 0) {
        return res.json(seedProjects);
      }
      return res.json(projects);
    } else {
      // Return seed data fallback if MongoDB server is offline
      return res.json(seedProjects);
    }
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// POST /api/projects - Adds a new project
app.post('/api/projects', async (req, res) => {
  const { title, description, imageUrl, githubLink, demoLink } = req.body;

  if (!title || !description || !imageUrl || !githubLink || !demoLink) {
    return res.status(400).json({ error: 'All fields (title, description, imageUrl, githubLink, demoLink) are required.' });
  }

  try {
    if (isDbConnected) {
      const newProject = new Project({ title, description, imageUrl, githubLink, demoLink });
      await newProject.save();
      return res.status(201).json(newProject);
    } else {
      const fallbackProject = { id: Date.now().toString(), title, description, imageUrl, githubLink, demoLink };
      seedProjects.unshift(fallbackProject);
      return res.status(201).json(fallbackProject);
    }
  } catch (error) {
    console.error('Error adding project:', error);
    res.status(500).json({ error: 'Failed to create project' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Express Backend Server running on port ${PORT}`);
});

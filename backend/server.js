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
    title: "Expense_Tracker_Online",
    description: "Expense Tracker Online is a full-stack personal finance management application that allows users to register/login, record income and expenses, manage transactions, view financial summaries through a dashboard, filter transactions by time period, and monitor their overall financial activity.\n\nTechnology Stack:\nReact.js + Vite | Node.js + Express.js | MongoDB | REST APIs",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    githubLink: "https://github.com/galeeb9397/Expense_Tracker_Online",
    demoLink: "https://expense-tracker-online-opal.vercel.app"
  },
  {
    title: "resumeai",
    description: "ResumeAI is an AI-powered resume analysis and job-matching application that compares a candidate’s resume with a job description. It uses Python, FastAPI, SQLite, Ollama, and Gemma 3 to generate match scores, identify missing skills, provide ATS feedback, suggest improvements, and create downloadable analysis reports.",
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
    githubLink: "https://github.com/galeeb9397/resumeai",
    demoLink: "https://resumeai-five-alpha.vercel.app"
  },
  {
    title: "Smart Electronic Voting Machine",
    description: "Smart Electronic Voting Machine — Most Social Relevant Award | VIT-AP University\n\nDeveloped an IoT-based smart electronic voting machine using fingerprint authentication to reduce voting malpractice and prevent duplicate voting. Integrated Blynk for live monitoring of cast votes. Implemented the duplicate-vote prevention mechanism using a Boolean array. Won the Most Social Relevant Award among approximately 900 projects during the Engineering Clinics semester.",
    imageUrl: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop",
    githubLink: "https://drive.google.com/file/d/1aVTPlIVBq-PNIjNbf8xB6RKTVJXzK5ew/view?usp=sharing",
    demoLink: "https://drive.google.com/file/d/1aVTPlIVBq-PNIjNbf8xB6RKTVJXzK5ew/view?usp=sharing"
  },
  {
    title: "bookreview",
    description: "Developed a full-stack Book Review Website enabling users to discover books, submit ratings and reviews, and explore community feedback through a responsive and interactive platform.",
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=800&auto=format&fit=crop",
    githubLink: "https://github.com/galeeb9397/bookreview",
    demoLink: "https://bookreview-83py-git-main-portfolio-725c.vercel.app"
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

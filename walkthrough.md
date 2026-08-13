# MERN Stack SPA Portfolio - Implementation & Execution Guide

The full-stack Single Page Application (SPA) portfolio for **Mahammad Galeeb** (`VIT-AP University`) is built using **MongoDB, Express.js, React.js, and Node.js (MERN)**.

---

## Complete Project Structure & Code Artifacts

### 1. Terminal Execution & Startup Commands

#### Backend Setup & Server Start (Port 5000)
```bash
# Terminal 1: Navigate to backend, install dependencies, and start Express server
cd backend
npm install
npm start
```

#### Frontend Setup & Dev Server Start (Port 3000)
```bash
# Terminal 2: Navigate to frontend, install dependencies, and start Vite React dev server
cd frontend
npm install
npm run dev
```

---

### 2. Backend Codebase (`/backend`)

#### [backend/package.json](file:///c:/Users/Dell/Desktop/resume/backend/package.json)
```json
{
  "name": "portfolio-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "mongoose": "^8.3.1"
  }
}
```

#### [backend/server.js](file:///c:/Users/Dell/Desktop/resume/backend/server.js)
```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio_db';

app.use(cors());
app.use(express.json());

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  githubLink: { type: String, required: true },
  demoLink: { type: String, required: true }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);

app.get('/api/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

app.post('/api/projects', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create project' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

### 3. Frontend Component Files (`/frontend`)

- [frontend/src/App.jsx](file:///c:/Users/Dell/Desktop/resume/frontend/src/App.jsx): React Router DOM configuration, sticky navigation bar, global 4-second header slideshow carousel, and dynamic route rendering.
- [frontend/src/App.css](file:///c:/Users/Dell/Desktop/resume/frontend/src/App.css): Formal Navy/Slate CSS styling system, responsive split cards, 16:9 certification thumbnails, and app-like contact buttons.
- [frontend/src/components/Home.jsx](file:///c:/Users/Dell/Desktop/resume/frontend/src/components/Home.jsx): Goal statement targeting Google, skills pills (Java, JS, HTML5, CSS3, DSA, AWS Cloud Practitioner, ML, Quantum Computing, Information Theory, Automata Theory, Linear Block Codes), languages, experience, and CTAs.
- [frontend/src/components/Projects.jsx](file:///c:/Users/Dell/Desktop/resume/frontend/src/components/Projects.jsx): Axios HTTP calls to `GET http://localhost:5000/api/projects` with loading state animations and split-card layouts.
- [frontend/src/components/Certifications.jsx](file:///c:/Users/Dell/Desktop/resume/frontend/src/components/Certifications.jsx): 16:9 YouTube thumbnail aspect ratio cards linking directly to Google Drive certificate URLs.
- [frontend/src/components/Contact.jsx](file:///c:/Users/Dell/Desktop/resume/frontend/src/components/Contact.jsx): Centralized app-like platform cards for LinkedIn, GitHub, Phone/Email, and Google Drive "Access Resume".
- [frontend/src/components/Slideshow.jsx](file:///c:/Users/Dell/Desktop/resume/frontend/src/components/Slideshow.jsx): Global header carousel component running an automated 4-second React `useEffect` timer.

---

## Live Status

- **Express Backend API**: `http://localhost:5000/api/projects`
- **React Frontend SPA**: `http://localhost:3000`

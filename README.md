# MERN Stack Portfolio Single Page Application (SPA)

Welcome to the repository for the full-stack MERN (MongoDB, Express, React, Node.js) portfolio of **Mahammad Galeeb** (VIT-AP University). This website is modern, clean, and ultra-responsive, featuring fluid transitions, interactive hover effects, and full integration between a Node.js/Express API and a Vite + React frontend.

---

## 🚀 Key Features

* **Dynamic REST API Integration**: Fetches software project cards live from the Express backend.
* **Database Graceful Fallback**: The backend connects to MongoDB, but includes a seamless, automatic in-memory fallback configuration. If MongoDB is offline, it serves built-in portfolio data.
* **Premium Tech Stack Icons**: Home page features an interactive "app-like" grid of 1:1 squircle tech badges that scale, glow, and lift on hover.
* **Smart Actions**: Under the projects tab, the buttons dynamically adapt depending on whether the project contains a standard codebase link (displaying "GitHub Link" / "Live Demo") or a Google Drive certificate (displaying "View Certificate" / "Award Document").
* **Continuous Carousel Slideshow**: Features an automated, looping header slideshow component running on a 4-second React cycle.
* **App-Style Contact Directory**: App-like contact cards linking directly to LinkedIn, GitHub, email, phone, and resume.

---

## 🛠️ Tech Stack

* **Frontend**: React.js, Vite, Vanilla CSS (CSS Grid, Flexbox, transitions)
* **Backend**: Node.js, Express.js, REST APIs
* **Database**: MongoDB (via Mongoose)
* **Icons & Fonts**: FontAwesome Icons, Google Inter Font

---

## 📂 Project Directory Structure

```
├── backend/            # Express.js REST API Server
│   ├── server.js       # Main server entry & Seed database fallbacks
│   ├── package.json    # Backend scripts & dependencies
│   └── .env            # Environment configuration (Port, DB URI)
│
├── frontend/           # Vite + React Frontend SPA
│   ├── src/
│   │   ├── components/ # Navbar, Slideshow, Home, Projects, Certifications, Contact
│   │   ├── App.jsx     # Routing & structural wrapper
│   │   └── main.jsx    # React DOM root entry
│   ├── vite.config.js  # Vite server configurations (Port 3000)
│   └── package.json    # Frontend scripts & configurations
│
└── index.html          # Static HTML entry point (for static routing)
```

---

## 🖥️ Local Installation & Launch

To get the application up and running locally, open two terminal windows and execute the following:

### Step 1: Start the Backend (Port 5000)
```bash
cd backend
npm install
npm start
```
*The server will run on `http://localhost:5000`. It will display a warning if local MongoDB is not running and will automatically proceed in fallback in-memory mode.*

### Step 2: Start the Frontend (Port 3000)
```bash
cd frontend
npm install
npm run dev
```
*Vite will compile and launch the React application at `http://localhost:3000/`.*

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import Home from './components/Home';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div class="app-wrapper">
        {/* Sticky Global Navigation */}
        <Navbar />

        {/* Global Slideshow rendered at top of every route */}
        <Slideshow />

        {/* Dynamic Route Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>

        {/* Global Footer */}
        <footer class="global-footer">
          <div class="footer-container">
            <div class="footer-links">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/certifications">Certifications</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <p class="footer-copy">
              &copy; 2026 Mahammad Galeeb. Built with MongoDB, Express, React &amp; Node.js (MERN).
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

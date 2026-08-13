import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav class="sticky-navbar">
      <div class="nav-container">
        <Link to="/" class="brand-logo">
          <span class="brand-badge">MG</span>
          <span>Mahammad Galeeb</span>
        </Link>

        <button 
          class="nav-toggle" 
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <i class={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

        <ul class={`nav-menu ${mobileOpen ? 'mobile-open' : ''}`}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
              end
            >
              <i class="fa-solid fa-house"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              <i class="fa-solid fa-diagram-project"></i> Projects
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/certifications" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              <i class="fa-solid fa-certificate"></i> Certifications
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              <i class="fa-solid fa-envelope"></i> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';

const Contact = () => {
  return (
    <main class="main-content">
      <div class="contact-container">
        <div class="page-header">
          <h1>Social &amp; Contact Platforms</h1>
          <p>Click on any app-like platform icon to connect directly or view my official resume on Google Drive.</p>
          <div class="divider"></div>
        </div>

        {/* Centralized App-Like Grid */}
        <div class="contact-app-grid">
          
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/mahammadgaleeb7/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="app-card linkedin"
          >
            <div class="app-icon-wrapper">
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div class="app-title">LinkedIn</div>
            <div class="app-subtitle">mahammadgaleeb7</div>
            <div class="app-link-text">Connect <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
          </a>

          {/* GitHub */}
          <a 
            href="https://github.com/galeeb9397" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="app-card github"
          >
            <div class="app-icon-wrapper">
              <i class="fa-brands fa-github"></i>
            </div>
            <div class="app-title">GitHub</div>
            <div class="app-subtitle">galeeb9397</div>
            <div class="app-link-text">Explore Repos <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
          </a>

          {/* Phone / Email */}
          <a 
            href="mailto:mahammadgaleeb@gmail.com" 
            class="app-card email"
          >
            <div class="app-icon-wrapper">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="app-title">Email &amp; Phone</div>
            <div class="app-subtitle">mahammadgaleeb@gmail.com</div>
            <div class="app-link-text">Send Email <i class="fa-solid fa-paper-plane"></i></div>
          </a>

          {/* Google Drive Access Resume */}
          <a 
            href="https://drive.google.com/file/d/1_xQMFP6EwWBqApdDZV3u0RCTA_p35k8e/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="app-card drive"
          >
            <div class="app-icon-wrapper">
              <i class="fa-brands fa-google-drive"></i>
            </div>
            <div class="app-title">Access Resume</div>
            <div class="app-subtitle">Google Drive PDF</div>
            <div class="app-link-text">View Resume <i class="fa-solid fa-file-pdf"></i></div>
          </a>

        </div>

        {/* Info Card */}
        <div class="contact-info-card">
          <h2>Direct Contact Summary</h2>
          <p>
            Targeting full-time software engineering roles and software developer positions at Google and leading technology companies.
          </p>
          <div class="contact-details-list">
            <div class="detail-item">
              <i class="fa-solid fa-graduation-cap"></i>
              <span>VIT-AP University</span>
            </div>
            <div class="detail-item">
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:mahammadgaleeb@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>mahammadgaleeb@gmail.com</a>
            </div>
            <div class="detail-item">
              <i class="fa-solid fa-phone"></i>
              <a href="tel:+919110507800" style={{ color: 'inherit', textDecoration: 'none' }}>+91-9110507800</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

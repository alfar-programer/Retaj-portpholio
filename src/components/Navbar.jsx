import React from 'react';

const Navbar = ({ lightMode, setLightMode }) => (
  <nav id="navbar">
    <div className="nav-container">
      <a href="#home" className="logo">Retaj | EF</a>
      <div className="theme-toggle-container">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div
          className={`theme-toggle${lightMode ? ' active' : ''}`}
          id="themeToggle"
          onClick={() => setLightMode((v) => !v)}
          tabIndex={0}
          role="button"
          aria-label="Toggle theme"
        >
          <span className="sr-only"></span>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar; 
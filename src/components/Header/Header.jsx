import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Jagrav Kapoor</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content glass-card">
          <h1>
            Hi, I'm <span>Jagrav Kapoor</span>
          </h1>
          <h2>Full-Stack Developer | Python & Django Enthusiast</h2>
          <p>
            Passionate about building scalable web applications and solving
            real-world problems with modern technologies like{" "}
            <strong>Django, React, and SQL</strong>. Currently working on
            real-time chat apps, e-commerce platforms, and AI-powered projects.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-outline">
              View Work
            </a>
            <a
              href="Jagrav_Resume_updated.pdf"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="hero-image glass-card">
          {/* Replace with your image */}
          <img
            src="jagrav_profile.jpg"
            alt="Jagrav Kapoor"
            className="profile-img"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

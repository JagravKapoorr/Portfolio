import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span>Jagrav Kapoor</span>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
              <div className="footer-social">
        <a href="https://github.com/JagravKapoorr"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/jagrav-kapoor-74340028a/"><FaLinkedin /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
              </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} JagraV Kapoor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
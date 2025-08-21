import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSuccess('✅ Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });

    // Hide success after 3s
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info glass-card">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
            
            <div className="info-item">
              <FaEnvelope className="icon" />
              <span>jagrav2kapoor@gmail.com</span>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <span>+91 9899065652</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <span>Delhi, India</span>
            </div>

            <div className="social-links">
              <a href="https://github.com/jagravkapoor" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/jagravkapoor" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form glass-card">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn">Send Message</button>
            {success && <p className="success-message">{success}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          
          {/* About Text */}
          <div className="about-text glass-card">
            <p>
              I'm a passionate <strong>Full-Stack Developer</strong> with hands-on experience 
              in building dynamic, scalable, and user-friendly applications. 
              My core expertise lies in <strong>Python, Django, React, and SQL</strong>, 
              and I enjoy creating end-to-end solutions that solve real-world problems.
            </p>
            <p>
              I’ve worked on projects ranging from <em>real-time chat applications</em> 
              and <em>e-commerce platforms</em> to <em>inventory optimization systems</em>. 
              Alongside development, I also explore <strong>AI integrations</strong> 
              to bring intelligent automation into applications.
            </p>
            <p>
              Outside of coding, I enjoy <strong>fitness, exploring new technologies, 
              and preparing for my MBA journey</strong>. My blend of technical expertise 
              and problem-solving mindset helps me deliver impactful results.
            </p>

            {/* Personal Details */}
            <div className="about-details">
              <div className="detail-item">
                <span>Name:</span>
                <span>Jagrav Kapoor</span>
              </div>
              <div className="detail-item">
                <span>Email:</span>
                <span>jagravkapoor@example.com</span>
              </div>
              <div className="detail-item">
                <span>Location:</span>
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Stats / Skills */}
          <div className="about-stats glass-card">
            <h3>My Highlights</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">1+</div>
                <div className="stat-label">Years of Coding</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">7+</div>
                <div className="stat-label">Technologies Mastered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Passion for Learning</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

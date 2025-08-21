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
              I'm a dedicated <strong>Full-Stack Developer</strong> with a strong foundation in 
              designing and building scalable, efficient, and user-centric applications. 
              My expertise spans <strong>Python, Django, React, and SQL</strong>, enabling me to craft 
              seamless end-to-end solutions for complex business needs.
            </p>
            <p>
              I have experience working on diverse projects, including 
              <em> real-time chat applications</em>, <em>e-commerce platforms</em>, 
              and <em>inventory optimization systems</em>. I’m also deeply interested 
              in <strong>AI-driven solutions</strong> and integrating intelligent features 
              to enhance application performance and usability.
            </p>
            <p>
              Beyond coding, I’m passionate about <strong>fitness, exploring new technologies, 
              and continuous learning</strong>. With a problem-solving mindset and 
              a results-oriented approach, I aim to deliver impactful digital experiences.
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

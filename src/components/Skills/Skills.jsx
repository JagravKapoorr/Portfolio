import React from 'react';
import './Skills.css';

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Django & DRF', level: 85 },
  { name: 'JavaScript (ES6+)', level: 85 },
  { name: 'HTML5 & CSS3', level: 95 },
  { name: 'Git & GitHub', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'SQL & PostgreSQL', level: 75 },
  { name: 'Scikit-Learn (ML)', level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>My Skills</h2>
        <p className="skills-intro">
          A blend of <strong>frontend expertise</strong>, <strong>backend development</strong>, 
          and <strong>machine learning skills</strong> that allow me to deliver complete, production-ready solutions.
        </p>
        <div className="skills-container glass-card">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ 
                    width: `${skill.level}%`, 
                    background: `linear-gradient(90deg, var(--primary-color), var(--secondary-color))` 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

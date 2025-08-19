import React from 'react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Junior Developer',
    company: 'Coforge',
    duration: 'Jul 2025 – Present',
    description: 
      'Working at client site on contractual basis. Contributing as a developer by building automation scripts and web applications using Python, Django, and SQL, while also assisting with client-specific requirements.'
  },
  {
    id: 2,
    role: 'Research Intern – Face Recognition Models',
    company: 'Independent Internship',
    duration: '2025 (Ongoing)',
    description: 
      'Analyzing and comparing open-source and paid face recognition models. Evaluating accuracy across multiple use cases and preparing detailed research documentation for adoption recommendations.'
  },
  {
    id: 3,
    role: 'Academic Projects',
    company: 'University of Delhi',
    duration: '2022 – 2025',
    description: 
      'Built multiple academic and personal projects including: (1) Inventory Optimization system with Python, SQL & Power BI; (2) Real-time Chat App with Django Channels & React; (3) Event Booking App with Django & React frontend integration.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="timeline glass-card">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <span className="duration">{exp.duration}</span>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

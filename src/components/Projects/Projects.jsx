import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Inventory Optimization System',
    description: 
      'Developed a data-driven inventory optimization system using Python, SQL, and Power BI. Forecasted demand, reduced excess stock, and provided visual insights for decision-making.',
    tags: ['Python', 'SQL', 'Power BI', 'Data Analytics'],
    image: 'inventory.jpg', // replace with actual image
    links: {
      live: '#',
      code: '#'
    }
  },
  {
    id: 2,
    title: 'Real-Time Chat Application',
    description: 
      'Built a production-level chat application with Django Channels and React. Features include real-time messaging, authentication, roles, and persistent chat history.',
    tags: ['Django', 'React', 'WebSockets', 'PostgreSQL'],
    image: 'chatapp.jpg', // replace with actual image
    links: {
      live: '#',
      code: '#'
    }
  },
  {
    id: 3,
    title: 'Event Booking App',
    description: 
      'Created an event booking platform with Django (backend) and React (frontend). Integrated email verification, payment support, and admin dashboard for event management.',
    tags: ['Django', 'React', 'TailwindCSS', 'Stripe'],
    image: 'eventapp.jpg', // replace with actual image
    links: {
      live: '#',
      code: '#'
    }
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-image">
                {/* Replace with actual image */}
                <div className="image-placeholder"></div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.links.live} className="btn btn-outline">Live Demo</a>
                  <a href={project.links.code} className="btn">View Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';

const Portfolio = ({ projects }) => (
  <section id="portfolio" className="section">
    <h2>Featured Projects</h2>
    <div className="portfolio-grid">
      {projects.map((proj, idx) => (
        <div className="portfolio-item" key={idx}>
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <div className="tech-stack">
            {proj.tech.map((t, i) => (
              <span className="tech-tag" key={i}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio; 
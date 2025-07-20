import React from 'react';

const Skills = ({ skills }) => (
  <section id="skills" className="section">
    <h2>Skills & Expertise</h2>
    <div className="skills-grid">
      {skills.map((skill, idx) => (
        <div className="skill-item" key={idx}>
          <div className="skill-icon">{skill.icon}</div>
          <h3>{skill.title}</h3>
          <p>{skill.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills; 
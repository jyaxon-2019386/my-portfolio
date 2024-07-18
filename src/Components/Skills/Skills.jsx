import React from 'react';
import skills from '../../data/skills.json';
import { getImage } from '../../utils';
import './Skills.css'; 

export const Skills = () => {
  return (
    <section id='skills' className="container">
      <h2 className="title">Habilidades</h2>
      <div className="skills-container">
        {skills.map((skill, id) => (
          <div className="skill aboutItem" key={id}>
            <div className="skill-header content">
              <img src={getImage(skill.imgsrc)} alt={skill.title} className="skill-img" />
              <p className="skill-title">{skill.title}</p>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${skill.percentage}%` }}>
                <span className="progress-bar-text">{`${skill.percentage}%`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

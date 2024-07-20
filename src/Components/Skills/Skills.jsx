import React from 'react';
import skills from '../../data/skills.json';
import { getImage } from '../../utils';
import styles from './Skills.module.css'; 

export const Skills = () => {
  return (
    <section id='skills' className={styles.container}>
      <h2 className={styles.title}>Habilidades</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, id) => (
          <div className={styles.skill} key={id}>
            <div className={styles.skillHeader}>
              <img src={getImage(skill.imgsrc)} alt={skill.title} className={styles.skillImg} />
              <p className={styles.skillTitle}>{skill.title}</p>
            </div>
            <div className={styles.progressBarContainer}>
              <div className={styles.progressBar} style={{ width: `${skill.percentage}%` }}>
                <span className={styles.progressBarText}>{`${skill.percentage}%`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

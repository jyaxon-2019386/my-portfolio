import React from 'react';
import styles from './Experience.module.css';

export const Experience = () => {
  return (
    <section className={styles.container} id='experience'>
      <h2 className={styles.title}>Experiencia y Educación</h2>
      <div className={styles.content}>
        <ul className={styles.experienceItems}>
          <li className={styles.experienceItem}>
            <div className={styles.experienceItemText}>
              <h3>
                Desarrollo Web 
              </h3>
              <p>
              He dedicado un tiempo considerable al autoaprendizaje y al desarrollo de proyectos personales en el campo del desarrollo web. He trabajado con tecnologías como JavaScript, React y Node.js para construir aplicaciones web. Mi enfoque ha sido aplicar estos conocimientos en proyectos propios, enfrentando desafíos técnicos y buscando constantemente nuevas formas de mejorar y ampliar mis habilidades.
              </p>
            </div>
          </li>

          {/* Educación */}
          <li className={styles.experienceItem}>
            <div className={styles.experienceItemText}>
              <h3>
              Educación en Desarrollo Web
              </h3>
              <p>
                Actualmente, estoy cursando 6to Diversificado en Fundación Kinal en la carrera de Informática. Durante todo este año he aprendido mucho más de lo que imagine, adquiriendo conocimientos en el desarrollo web con tecnologías como React y NodeJS.
              </p>
            </div>
          </li>

          {/* Mi Experiencia */}
          <li className={styles.experienceItem}>
            <div className={styles.experienceItemText}>
              <h3>
                Proyectos Personales
              </h3>
              <p>
                He trabajado en varios proyectos personales, incluyendo aplicaciones web y móviles. Algunos de estos proyectos están disponibles en mi portafolio y destacan mi habilidad para resolver problemas y crear soluciones.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

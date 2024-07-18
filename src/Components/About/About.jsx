import React from 'react'
import { getImage } from '../../utils'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>Sobre mi</h2>
        <div className={styles.content}>

          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <img src={getImage('about/cursor.png')} alt="cursor" />
              <div className={styles.aboutItemText}>
                <h3>
                  ¿Quién soy?
                </h3>
                <p>
                Soy Juan Pablo, un desarrollador jr con experiencia con tecnologías como JavaScript, HTML y CSS. Actualmente, estoy creando proyectos con MERN stack además de estar aprendiendo React Native para aplicaciones móviles.

                </p>
              </div>
            </li>

            <li className={styles.aboutItem}>
              <img src={getImage('about/back.png')} alt="back" />
              <div className={styles.aboutItemText}>
                <h3>
                  Back-end Dev
                </h3>
                <p>
                  He tenido experiencia con APIS Request y con frameworks como NodeJS.
                </p>
              </div>
            </li>

            <li className={styles.aboutItem}>
              <img src={getImage('about/cursor.png')} alt="ui" />
              <div className={styles.aboutItemText}>
                <h3>
                  Conoce más de mi
                </h3>
                <p>
                  Soy un programador jr con experiencia en CSS, HTML5 y actualmente en React.
                </p>
              </div>
            </li>

          </ul>
        </div>

    </section>
  )
}

import React from 'react'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>Desarrollador web</h2>
        <div className={styles.content}>

          <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <div className={styles.aboutItemText}>
                <h3>
                  Programador Jr
                </h3>
                <p>
                Soy Juan Pablo, un desarrollador junior con experiencia en tecnologías como JavaScript, HTML y CSS. Actualmente, estoy creando proyectos con el stack MERN y también estoy aprendiendo React Native para desarrollar aplicaciones móviles.
                </p>
              </div>
            </li>

            <li className={styles.aboutItem}>
              <div className={styles.aboutItemText}>
                <h3>
                 ¿Quién soy?
                </h3>
                <p>
                Mi nombre completo es Juan Pablo Ángel Yaxón Taquirá y actualmente tengo 18 años. Durante los últimos 4 años, me he adentrado en el mundo del desarrollo web y la programación. Siempre me gusta estar informado y aprender sobre las nuevas cosas que surgen en el mundo de la tecnología.
                </p>
              </div>
            </li>

            <li className={styles.aboutItem}>
              <div className={styles.aboutItemText}>
                <h3>
                  Front-end y Back-end
                </h3>
                <p>
                Soy un programador que disfruta tanto de la parte visual que ve el usuario, es decir, la interfaz de usuario, como de las funcionalidades del programa que el usuario final no percibe.
                </p>
              </div>
            </li>

          </ul>
        </div>

    </section>
  )
}

import React from 'react';
import styles from './Hero.module.css';
import { getImage } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>¡Bienvenido a mi portafolio del programador!</h1>
        <p className={styles.description}>
          Recuerda que...
          <br />
          <em>"Si puedes imaginarlo, <strong>puedes programarlo</strong>"</em> Alejandro Taboada
        </p>
        <a href="mailto:jyaxon-2019386@kinal.edu.gt" className={styles.contactBtn}> Contactame</a>
      </div>
      <img src={getImage('hero/profile.svg')} alt='Hero image' className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  );
};

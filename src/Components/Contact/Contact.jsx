import React from "react";

import styles from "./Contact.module.css";
import { getImage } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contáctame</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <img
            className={styles.icon}
            src={getImage("contact/outlook.png")}
            alt="Email icon"
          />
          <a href="mailto:jyaxon-2019386@kinal.edu.gt">jyaxon-2019386@kinal.edu.gt</a>
        </li>
        <li className={styles.link}>
          <img
            className={styles.icon}
            src={getImage("contact/linkedin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/juan-pablo-yaxon/">linkedin.com/juan-pablo-yaxon</a>
        </li>
        <li className={styles.link}>
          <img className={styles.icon}
          src={getImage("contact/github.png")} alt="Github icon" 
          />
          <a href="https://www.github.com/jyaxon-2019386">github.com/jyaxon-2019386</a>
        </li>
      </ul>
    </footer>
  );
};
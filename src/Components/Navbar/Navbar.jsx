import React, { useState } from 'react'

import styles from './Navbar.module.css'
import { getImage } from '../../utils'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} src={menuOpen ? getImage('nav/closeIcon.png') : getImage('nav/menuIcon.png')} alt='menu-button' onClick={()=> setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}onClick={()=> setMenuOpen(false)}>
          <li>
            <a href="#about">Sobre mi</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

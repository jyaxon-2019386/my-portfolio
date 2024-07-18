// src/components/ProjectCard.js

import React, { useState } from 'react';
import { getImage } from '../../utils';
import styles from './ProjectCard.module.css';
import ImageModal from './ImageModal.jsx';

export const ProjectCard = ({ project: { title, imgsrc, description, skills, demo, source } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => {
    setSelectedImage(getImage(src));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {imgsrc.map((src, index) => (
          <img
            key={index}
            src={getImage(src)}
            alt={`Screenshot ${index + 1}`}
            className={styles.image}
            onClick={() => openModal(src)}
          />
        ))}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>Demo</a>
        <a href={source} className={styles.link}>Source</a>
      </div>
      <ImageModal isOpen={isModalOpen} onRequestClose={closeModal} imgSrc={selectedImage} />
    </div>
  );
};

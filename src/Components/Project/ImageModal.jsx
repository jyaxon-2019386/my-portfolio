import React from 'react';
import Modal from 'react-modal';
import styles from './ImageModal.module.css';

export const ImageModal = ({ isOpen, onRequestClose, imgSrc }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
      contentLabel="Image Modal"
    >
      <img src={imgSrc} alt="Project Screenshot" className={styles.image} />
      <button onClick={onRequestClose} className={styles.closeButton}>Close</button>
    </Modal>
  );
};

export default ImageModal;

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const BackDrop = () => {
  return <div className={styles.backdrop} />;
};

const ModalOverLay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const potalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, potalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        potalElement
      )}
    </>
  );
};

export default Modal;

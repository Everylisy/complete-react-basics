import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideCart} />;
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
      {ReactDOM.createPortal(
        <BackDrop onHideCart={props.onHideCart} />,
        potalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        potalElement
      )}
    </>
  );
};

export default Modal;

import React from 'react';

import Card from './Card';
import styles from '../../style/ErrorModal.module.css';
import buttonStyle from '../../style/Button.module.css';

function ErrorModal({ onConfirm }) {
  return (
    <div className={styles.backdrop} onClick={onConfirm}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>입력 값이 옳지 않습니다</h2>
        </header>
        <div className={styles.content}>
          <p>입력 값이 비어있거나 옳지 않습니다. 다시 시도해주세요</p>
        </div>
        <footer className={styles.actions}>
          <button className={buttonStyle.button} onClick={onConfirm}>
            확인
          </button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;

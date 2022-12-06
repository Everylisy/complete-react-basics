import React from 'react';

import CardIcon from './CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CardIcon />
      </span>
      <span>장바구니</span>
      <span className={styles.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;

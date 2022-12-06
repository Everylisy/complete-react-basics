import React from 'react';

import styles from './Header.module.css';
import mealsImg from '../assets/meals.jpg';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>음식 주문 앱</h2>
        <button>장바구니</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="음식 이미지" />
      </div>
    </>
  );
};

export default Header;

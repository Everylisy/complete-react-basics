import React from 'react';

import styles from './Header.module.css';
import mealsImg from '../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h2>음식 주문 앱</h2>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt="음식 이미지" />
      </div>
    </>
  );
};

export default Header;

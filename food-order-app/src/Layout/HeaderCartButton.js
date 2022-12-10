import React, { useContext } from 'react';
import CartContext from '../store/cart-context';

import CardIcon from './CartIcon';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = ({ onShowCart }) => {
  const cartCtx = useContext(CartContext);
  const cartItemsNum = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <button className={styles.button} onClick={onShowCart}>
      <span className={styles.icon}>
        <CardIcon />
      </span>
      <span>장바구니</span>
      <span className={styles.badge}>{cartItemsNum}</span>
    </button>
  );
};

export default HeaderCartButton;

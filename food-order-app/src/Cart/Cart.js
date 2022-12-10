import React, { useContext } from 'react';

import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';

const Cart = ({ onHideCart }) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={() => {}}
          onRemove={() => {}}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>총 가격</span>
        <span>${totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onHideCart}>
          닫기
        </button>
        {hasItems && <button className={styles.button}>주문하기</button>}
      </div>
    </Modal>
  );
};

export default Cart;

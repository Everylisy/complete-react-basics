import React from 'react';

import styles from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = () => {
  return (
    <Modal>
      장바구니 항목이 매핑 될 자리
      <div>
        <span className={styles.total}>총 가격</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']}>닫기</button>
        <button className={styles.button}>주문하기</button>
      </div>
    </Modal>
  );
};

export default Cart;

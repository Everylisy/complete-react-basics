import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';

import styles from './MealItemForm.module.css';

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const amountNum = +enteredAmount;

    if (enteredAmount.trim().length === 0 || amountNum < 1 || amountNum > 5) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    onAddToCart(amountNum);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="수량"
        input={{
          id: 'amount__' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ 추가</button>
      {!amountIsValid && <p>유효한 수량을 입력하세요 (1~5)</p>}
    </form>
  );
};

export default MealItemForm;

import React from 'react';
import Input from '../../UI/Input';

import styles from './MealItemForm.module.css';

const MealItemForm = ({ id }) => {
  return (
    <form className={styles.form}>
      <Input
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
    </form>
  );
};

export default MealItemForm;

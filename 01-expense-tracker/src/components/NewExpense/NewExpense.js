import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import '../../style/NewExpense.css';

function NewExpense({ onAddExpense }) {
  const [isActiveForm, setIsActiveForm] = useState(false);

  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      id: Math.random().toString(),
      ...data,
    };

    onAddExpense(expenseData);
  };

  const FormHandler = () => {
    setIsActiveForm((isActiveForm) => !isActiveForm);
  };

  return (
    <div className="new-expense">
      {!isActiveForm ? (
        <button onClick={FormHandler}>새 지출 추가</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onInActive={FormHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;

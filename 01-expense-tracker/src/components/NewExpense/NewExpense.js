import React from 'react';

import ExpenseForm from './ExpenseForm';
import '../../style/NewExpense.css';

function NewExpense({ onAddExpense }) {
  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      id: Math.random().toString(),
      ...data,
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;

import React from 'react';

import ExpenseItem from './ExpenseItem';
import '../../style/ExpensesList.css';

function ExpensesList({ items }) {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">결과가 없습니다.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;

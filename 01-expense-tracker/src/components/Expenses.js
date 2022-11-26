import React from 'react';

import '../style/Expenses.css';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

function Expenses({ items }) {
  return (
    <>
      <Card className="expenses">
        {items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
      </Card>
    </>
  );
}

export default Expenses;

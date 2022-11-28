import React, { useState } from 'react';

import '../../style/Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses({ items }) {
  const [inputYear, setInputYear] = useState('2022');

  const yearValueHandler = (year) => {
    setInputYear(year);
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={inputYear}
          onYearFilter={yearValueHandler}
        />
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

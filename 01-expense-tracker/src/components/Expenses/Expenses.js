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

  const filteringItems = items.filter((expense) => {
    return expense.date.getFullYear().toString() === inputYear;
  });

  let renderExpenses = <p>결과가 없습니다.</p>;

  if (filteringItems.length > 0) {
    renderExpenses = filteringItems.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={inputYear}
          onYearFilter={yearValueHandler}
        />
        {renderExpenses}
      </Card>
    </>
  );
}

export default Expenses;

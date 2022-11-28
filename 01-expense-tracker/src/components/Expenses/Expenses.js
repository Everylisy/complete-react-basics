import React, { useState } from 'react';

import '../../style/Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses({ items }) {
  const [inputYear, setInputYear] = useState('2022');

  const yearValueHandler = (year) => {
    setInputYear(year);
  };

  const filteredItems = items.filter((expense) => {
    return expense.date.getFullYear().toString() === inputYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={inputYear}
          onYearFilter={yearValueHandler}
        />
        <ExpensesList items={filteredItems} />
      </Card>
    </>
  );
}

export default Expenses;

import React from 'react';

import '../../style/ExpensesFilter.css';

const ExpensesFilter = ({ onYearFilter, selectedYear }) => {
  const yearFilterHandler = (year) => {
    onYearFilter(year.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>연도별 필터</label>
        <select value={selectedYear} onChange={yearFilterHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

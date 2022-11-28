import React, { useState } from 'react';

import '../../style/ExpenseForm.css';

function ExpenseForm({ onSaveExpenseData, onInActive }) {
  const [inputTitle, setInputTitle] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  const titleChangeHandler = (title) => {
    setInputTitle(title.target.value);
  };

  const amountChangeHandler = (amount) => {
    setInputAmount(amount.target.value);
  };

  const dateChangeHandler = (date) => {
    setInputDate(date.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };

    onSaveExpenseData(expenseData);

    setInputTitle('');
    setInputAmount('');
    setInputDate('');
    onInActive();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>제목</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>가격</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={inputAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={inputDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">비용 추가</button>
        <button type="button" onClick={onInActive}>
          취소
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;

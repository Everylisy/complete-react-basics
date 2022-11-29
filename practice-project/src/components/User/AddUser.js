import React, { useState } from 'react';

import Card from '../UI/Card';
import styles from '../../style/AddUser.module.css';
import buttonStyle from '../../style/Button.module.css';
import ErrorModal from '../UI/ErrorModal';

function AddUser({ onGetUserInfo }) {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [isError, setIsError] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setIsError(true);
      return;
    }

    const userInfo = {
      id: Date.now().toString(),
      name: inputName,
      age: inputAge,
    };

    onGetUserInfo(userInfo);
    setInputName('');
    setInputAge('');
  };

  const handleInputName = (name) => {
    setInputName(name.target.value);
  };

  const handleInputAge = (age) => {
    setInputAge(age.target.value);
  };

  const handleErrorModal = () => {
    setIsError(false);
  };

  return (
    <>
      {isError && <ErrorModal onConfirm={handleErrorModal} />}
      <Card className={styles.input}>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="username">이름</label>
          <input
            id="username"
            type="text"
            value={inputName}
            onChange={handleInputName}
          />
          <label htmlFor="userage">나이</label>
          <input
            id="userage"
            type="number"
            min="1"
            value={inputAge}
            onChange={handleInputAge}
          />
          <button type="submit" className={buttonStyle.button}>
            유저 추가
          </button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;

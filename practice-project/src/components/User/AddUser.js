import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import styles from '../../style/AddUser.module.css';
import buttonStyle from '../../style/Button.module.css';
import ErrorModal from '../UI/ErrorModal';

function AddUser({ onGetUserInfo }) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [isError, setIsError] = useState(false);

  const handleFormSubmit = (e) => {
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    e.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsError(true);
      return;
    }

    const userInfo = {
      id: Date.now().toString(),
      name: enteredName,
      age: enteredAge,
    };

    onGetUserInfo(userInfo);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="userage">나이</label>
          <input id="userage" type="number" min="1" ref={ageInputRef} />
          <button type="submit" className={buttonStyle.button}>
            유저 추가
          </button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;

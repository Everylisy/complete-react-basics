import React, { useState } from 'react';

import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';

function App() {
  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo = (info) => {
    setUserInfo((prevInfo) => {
      return [info, ...prevInfo];
    });
  };

  return (
    <>
      <AddUser onGetUserInfo={getUserInfo} />
      <UserList userInfo={userInfo} />
    </>
  );
}

export default App;

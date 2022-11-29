import React from 'react';

import UserItem from './UserItem';
import styles from '../../style/UsersList.module.css';
import Card from '../UI/Card';

function UserList({ userInfo }) {
  return (
    <Card className={styles.users}>
      <ul>
        {userInfo.map((info) => (
          <UserItem key={info.id} name={info.name} age={info.age} />
        ))}
      </ul>
    </Card>
  );
}

export default UserList;

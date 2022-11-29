import React from 'react';

function UserItem({ name, age }) {
  return <li>{`${name} (${age}살)`}</li>;
}

export default UserItem;

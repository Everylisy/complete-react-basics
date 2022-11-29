import React from 'react';

import styles from '../../style/Card.module.css';

function Card(props) {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;

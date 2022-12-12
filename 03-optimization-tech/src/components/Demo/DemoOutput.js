import React from 'react';

const DemoOutput = ({ show }) => {
  console.log('DEMO 실행');
  return <p>{show ? '새로 추가된 문장' : ''}</p>;
};

export default React.memo(DemoOutput);

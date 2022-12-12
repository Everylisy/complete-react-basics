import React, { useCallback, useState } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  console.log('APP 실행');
  const [showParagraph, setShowParagraph] = useState(false);
  const buttonHandler = useCallback(() => {
    setShowParagraph((prev) => !prev);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={buttonHandler}>문장 출력!</Button>
    </div>
  );
}

export default App;

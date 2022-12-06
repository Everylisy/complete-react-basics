import React from 'react';

import Header from './Layout/Header';
import Meals from './Meals/Meals';

function App() {
  return (
    <>
      <Header>Let's get started!</Header>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;

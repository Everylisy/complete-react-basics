import React from 'react';
import Cart from './Card/Cart';

import Header from './Layout/Header';
import Meals from './Meals/Meals';

function App() {
  return (
    <>
      <Cart />
      <Header>Let's get started!</Header>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;

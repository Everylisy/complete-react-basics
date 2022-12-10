import React, { useState } from 'react';

import Cart from './Card/Cart';
import Header from './Layout/Header';
import Meals from './Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  };

  const hideCartHandler = () => {
    setIsCartShown(false);
  };

  return (
    <CartProvider>
      {isCartShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler}>Let's get started!</Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

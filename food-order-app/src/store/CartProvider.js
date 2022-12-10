import React, { useReducer } from 'react';
import CartContext from './cart-context';

const initCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = state.items.concat(action.item);
    const updatedAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initCartState
  );

  const addCartItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item });
  };

  const removeCartItemHandler = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;

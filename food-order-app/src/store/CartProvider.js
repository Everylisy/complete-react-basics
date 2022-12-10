import React, { useReducer } from 'react';
import CartContext from './cart-context';

const initCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedAmount =
      state.totalAmount + action.item.amount * action.item.price;

    const existItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existItem = state.items[existItemIndex];
    let updatedItems;

    if (existItem) {
      const updatedItem = {
        ...existItem,
        amount: existItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

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

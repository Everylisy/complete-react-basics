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

    // 이미 장바구니에 있는 항목 index 값
    const existItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // 이미 장바구니에 있는 항목
    const existItem = state.items[existItemIndex];
    let updatedItems;

    // 이미 장바구니에 있는 항목이 있으면,
    if (existItem) {
      // 이전 항목에 새로 dispatch된 수량만 업데이트
      const updatedItem = {
        ...existItem,
        amount: existItem.amount + action.item.amount,
      };

      // 원래 state에 들어있던 항목 복사
      updatedItems = [...state.items];
      // 이미 state에 있는 항목의 인덱스에 접근,수량만 업데이트 한 객체로 오버라이드
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

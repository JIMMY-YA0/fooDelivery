import React from "react";

const CartContext = React.createContext({
  items: [],
  amount: 0,
  totalAmount: 0,
  totalPrice: 0,
  addItems: () => {},
  removeItems: () => {},
});

export default CartContext;

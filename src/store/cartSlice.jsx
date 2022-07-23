import { createSlice } from "@reduxjs/toolkit";
// import { toContainHTML } from "@testing-library/jest-dom/dist/matchers";
// import { act } from "react-dom/test-utils";
// import { MEALS_DATA } from "../data";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    increase(state, action) {
      const existItem = state.items.find((item) => item.id === action.payload.id);

      if (existItem) {
        state.items = state.items.map((item) =>
          item.id === action.payload.id
            ? ((state.totalPrice += item.attributes.price),
              { ...item, quantity: item.quantity + 1 })
            : item
        );
        state.totalAmount += 1;
      } else {
        const addItem = { ...action.payload, quantity: 1 };

        state.items = state.items.concat(addItem);

        state.totalAmount += 1;
        console.log("addItem", addItem);
        state.totalPrice += addItem.attributes.price;
        console.log("cartItems", state.items);
      }
    },
    subtract(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          state.totalPrice -= item.attributes.price;
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      state.totalAmount -= 1;
    },
    clearCart(state, action) {
      state.items.forEach((item) => (item.quantity = 0));
      state.totalPrice = 0;
      state.totalAmount = 0;
    },
  },
});

export const { increase, subtract, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

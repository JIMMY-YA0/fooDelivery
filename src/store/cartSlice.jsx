import { createSlice } from "@reduxjs/toolkit";
import { MEALS_DATA } from "../data";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: MEALS_DATA,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    increase(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          state.totalPrice += item.price;
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      state.totalAmount += 1;
    },
    subtract(state, action) {
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          state.totalPrice -= item.price;
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      });
      state.totalAmount -= 1;
    },
    clearCart(state, action) {
      state.items.forEach((item) => (item.amount = 0));
      state.totalPrice = 0;
      state.totalAmount = 0;
    },
  },
});

export const { increase, subtract, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

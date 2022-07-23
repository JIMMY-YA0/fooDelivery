import { configureStore } from "@reduxjs/toolkit";
import productApi from "./API/productApi";
import cartSlice from "./cartSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    search: searchSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware),
});

export default store;

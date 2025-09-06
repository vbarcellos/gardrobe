import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice.js";
import cartReducer from "./cartSlice.js";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;

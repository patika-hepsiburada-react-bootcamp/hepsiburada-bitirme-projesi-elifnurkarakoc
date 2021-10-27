import { configureStore } from "@reduxjs/toolkit";
import products from "redux/slices/ProductSlice";
import cart from "redux/slices/CartSlice";
export const store = configureStore({
  reducer: {
    products,
    cart,
  },
});
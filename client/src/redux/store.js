import { configureStore } from "@reduxjs/toolkit";
import products from "redux/slices/ProductSlice";
import basket from "redux/slices/BasketSlice";
export const store = configureStore({
  reducer: {
    products,
    basket,
  },
});
import { configureStore } from "@reduxjs/toolkit";
import products from "redux/slices/ProductSlice";
export default configureStore({
  reducer: {
    products,
  },
});

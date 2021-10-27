import { createSlice } from "@reduxjs/toolkit";
import {
  setBasketDataToLocalStorage,
  getBasketDataFromLocalStorage,
} from "utils";

var data = getBasketDataFromLocalStorage();
export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: data ? data : [],
    isModal: false,
    deleteItem: {},
  },
  reducers: {
    addProductToCart: (state, action) => {
      const item = { ...action.payload, addedDate: new Date() };
      state.cartItems = [...state.cartItems, item].sort(
        (a, b) => new Date(b.addedDate) - new Date(a.addedDate)
      );
      setBasketDataToLocalStorage(state.cartItems);
    },
    deleteProductToCart: (state, action) => {
      const index = state.cartItems?.findIndex(
        (item) => item.id === action.payload.id
      );
      state.cartItems.splice(index, 1);
      state.isModal = false;
      setBasketDataToLocalStorage(state.cartItems);
    },
    showModal: (state, action) => {
      state.deleteItem = action.payload;
      state.isModal = true;
    },
    closeModal: (state) => {
      state.isModal = false;
    },
  },
});

export const { addProductToCart, deleteProductToCart, showModal, closeModal } =
  CartSlice.actions;
export default CartSlice.reducer;

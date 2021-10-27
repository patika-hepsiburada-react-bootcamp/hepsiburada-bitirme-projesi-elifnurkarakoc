import { createSlice } from "@reduxjs/toolkit";
import {
  setBasketDataToLocalStorage,
  getBasketDataFromLocalStorage,
} from "utils";

var data = getBasketDataFromLocalStorage();
export const BasketSlice = createSlice({
  name: "basket",
  initialState: {
    basketItems: data ? data : [],
    isModal: false,
    deleteItem: {},
  },
  reducers: {
    addProductToBasket: (state, action) => {
      const item = { ...action.payload, addedDate: new Date() };
      state.basketItems = [...state.basketItems, item].sort(
        (a, b) => new Date(b.addedDate) - new Date(a.addedDate)
      );
      setBasketDataToLocalStorage(state.basketItems);
    },
    deleteProductToBasket: (state, action) => {
      const index = state.basketItems?.findIndex(
        (item) => item.id === action.payload.id
      );
      state.basketItems.splice(index, 1);
      state.isModal = false;
      setBasketDataToLocalStorage(state.basketItems);
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

export const {
  addProductToBasket,
  deleteProductToBasket,
  showModal,
  closeModal,
} = BasketSlice.actions;
export default BasketSlice.reducer;

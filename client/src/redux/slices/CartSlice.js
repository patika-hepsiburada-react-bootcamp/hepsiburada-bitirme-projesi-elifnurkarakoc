import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    isModal: false,
    deleteItem: {},
  },
  reducers: {
    addProductToCart: (state, action) => {
      const item = { ...action.payload, addedDate: new Date() };
      state.items = [...state.items, item].sort(
        (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
      );
    },
    deleteProductToCart: (state, action) => {
      // console.log(action.payload.id);
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      // console.log(index);
      state.items.splice(index, 1);
      state.isModal = false;
    },
    showModal: (state, action) => {
      state.deleteItem = action.payload;
      state.isModal = true;
      console.log(state.deleteItem);
      console.log(state.isModal);
    },
    closeModal: (state) => {
      state.isModal = false;
      console.log(state.isModal);
    },
  },
});

export const { addProductToCart, deleteProductToCart, showModal, closeModal } =
  CartSlice.actions;
export default CartSlice.reducer;

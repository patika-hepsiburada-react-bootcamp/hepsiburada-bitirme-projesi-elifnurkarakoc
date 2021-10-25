import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      const item = { ...action.payload, addedDate: new Date() };
      state.items = [...state.items, item];
    },
    deleteProductToCart: (state, action) => {
      // console.log(action.payload.id);
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      // console.log(index);
      state.items.splice(index, 1);
    },
  },
});

export const { addProductToCart, deleteProductToCart } = CartSlice.actions;
export default CartSlice.reducer;

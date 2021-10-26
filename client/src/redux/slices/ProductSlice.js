import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "api/api";
export const getProductAsync = createAsyncThunk(
  "getProductAsync",
  fetchProducts
);

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    visibleItems: [],
    loading: false,
    error: null,
  },
  reducers: {
    searchProducts: (state, action) => {
      const searchValue = action.payload.toLowerCase();
      state.visibleItems = searchValue
        ? state.items.filter((p) => p.name.toLowerCase().includes(searchValue))
        : state.items;
    },
  },
  extraReducers: {
    [getProductAsync.pending]: (state) => {
      state.loading = true;
    },
    [getProductAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.visibleItems = state.items;
    },
    [getProductAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});
export const { searchProducts } = ProductSlice.actions;
export default ProductSlice.reducer;

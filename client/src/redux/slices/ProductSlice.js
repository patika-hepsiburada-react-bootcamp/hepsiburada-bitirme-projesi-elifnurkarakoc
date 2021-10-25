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
    loading: false,
    error: null,
    new_user_loading: false,
  },
  reducers: {},
  extraReducers: {
    [getProductAsync.pending]: (state) => {
      state.loading = true;
    },
    [getProductAsync.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;     
    },
    [getProductAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default ProductSlice.reducer;

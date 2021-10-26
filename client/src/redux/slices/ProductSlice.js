import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "api/api";
import { getCountProperty } from "utils";
export const getProductAsync = createAsyncThunk(
  "getProductAsync",
  fetchProducts
);

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    visibleItems: [],
    colorFilters: {},
    brandFilters: {},
    selectedFilter: [],
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
    updateProducts: (state, action) => {
      const filteredItems = action.payload;
      state.visibleItems = filteredItems;
    },
    updateFilter: (state, action) => {
      const { filteredItems } = action.payload;
      state.colorFilters = getCountProperty(filteredItems, "color");
      state.brandFilters = getCountProperty(filteredItems, "brand");
    },
    updateSelectedFilterKey: (state, action) => {
     state.selectedFilter = action.payload;
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
      state.colorFilters = getCountProperty(state.visibleItems, "color");
      state.brandFilters = getCountProperty(state.visibleItems, "brand");
    },
    [getProductAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});
export const {
  searchProducts,
  updateProducts,
  updateFilter,
  updateSelectedFilterKey,
} = ProductSlice.actions;
export default ProductSlice.reducer;

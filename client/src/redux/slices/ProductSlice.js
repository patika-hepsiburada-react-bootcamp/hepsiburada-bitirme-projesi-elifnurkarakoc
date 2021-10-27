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
    sort: "",
    searchValue: "",
    loading: false,
    error: null,
    indexOfFirstProducts: 0,
    indexOfLastProducts: 0,
  },
  reducers: {
    searchProducts: (state, action) => {
      // state.searchValue = action.payload.toLowerCase();
      // state.visibleItems = state.searchValue
      //   ? state.items.filter((p) => p.title.toLowerCase().includes(state.searchValue))
      //   : state.items;
      console.log(action.payload.toLowerCase());
      const value = action.payload.toLowerCase();
      var temp=value.trim().length >= 2
      ? state.items.filter((p) => p.title.toLowerCase().includes(value))
      : state.items;
      state.visibleItems = temp;
    },
    updateProducts: (state, action) => {
      const filteredItems = action.payload;
      state.visibleItems = filteredItems;
    },
    updateFilter: (state, action) => {
      const { filteredItems } = action.payload;
      console.log(filteredItems);
      state.colorFilters = getCountProperty(filteredItems, "color");
      state.brandFilters = getCountProperty(filteredItems, "brand");
      console.log(state.brandFilters);
    },
    updateSelectedFilterKey: (state, action) => {
      state.selectedFilter = action.payload;
    },
    updateSort: (state, action) => {
      state.sort = action.payload;
      console.log("sort", state.sort);
    },
    getCurrentProducts: (state, action) => {
      var { indexOfFirstProducts, indexOfLastProducts } = action.payload;
      state.indexOfFirstProducts = indexOfFirstProducts;
      state.indexOfLastProducts = indexOfLastProducts;
      console.log(action.payload);
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
  updateSort,
  getCurrentProducts,
} = ProductSlice.actions;
export default ProductSlice.reducer;

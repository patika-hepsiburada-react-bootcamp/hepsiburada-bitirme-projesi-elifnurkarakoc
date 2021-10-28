import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import products from "redux/slices/ProductSlice";
import basket from "redux/slices/BasketSlice";
// eslint-disable-next-line no-unused-vars
var preloadedState = {
  basketItems: [
    {
      id: 55,
      title: "Apple iPhone 11",
      image: "https://www.resim.io/i/dQB6m.png",
      category: "Telefon",
      brand: "Xiamio",
      color: "Siyah",
      price: 1550,
      discountPrice: "1519.00",
      discountPercentage: 2,
      createdDate: "2020-03-05T16:01:38.049Z",
    },
  ],
  isModal: false,
  deleteItem: {},
};
function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { products, basket }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };

import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// Import your own reducer
import products from "redux/slices/ProductSlice";
import basket from "redux/slices/BasketSlice";
// eslint-disable-next-line no-unused-vars
// var preloadedState = {
//   basketItems: [],
//   isModal: false,
//   deleteItem: {},
// };
function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: {products, basket},preloadedState}),
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

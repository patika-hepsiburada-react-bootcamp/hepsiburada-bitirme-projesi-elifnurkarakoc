import { store } from "redux/store";
import {
  addProductToBasket,
  deleteProductToBasket,
  showModal,
  closeModal,
} from "redux/slices/BasketSlice";

const sampleProduct = {
  id: 55,
  title: "Apple iPhone 11",
  image: "https://www.resim.io/i/dQB6m.png",
  category: "Telefon",
  brand: "Xiamio",
  price: 1550,
  discountPrice: "1519.00",
  discountPercentage: 2,
  createdDate: "2020-03-05T16:01:38.049Z",
};

test("addProductToBasket function", () => {
  let state = store.getState().basket;
  const initialItemsCount = state.basketItems.length;

  store.dispatch(addProductToBasket(sampleProduct));
  state = store.getState().basket;
  const newlyAddedProduct = state.basketItems.find((item) => item.id === 55);
  expect(newlyAddedProduct?.title).toBe("Apple iPhone 11");
  expect(newlyAddedProduct?.discountPrice).toBe("1519.00");
  expect(state.basketItems.length).toBeGreaterThan(initialItemsCount);
});

test("deleteProductToBasket function", () => {
  let state = store.getState().basket;
  const initialItemsCount = state.basketItems.length;

  store.dispatch(deleteProductToBasket({ id: "55" }));
  state = store.getState().basket;
  expect(state.basketItems.length).toBeLessThan(initialItemsCount);
});

test("showModal function", () => {
  let state = store.getState().basket;
  const isModal = state.isModal;

  store.dispatch(showModal(sampleProduct));
  state = store.getState().basket;
  expect(state.isModal).toBe(!isModal);
});

test("closeModal", () => {
  let state = store.getState().basket;
  const isModal = state.isModal;

  store.dispatch(closeModal(sampleProduct));
  state = store.getState().basket;
  expect(state.isModal).toBe(!isModal);
});

import { store } from "redux/store";
import {
  searchProducts,
  updateProducts,
  // updateFilter,
  updateSelectedFilterKey,
  updateSort,
  updateIndexs,
} from "redux/slices/ProductSlice";

const sampleFilteredProducts = [
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
  {
    id: 56,
    title: "Apple iPhone 11",
    image: "https://www.resim.io/i/dQB6m.png",
    category: "Telefon",
    color: "Siyah",
    brand: "Apple",
    price: 1550,
    discountPrice: "1519.00",
    discountPercentage: 2,
    createdDate: "2020-03-05T16:01:38.049Z",
  },
];
describe("ProductSlice", () => {
  test("searchProducts", () => {
    let state = store.getState().products;
    const initialVisibleItems = state.visibleItems;

    let searchInput = "h";
    store.dispatch(searchProducts(searchInput));
    state = store.getState().products;
    let newlyVisibleItems = state.visibleItems;
    expect(newlyVisibleItems).toEqual(initialVisibleItems);

    searchInput = "hi";
    store.dispatch(searchProducts(searchInput));
    state = store.getState().products;
    newlyVisibleItems = state.visibleItems;
    expect(newlyVisibleItems).toHaveLength(0);
  });

  test("updateProducts", () => {
    let state = store.getState().products;
    const initialVisibleItems = state.visibleItems;
    store.dispatch(updateProducts(sampleFilteredProducts));
    state = store.getState().products;
    let newlyVisibleItems = state.visibleItems;
    expect(newlyVisibleItems).not.toEqual(initialVisibleItems);
  });

  //test("updateFilter", () => {
    //   let state = store.getState().products;
    //   const initialColorFilters = state.colorFilters;
    //   const initialBrandFilters = state.brandFilters;
    //   store.dispatch(updateFilter(sampleFilteredProducts));
    //   state = store.getState().products;
    //   const newlyColorFilters = state.colorFilters;
    //   const newlyBrandFilters = state.brandFilters;
    //   console.log({newlyBrandFilters});
    // //   expect(newlyColorFilters).toEqual({ Siyah: 2 });
    // //   expect(newlyBrandFilters).toEqual({ Apple: 1, Xiamio: 1 });
    //   expect(newlyColorFilters).toEqual({});
    //   expect(newlyBrandFilters).toEqual({});
    //   // expect(newlyColorFilters).not.toEqual(initialColorFilters);
    //   // expect(newlyBrandFilters).not.toEqual(initialBrandFilters);
 // });
  var selectedKeys = [
    ["color", "Siyah"],
    ["brand", "Xiamio"],
  ];
  test("updateSelectedFilterKey", () => {
    let state = store.getState().products;
    const initialSelectedFilter = state.selectedFilter;
    store.dispatch(updateSelectedFilterKey(selectedKeys));
    state = store.getState().products;
    const newlySelectedFilter = state.selectedFilter;
    expect(newlySelectedFilter).not.toEqual(initialSelectedFilter);
  });

  test("updateSort", () => {
    var sort = "price_desc";
    let state = store.getState().products;
    const initialSort = state.sort;
    store.dispatch(updateSort(sort));
    state = store.getState().products;
    const newlySort = state.sort;
    expect(newlySort).not.toEqual(initialSort);
  });

  test("updateIndexs", () => {
    let state = store.getState().products;
    const initialFirstIndex = state.indexOfFirstProducts;
    const initialLastIndex = state.indexOfLastProducts;
    store.dispatch(
      updateIndexs({ indexOfFirstProducts: 12, indexOfLastProducts: 24 })
    );
    state = store.getState().products;
    const newlyFirstIndex = state.indexOfFirstProducts;
    const newlyLastIndex = state.indexOfLastProducts;
    expect(newlyFirstIndex).not.toEqual(initialFirstIndex);
    expect(newlyLastIndex).not.toEqual(initialLastIndex);
  });
});

import { render, screen } from "test-utils";
import { ProductList } from "components";
var preloadedState = {
  products: {
    items: [
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
    visibleItems: [
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
    colorFilters: {},
    brandFilters: {},
    selectedFilter: [],
    sort: "price_asc",
    searchValue: "",
    loading: false,
    error: null,
    indexOfFirstProducts: 1,
    indexOfLastProducts: 1,
  },
};

describe("<ProductList />", () => {
  test("<ProductList />", () => {
    render(<ProductList />, { preloadedState: preloadedState });
    expect(screen.queryByTestId("products")).toBeDefined();
    expect(screen.queryByTestId("product-item")).toBeDefined();
  });
});

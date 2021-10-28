import { render, screen } from "test-utils";
import { ProductHover } from "components";
var containItem = {
  basket: {
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
  },
};

var notContainItem = {
  basket: {
    basketItems: [],
    isModal: false,
    deleteItem: {},
  },
};

const testProduct = {
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
};

describe("<ProductHover />", () => {
  test("render <ProductHover /> component", () => {
    render(<ProductHover {...testProduct} />);
    expect(screen.getByTestId("product-hover")).toBeInTheDocument();
  });

  test("product in the cart cannot be added again.", () => {
    render(<ProductHover {...testProduct} />, {
      preloadedState: containItem,
    });
    expect(screen.getByTestId("not-add-product")).toBeInTheDocument();
  });
  test("render <ProductHover /> component", () => {
    render(<ProductHover {...testProduct} />, {
      preloadedState: notContainItem,
    });
    expect(screen.getByTestId("add-product")).toBeInTheDocument();
  });
});

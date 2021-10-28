import { BasketContent } from "components";
import { render, screen } from "test-utils";
var preloadedState = {
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

describe("<BasketContent />", () => {
  test("render <BasketContent /> component", () => {
    render(<BasketContent />, { preloadedState: preloadedState });
    expect(screen.getByTestId("basket-item")).toBeInTheDocument();
  });
});

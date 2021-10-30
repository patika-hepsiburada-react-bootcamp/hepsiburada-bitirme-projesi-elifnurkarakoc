import { render, screen } from "test-utils";
import { Product } from "components";

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

describe("<Product />", () => {
  test("render <Product /> component", () => {
    render(<Product {...testProduct} />);
    expect(screen.getByTestId("product")).toBeInTheDocument();
  });
});

import { Basket } from "components";
import { render, fireEvent, screen } from "test-utils";

describe("<Basket/>", () => {
  test("render <Basket/> component", () => {
    render(<Basket />);
    expect(screen.getByText("Sepetim")).toBeInTheDocument();
    expect(screen.getByTestId("basket-badge")).not.toBeNull();
  });
  test("show basket content", () => {
    render(<Basket />);
    fireEvent.mouseOver(screen.getByTestId("basket-button"));
    expect(screen.getByTestId("basket-content")).toBeInTheDocument();
  });
});

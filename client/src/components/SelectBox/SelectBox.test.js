import { render, screen } from "test-utils";
import { SelectBox } from "components";
import userEvent from "@testing-library/user-event";
describe("<SelectBox />", () => {
  test("render <SelectBox /> component", () => {
    render(<SelectBox />);
    expect(screen.getByTestId("select")).toBeInTheDocument();
  });
  test("select options", () => {
    render(<SelectBox />);
    expect(screen.getByTestId("select")).toBeInTheDocument();
    userEvent.selectOptions(screen.getByTestId("select"), "price_asc");
    expect(
      screen.getByRole("option", { name: "En Düşük Fiyat" }).selected
    ).toBe(true);
    expect(
      screen.getByRole("option", { name: "En Yüksek Fiyat" }).selected
    ).toBe(false);
    expect(
      screen.getByRole("option", { name: "En Yeniler (A>Z)" }).selected
    ).toBe(false);
    expect(
      screen.getByRole("option", { name: "En Yeniler (Z>A)" }).selected
    ).toBe(false);
  });
});

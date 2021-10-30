import { render, screen, fireEvent } from "test-utils";
import { SearchInput } from "components";
describe("<SearchInput />", () => {
  test("render <SearchInput /> component ", () => {
    render(<SearchInput />);
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  test("search input control - correct input", () => {
    render(<SearchInput />);
    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "hi" },
    });
    expect(screen.getByTestId("search-input")).toHaveValue("hi");
    expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
  });

  test("search input control - invalid input", () => {
    render(<SearchInput />);
    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: "h" },
    });
    expect(screen.getByTestId("search-input")).toHaveValue("h");
    expect(screen.queryByTestId("alert")).toBeInTheDocument();
  });
});

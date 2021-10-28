import { render, screen } from "test-utils";
import { SearchInput } from "components";
import userEvent from "@testing-library/user-event";
describe("<SearchInput />", () => {
  test("render <SearchInput /> component ", () => {
    render(<SearchInput />);
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });

  test("search input control - correct input", () => {
    render(<SearchInput />);
    userEvent.type(screen.getByTestId("search-input"), "hi");
    expect(screen.getByTestId("search-input")).toHaveValue("hi");
    expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
  });

  test("search input control - invalid input", () => {
    render(<SearchInput />);
    userEvent.type(screen.getByTestId("search-input"), "h");
    expect(screen.getByTestId("search-input")).toHaveValue("h");
    expect(screen.queryByTestId("alert")).toBeInTheDocument();
  });
});

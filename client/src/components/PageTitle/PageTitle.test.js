import { render, screen } from "test-utils";
import { PageTitle } from "components";

var preloadedState = {
  products: {
    items: [],
    visibleItems: [],
    colorFilters: {},
    brandFilters: {},
    selectedFilter: [],
    sort: "",
    searchValue: "test page title",
    loading: false,
    error: null,
    indexOfFirstProducts: 0,
    indexOfLastProducts: 0,
  },
};

describe("<PageTitle />", () => {
  test("render <PageTitle /> component", () => {
    render(<PageTitle />, { preloadedState: preloadedState });
    expect(screen.getByTestId("page-title")).toBeInTheDocument();
    expect(screen.getByText("test page title")).toBeInTheDocument();
  });
});

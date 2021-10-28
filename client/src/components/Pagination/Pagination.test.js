import { render, screen } from "test-utils";
import { Pagination } from "components";

describe("<Pagination />", () => {
  test("render <Pagination /> component", () => {
    render(<Pagination productPerPage={12} totalCount={36} paginate={1} />);
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
    expect(screen.getByTestId("back-button")).toBeInTheDocument();
    expect(screen.getByTestId("next-button")).toBeInTheDocument();
  });
});

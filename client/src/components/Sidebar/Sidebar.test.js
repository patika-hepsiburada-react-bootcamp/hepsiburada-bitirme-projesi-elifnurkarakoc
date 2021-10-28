import { render, screen } from "test-utils";
import { Sidebar } from "components";

describe("<Sidebar />", () => {
  test("render <Sidebar /> component", () => {
    render(<Sidebar title={""} propertyName={""} filterValues={""} />);
    expect(screen.queryByTestId("sidebar")).toBeInTheDocument();
  });
});

import { render, screen } from "test-utils";
import { SubHeader } from "components";

describe("<SubHeader />", () => {
  test("render <SubHeader /> component", () => {
    render(<SubHeader />);
    expect(screen.queryByTestId("subheader")).toBeDefined();
  });
});

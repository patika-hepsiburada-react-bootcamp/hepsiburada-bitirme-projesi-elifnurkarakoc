import { Logo } from "components";
import { render, screen } from "test-utils";

describe("<Logo/>", () => {
  test("render <Logo/> component", () => {
    render(<Logo />);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });
});

import Container from "./container";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

describe("Container", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<Container>children</Container>);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Structure", () => {
    const testChildren = "Test children";

    const { container } = render(<Container>{testChildren}</Container>);

    expect(screen.getByText(testChildren)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("container");
  });
});

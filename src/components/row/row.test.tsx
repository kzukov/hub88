import Row from "./row";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

describe("Row", () => {
  test("Snapshot", () => {
    const { asFragment } = render(<Row>children</Row>);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Structure", () => {
    const testChildren = "Test children";

    const { container } = render(<Row>{testChildren}</Row>);

    expect(screen.getByText(testChildren)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("row");
  });
});

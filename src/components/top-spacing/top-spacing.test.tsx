import TopSpacing from "./top-spacing";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("TopSpacing", () => {
  test("Snapshot", () => {
    const { asFragment } = render(<TopSpacing>children</TopSpacing>);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Structure", () => {
    const testChildren = "Test children";

    const { container } = render(<TopSpacing>{testChildren}</TopSpacing>);

    expect(container.firstChild).toHaveClass(`mt-3`);
  });
});

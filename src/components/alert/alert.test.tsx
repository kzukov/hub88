import Alert from "./alert";
import { render, screen } from "@testing-library/react";

describe("Alert", () => {
  test("Snapshot", () => {
    const { asFragment } = render(<Alert type="primary">children</Alert>);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Structure", () => {
    const testChildren = "Test children";
    const testType = "primary";

    const { container } = render(<Alert type={testType}>{testChildren}</Alert>);

    expect(screen.getByText(testChildren)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(`alert alert-${testType}`);
  });
});

import Input from "./input";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Input", () => {
  test("Snapshot", () => {
    const { asFragment } = render(<Input />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("Structure", () => {
    const testPlaceholder = "Test placeholder";

    const { container } = render(<Input placeholder={testPlaceholder} />);

    const element = screen.getByPlaceholderText(testPlaceholder);

    expect(element).toBeInTheDocument();

    expect(container.firstChild).toHaveClass(`form-control`);
  });

  test("Event: onChange", async () => {
    const testvalue = "testvalue";

    render(<Input />);

    const input = screen.getByRole<HTMLInputElement>("textbox");

    fireEvent.change(input, { target: { value: testvalue } });

    expect(input.value).toBe(testvalue);
  });
});

import React from "react";
import Input from "./input";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<Input />", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<Input />);

    expect(asFragment()).toMatchSnapshot();
  });

  test("fires onChange event if input changes", async () => {
    const testvalue = "testvalue";

    render(<Input />);

    const input = screen.getByRole<HTMLInputElement>("textbox");

    fireEvent.change(input, { target: { value: testvalue } });

    expect(input.value).toBe(testvalue);
  });
});

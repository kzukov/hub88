import React from "react";
import Alert from "./alert";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<Alert />", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<Alert type="primary">children</Alert>);

    expect(asFragment()).toMatchSnapshot();
  });
});

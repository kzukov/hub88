import React from "react";
import Row from "./row";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<Row />", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<Row>children</Row>);

    expect(asFragment()).toMatchSnapshot();
  });
});

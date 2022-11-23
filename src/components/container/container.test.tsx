import React from "react";
import Container from "./container";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<Container />", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<Container>children</Container>);

    expect(asFragment()).toMatchSnapshot();
  });
});

import React from "react";
import TopSpacing from "./top-spacing";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<TopSpacing />", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<TopSpacing>children</TopSpacing>);

    expect(asFragment()).toMatchSnapshot();
  });
});

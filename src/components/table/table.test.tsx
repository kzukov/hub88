import React from "react";
import Table, { TableColumn, TableData } from "./table";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("<Table />", () => {
  test("matches snapshot", () => {
    const columns: TableColumn[] = [
      {
        key: "test",
        content: "name",
      },
    ];

    const data: TableData[] = [
      {
        test: "value",
      },
    ];

    const { asFragment } = render(<Table columns={columns} data={data} />);

    expect(asFragment()).toMatchSnapshot();
  });
});

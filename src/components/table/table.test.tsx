import Table, { TableColumn, TableData } from "./table";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Table", () => {
  test("Snapshot", () => {
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

  test("Structure", () => {
    const columns: TableColumn[] = [
      { key: "name", content: "Name" },
      { key: "age", content: "Age" },
    ];

    const data: TableData[] = [
      { name: "John", age: "25" },
      { name: "Jane", age: "30" },
    ];

    const { container } = render(<Table columns={columns} data={data} />);

    expect(container.firstChild).toHaveClass("table");

    expect(screen.getByText("Index")).toBeInTheDocument();

    columns.forEach((column) => {
      expect(screen.getByText(column?.content?.toString())).toBeInTheDocument();
    });

    data.forEach((item, index) => {
      expect(screen.getByText(index.toString())).toBeInTheDocument();
      
      columns.forEach((column) => {
        expect(
          screen.getByText(item[column.key] ?? "No value")
        ).toBeInTheDocument();
      });
    });
  });
});

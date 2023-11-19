export type TableData = { [key: string]: string };

export type TableColumn = {
  key: string;
  content: string;
};

type TableProps = {
  columns: TableColumn[];
  data: TableData[];
};

function Table(props: TableProps) {
  const { columns, data } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Index</th>
          {columns.map((column, index) => (
            <th key={index} scope="col">
              {column.content}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index}</th>
            {columns.map((column, index) => (
              <td key={index}>{item[column.key] ?? "No value"}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

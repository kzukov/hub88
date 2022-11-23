import React, { ReactNode } from "react";

type RowProps = {
  children: ReactNode;
};

function Row(props: RowProps) {
  const { children } = props;

  return <div className="row">{children}</div>;
}

export default Row;
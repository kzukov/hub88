import React, { ReactNode } from "react";

type TopSpacingProps = {
  children: ReactNode;
};

function TopSpacing(props: TopSpacingProps) {
  const { children } = props;

  return <div className="mt-3">{children}</div>;
}

export default TopSpacing;
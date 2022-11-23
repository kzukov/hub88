import React, { ReactNode } from "react";

type AlertProps = {
  type: "danger" | "primary" | "dark" | "warning";
  children: ReactNode;
};

function Alert(props: AlertProps) {
  const { type, children } = props;

  return (
    <div className={`alert alert-${type}`} role="alert">
      {children}
    </div>
  );
}

export default Alert;

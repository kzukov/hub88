import React from "react";

type InputProps = {
  onChange?: (value: string) => void;
  placeholder?: string | undefined;
};

function Input(props: InputProps) {
  const { onChange, placeholder } = props;

  return (
    <input
      type="text"
      className="form-control"
      placeholder={placeholder}
      onChange={(event) => {
        if (onChange) {
          onChange(event.target.value);
        }
      }}
    />
  );
}

export default Input;

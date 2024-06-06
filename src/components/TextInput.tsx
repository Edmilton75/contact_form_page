import React from "react";
import "./TextInput.css";

type textInputProps = React.ComponentProps<"input"> & {
  label: string;
};

const TextInput = ({ label, ...props }: textInputProps) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input name={label} id={label} {...props} />
    </div>
  );
};

export default TextInput;

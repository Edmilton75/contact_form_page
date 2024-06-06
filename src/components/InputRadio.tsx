import React from "react";
import "./InputRadio.css";

type textInputProps = React.ComponentProps<"input"> & {
  label: string;
};

const InputRadio = ({ label, ...props }: textInputProps) => {
  return (
    <div className="input-radio">
      <input type="radio" name="radio" id={label} {...props} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default InputRadio;

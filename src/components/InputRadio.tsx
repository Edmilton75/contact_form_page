import React from "react";
import "./InputRadio.css";

type InputRadioProps = React.ComponentProps<"input"> & {
  label: string;
};

const InputRadio = ({ label, ...props }: InputRadioProps) => {
  return (
    <div className="input-radio">
      <input type="radio" name="radio" id={label} {...props} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default InputRadio;

import React from "react";
import "./Checkbox.css";

type Checkbox = React.ComponentProps<"input"> & {
  label: string;
};

const Checkbox = ({ label, ...props }: Checkbox) => {
  return (
    <div className="checkbox">
      <input id="checkbox" {...props} />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
};

export default Checkbox;

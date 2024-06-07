import React, { useState } from "react";
import "./Checkbox.css";

type Checkbox = React.ComponentProps<"input"> & {
  label: string;

  check?: boolean;
  setCheck?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Checkbox = ({ label, ...props }: Checkbox) => {
  const [check, setCheck] = useState(false);
  return (
    <div className="checkbox">
      <input
        id="checkbox"
        checked={check}
        onClick={() => setCheck(!check)}
        {...props}
      />
      <label htmlFor="checkbox">{label}</label>
    </div>
  );
};

export default Checkbox;

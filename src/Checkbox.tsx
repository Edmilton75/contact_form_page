import React, { useState } from "react";

type Checkbox = {
  type: string;
  label: string;
  id: string;
  check?: boolean;
  setCheck?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Checkbox = (props: Checkbox) => {
  const [check, setCheck] = useState(false);
  return (
    <div className="checkbox">
      <input
        id={props.id}
        type={props.type}
        checked={check}
        onClick={() => setCheck(!check)}
      />
      <label>{props.label}</label>
    </div>
  );
};

export default Checkbox;

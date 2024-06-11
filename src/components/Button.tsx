type Btn = {
  type: "submit" | "reset" | "button" | undefined;
  textBtn: string;
};

const button = (props: Btn) => {
  return (
    <div className="button">
      <button type={props.type}>{props.textBtn}</button>
    </div>
  );
};

export default button;

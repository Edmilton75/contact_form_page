type InputValue = {
  id: string;
  type: string;
  name: string;
  children?: string;
  width?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input = (props: InputValue) => {
  return (
    <div style={{ width: props.width }}>
      <label htmlFor={props.name}>{props.children}</label>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Input;

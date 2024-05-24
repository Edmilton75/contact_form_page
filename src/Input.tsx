type InputValue = {
  id: string;
  type: string;
  name: string;
  children?: string;
  width?: string;
};

const Input = (props: InputValue) => {
  return (
    <div style={{ width: props.width }}>
      <label htmlFor={props.name}>{props.children}</label>
      <input id={props.id} name={props.name} type={props.type} />
    </div>
  );
};

export default Input;

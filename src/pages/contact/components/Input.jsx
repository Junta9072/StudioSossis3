export default function Input(props) {
  return (
    <input
      className="form__input form__text"
      type={props.type}
      required={props.required}
      placeholder={props.label}
      name={props.name}
    ></input>
  );
}

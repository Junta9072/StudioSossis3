export default function TextArea(props) {
  return (
    <textarea
      className="form__input form__area"
      required={props.required}
      name={props.name}
    ></textarea>
  );
}

export default function ContactFormCover(props) {
  return (
    <div className="form__cover__container">
      <p>{props.timeout}</p>
      <p className="form__cover__content">
        Thanks for your message <br /> I'll get back to you as soon as possible.
      </p>
    </div>
  );
}

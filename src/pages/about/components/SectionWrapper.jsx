export default function SectionWrapper(props) {
  return (
    <div className="section__container">
      <div className="section__content">{props.children}</div>
    </div>
  );
}

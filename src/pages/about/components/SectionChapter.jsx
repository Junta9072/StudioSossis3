export default function SectionChapter(props) {
  return (
    <div className="section__chapter__container">
      <h3 className="section__chapter__title">{props.title}</h3>
      <p className="section__chapter__text">{props.text}</p>
    </div>
  );
}

export default function BlogPostPlaceholder() {
  return (
    <div className="blogpost__container blogpost__container--placeholder">
      <div className="blogpost__content">
        <div className="blogpost__header">
          <h3 className="blogpost__title">loading</h3>
          <p className="blogpost__date">00-00</p>
        </div>
        <div className="blogpost__spacer"></div>
        <p className="blogpost__description">description</p>
        {/* <div className="blogpost__spacer"></div> */}
        <div className="blogpost__tags">
          <span className="blogpost__tag">#tag</span>
        </div>
      </div>

      <div className="blogpost__img--placeholder"></div>
    </div>
  );
}

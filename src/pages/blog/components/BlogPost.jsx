export default function BlogPost(props) {
  let postDate = new Date(props.data.date);
  let postMonth = postDate.getMonth() + 1;
  return (
    <div className="blogpost__container">
      <div className="blogpost__content">
        <div className="blogpost__header">
          <h3 className="blogpost__title">{props.data.title.rendered}</h3>
          <p className="blogpost__date">
            {postDate.getDate() + 1 + "—" + postMonth}
          </p>
        </div>
        <div className="blogpost__spacer"></div>
        <p className="blogpost__description">
          {props.data.acf.blogpost_description}
        </p>
        {/* <div className="blogpost__spacer"></div> */}
        <div className="blogpost__tags">
          {props.data.acf.blogpost_tags.map((tag, t) => {
            return (
              <span className="blogpost__tag" key={t}>
                {" #" + props.tags.find((item) => item.id == tag).name}
              </span>
            );
          })}
        </div>
      </div>

      <img
        className="blogpost__img"
        src={props.data.acf.blogpost_image.sizes.large}
        alt=""
      />
    </div>
  );
}

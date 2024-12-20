import { useState, useEffect } from "react";
import TagIcon from "./TagIcon";

export default function Pamflet(props) {
  const [title, setTitle] = useState([]);
  const [tagIcons, setTagIcons] = useState([]);
  const [tags, setTags] = useState([]);
  const [filter, setFilter] = useState("0%");

  useEffect(() => {
    if (props.data.acf) {
      // console.log(props.data);
      setTitle(
        props.data.acf.project_name.split(" ").map((item, i) => {
          return (
            <div className="project__title__word" key={i}>
              <div className="project__title__word--flip1">{item}</div>
              <div className="project__title__word--flip2">{item}</div>
            </div>
          );
        })
      );
      setTagIcons(
        props.data.acf.project_tags.map((item, i) => {
          return <TagIcon data={item.name} key={i} />;
        })
      );
      setTags(
        props.data.acf.project_tags.map((item, i) => {
          if (i == props.data.acf.project_tags.length - 1) {
            return item.name;
          } else {
            return item.name + " | ";
          }
        })
      );
    }
  }, []);

  useEffect(() => {
    if (props.filter == "") {
      setFilter("0%");
    } else {
      if (props.data.acf.project_tags.some((tag) => tag.name == props.filter)) {
        setFilter("0%");
      } else {
        setFilter("100%");
      }
    }
  }, [props.filter]);

  return (
    <a
      href={`/${encodeURIComponent(
        props.data.acf.project_color_primary.replace("#", "")
      )}/${encodeURIComponent(props.data.slug)}`}
      className="project postit"
      style={{
        backgroundColor: props.data.acf.project_color_primary,
        filter: "grayscale(" + filter + ")",
      }}
    >
      <div
        className="project__bg"
        style={{
          backgroundImage:
            "url(" + props.data.acf.project_image_header.url + ")",
        }}
      ></div>
      <div
        className="project__border"
        style={{ borderColor: props.data.acf.project_color_primary }}
      ></div>
      <div className="project__content">
        <h2 className="project__title">
          <div className="project__title__content">{title}</div>
        </h2>
        <div className="project__tags">
          <div className="project__tags--icons">{tagIcons}</div>
          <p className="project__tags--text">{tags}</p>
        </div>
      </div>
    </a>
  );
}

import { useState, useEffect } from "react";
import "../styles/showCase.css";

export default function ShowCase(props) {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [year, setYear] = useState("");
  const [icon, setIcon] = useState("");
  const [backgroundImg, setBackgroundImg] = useState("");
  const [slug, setSlug] = useState("");

  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [cursorScale, setCursorScale] = useState(1);

  function checkCursor(e) {
    if (e.pageY > window.innerHeight) {
      setCursorScale(0);
    } else {
      setCursorScale(1);
    }
  }

  useEffect(() => {
    if (props.data.acf && props.data.acf.project_icon.url) {
      setTitle(
        props.data.acf.project_title.split(" ").map((item, i) => {
          return (
            <div className="title__wordContainer" key={i}>
              <div
                style={{ animationDelay: i * 0.1 + "s" }}
                className="title__word"
              >
                {item}
              </div>
            </div>
          );
        })
      );
      setSubTitle(
        props.data.acf.project_description
          .split(/(?<=[,.])\s+/g)
          .map((item, i) => {
            return (
              <div className="showCase__wordContainer" key={i}>
                <div
                  style={{ animationDelay: 0.4 + i * 0.05 + "s" }}
                  className="showCase__word"
                >
                  {item}
                </div>
              </div>
            );
          })
      );
    }

    setYear("MMXXIV");

    try {
      setIcon(props.data.acf.project_icon.url);
      setBackgroundImg(props.data.acf.project_image_header.url);
      setSlug(props.data.slug);
    } catch {
      console.log("not ready");
    }

    // setBackgroundImg(props.data.acf.project_image_header.url);
  }, [props]);

  return (
    <>
      <a
        href={`/${encodeURIComponent("f43711")}/${encodeURIComponent(slug)}`}
        className="showCase__spacer"
        onMouseMove={(e) => {
          setCursorX(e.pageX);
          setCursorY(e.pageY);
        }}
        onMouseEnter={() => setCursorScale(1)}
        onMouseLeave={() => setCursorScale(0)}
      >
        <img
          src="./assets/images/cursor_learnmore_type.svg"
          className="showCase__cursor"
          style={{
            left: cursorX + 32,
            top: cursorY + 32,
            transform: "scale(" + cursorScale + ")",
          }}
        ></img>
      </a>
      <div
        className="showCase__container"
        style={{
          backgroundImage: "url(" + backgroundImg + ")",
        }}
      >
        <div className="showCase__header">
          <h1 className="showCase__title">{title}</h1>
          <h3 className="showCase__subTitle">{subTitle}</h3>
        </div>
        <div className="showCase__footer">
          <div className="showCase__datum showCase__wordContainer">
            <div className="showCase__word" style={{ animationDelay: "1s" }}>
              {year}
            </div>
          </div>
          <div className="showCase__icon__container">
            <img
              className="showCase__icon"
              src={icon}
              alt=""
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

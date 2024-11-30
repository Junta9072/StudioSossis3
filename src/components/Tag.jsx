import { useState } from "react";
import TagIcon from "./TagIcon";

export default function Tag(props) {
  const [bgSwatch, setBgSwatch] = useState({});
  const [textSwatch, setTextSwatch] = useState({});
  const [hoverClass, setHoverClass] = useState("");

  return (
    <div
      className={"tagLine__phrase " + hoverClass}
      onClick={() => props.filter(props.data)}
    >
      Looking for &thinsp;
      {props.data.name}
      <TagIcon data={props.data.name} />
      <div className="tagLine__bgWipe" style={bgSwatch}></div>
      <div
        style={textSwatch}
        className="tagLine__word "
        onMouseOver={() => {
          setBgSwatch({ backgroundColor: props.data.colors[0] });
          setTextSwatch({ color: props.data.colors[1] });
          setHoverClass("tagLine__hover");
        }}
        onMouseLeave={() => {
          setBgSwatch({});
          setTextSwatch({});
          setHoverClass("");
        }}
      >
        Looking for &thinsp;
        {props.data.name}
        <TagIcon data={props.data.name} alt={1} />
      </div>
      &thinsp;
    </div>
  );
}

import { useState } from "react";

export default function TimelineItem(props) {
  let defaultPalette = [props.data.colors[0], props.data.colors[1]];
  const [palette, setPalette] = useState(defaultPalette);

  return (
    <div
      className={"timeline__item "}
      style={{
        background: palette[1],
        color: palette[0],
        borderColor: palette[2],
        gridArea: props.data.grid_area,
      }}
      onClick={() => props.setTimelineTopic(props.id)}
      onMouseEnter={() =>
        setPalette([props.data.colors[2], props.data.colors[0]])
      }
      onMouseLeave={() => {
        setPalette(defaultPalette);
      }}
    >
      <p className="timeline__item__title">{props.data.name}</p>
    </div>
  );
}

import { useState, useEffect } from "react";
import Tag from "./Tag";

export default function TagSlider(props) {
  const [tagLines, setTagLines] = useState();
  let tags = [
    { name: "3D", colors: ["#29421b", "#d4f96e"] },
    { name: "animation", colors: ["#290e66", "#866bf7"] },
    { name: "Creative Coding", colors: ["#f43711", "#ffa394"] },
    { name: "Graphic Design", colors: ["#0066cc", "#ffffff"] },
    { name: "Illustration", colors: ["#752f00", "#f4a031"] },
    { name: "Micro Project", colors: ["#223f30", "#6cffb5"] },
    { name: "Project", colors: ["#871d2c", "#f95d91"] },
    // { name: "Test", colors: ["#606060", "#ffffff"] },
    { name: "UI", colors: ["#85c8ff", "#0066cc"] },
    { name: "UX", colors: ["#e7ffa6", "#5e8e19"] },
    { name: "Webdesign", colors: ["#ffd797", "#cc8200"] },
  ];

  useEffect(() => {
    let index = tags.length;
    let randomIndex;
    while (index != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * index);
      index--;

      // And swap it with the current element.
      [tags[index], tags[randomIndex]] = [tags[randomIndex], tags[index]];
    }

    setTagLines(
      tags.map((item, i) => {
        return <Tag data={item} key={i} filter={props.filter} />;
      })
    );
  }, []);

  return (
    <div
      // style={{
      //   transform: "translateX(" + Math.floor(Math.random() * -50) + "px)",
      // }}
      className="tagLine__line"
    >
      <div className="tagLine__marquee">
        {tagLines}
        <div className="tagLine__marquee2">{tagLines}</div>
      </div>
    </div>
  );
}

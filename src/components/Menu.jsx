import { useState, useEffect } from "react";
import "../reset.css";
import "../App.css";

import TitleBar from "./Titlebar";

export default function Menu(props) {
  const [menuState, setMenuState] = useState(0);
  const [menuStateStyle, setMenuStateStyle] = useState("menu__inactive");
  return (
    <>
      <div
        className={"menu__bgCover " + menuStateStyle}
        onClick={() => {
          setMenuState(0);
          setMenuStateStyle("menu__inactive");
        }}
      ></div>
      <div
        className={"titleBar__menu " + menuStateStyle}
        onMouseEnter={() => {
          setMenuState(1);
          setMenuStateStyle("menu__hover");
        }}
        onMouseLeave={() => {
          setMenuState(0);
          setMenuStateStyle("menu__inactive");
        }}
        onClick={() => {
          setMenuState(2);
          setMenuStateStyle("menu__active");
        }}
        style={{
          "--menuColor": props.color,
          "--menuBg": props.bg,
        }}
      >
        <TitleBar name="contact" index={0} menu={menuState} />
        <TitleBar name="blog" index={1} menu={menuState} />
        <TitleBar name="about" index={2} menu={menuState} />
        <TitleBar name="logo" index={3} menu={menuState} />
      </div>
    </>
  );
}

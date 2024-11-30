import "../reset.css";
import "../App.css";
import "../index.css";

import { useState, useEffect } from "react";

import MenuIcon from "./MenuIcon";

export default function Titlebar(props) {
  const [offset, setOffset] = useState(0);
  const [delay, setDelay] = useState(0);
  const [menuStyling, setMenuStyling] = useState("titleBar__inactive");
  const [page, setPage] = useState("/" + props.name);

  useEffect(() => {
    switch (props.menu) {
      case 0:
        // setOffset(0);
        setDelay(0);
        setMenuStyling("titleBar__inactive");
        break;
      case 1:
        // setOffset(-8);
        setDelay(1 * (0.2 - props.index * 0.05));
        setMenuStyling("titleBar__hover");
        break;
      case 2:
        // setOffset(-77);
        setDelay(0);
        setMenuStyling("titleBar__active");
        break;
      default:
        break;
    }

    if (props.index == 3) {
      setMenuStyling("titleBar__active");
      if (window.location.pathname != "/" && props.menu == 2) {
        setPage("/");
      } else {
        setPage(undefined);
      }
    }
  }, [props.menu]);
  return (
    <a href={page} className={"titleBar__anchor " + props.name}>
      <div
        className={"titleBar " + props.name + " " + menuStyling + ""}
        style={{
          transform: "translateX(" + offset * props.index + "px)",
          //on menu open => stagger transition, on menu close => no stagger
          transitionDelay: delay + "s",
        }}
      >
        {/* <img
        className="titleBar__logo"
        src={"/src/assets/images/menu_" + props.name + ".svg"}
        alt=""
      /> */}

        <MenuIcon icon={props.name} />
      </div>
    </a>
  );
}

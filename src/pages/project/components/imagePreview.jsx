import { useState, useEffect } from "react";

export default function ImagePreview(props) {
  const [displayToggle, setDisplayToggle] = useState("");
  const [zoomAmount, setZoomAmount] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const [mouseLogging, setMouseLogging] = useState(false);

  useEffect(() => {
    if (props.toggle == true) {
      setDisplayToggle("imgPreview__display");
      document.body.style.overflowY = "hidden";
    } else {
      setDisplayToggle("imgPreview__hidden");
      document.body.style.overflowY = "scroll";
    }

    console.log(props.toggle);
  }, [props.toggle]);

  function zoomHandler(zoom) {
    console.log(zoom);
    let currZoom = zoomAmount;
    if (zoom < 0 && zoomAmount < 5) {
      //zoom in
      setZoomAmount(currZoom + 0.2);
    } else if (zoom > 0 && zoomAmount > 1) {
      //zoom out
      setZoomAmount(currZoom - 0.2);
    }

    console.log(zoomAmount);
  }

  let oldClient = { x: null, y: null };
  function moveHandler(mX, mY) {
    if (mouseLogging) {
      if (oldClient.x == null) {
        oldClient.x = mX;
        oldClient.y = mY;
      } else {
        setOffsetX(offsetX + (mX - oldClient.x));
        setOffsetY(offsetY + (mY - oldClient.y));
      }
      oldClient = { x: mX, y: mY };
    }
  }

  window.addEventListener("mouseup", () => setMouseLogging(false));

  return (
    <div className={"imgPreview__container " + displayToggle}>
      <div
        className={"imgPreview__bg "}
        onClick={() => props.exitPreview()}
      ></div>
      <div className="imgPreview__img__container">
        <img
          className="imgPreview__img"
          src={props.img}
          alt=""
          onWheel={(e) => zoomHandler(e.deltaY)}
          onMouseDown={(e) => {
            setMouseLogging(true);
            startMoveHandler(e.clientX, e.clientY);
          }}
          onMouseUp={() => setMouseLogging(false)}
          onMouseMove={(e) =>
            moveHandler(
              e.clientX,
              e.clientY,
              e.target.offsetLeft,
              e.target.offsetTop
            )
          }
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px) scale(${zoomAmount})`,
          }}
          draggable="false"
        />
        <div className="imgPreview__close" onClick={() => props.exitPreview()}>
          <img src="./assets/images/icon_close.svg" />
          <p>close</p>
        </div>
      </div>
    </div>
  );
}

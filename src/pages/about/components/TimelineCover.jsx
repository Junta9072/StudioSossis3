import urls from "../../../paths.json";

export default function TimelineCover(props) {
  let toggleClass = props.active
    ? "timeline__content--active"
    : "timeline__content--hidden";
  return (
    <div className="timeline__content__wrapper">
      <div
        className={"timeline__content__bg " + toggleClass}
        style={{ background: props.data.colors[0] }}
      >
        <div
          className="timeline__content "
          style={{
            background: props.data.colors[1],
            color: props.data.colors[0],
          }}
        >
          <div className="timeline__content__container">
            <div className="timeline__content__header">
              <h3 className="timeline__content__title">
                {props.data.full_name}
              </h3>
              <div className="timeline__content__closer">
                <p className="timeline__content__timestamp">
                  {props.data.timestamp}
                </p>
                <div onClick={() => props.toggle()}>
                  <svg
                    className="timeline__content__close"
                    id="Layer_2"
                    data-name="Layer 2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 97.61 64.38"
                    style={{ fill: props.data.colors[0] }}
                  >
                    <g id="Layer_1-2" data-name="Layer 1">
                      <g>
                        <polygon points="16.78 0 48.64 31.75 48.64 32.42 16.8 64.38 0 47.65 15.47 32.13 .05 16.78 16.78 0" />
                        <polygon points="48.64 31.75 48.98 32.09 48.64 32.42 48.64 31.75" />
                      </g>
                      <g>
                        <polygon points="80.84 0 48.98 31.75 48.98 32.42 80.81 64.38 97.61 47.65 82.14 32.13 97.57 16.78 80.84 0" />
                        <polygon points="48.98 31.75 48.64 32.09 48.98 32.42 48.98 31.75" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="timeline__content__main"
              style={{ borderTop: "2px solid " + props.data.colors[0] }}
            >
              <p className="timeline__content__description">
                {props.data.description}
              </p>
              <div className="timeline__content__media">
                {props.data.image_urls.map((item) => {
                  return (
                    <div
                      className="timeline__content__img"
                      style={{
                        backgroundImage:
                          "url(" +
                          urls.live +
                          "wp-content/uploads" +
                          item +
                          ")",
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

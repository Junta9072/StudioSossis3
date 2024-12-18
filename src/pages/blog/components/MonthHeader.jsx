import dayjs from "dayjs";

export default function MonthHeader(props) {
  console.log(props.title);
  function getSeasonIcon() {
    switch (props.season) {
      case "autumn":
        return (
          <svg
            id="uuid-25a5b6f3-47c3-459d-92a3-74ea3c433a27"
            data-name="Laag 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
          >
            <g
              id="uuid-4d42edac-13a1-477e-b86d-21eeea615970"
              data-name="Layer 1"
            >
              <g>
                <polygon
                  points="16.06 11.61 20.5 7.17 20.5 .5 13.83 .5 9.39 4.94 9.39 .5 4.94 2.72 .5 .5 .5 10.5 10.5 20.5 20.5 20.5 18.28 16.06 20.5 11.61 16.06 11.61"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1=".5"
                  y1="20.5"
                  x2="15.83"
                  y2="5.17"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g>
                  <line
                    x1="10.5"
                    y1="15.5"
                    x2="12.64"
                    y2="15.5"
                    fill="none"
                    stroke="#e7dfcd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <line
                    x1="5.5"
                    y1="8.36"
                    x2="5.5"
                    y2="10.5"
                    fill="none"
                    stroke="#e7dfcd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </g>
          </svg>
        );
        break;
      case "spring":
        return (
          <svg
            id="uuid-c3bed64c-3e05-4416-b272-12d6f7a3bbbf"
            data-name="Laag 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
          >
            <g
              id="uuid-cc833dd6-9624-404c-af43-bf365f3a59e2"
              data-name="Layer 1"
            >
              <g>
                <g>
                  <g>
                    <line
                      x1="13.99"
                      y1="7.01"
                      x2="15.5"
                      y2="5.5"
                      fill="none"
                      stroke="#e7dfcd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <line
                      x1="5.4"
                      y1="5.5"
                      x2="6.92"
                      y2="7.01"
                      fill="none"
                      stroke="#e7dfcd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g>
                    <line
                      x1="7.01"
                      y1="13.99"
                      x2="5.5"
                      y2="15.5"
                      fill="none"
                      stroke="#e7dfcd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <line
                      x1="15.6"
                      y1="15.5"
                      x2="14.08"
                      y2="13.99"
                      fill="none"
                      stroke="#e7dfcd"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </g>
                <g>
                  <path
                    d="m15.5.5h0c2.76,0,5,2.24,5,5h0c0,2.76-2.24,5-5,5h-5v-5c0-2.76,2.24-5,5-5Z"
                    fill="none"
                    stroke="#e7dfcd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="m5.5.5h0c2.76,0,5,2.24,5,5h0c0,2.76-2.24,5-5,5H.5v-5C.5,2.74,2.74.5,5.5.5Z"
                    transform="translate(0 11) rotate(-90)"
                    fill="none"
                    stroke="#e7dfcd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="m10.5,10.5h5c2.76,0,5,2.24,5,5h0c0,2.76-2.24,5-5,5h0c-2.76,0-5-2.24-5-5v-5h0Z"
                    fill="none"
                    stroke="#e7dfcd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="m.5,10.5h5c2.76,0,5,2.24,5,5h0c0,2.76-2.24,5-5,5h0c-2.76,0-5-2.24-5-5v-5h0Z"
                    transform="translate(21 10) rotate(90)"
                    fill="none"
                    stroke="#e7dfcd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </g>
            </g>
          </svg>
        );
        break;
      case "summer":
        return (
          <svg
            id="uuid-1f986f8a-6633-4e70-b7bf-ccd3dbb804d3"
            data-name="Laag 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20.9 21"
          >
            <g
              id="uuid-39004cef-192e-4e5e-9c50-24ca8130b6ee"
              data-name="Layer 1"
            >
              <g>
                <g>
                  <path
                    d="m5.27,10.5H1.83c-.81,0-1.44-.73-1.32-1.53C1.3,3.88,5.92.05,11.34.54c3.94.36,7.17,3.07,8.46,6.6"
                    fill="none"
                    stroke="#e7dfcd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <polyline
                    points="12.91 10.5 12.91 10.5 10.97 10.5"
                    fill="none"
                    stroke="#e7dfcd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <polyline
                    points="18.73 13.83 14.38 13.83 13.28 13.83"
                    fill="none"
                    stroke="#e7dfcd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="m20.33,11.68c-.21-.68-.85-1.18-1.6-1.18"
                    fill="none"
                    stroke="#e7dfcd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="m18.73,10.5c.75,0,1.39.5,1.6,1.18"
                    fill="none"
                    stroke="#e7dfcd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="m18.73,10.5c.75,0,1.39.5,1.6,1.18.04.15.07.32.07.49,0,.4-.14.77-.38,1.06-.03.04-.07.08-.11.12-.3.3-.72.49-1.18.49"
                    fill="none"
                    stroke="#e7dfcd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="m11.6,17.17H3.4c-.92,0-1.67-.75-1.67-1.67h0c0-.92.75-1.67,1.67-1.67"
                    fill="none"
                    stroke="#e7dfcd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="m10.4,20.5h3.86c.92,0,1.67-.75,1.67-1.67h0c0-.92-.75-1.67-1.67-1.67h-3.84"
                    fill="none"
                    stroke="#e7dfcd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <polyline
                  points="8.95 13.83 8.95 13.83 7.02 13.83"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>
        );
        break;
      case "winter":
        return (
          <svg
            id="uuid-900a2bd1-24cc-405a-8095-f9f560325b34"
            data-name="Laag 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
          >
            <g
              id="uuid-4417b738-0ffa-48a1-86ee-41ecc0c5bb4e"
              data-name="Layer 1"
            >
              <g>
                <line
                  x1="20.5"
                  y1=".5"
                  x2=".5"
                  y2="20.5"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <polyline
                  points="20.5 5.5 15.5 5.5 15.5 .5"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1=".5"
                  y1=".5"
                  x2="20.5"
                  y2="20.5"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <polyline
                  points=".5 5.5 5.5 5.5 5.5 .5"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <polyline
                  points="20.5 15.5 15.5 15.5 15.5 20.5"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <polyline
                  points=".5 15.5 5.5 15.5 5.5 20.5"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="8"
                  y1="10.5"
                  x2="13"
                  y2="10.5"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="10.5"
                  y1="8"
                  x2="10.5"
                  y2="13"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1=".5"
                  y1="10.5"
                  x2="3"
                  y2="10.5"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="10.5"
                  y1=".5"
                  x2="10.5"
                  y2="3"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="20.5"
                  y1="10.5"
                  x2="18"
                  y2="10.5"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="10.5"
                  y1="18"
                  x2="10.5"
                  y2="20.5"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>
        );
        break;
      default:
        return (
          <svg
            id="uuid-9eb7c0b3-5068-4d85-9e3c-ba1387cfca4f"
            data-name="Laag 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
          >
            <g
              id="uuid-ec4d549d-733e-4dcd-b904-8ad36bbb57b1"
              data-name="Layer 1"
            >
              <circle
                cx="10.5"
                cy="10.5"
                r="10"
                fill="none"
                stroke="#e7dfcd"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x=".5"
                y=".5"
                width="20"
                height="20"
                fill="none"
                stroke="#e7dfcd"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <line
                x1="20.5"
                y1=".5"
                x2=".5"
                y2="20.5"
                fill="none"
                stroke="#e7dfcd"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <line
                x1=".5"
                y1=".5"
                x2="20.5"
                y2="20.5"
                fill="none"
                stroke="#e7dfcd"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        );
    }
  }

  return (
    <div className="monthHeader">
      <div className="monthHeader__icon">{getSeasonIcon()}</div>
      <p className="monthHeader__title">{props.title}</p>
    </div>
  );
}

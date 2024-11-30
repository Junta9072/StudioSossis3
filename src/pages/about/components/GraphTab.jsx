import { useEffect, useState } from "react";

export default function GraphTab(props) {
  const [tabState, setTabState] = useState("");
  function getTabIcon(name) {
    switch (name) {
      case "Graph":
        return (
          <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
          >
            <g id="Layer_1-2" data-name="Layer 1">
              <g>
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
                <path
                  d="m20.5.5C20.5,13.83.5,7.17.5,20.5"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="13.83"
                  y="13.83"
                  width="6.67"
                  height="6.67"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="7.17"
                  y="13.83"
                  width="6.67"
                  height="6.67"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x=".5"
                  y=".5"
                  width="6.67"
                  height="6.67"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="7.17"
                  y=".5"
                  width="6.67"
                  height="6.67"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="7.17"
                  y1="9.29"
                  x2="7.17"
                  y2="7.17"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <line
                  x1="13.83"
                  y1="13.83"
                  x2="13.83"
                  y2="11.71"
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
      case "Know":
        return (
          <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 21 21"
          >
            <g id="Layer_1-2" data-name="Layer 1">
              <g>
                <path
                  d="m17.17,13.83h3.33v6.67h-10c0-3.68,2.99-6.67,6.67-6.67Z"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-miterlimit="10"
                />
                <path
                  d="m.5,13.83h3.33c3.68,0,6.67,2.99,6.67,6.67H.5v-6.67h0Z"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-miterlimit="10"
                />
                <path
                  d="m10.5,20.5V7.11c0-3.65,2.96-6.61,6.61-6.61h3.39v13.33"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-miterlimit="10"
                />
                <path
                  d="m10.5,20.5V7.11C10.5,3.46,7.54.5,3.89.5H.5v13.33"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-miterlimit="10"
                />
              </g>
            </g>
          </svg>
        );
        break;
      case "Do":
        return (
          <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20.75 20.75"
          >
            <g id="Layer_1-2" data-name="Layer 1">
              <g>
                <path
                  d="m16.96,1.43v1.43c0,.52-.42.93-.93.93h-1.43c-.52,0-.93-.42-.93-.93v-1.43c0-.52-.42-.93-.93-.93H1.43c-.52,0-.93.42-.93.93v4.72c0,.52.42.93.93.93h17.88c.52,0,.93-.42.93-.93V1.43c0-.52-.42-.93-.93-.93h-1.43c-.52,0-.93.42-.93.93Z"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-miterlimit="10"
                />
                <path
                  d="m13.67,8.02v1.25c0,.43-.29.8-.71.91l-4.72,1.18c-.59.15-1.16-.3-1.16-.91v-2.43c0-.52.42-.93.93-.93h4.72c.52,0,.93.42.93.93Z"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-miterlimit="10"
                />
                <path
                  d="m13.67,16.13v3.19c0,.52-.42.93-.93.93h-4.72c-.52,0-.93-.42-.93-.93v-2.01c0-.43.29-.8.71-.91l4.72-1.18c.59-.15,1.16.3,1.16.91Z"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-miterlimit="10"
                />
                <path
                  d="m13.67,11.19v3.01c0,.43-.29.8-.71.91l-4.72,1.18c-.59.15-1.16-.3-1.16-.91v-3.01c0-.43.29-.8.71-.91l4.72-1.18c.59-.15,1.16.3,1.16.91Z"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-miterlimit="10"
                />
              </g>
            </g>
          </svg>
        );
        break;
      default:
    }
  }

  useEffect(() => {
    console.log(props.tab == props.selectedTab);
    setTabState(
      props.tab == props.selectedTab ? "graph__tabActive" : "graph__tabInactive"
    );
  }, [props.selectedTab]);

  return (
    <div
      className={"graph__tab " + tabState}
      onClick={() => props.changeTab(props.tab)}
    >
      <h3 className="graph__name">{props.name}</h3>
      <div className="graph__icon">{getTabIcon(props.name)}</div>
    </div>
  );
}

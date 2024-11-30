import { useEffect, useState } from "react";

import urls from "../../../paths.json";

import GraphTab from "./GraphTab";

export default function Graph() {
  const [graphContent, setGraphContent] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [stickerData, setStickerData] = useState([]);

  let delay = 0.1;

  async function getStickerData(name) {
    const response = await fetch(
      urls.live +
        "wp-json/wp/v2/media?search_columns=post_title&search=skill&per_page=20",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log(json);

    setStickerData(json);
  }

  function graphContentHandler() {
    switch (activeTab) {
      case 0:
        return (
          <svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 1482.42 1111.55"
          >
            <defs>
              <clipPath id="clippath">
                <polygon
                  points="13.23 18.55 196.59 18.55 1478.49 18.55 1478.49 1098.31 13.23 1098.31 13.23 198.51 13.23 18.55"
                  fill="none"
                />
              </clipPath>
              <clipPath id="clippath-1">
                <polygon
                  points="126.46 494.08 152.82 577.93 75.2 565.47 126.46 494.08"
                  fill="none"
                  stroke="#88e25d"
                  stroke-miterlimit="10"
                  stroke-width="1.48"
                />
              </clipPath>
            </defs>
            <g id="Layer_1-2" data-name="Layer 1">
              <polyline
                points="1340.5 1098.31 13.23 1098.31 13.23 81.15"
                fill="none"
                stroke="#e7dfcd"
                stroke-miterlimit="10"
                stroke-width="3.46"
              />
              <polyline
                points="206.55 18.55 1478.49 18.55 1478.49 1052.25"
                fill="none"
                stroke="#e7dfcd"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3.46"
              />
              <g>
                <line
                  x1="379.95"
                  y1="32.77"
                  x2="379.95"
                  y2="18.55"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="394.17"
                  y1="18.55"
                  x2="365.73"
                  y2="18.55"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="563.31"
                  y1="32.77"
                  x2="563.31"
                  y2="18.55"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="577.53"
                  y1="18.55"
                  x2="549.09"
                  y2="18.55"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="746.67"
                  y1="32.77"
                  x2="746.67"
                  y2="18.55"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="760.89"
                  y1="18.55"
                  x2="732.45"
                  y2="18.55"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="930.03"
                  y1="32.77"
                  x2="930.03"
                  y2="18.55"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="944.25"
                  y1="18.55"
                  x2="915.81"
                  y2="18.55"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1113.39"
                  y1="32.77"
                  x2="1113.39"
                  y2="18.55"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1127.61"
                  y1="18.55"
                  x2="1099.18"
                  y2="18.55"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1296.76"
                  y1="32.77"
                  x2="1296.76"
                  y2="18.55"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1310.97"
                  y1="18.55"
                  x2="1282.54"
                  y2="18.55"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="13.23"
                  y1="212.73"
                  x2="13.23"
                  y2="184.29"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="27.45"
                  y1="198.51"
                  x2="13.23"
                  y2="198.51"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="196.59"
                  y1="208.47"
                  x2="196.59"
                  y2="188.56"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="206.55"
                  y1="198.51"
                  x2="186.64"
                  y2="198.51"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="379.95"
                  y1="209.18"
                  x2="379.95"
                  y2="187.85"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="390.62"
                  y1="198.51"
                  x2="369.29"
                  y2="198.51"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="563.31"
                  y1="209.89"
                  x2="563.31"
                  y2="187.13"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="574.69"
                  y1="198.51"
                  x2="551.94"
                  y2="198.51"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="746.67"
                  y1="210.6"
                  x2="746.67"
                  y2="186.42"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="758.76"
                  y1="198.51"
                  x2="734.59"
                  y2="198.51"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="930.03"
                  y1="211.31"
                  x2="930.03"
                  y2="185.71"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="942.83"
                  y1="198.51"
                  x2="917.24"
                  y2="198.51"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1113.39"
                  y1="212.02"
                  x2="1113.39"
                  y2="185"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1126.9"
                  y1="198.51"
                  x2="1099.89"
                  y2="198.51"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1296.76"
                  y1="212.73"
                  x2="1296.76"
                  y2="184.29"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1310.97"
                  y1="198.51"
                  x2="1282.54"
                  y2="198.51"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1478.49"
                  y1="212.73"
                  x2="1478.49"
                  y2="184.29"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1478.49"
                  y1="198.51"
                  x2="1464.27"
                  y2="198.51"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="13.23"
                  y1="392.69"
                  x2="13.23"
                  y2="364.25"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="27.45"
                  y1="378.47"
                  x2="13.23"
                  y2="378.47"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="196.59"
                  y1="387.72"
                  x2="196.59"
                  y2="369.23"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="205.84"
                  y1="378.47"
                  x2="187.35"
                  y2="378.47"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="379.95"
                  y1="388.43"
                  x2="379.95"
                  y2="368.52"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="389.91"
                  y1="378.47"
                  x2="370"
                  y2="378.47"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="563.31"
                  y1="389.14"
                  x2="563.31"
                  y2="367.81"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="573.98"
                  y1="378.47"
                  x2="552.65"
                  y2="378.47"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="746.67"
                  y1="389.85"
                  x2="746.67"
                  y2="367.1"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="758.05"
                  y1="378.47"
                  x2="735.3"
                  y2="378.47"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="930.03"
                  y1="390.56"
                  x2="930.03"
                  y2="366.38"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="942.12"
                  y1="378.47"
                  x2="917.95"
                  y2="378.47"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1113.39"
                  y1="391.27"
                  x2="1113.39"
                  y2="365.67"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1126.19"
                  y1="378.47"
                  x2="1100.6"
                  y2="378.47"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1296.76"
                  y1="391.98"
                  x2="1296.76"
                  y2="364.96"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1310.26"
                  y1="378.47"
                  x2="1283.25"
                  y2="378.47"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1478.49"
                  y1="392.69"
                  x2="1478.49"
                  y2="364.25"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1478.49"
                  y1="378.47"
                  x2="1464.27"
                  y2="378.47"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="13.23"
                  y1="572.65"
                  x2="13.23"
                  y2="544.21"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="27.45"
                  y1="558.43"
                  x2="13.23"
                  y2="558.43"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="196.59"
                  y1="566.96"
                  x2="196.59"
                  y2="549.9"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="205.12"
                  y1="558.43"
                  x2="188.06"
                  y2="558.43"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="379.95"
                  y1="567.68"
                  x2="379.95"
                  y2="549.19"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="389.2"
                  y1="558.43"
                  x2="370.71"
                  y2="558.43"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="563.31"
                  y1="568.39"
                  x2="563.31"
                  y2="548.48"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="573.27"
                  y1="558.43"
                  x2="553.36"
                  y2="558.43"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="746.67"
                  y1="569.1"
                  x2="746.67"
                  y2="547.77"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="757.34"
                  y1="558.43"
                  x2="736.01"
                  y2="558.43"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="930.03"
                  y1="569.81"
                  x2="930.03"
                  y2="547.06"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="941.41"
                  y1="558.43"
                  x2="918.66"
                  y2="558.43"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1113.39"
                  y1="570.52"
                  x2="1113.39"
                  y2="546.34"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1125.48"
                  y1="558.43"
                  x2="1101.31"
                  y2="558.43"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1296.76"
                  y1="571.23"
                  x2="1296.76"
                  y2="545.63"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1309.55"
                  y1="558.43"
                  x2="1283.96"
                  y2="558.43"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1478.49"
                  y1="572.65"
                  x2="1478.49"
                  y2="544.21"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1478.49"
                  y1="558.43"
                  x2="1464.27"
                  y2="558.43"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="13.23"
                  y1="752.61"
                  x2="13.23"
                  y2="724.17"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="27.45"
                  y1="738.39"
                  x2="13.23"
                  y2="738.39"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="196.59"
                  y1="746.21"
                  x2="196.59"
                  y2="730.57"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="204.41"
                  y1="738.39"
                  x2="188.77"
                  y2="738.39"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="379.95"
                  y1="746.93"
                  x2="379.95"
                  y2="729.86"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="388.49"
                  y1="738.39"
                  x2="371.42"
                  y2="738.39"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="563.31"
                  y1="747.64"
                  x2="563.31"
                  y2="729.15"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="572.56"
                  y1="738.39"
                  x2="554.07"
                  y2="738.39"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="746.67"
                  y1="748.35"
                  x2="746.67"
                  y2="728.44"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="756.63"
                  y1="738.39"
                  x2="736.72"
                  y2="738.39"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="930.03"
                  y1="749.06"
                  x2="930.03"
                  y2="727.73"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="940.7"
                  y1="738.39"
                  x2="919.37"
                  y2="738.39"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1113.39"
                  y1="749.77"
                  x2="1113.39"
                  y2="727.02"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1124.77"
                  y1="738.39"
                  x2="1102.02"
                  y2="738.39"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1296.76"
                  y1="750.48"
                  x2="1296.76"
                  y2="726.31"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1308.84"
                  y1="738.39"
                  x2="1284.67"
                  y2="738.39"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1478.49"
                  y1="752.61"
                  x2="1478.49"
                  y2="724.17"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1478.49"
                  y1="738.39"
                  x2="1464.27"
                  y2="738.39"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="13.23"
                  y1="932.57"
                  x2="13.23"
                  y2="904.13"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="27.45"
                  y1="918.35"
                  x2="13.23"
                  y2="918.35"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="196.59"
                  y1="925.46"
                  x2="196.59"
                  y2="911.24"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="203.7"
                  y1="918.35"
                  x2="189.48"
                  y2="918.35"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="379.95"
                  y1="926.18"
                  x2="379.95"
                  y2="910.53"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="387.77"
                  y1="918.35"
                  x2="372.13"
                  y2="918.35"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="563.31"
                  y1="926.89"
                  x2="563.31"
                  y2="909.82"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="571.85"
                  y1="918.35"
                  x2="554.78"
                  y2="918.35"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="746.67"
                  y1="927.6"
                  x2="746.67"
                  y2="909.11"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="755.92"
                  y1="918.35"
                  x2="737.43"
                  y2="918.35"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="930.03"
                  y1="928.31"
                  x2="930.03"
                  y2="908.4"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="939.99"
                  y1="918.35"
                  x2="920.08"
                  y2="918.35"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1113.39"
                  y1="929.02"
                  x2="1113.39"
                  y2="907.69"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1124.06"
                  y1="918.35"
                  x2="1102.73"
                  y2="918.35"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1296.76"
                  y1="929.73"
                  x2="1296.76"
                  y2="906.98"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1308.13"
                  y1="918.35"
                  x2="1285.38"
                  y2="918.35"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1478.49"
                  y1="932.57"
                  x2="1478.49"
                  y2="904.13"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1478.49"
                  y1="918.35"
                  x2="1464.27"
                  y2="918.35"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="13.23"
                  y1="1098.31"
                  x2="13.23"
                  y2="1084.09"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="27.45"
                  y1="1098.31"
                  x2="13.23"
                  y2="1098.31"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="196.59"
                  y1="1098.31"
                  x2="196.59"
                  y2="1091.92"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="202.99"
                  y1="1098.31"
                  x2="190.19"
                  y2="1098.31"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="379.95"
                  y1="1098.31"
                  x2="379.95"
                  y2="1091.2"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="387.06"
                  y1="1098.31"
                  x2="372.84"
                  y2="1098.31"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="563.31"
                  y1="1098.31"
                  x2="563.31"
                  y2="1090.49"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="571.13"
                  y1="1098.31"
                  x2="555.49"
                  y2="1098.31"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="746.67"
                  y1="1098.31"
                  x2="746.67"
                  y2="1089.78"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="755.21"
                  y1="1098.31"
                  x2="738.14"
                  y2="1098.31"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="930.03"
                  y1="1098.31"
                  x2="930.03"
                  y2="1089.07"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="939.28"
                  y1="1098.31"
                  x2="920.79"
                  y2="1098.31"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1113.39"
                  y1="1098.31"
                  x2="1113.39"
                  y2="1088.36"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1123.35"
                  y1="1098.31"
                  x2="1103.44"
                  y2="1098.31"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <g>
                <line
                  x1="1296.76"
                  y1="1098.31"
                  x2="1296.76"
                  y2="1087.65"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <line
                  x1="1307.42"
                  y1="1098.31"
                  x2="1286.09"
                  y2="1098.31"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
              <text
                transform="translate(1366.7 1098.96)"
                fill="#e7dfcd"
                font-family="PPNeueMontreal-Regular, 'PP Neue Montreal'"
                font-size="48"
              >
                <tspan x="0" y="0">
                  doing
                </tspan>
              </text>
              <text
                transform="translate(9.05 41.16)"
                fill="#e7dfcd"
                font-family="PPNeueMontreal-Regular, 'PP Neue Montreal'"
                font-size="48"
              >
                <tspan x="0" y="0">
                  kn
                </tspan>
                <tspan x="48.62" y="0" letter-spacing="-.01em">
                  o
                </tspan>
                <tspan x="74.83" y="0" letter-spacing="0em">
                  wing
                </tspan>
              </text>
              <g clip-path="url(#clippath)" fill="none">
                <path
                  d="m154.97,1098.31H-128.5c0-113.63,29.12-215.18,86.55-301.84,50.22-75.78,120.11-138.68,213.65-192.29,154.67-88.65,350.74-136.81,540.35-183.39,170.57-41.9,346.95-85.22,467.01-154.04,110.53-63.35,157.69-137.58,157.69-248.2h283.46c0,113.63-29.12,215.18-86.55,301.84-50.22,75.78-120.11,138.68-213.65,192.29-154.67,88.65-350.74,136.81-540.35,183.39-170.57,41.9-346.95,85.22-467.01,154.04-110.53,63.35-157.69,137.58-157.69,248.2Z"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  d="m296.7,1098.31H-270.23c0-141.96,37.06-269.86,110.14-380.14,33.26-50.19,74.25-96.75,121.83-138.41,40.85-35.76,87.78-68.92,139.49-98.56,171.97-98.57,377.89-149.15,577.02-198.06,161.05-39.56,327.58-80.47,430.34-139.37,80.42-46.09,86.44-79.51,86.44-125.24h566.93c0,141.96-37.06,269.86-110.14,380.14-33.26,50.18-74.25,96.75-121.83,138.41-40.85,35.76-87.78,68.92-139.49,98.56-171.97,98.57-377.89,149.15-577.02,198.06-161.05,39.56-327.58,80.47-430.34,139.37-80.42,46.09-86.44,79.51-86.44,125.24Z"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="m1478.49,18.55C1478.49,738.39,13.23,378.47,13.23,1098.31"
                  fill="none"
                  stroke="#e7dfcd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                />
              </g>
              <g
                className="graph__svg__sticker"
                style={{ animationDelay: delay * 6 + "s" }}
              >
                <circle cx="1056.21" cy="633.43" r="25.78" fill="#2d56b2" />
                <circle cx="978.34" cy="632.96" r="93.26" fill="#2d56b2" />
                <text
                  transform="translate(914 578.69) rotate(126.32)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    A
                  </tspan>
                </text>
                <text
                  transform="translate(906.99 588.39) rotate(118.54)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    d
                  </tspan>
                </text>
                <text
                  transform="translate(901.85 597.98) rotate(111.12)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    o
                  </tspan>
                </text>
                <text
                  transform="translate(898.01 608.08) rotate(103.75)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    b
                  </tspan>
                </text>
                <text
                  transform="translate(895.51 618.65) rotate(96.53)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    e
                  </tspan>
                </text>
                <text
                  transform="translate(894.5 628.75) rotate(91.48)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    {" "}
                  </tspan>
                </text>
                <text
                  transform="translate(894.25 633.48) rotate(85.99)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    P
                  </tspan>
                </text>
                <text
                  transform="translate(895.19 645.18) rotate(78.49)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    h
                  </tspan>
                </text>
                <text
                  transform="translate(897.27 655.19) rotate(71.27)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    o
                  </tspan>
                </text>
                <text
                  transform="translate(900.74 664.98) rotate(65.87)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    t
                  </tspan>
                </text>
                <text
                  transform="translate(902.79 669.79) rotate(60.56)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    o
                  </tspan>
                </text>
                <text
                  transform="translate(908.15 679.09) rotate(53.77)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    s
                  </tspan>
                </text>
                <text
                  transform="translate(913.63 686.52) rotate(47.27)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    h
                  </tspan>
                </text>
                <text
                  transform="translate(920.59 693.99) rotate(40.1)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    o
                  </tspan>
                </text>
                <text
                  transform="translate(928.92 700.92) rotate(32.64)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    p
                  </tspan>
                </text>
                <text
                  transform="translate(937.26 706.34) rotate(25.18)"
                  fill="#8fb2ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    ™
                  </tspan>
                </text>
                <g>
                  <g>
                    <path
                      d="m952.58,631.75h0c-.25-.67.08-1.41.75-1.67h0c.67-.25,1.41.08,1.67.75h0c1.72,4.54,6.79,6.84,11.33,5.12l14.5-5.48c-1-2.3-2.34-4.49-4.06-6.51-8.97-10.54-24.83-11.82-35.82-3.41l-20.08,15.35,10.22,13.37,16.37-6.18c4.54-1.72,6.84-6.79,5.12-11.33Z"
                      fill="#8fb2ff"
                      fill-rule="evenodd"
                    />
                    <path
                      d="m962.13,649.71l.32.83c.25.67-.08,1.41-.75,1.67h0c-.67.25-1.41-.08-1.67-.75l-.32-.83c-1.72-4.54-6.79-6.84-11.33-5.12l-15.64,5.91,19.54,25.56,7.85,10.27,20.53-15.7-7.85-10.27c8.91-6.81,12.15-18.27,8.94-28.37l-14.5,5.48c-4.54,1.72-6.84,6.79-5.12,11.33Z"
                      fill="#8fb2ff"
                      fill-rule="evenodd"
                    />
                  </g>
                  <path
                    d="m988.38,605.18h0c-.25-.67.08-1.41.75-1.67l16.17-6.11c6.3-2.38,8.52-10.15,4.43-15.5l-6.72-8.79-30.8,23.55c-5.67,4.33-6.75,12.45-2.42,18.12l7.27,9.51c2.68,3.51,7.35,4.84,11.48,3.28l22.89-8.65c.63-.24,1.37.01,1.67.62.34.7,0,1.52-.7,1.78l-16.6,6.27c-6.27,2.37-8.48,10.11-4.41,15.43l9.8,12.82,26.55-20.29c8.02-6.13,9.55-17.6,3.42-25.62l-3.41-4.46c-4.85-6.34-13.29-8.76-20.76-5.93l-16.94,6.4c-.67.25-1.41-.08-1.67-.75Z"
                    fill="#8fb2ff"
                    fill-rule="evenodd"
                  />
                </g>
                <g>
                  <path
                    d="m1059.53,649c-.24.02-.45-.05-.67-.15-.75-.34-1.51-.67-2.26-1-.19-.09-.39-.1-.59-.07-.81.13-1.63.24-2.44.37-.32.05-.61.04-.83-.24-.22-.28-.14-.57-.01-.86.33-.73.63-1.46.97-2.18.12-.27.15-.52.1-.81-.13-.79-.24-1.59-.37-2.39-.05-.3-.02-.58.24-.78.26-.21.55-.16.84-.03.75.34,1.5.67,2.25,1.01.23.1.45.13.7.09.83-.13,1.66-.25,2.5-.39.3-.05.56,0,.75.25.18.25.16.51.04.79-.34.76-.68,1.52-1.02,2.28-.1.23-.14.45-.1.7.14.81.25,1.63.38,2.44.04.23.04.44-.07.65l-.4.3Z"
                    fill="#8fb2ff"
                  />
                  <path
                    d="m1040.49,627.73c.44-.35.94-.49,1.48-.45.13,0,.26.02.39.03,9.35,1.25,18.7,2.5,28.05,3.74.71.09,1.32.35,1.75.95.28.4.44.85.39,1.33-.11,1.21-.26,2.41-.48,3.6-.21,1.1-1.21,1.81-2.32,1.72-.13-.01-.26-.03-.39-.05-9.35-1.25-18.7-2.49-28.05-3.74-1.48-.2-2.26-1.21-2.07-2.7.13-.98.26-1.96.39-2.95.08-.61.35-1.12.85-1.5Zm1.73,2.03c-.06.07-.06.15-.07.23-.1.75-.19,1.51-.31,2.26-.03.22.03.29.25.32,2.61.34,5.21.69,7.81,1.04.22.03.31,0,.34-.25.09-.76.19-1.52.3-2.28.03-.19-.02-.26-.21-.28-.72-.09-1.43-.19-2.15-.28-1.89-.25-3.78-.5-5.67-.75-.1-.01-.2-.05-.3,0Z"
                    fill="#8fb2ff"
                  />
                  <path
                    d="m1052.99,618.32c.24-.18.49-.18.76-.06.78.35,1.56.69,2.33,1.04.23.1.45.13.7.09.83-.13,1.66-.25,2.49-.39.3-.05.56,0,.74.25.18.25.16.52.04.79-.33.73-.65,1.47-.99,2.2-.14.3-.17.59-.12.91.14.79.24,1.59.37,2.39.05.3,0,.56-.25.75-.25.18-.51.16-.79.04-.77-.35-1.54-.68-2.31-1.03-.23-.1-.45-.13-.7-.09-.81.13-1.63.25-2.44.37-.3.05-.57.02-.77-.24-.21-.26-.17-.53-.05-.81.35-.78.69-1.56,1.04-2.33.09-.2.12-.4.08-.62-.14-.84-.26-1.68-.39-2.52-.05-.29,0-.55.26-.74Z"
                    fill="#8fb2ff"
                  />
                  <path
                    d="m1046.21,642.3c-.13-.18-.1-.36-.02-.53.21-.49.43-.98.65-1.47.08-.18.1-.35.07-.54-.08-.5-.16-1.01-.24-1.51-.04-.22-.02-.43.17-.58.19-.14.38-.08.58,0,.46.21.93.41,1.39.62.18.08.37.11.57.07.5-.09,1-.16,1.51-.23.53-.08.78.24.57.74-.2.47-.41.93-.62,1.39-.09.19-.11.38-.08.59.08.51.16,1.02.24,1.54.07.49-.25.74-.71.54-.45-.19-.9-.39-1.34-.6-.23-.11-.45-.15-.7-.1-.51.09-1.02.16-1.54.24-.2.03-.37-.01-.49-.17Z"
                    fill="#8fb2ff"
                  />
                </g>
              </g>
              <g
                className="graph__svg__sticker"
                style={{ animationDelay: delay * 8 + "s" }}
              >
                <circle cx="1287.95" cy="399.34" r="25.78" fill="#ffae2c" />
                <circle cx="1247.9" cy="332.55" r="93.26" fill="#ffae2c" />
                <text
                  transform="translate(1260.74 249.33) rotate(-174.97)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    A
                  </tspan>
                </text>
                <text
                  transform="translate(1248.8 248.37) rotate(177.25)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    d
                  </tspan>
                </text>
                <text
                  transform="translate(1237.95 248.96) rotate(169.83)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    o
                  </tspan>
                </text>
                <text
                  transform="translate(1227.31 250.93) rotate(162.45)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    b
                  </tspan>
                </text>
                <text
                  transform="translate(1216.99 254.28) rotate(155.23)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    e
                  </tspan>
                </text>
                <text
                  transform="translate(1207.83 258.67) rotate(150.19)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    {" "}
                  </tspan>
                </text>
                <text
                  transform="translate(1204.03 260.86) rotate(147.28)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    I
                  </tspan>
                </text>
                <text
                  transform="translate(1200.66 263.04) rotate(144.79)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    l
                  </tspan>
                </text>
                <text
                  transform="translate(1197.85 265.03) rotate(142.44)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    l
                  </tspan>
                </text>
                <text
                  transform="translate(1194.81 267.24) rotate(137.78)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    u
                  </tspan>
                </text>
                <text
                  transform="translate(1187.37 274.1) rotate(131.15)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    s
                  </tspan>
                </text>
                <text
                  transform="translate(1181.58 280.88) rotate(126.25)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    t
                  </tspan>
                </text>
                <text
                  transform="translate(1178.47 285.13) rotate(122.34)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    r
                  </tspan>
                </text>
                <text
                  transform="translate(1175.25 290.08) rotate(117.12)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    a
                  </tspan>
                </text>
                <text
                  transform="translate(1171 298.64) rotate(112.11)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    t
                  </tspan>
                </text>
                <text
                  transform="translate(1168.95 303.45) rotate(106.9)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    o
                  </tspan>
                </text>
                <text
                  transform="translate(1166 313.63) rotate(101.12)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    r
                  </tspan>
                </text>
                <text
                  transform="translate(1164.63 319.98) rotate(94.56)"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    ™
                  </tspan>
                </text>
                <g>
                  <g>
                    <path d="m1246.29,287.3l-10.71,28.54c-1.59,4.23-6.01,6.7-10.45,5.83l-17.55-3.45,28.23-34.85,10.48,3.93Z" />
                    <path d="m1257.76,328.07l-14.9-2.93c-3.95-.78-6.26-4.92-4.85-8.69l10.62-28.28,10.48,3.93-1.34,35.97Z" />
                    <path d="m1256.17,370.69l-33.76-12.67,9.26-24.66c1.59-4.23,6.01-6.7,10.45-5.83l15.55,3.05-1.5,40.11Z" />
                    <path d="m1229.26,332.68l-9.18,24.47-33.76-12.67,19.5-24.07,18.65,3.66c3.92.77,6.21,4.87,4.8,8.61Z" />
                  </g>
                  <g>
                    <polygon points="1295.91 335.57 1305.67 309.58 1282.38 300.84 1271.17 330.71 1295.91 335.57" />
                    <polygon points="1270.29 333.07 1256.17 370.69 1279.45 379.43 1295.03 337.93 1270.29 333.07" />
                  </g>
                </g>
                <g>
                  <path
                    id="Path_2472"
                    data-name="Path 2472"
                    d="m1289.4,412.91l8.69-3.94c.42-.19.62-.7.42-1.13l-1.74-3.84c-.17-.35-.54-.54-.92-.47l-8.69,3.94h0l-.18.09c-.42.19-.62.7-.42,1.13l1.72,3.79c.19.42.7.62,1.13.42h0Z"
                    fill-rule="evenodd"
                  />
                  <path
                    id="Path_2473"
                    data-name="Path 2473"
                    d="m1295.23,401.69l-.5-6.93c-.03-.4-.21-.78-.5-1.05l-10.1-9.44c-.24-.23-.59-.27-.88-.14l-.54.24,3.83,8.42c.06.01.14.03.2.05.83.31,1.24,1.24.93,2.06s-1.24,1.24-2.06.93c-.82-.31-1.24-1.24-.93-2.06h0c.03-.07.07-.14.11-.19l-3.83-8.42-.6.27c-.29.13-.49.43-.47.76l.47,13.8c.01.4.18.79.47,1.07l4.89,4.94,9.52-4.32h0Z"
                    fill-rule="evenodd"
                  />
                </g>
              </g>
              <g
                className="graph__svg__sticker"
                style={{ animationDelay: delay * 2 + "s" }}
              >
                <circle cx="435.71" cy="703.65" r="25.78" fill="#4400af" />
                <circle cx="409.3" cy="776.91" r="93.26" fill="#4400af" />
                <text
                  transform="translate(326.85 793.34) rotate(74.82)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    A
                  </tspan>
                </text>
                <text
                  transform="translate(330.06 804.82) rotate(67.25)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    d
                  </tspan>
                </text>
                <text
                  transform="translate(334.33 814.82) rotate(59.85)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    o
                  </tspan>
                </text>
                <text
                  transform="translate(339.82 824.16) rotate(52.39)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    b
                  </tspan>
                </text>
                <text
                  transform="translate(346.51 832.72) rotate(45.08)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    e
                  </tspan>
                </text>
                <text
                  transform="translate(353.79 839.8) rotate(40)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    {" "}
                  </tspan>
                </text>
                <text
                  transform="translate(356.87 842.59) rotate(34.73)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    A
                  </tspan>
                </text>
                <text
                  transform="translate(366.47 849.03) rotate(29.17)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    f
                  </tspan>
                </text>
                <text
                  transform="translate(370.86 851.46) rotate(25.67)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    t
                  </tspan>
                </text>
                <text
                  transform="translate(375.51 853.79) rotate(20.54)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    e
                  </tspan>
                </text>
                <text
                  transform="translate(385.1 857.25) rotate(14.92)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    r
                  </tspan>
                </text>
                <text
                  transform="translate(390.58 858.68) rotate(11.6)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    {" "}
                  </tspan>
                </text>
                <text
                  transform="translate(395.21 859.76) rotate(6.09)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    E
                  </tspan>
                </text>
                <text
                  transform="translate(406.42 860.85) rotate(-.93)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    ff
                  </tspan>
                </text>
                <text
                  transform="translate(415.57 860.69) rotate(-7.53)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    e
                  </tspan>
                </text>
                <text
                  transform="translate(425.89 859.26) rotate(-14.57)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    c
                  </tspan>
                </text>
                <text
                  transform="translate(435.49 856.63) rotate(-19.74)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    t
                  </tspan>
                </text>
                <text
                  transform="translate(440.57 854.86) rotate(-24.58)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    s
                  </tspan>
                </text>
                <text
                  transform="translate(448.31 851.42) rotate(-31.53)"
                  fill="#aaa1ff"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    ™
                  </tspan>
                </text>
                <g>
                  <path
                    d="m476.3,772.41h0s-58.41-23.6-58.41-23.6l-9.27,22.95,48.43,10.77c8.03,1.79,16.17-2.49,19.25-10.12Z"
                    fill="#aaa1ff"
                  />
                  <path
                    d="m430.32,797.47c-.5-.11-.81-.6-.7-1.1.11-.5.6-.82,1.1-.71l33.2,7.38h0c3.32-8.21-1.53-17.44-10.18-19.37l-45.82-10.19-4.48,11.09c-.29.72-.53,1.44-.73,2.17-2.54,9.3,2.23,19.25,11.39,22.95l40.52,16.37,8.6-21.29-32.9-7.32Z"
                    fill="#aaa1ff"
                  />
                  <g>
                    <path
                      d="m389.92,738.22l-8.86,21.93c-1.31,3.25-4.79,5.08-8.21,4.32l-13.55-3.01,22.57-26.49,8.05,3.25Z"
                      fill="#aaa1ff"
                    />
                    <path
                      d="m398.02,770.06l-11.5-2.56c-3.05-.68-4.76-3.93-3.59-6.83l8.78-21.73,8.05,3.25-1.74,27.87Z"
                      fill="#aaa1ff"
                    />
                    <path
                      d="m395.96,803.09l-25.94-10.48,7.66-18.95c1.31-3.25,4.79-5.08,8.21-4.32l12,2.67-1.94,31.08Z"
                      fill="#aaa1ff"
                    />
                    <path
                      d="m375.83,773.09l-7.6,18.8-25.94-10.48,15.59-18.29,14.39,3.2c3.02.67,4.72,3.9,3.56,6.77Z"
                      fill="#aaa1ff"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="m435.7,702.61c-2.35,0-4.55-1.04-6.03-2.86-2.71-3.32-2.21-8.23,1.11-10.94,1.38-1.13,3.13-1.75,4.91-1.75,2.35,0,4.55,1.04,6.03,2.86,1.31,1.61,1.92,3.63,1.71,5.7-.21,2.07-1.21,3.93-2.82,5.24-1.38,1.13-3.13,1.75-4.91,1.75h0Z"
                      fill="#4400af"
                    />
                    <path
                      d="m435.68,687.77c2.13,0,4.13.95,5.48,2.6,2.46,3.02,2.01,7.47-1.01,9.93-1.27,1.04-2.82,1.59-4.46,1.59-2.13,0-4.13-.95-5.48-2.6-2.46-3.02-2.01-7.47,1.01-9.93,1.27-1.04,2.82-1.59,4.46-1.59m0-1.43c-1.89,0-3.78.63-5.36,1.91-3.63,2.96-4.18,8.31-1.21,11.95,1.68,2.06,4.12,3.13,6.59,3.13,1.89,0,3.78-.63,5.36-1.91,3.63-2.96,4.18-8.31,1.21-11.95-1.68-2.06-4.12-3.12-6.59-3.12h0Z"
                      fill="#aaa1ff"
                    />
                  </g>
                  <g>
                    <path
                      d="m438.38,705.9c-2.35,0-4.55-1.04-6.03-2.86-1.31-1.61-1.92-3.63-1.71-5.7.21-2.07,1.21-3.93,2.82-5.24,1.38-1.13,3.13-1.75,4.91-1.75,2.35,0,4.55,1.04,6.03,2.86,1.31,1.61,1.92,3.63,1.71,5.7-.21,2.07-1.21,3.93-2.82,5.24-1.38,1.13-3.13,1.75-4.91,1.75h0Z"
                      fill="#4400af"
                    />
                    <path
                      d="m438.37,691.06c2.13,0,4.13.95,5.48,2.6,2.46,3.02,2.01,7.47-1.01,9.93-1.27,1.04-2.82,1.59-4.46,1.59-2.13,0-4.13-.95-5.48-2.6-2.46-3.02-2.01-7.47,1.01-9.93,1.27-1.04,2.82-1.59,4.46-1.59m0-1.43c-1.89,0-3.78.63-5.36,1.91-3.63,2.96-4.18,8.31-1.21,11.95,1.68,2.06,4.12,3.12,6.58,3.12,1.89,0,3.78-.63,5.36-1.91,3.63-2.96,4.18-8.31,1.21-11.95-1.68-2.06-4.12-3.12-6.59-3.12h0Z"
                      fill="#aaa1ff"
                    />
                  </g>
                  <circle cx="441.06" cy="701.41" r="8.49" fill="#aaa1ff" />
                </g>
              </g>
              <g
                className="graph__svg__sticker"
                style={{ animationDelay: delay * 4 + "s" }}
              >
                <circle cx="533.79" cy="418.33" r="25.78" fill="#960c34" />
                <circle cx="477.92" cy="472.57" r="93.26" fill="#960c34" />
                <text
                  transform="translate(393.76 474.91) rotate(84.6)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    A
                  </tspan>
                </text>
                <text
                  transform="translate(394.98 486.82) rotate(76.82)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    d
                  </tspan>
                </text>
                <text
                  transform="translate(397.52 497.4) rotate(69.38)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    o
                  </tspan>
                </text>
                <text
                  transform="translate(401.4 507.51) rotate(61.98)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    b
                  </tspan>
                </text>
                <text
                  transform="translate(406.55 517.04) rotate(54.77)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    e
                  </tspan>
                </text>
                <text
                  transform="translate(412.53 525.25) rotate(49.73)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    {" "}
                  </tspan>
                </text>
                <text
                  transform="translate(415.37 528.58) rotate(46.82)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    I
                  </tspan>
                </text>
                <text
                  transform="translate(418.29 531.82) rotate(42.02)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    n
                  </tspan>
                </text>
                <text
                  transform="translate(425.82 538.66) rotate(34.06)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    D
                  </tspan>
                </text>
                <text
                  transform="translate(436.98 545.99) rotate(25.85)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    e
                  </tspan>
                </text>
                <text
                  transform="translate(446.34 550.43) rotate(19.12)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    s
                  </tspan>
                </text>
                <text
                  transform="translate(454.8 553.24) rotate(14.8)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    i
                  </tspan>
                </text>
                <text
                  transform="translate(458.42 554.31) rotate(9.96)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    g
                  </tspan>
                </text>
                <text
                  transform="translate(469.1 556.11) rotate(2.89)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    n
                  </tspan>
                </text>
                <text
                  transform="translate(478.64 556.65) rotate(-4.48)"
                  fill="#ff557e"
                  font-family="PPNeueMontreal-Light, 'PP Neue Montreal'"
                  font-size="17.91"
                  font-weight="300"
                >
                  <tspan x="0" y="0">
                    ™
                  </tspan>
                </text>
                <g>
                  <path
                    d="m474.78,451.74l-29.86-3.95-4.68,35.76,31.5,4.12,8.43-27.56c1.18-3.85-1.39-7.84-5.38-8.37Z"
                    fill="#ff557e"
                  />
                  <path
                    d="m445.27,445.32l30.11,3.99c4.48.59,8.74-2.14,10.06-6.47l8.19-26.79c-2.17-.71-4.44-1.24-6.79-1.55h0c-19.97-2.61-38.3,11.1-41.57,30.82Z"
                    fill="#ff557e"
                  />
                  <g>
                    <polygon
                      points="463.63 514.21 436.7 510.65 439.97 485.99 471 490.1 463.63 514.21"
                      fill="#ff557e"
                    />
                    <polygon
                      points="473.5 490.44 513.93 495.79 510.67 520.44 466.12 514.55 473.5 490.44"
                      fill="#ff557e"
                    />
                  </g>
                  <g>
                    <path
                      d="m518.63,457.54h0s-.45-.06-.45-.06h-.02s-25.48-3.38-25.48-3.38c-4.48-.59-8.74,2.14-10.06,6.47l-8.38,27.42,39.87,5.22,4.67-35.65-.14-.02Z"
                      fill="#ff557e"
                    />
                    <path
                      d="m487.88,443.37c-1.17,3.82,1.37,7.77,5.33,8.29l25.72,3.41.14.02c1.66-16.74-8.08-32.13-23.09-38.19l-8.1,26.47Z"
                      fill="#ff557e"
                    />
                  </g>
                </g>
                <g id="S_Ai_Tool_Type" data-name="S Ai Tool Type">
                  <rect
                    id="Canvas"
                    x="522.22"
                    y="401.8"
                    width="28.72"
                    height="28.72"
                    transform="translate(58.18 898.06) rotate(-83.01)"
                    fill="rgba(255, 85, 126, 0)"
                  />
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="m524.23,425.09c-.05.44.26.84.69.89l4.75.58c.44.05.84-.26.89-.69l.19-1.58c.05-.44-.26-.84-.69-.89l-2.38-.29.78-6.33,15.84,1.94-.29,2.38c-.05.44.26.84.69.89l1.58.19c.44.05.84-.26.89-.69l.97-7.92c.05-.44-.26-.84-.69-.89l-1.58-.19c-.44-.05-.84.26-.89.69l-.29,2.38-15.84-1.94.78-6.33,2.38.29c.44.05.84-.26.89-.69l.19-1.58c.05-.44-.26-.84-.69-.89l-4.75-.58c-.44-.05-.84.26-.89.69l-2.53,20.59Z"
                    fill="#ff557e"
                    fill-rule="evenodd"
                  />
                </g>
              </g>
              <g
                className="graph__svg__sticker"
                style={{ animationDelay: delay * 7 + "s" }}
              >
                <g>
                  <g>
                    <rect
                      x="1168.26"
                      y="678.05"
                      width="142.05"
                      height="142.05"
                      rx="5.67"
                      ry="5.67"
                      transform="translate(91.94 -134.41) rotate(6.45)"
                      fill="#ff4527"
                    />
                    <path
                      d="m1294.13,833.05l-127.04-14.35c-7.32-.83-12.61-7.46-11.78-14.78l14.35-127.04c.83-7.32,7.46-12.61,14.78-11.78l127.04,14.35c7.32.83,12.61,7.46,11.78,14.78l-14.35,127.04c-.83,7.32-7.46,12.61-14.78,11.78Zm-111.09-155.51c-.46-.05-.88.28-.93.74l-14.35,127.04c-.05.46.28.88.74.93l127.04,14.35c.46.05.88-.28.93-.74l14.35-127.04c.05-.46-.28-.88-.74-.93l-127.04-14.35Z"
                      fill="#ff4527"
                    />
                  </g>
                  <path
                    d="m1294.76,827.45l-127.04-14.35c-4.23-.48-7.29-4.31-6.81-8.55l14.35-127.04c.48-4.23,4.31-7.29,8.55-6.81l127.04,14.35c4.23.48,7.29,4.31,6.81,8.55l-14.35,127.04c-.48,4.23-4.31,7.29-8.55,6.81Zm-111.09-155.51c-3.55-.4-6.76,2.16-7.16,5.71l-14.35,127.04c-.4,3.55,2.16,6.76,5.71,7.16l127.04,14.35c3.55.4,6.76-2.16,7.16-5.71l14.35-127.04c.4-3.55-2.16-6.76-5.71-7.16l-127.04-14.35Z"
                    fill="#fff"
                  />
                  <g>
                    <path
                      d="m1290.6,719.45l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1316.78,698.58l-35.91-4.06,1.4-12.39,28.54,3.23c4.06.46,7,4.14,6.54,8.2l-.57,5.02Zm-35.22-4.61l34.67,3.92.5-4.39c.42-3.72-2.26-7.09-5.98-7.51l-27.92-3.15-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1314.13,722.11l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1314.13,722.11l-12.39-1.4,4.06-35.91,5.02.57c4.06.46,7,4.14,6.54,8.2l-3.23,28.54Zm-11.69-1.95l11.14,1.26,3.15-27.92c.42-3.72-2.26-7.09-5.98-7.51l-4.39-.5-3.92,34.67Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1208.26,710.15l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1184.73,707.49l-12.39-1.4,3.23-28.54c.46-4.06,4.14-7,8.2-6.54l5.02.57-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-4.39-.5c-3.72-.42-7.09,2.26-7.51,5.98l-3.15,27.92Z"
                      fill="#fff"
                    />
                    <path
                      d="m1208.26,710.15l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1210.92,686.62l-35.91-4.06.57-5.02c.46-4.06,4.14-7,8.2-6.54l28.54,3.23-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-27.92-3.15c-3.72-.42-7.09,2.26-7.51,5.98l-.5,4.39Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1304.82,804.45l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1294.79,827.14l-5.02-.57,4.06-35.91,12.39,1.4-3.23,28.54c-.46,4.06-4.14,7-8.2,6.54Zm-4.32-1.12l4.39.5c3.72.42,7.09-2.26,7.51-5.98l3.15-27.92-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1278.64,825.32l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1294.79,827.14l-28.54-3.23,1.4-12.39,35.91,4.06-.57,5.02c-.46,4.06-4.14,7-8.2,6.54Zm-27.85-3.78l27.92,3.15c3.72.42,7.09-2.26,7.51-5.98l.5-4.39-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1196.3,816.01l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1196.3,816.01l-28.54-3.23c-4.06-.46-7-4.14-6.54-8.2l.57-5.02,35.91,4.06-1.4,12.39Zm-33.96-15.75l-.5,4.39c-.42,3.72,2.26,7.09,5.98,7.51l27.92,3.15,1.26-11.14-34.67-3.92Z"
                      fill="#fff"
                    />
                    <path
                      d="m1198.96,792.49l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1172.77,813.35l-5.02-.57c-4.06-.46-7-4.14-6.54-8.2l3.23-28.54,12.39,1.4-4.06,35.91Zm-7.78-36.62l-3.15,27.92c-.42,3.72,2.26,7.09,5.98,7.51l4.39.5,3.92-34.67-11.14-1.26Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1255.31,715.46l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1281.49,694.59l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1278.84,718.12l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1278.84,718.12l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1251.32,750.75l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1277.51,729.88l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1274.85,753.41l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1274.85,753.41l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1247.34,786.04l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1273.52,765.17l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1270.86,788.7l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1270.86,788.7l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1220.02,711.48l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1246.21,690.61l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1243.55,714.13l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1243.55,714.13l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1216.03,746.76l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1242.22,725.9l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1239.56,749.42l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1239.56,749.42l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1212.05,782.05l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1238.23,761.18l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1235.57,784.71l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1235.57,784.71l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1243.35,821.33l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1269.53,800.46l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1266.87,823.99l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1266.87,823.99l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1208.06,817.34l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1234.24,796.47l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1231.59,820l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1231.59,820l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1180.75,742.78l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1206.93,721.91l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1204.27,745.43l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1204.27,745.43l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1176.76,778.07l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1202.94,757.2l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1200.28,780.72l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1200.28,780.72l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1286.61,754.74l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1312.8,733.87l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1310.14,757.4l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1310.14,757.4l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1282.62,790.03l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                    <path
                      d="m1308.81,769.16l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1306.15,792.69l-35.91-4.06,1.4-12.39,35.91,4.06-1.4,12.39Zm-35.22-4.61l34.67,3.92,1.26-11.14-34.67-3.92-1.26,11.14Z"
                      fill="#fff"
                    />
                    <path
                      d="m1306.15,792.69l-12.39-1.4,4.06-35.91,12.39,1.4-4.06,35.91Zm-11.69-1.95l11.14,1.26,3.92-34.67-11.14-1.26-3.92,34.67Z"
                      fill="#fff"
                    />
                  </g>
                  <g>
                    <path
                      d="m1173.93,678.05h51.34c46.93,0,85.04,38.1,85.04,85.04v51.34c0,3.13-2.54,5.67-5.67,5.67h-130.71c-3.13,0-5.67-2.54-5.67-5.67v-130.71c0-3.13,2.54-5.67,5.67-5.67Z"
                      transform="translate(91.94 -134.41) rotate(6.45)"
                      fill="#ff4527"
                    />
                    <path
                      d="m1294.76,827.45l-127.04-14.35c-4.23-.48-7.29-4.31-6.81-8.55l14.35-127.04c.48-4.23,4.31-7.29,8.55-6.81l28.23,3.19c58.72,6.63,101.09,59.8,94.46,118.52l-3.19,28.23c-.48,4.23-4.31,7.29-8.55,6.81Zm-111.09-155.51c-3.55-.4-6.76,2.16-7.16,5.71l-14.35,127.04c-.4,3.55,2.16,6.76,5.71,7.16l127.04,14.35c3.55.4,6.76-2.16,7.16-5.71l3.19-28.23c6.56-58.03-35.32-110.58-93.35-117.14l-28.23-3.19Z"
                      fill="#fff"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <rect
                      x="1158.53"
                      y="832.16"
                      width="141.48"
                      height="40.34"
                      rx="5.56"
                      ry="5.56"
                      transform="translate(103.47 -132.63) rotate(6.45)"
                      fill="#fff"
                    />
                    <path
                      d="m1289.68,885.76l-126.74-14.32c-7.25-.82-12.48-7.38-11.66-14.63l2.96-26.24c.82-7.25,7.38-12.48,14.63-11.66l126.74,14.32c7.25.82,12.48,7.38,11.66,14.63l-2.96,26.24c-.82,7.25-7.38,12.48-14.63,11.66Zm-122.21-54.4c-.39-.04-.74.23-.78.62l-2.96,26.24c-.04.39.23.74.62.78l126.74,14.32c.39.04.74-.23.78-.62l2.96-26.24c.04-.39-.23-.74-.62-.78l-126.74-14.32Z"
                      fill="#fff"
                    />
                  </g>
                  <path d="m1290.31,880.15l-126.74-14.32c-4.16-.47-7.16-4.24-6.69-8.4l2.96-26.24c.47-4.16,4.24-7.16,8.4-6.69l126.74,14.32c4.16.47,7.16,4.24,6.69,8.4l-2.96,26.24c-.47,4.16-4.24,7.16-8.4,6.69Zm-122.21-54.4c-3.47-.39-6.62,2.12-7.01,5.59l-2.96,26.24c-.39,3.47,2.12,6.62,5.59,7.01l126.74,14.32c3.47.39,6.62-2.12,7.01-5.59l2.96-26.24c.39-3.47-2.12-6.62-5.59-7.01l-126.74-14.32Z" />
                  <text
                    transform="translate(1164 858.11) rotate(6.45)"
                    font-family="PPNeueMontreal-BoldItalic, 'PP Neue Montreal'"
                    font-size="35.76"
                    font-style="italic"
                    font-weight="700"
                  >
                    <tspan x="0" y="0">
                      blende
                    </tspan>
                    <tspan x="113.95" y="0" letter-spacing="-.02em">
                      r
                    </tspan>
                  </text>
                </g>
              </g>
              <g
                className="graph__svg__sticker"
                style={{ animationDelay: delay * 3 + "s" }}
              >
                <g>
                  <g>
                    <path
                      d="m186.87,448.38l-45.67,284.61c-1.15,7.14-7.87,12.01-15.01,10.86l-77.62-12.45c-7.14-1.15-12.01-7.87-10.86-15.01l45.67-284.61c4.59-28.58,31.47-48.03,60.05-43.44h0c28.58,4.59,48.03,31.47,43.44,60.05Z"
                      fill="#253a1c"
                    />
                    <path
                      d="m186.87,448.38l-45.67,284.61c-1.15,7.14-7.87,12.01-15.01,10.86l-77.62-12.45c-7.14-1.15-12.01-7.87-10.86-15.01l45.67-284.61c4.59-28.58,31.47-48.03,60.05-43.44h0c28.58,4.59,48.03,31.47,43.44,60.05Z"
                      fill="none"
                      stroke="#253a1c"
                      stroke-miterlimit="10"
                      stroke-width="29.58"
                    />
                    <path
                      d="m186.87,448.38l-45.67,284.61c-1.15,7.14-7.87,12.01-15.01,10.86l-77.62-12.45c-7.14-1.15-12.01-7.87-10.86-15.01l45.67-284.61c4.59-28.58,31.47-48.03,60.05-43.44h0c28.58,4.59,48.03,31.47,43.44,60.05Z"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                  </g>
                  <g>
                    <circle
                      cx="135.13"
                      cy="440.08"
                      r="39.31"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <ellipse
                      cx="135.13"
                      cy="440.08"
                      rx="39.31"
                      ry="34.39"
                      transform="translate(-320.8 503.77) rotate(-80.88)"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <ellipse
                      cx="135.13"
                      cy="440.08"
                      rx="39.31"
                      ry="19.65"
                      transform="translate(-320.8 503.77) rotate(-80.88)"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <ellipse
                      cx="135.13"
                      cy="440.08"
                      rx="34.39"
                      ry="39.31"
                      transform="translate(-320.8 503.77) rotate(-80.88)"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <ellipse
                      cx="135.13"
                      cy="440.08"
                      rx="19.65"
                      ry="39.31"
                      transform="translate(-320.8 503.77) rotate(-80.88)"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <line
                      x1="173.94"
                      y1="446.3"
                      x2="96.32"
                      y2="433.85"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <line
                      x1="128.9"
                      y1="478.89"
                      x2="141.35"
                      y2="401.27"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                  </g>
                  <g>
                    <rect
                      x="64.68"
                      y="594.82"
                      width="78.61"
                      height="78.61"
                      transform="translate(-538.61 636.34) rotate(-80.88)"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <line
                      x1="84.34"
                      y1="591.17"
                      x2="71.89"
                      y2="668.79"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <line
                      x1="97.28"
                      y1="593.24"
                      x2="84.82"
                      y2="670.86"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <line
                      x1="110.22"
                      y1="595.32"
                      x2="97.76"
                      y2="672.94"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <line
                      x1="123.15"
                      y1="597.4"
                      x2="110.7"
                      y2="675.02"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <line
                      x1="136.09"
                      y1="599.47"
                      x2="123.63"
                      y2="677.09"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <line
                      x1="138.65"
                      y1="666.23"
                      x2="61.03"
                      y2="653.78"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <line
                      x1="140.72"
                      y1="653.29"
                      x2="63.1"
                      y2="640.84"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <line
                      x1="142.8"
                      y1="640.36"
                      x2="65.18"
                      y2="627.9"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <line
                      x1="144.88"
                      y1="627.42"
                      x2="67.25"
                      y2="614.97"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                    <line
                      x1="146.95"
                      y1="614.48"
                      x2="69.33"
                      y2="602.03"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                  </g>
                  <g>
                    <g>
                      <g clip-path="url(#clippath-1)" fill="none">
                        <g>
                          <polygon
                            points="126.46 494.08 126.46 494.08 152.82 577.93 75.2 565.47 126.46 494.08"
                            fill="none"
                            stroke="#88e25d"
                            stroke-miterlimit="10"
                            stroke-width="1.48"
                          />
                          <line
                            x1="77.27"
                            y1="552.54"
                            x2="154.89"
                            y2="564.99"
                            fill="none"
                            stroke="#88e25d"
                            stroke-miterlimit="10"
                            stroke-width="1.48"
                          />
                          <line
                            x1="79.35"
                            y1="539.6"
                            x2="156.97"
                            y2="552.05"
                            fill="none"
                            stroke="#88e25d"
                            stroke-miterlimit="10"
                            stroke-width="1.48"
                          />
                          <line
                            x1="81.42"
                            y1="526.66"
                            x2="159.04"
                            y2="539.12"
                            fill="none"
                            stroke="#88e25d"
                            stroke-miterlimit="10"
                            stroke-width="1.48"
                          />
                          <line
                            x1="83.5"
                            y1="513.73"
                            x2="161.12"
                            y2="526.18"
                            fill="none"
                            stroke="#88e25d"
                            stroke-miterlimit="10"
                            stroke-width="1.48"
                          />
                          <line
                            x1="85.57"
                            y1="500.79"
                            x2="163.2"
                            y2="513.24"
                            fill="none"
                            stroke="#88e25d"
                            stroke-miterlimit="10"
                            stroke-width="1.48"
                          />
                          <line
                            x1="126.46"
                            y1="494.08"
                            x2="139.88"
                            y2="575.85"
                            fill="none"
                            stroke="#88e25d"
                            stroke-miterlimit="10"
                            stroke-width="1.48"
                          />
                          <line
                            x1="126.46"
                            y1="494.08"
                            x2="126.94"
                            y2="573.78"
                            fill="none"
                            stroke="#88e25d"
                            stroke-miterlimit="10"
                            stroke-width="1.48"
                          />
                          <line
                            x1="126.46"
                            y1="494.08"
                            x2="114.01"
                            y2="571.7"
                            fill="none"
                            stroke="#88e25d"
                            stroke-miterlimit="10"
                            stroke-width="1.48"
                          />
                          <line
                            x1="126.46"
                            y1="494.08"
                            x2="101.07"
                            y2="569.63"
                            fill="none"
                            stroke="#88e25d"
                            stroke-miterlimit="10"
                            stroke-width="1.48"
                          />
                          <line
                            x1="126.46"
                            y1="494.08"
                            x2="88.13"
                            y2="567.55"
                            fill="none"
                            stroke="#88e25d"
                            stroke-miterlimit="10"
                            stroke-width="1.48"
                          />
                        </g>
                      </g>
                      <polygon
                        points="126.46 494.08 152.82 577.93 75.2 565.47 126.46 494.08"
                        fill="none"
                        stroke="#88e25d"
                        stroke-miterlimit="10"
                        stroke-width="1.48"
                      />
                    </g>
                    <polygon
                      points="126.46 494.08 152.82 577.93 75.2 565.47 126.46 494.08"
                      fill="none"
                      stroke="#88e25d"
                      stroke-miterlimit="10"
                      stroke-width="1.48"
                    />
                  </g>
                </g>
                <text
                  transform="translate(53.9 698.31) rotate(9.12)"
                  fill="#88e25d"
                  font-family="PPNeueMontreal-Regular, 'PP Neue Montreal'"
                  font-size="19.23"
                >
                  <tspan x="0" y="0" letter-spacing="-.01em">
                    A
                  </tspan>
                  <tspan x="12.19" y="0" letter-spacing="0em">
                    u
                  </tspan>
                  <tspan x="22.44" y="0" letter-spacing="-.01em">
                    t
                  </tspan>
                  <tspan x="27.9" y="0">
                    odes
                  </tspan>
                  <tspan x="69.13" y="0" letter-spacing="-.02em">
                    k
                  </tspan>
                  <tspan x="0" y="17.65" letter-spacing="0em">
                    M
                  </tspan>
                  <tspan x="16.06" y="17.65" letter-spacing="-.01em">
                    a
                  </tspan>
                  <tspan x="25.81" y="17.65" letter-spacing="-.02em">
                    y
                  </tspan>
                  <tspan x="34.9" y="17.65">
                    a
                  </tspan>
                </text>
              </g>
              <g
                className="graph__svg__sticker"
                style={{ animationDelay: delay * 9 + "s" }}
              >
                <path d="m1349.81,195.41c-28.23,15.89-58.24,25.06-84.5,25.8-29.04.82-50.64-8.68-60.82-26.76-10.18-18.08-7.1-41.47,8.66-65.88,14.25-22.07,37.65-42.98,65.88-58.87,28.23-15.89,58.24-25.06,84.5-25.8,29.04-.82,50.64,8.68,60.82,26.76,10.18,18.08,7.1,41.47-8.66,65.88-14.25,22.07-37.65,42.98-65.88,58.87Z" />
                <g>
                  <ellipse
                    cx="1314.42"
                    cy="132.55"
                    rx="114.06"
                    ry="60.03"
                    transform="translate(104.04 661.95) rotate(-29.38)"
                    fill="none"
                    stroke="#fff255"
                    stroke-miterlimit="10"
                    stroke-width="2.02"
                  />
                  <ellipse
                    cx="1314.42"
                    cy="132.55"
                    rx="99.8"
                    ry="60.03"
                    transform="translate(104.04 661.95) rotate(-29.38)"
                    fill="none"
                    stroke="#fff255"
                    stroke-miterlimit="10"
                    stroke-width="2.02"
                  />
                  <ellipse
                    cx="1314.42"
                    cy="132.55"
                    rx="57.03"
                    ry="60.03"
                    transform="translate(104.04 661.95) rotate(-29.38)"
                    fill="none"
                    stroke="#fff255"
                    stroke-miterlimit="10"
                    stroke-width="2.02"
                  />
                  <ellipse
                    cx="1314.42"
                    cy="132.55"
                    rx="114.06"
                    ry="52.53"
                    transform="translate(104.04 661.95) rotate(-29.38)"
                    fill="none"
                    stroke="#fff255"
                    stroke-miterlimit="10"
                    stroke-width="2.02"
                  />
                  <ellipse
                    cx="1314.42"
                    cy="132.55"
                    rx="114.06"
                    ry="30.02"
                    transform="translate(104.04 661.95) rotate(-29.38)"
                    fill="none"
                    stroke="#fff255"
                    stroke-miterlimit="10"
                    stroke-width="2.02"
                  />
                  <line
                    x1="1413.81"
                    y1="76.59"
                    x2="1215.04"
                    y2="188.51"
                    fill="none"
                    stroke="#fff255"
                    stroke-miterlimit="10"
                    stroke-width="2.02"
                  />
                  <line
                    x1="1343.88"
                    y1="184.86"
                    x2="1284.97"
                    y2="80.24"
                    fill="none"
                    stroke="#fff255"
                    stroke-miterlimit="10"
                    stroke-width="2.02"
                  />
                </g>
                <path
                  d="m1336.37,97.81l-6.15-17.49c-.96-2.73-4.15-3.93-6.67-2.51l-160,90.09c-1.97,1.11-2.85,3.47-2.11,5.6l16.29,46.29c.96,2.73,4.15,3.93,6.67,2.51l101.53-57.17c2.52-1.42,5.71-.22,6.67,2.51l6.15,17.49c.96,2.73,4.15,3.93,6.67,2.51l160-90.09c1.97-1.11,2.85-3.47,2.11-5.6l-16.29-46.29c-.96-2.73-4.15-3.93-6.67-2.51l-101.53,57.17c-2.52,1.42-5.71.22-6.67-2.51Z"
                  fill="#fff255"
                  stroke="#000"
                  stroke-miterlimit="10"
                  stroke-width="3.37"
                />
                <g>
                  <path d="m1181.79,194.72l-2.58-7.9,16.48-20,2.59,7.58-11.2,13.1.05.09,15.03-1.66,2.16,6.83-22.53,1.96Z" />
                  <path d="m1198.8,167.8l7.48-4.21,9.07,14.34.09-.05-1.12-18.82,6.01-3.39,9.74,13.97.14-.08-1.78-18.45,7.67-4.32,2.05,30.77-7.34,4.13-10.1-14.51-.09.05,1.2,19.52-7.34,4.13-15.68-23.09Z" />
                  <path d="m1242.16,161.97c-4.45-7.91-2.86-18.03,6.52-23.31,7.86-4.43,12.94-1.61,16.4,4.55.77,1.37,1.49,3.09,2.06,4.76l-17.71,9.97.21.38c2.11,3.74,4.61,3.76,7.17,2.32,2.79-1.57,3.68-3.88,3.19-5.41l7.72-4.35c.69,6.53-1.93,12.19-8.46,15.86-7.34,4.13-13.1,2.32-17.09-4.78Zm15.47-14.82c-1.22-3.49-3.67-4.3-6.46-2.72-3.36,1.89-4.32,5.05-3.67,8.43l10.13-5.7Z" />
                  <path d="m1280.69,150.44l-.09.05.89,2.68-7.57,4.27-12.48-37.56,7.57-4.27,4.45,13.33.09-.05c.42-1.92,2.14-5.38,5.79-7.44,5.3-2.99,10.53-1.13,13.99,5.03,4.85,8.62,3.02,19.31-4.32,23.44-3.69,2.08-6.89,1.39-8.32.51Zm3.98-5.55c4.12-2.32,3.86-8.53,1.25-13.17-1.92-3.41-4.1-4.18-6.42-2.87-4.12,2.32-3.96,8.59-1.32,13.27,1.89,3.36,4.17,4.08,6.49,2.77Z" />
                  <path d="m1298.87,130.48l11.2-13.1-.05-.09-15.03,1.66-2.16-6.83,22.53-1.96,2.58,7.9-16.48,20.01-2.59-7.58Z" />
                </g>
                <g>
                  <path d="m1308.78,158.91l-2.58-7.9,16.48-20,2.59,7.58-11.2,13.1.05.09,15.03-1.66,2.16,6.83-22.53,1.96Z" />
                  <path d="m1335.96,113.61l6.15-3.47-.63,44.94-6.15,3.47.63-44.94Z" />
                  <path d="m1350.4,138.15c-4.85-8.62-3.02-19.31,4.32-23.44,3.69-2.08,6.89-1.39,8.32-.51l.09-.05-4.45-13.33,7.57-4.27,12.48,37.56-7.57,4.27-.89-2.68-.09.05c-.42,1.92-2.14,5.38-5.79,7.44-5.3,2.99-10.53,1.13-13.99-5.03Zm13.82-2.36c4.12-2.32,3.96-8.59,1.32-13.27-1.89-3.36-4.17-4.08-6.49-2.77-4.12,2.32-3.86,8.53-1.25,13.17,1.92,3.41,4.1,4.18,6.42,2.87Z" />
                  <path d="m1378.48,120.91c-4.45-7.91-2.86-18.03,6.52-23.31,7.86-4.43,12.94-1.61,16.4,4.55.77,1.37,1.49,3.09,2.06,4.76l-17.71,9.97.21.38c2.11,3.74,4.61,3.76,7.17,2.32,2.79-1.57,3.68-3.88,3.19-5.41l7.72-4.35c.69,6.53-1.93,12.19-8.46,15.86-7.34,4.13-13.1,2.32-17.09-4.78Zm15.47-14.82c-1.22-3.49-3.67-4.3-6.46-2.72-3.36,1.89-4.32,5.05-3.67,8.43l10.13-5.7Z" />
                  <path d="m1397.99,91.34l7.39-4.16,10.92,15.18.09-.05-1.16-20.67,7.95-4.48.44,31.68-8.33,4.69-17.29-22.19Z" />
                  <path d="m1430.69,91.94l11.2-13.1-.05-.09-15.03,1.66-2.16-6.83,22.53-1.96,2.58,7.9-16.48,20.01-2.59-7.58Z" />
                </g>
              </g>
              <g
                className="graph__svg__sticker"
                style={{ animationDelay: delay * 8 + "s" }}
              >
                <g>
                  <path
                    d="m1412.88,640.74c-.69,0-1.38-.04-2.06-.12l-116.76-13.19c-4.85-.55-9.19-2.95-12.23-6.76-3.04-3.81-4.41-8.58-3.86-13.43l13.92-123.2c.77-6.79,6.49-11.9,13.32-11.9.5,0,1.01.03,1.51.08l20.69,2.34,2.34-20.69c.77-6.79,6.49-11.9,13.32-11.9.5,0,1.01.03,1.51.08l45.82,5.18c16,1.81,30.34,9.74,40.37,22.33,10.03,12.59,14.57,28.34,12.76,44.34l-12.5,110.64c-1.04,9.24-8.84,16.21-18.13,16.21Z"
                    fill="#2a2ad8"
                  />
                  <path
                    d="m1343.06,450.52c.18,0,.37.01.55.03l45.82,5.18c28.39,3.21,48.8,28.82,45.59,57.2l-12.5,110.64c-.56,4.95-4.76,8.61-9.63,8.61-.36,0-.73-.02-1.1-.06l-116.76-13.19c-5.32-.6-9.15-5.41-8.55-10.73l13.92-123.21c.28-2.48,2.38-4.31,4.81-4.31.18,0,.37.01.55.03l24.37,2.75c.18.02.37.03.55.03,2.44,0,4.53-1.83,4.81-4.31l2.75-24.37c.28-2.48,2.38-4.31,4.81-4.31m0-17.11h0c-11.18,0-20.56,8.38-21.82,19.5l-1.38,12.19-12.19-1.38c-.82-.09-1.65-.14-2.47-.14-11.18,0-20.56,8.38-21.82,19.5l-13.92,123.21c-1.66,14.69,8.94,28,23.64,29.66l116.76,13.19c1,.11,2.02.17,3.02.17,13.65,0,25.1-10.23,26.63-23.81l12.5-110.64c4.26-37.72-22.96-71.87-60.67-76.13l-45.82-5.18c-.81-.09-1.65-.14-2.47-.14h0Z"
                    fill="#2a2ad8"
                  />
                </g>
                <g>
                  <path
                    d="m1435.28,510.08c1.81-27.58-19.44-51.37-46.91-54.47l-44.76-5.06c-2.66-.3-5.06,1.61-5.37,4.28l-2.75,24.37c-.3,2.66-2.7,4.58-5.36,4.28l-24.37-2.75c-2.66-.3-5.06,1.61-5.37,4.28l-2.75,24.37c-.3,2.66,1.61,5.06,4.28,5.37l24.37,2.75c2.66.3,5.06-1.61,5.36-4.28l2.75-24.37c.3-2.66,2.7-4.58,5.37-4.28l29.19,3.3h0l16.27,1.84c8.88,1,16.08,8.39,15.92,17.33-.18,10.25-9.09,17.89-19.04,16.77l-46.36-5.24c-21.36-2.41-40.62,12.94-43.04,34.3l-2.77,24.53c-.3,2.66,1.61,5.06,4.28,5.37l24.37,2.75c2.66.3,5.06-1.61,5.36-4.28l2.76-24.41c.3-2.64,2.68-4.53,5.32-4.24l46.24,5.22c28.99,3.28,55.07-18.27,57-47.73Z"
                    fill="#fff"
                  />
                  <path
                    d="m1424.47,563.02l-31.93-3.61c-4.29-.49-7.03,4.46-4.34,7.84l21.62,27.12c.8,1.01,1.97,1.65,3.25,1.8l7.56.85c2.66.3,5.06-1.61,5.36-4.28l2.75-24.37c.3-2.66-1.61-5.06-4.28-5.37Z"
                    fill="#fff"
                  />
                </g>
                <text
                  transform="translate(1281.72 617.02) rotate(6.45)"
                  fill="#fff"
                  font-family="CygnitoMono, 'Cygnito Mono'"
                  font-size="34.92"
                  letter-spacing="-.1em"
                >
                  <tspan x="0" y="0">
                    React.js
                  </tspan>
                </text>
              </g>
              <g
                className="graph__svg__sticker"
                style={{ animationDelay: delay * 4 + "s" }}
              >
                <path
                  d="m812.25,691.94h-331.06l12.64-71.7,20.74-.18c4.75-.04,8.78-3.51,9.53-8.21l2.54-16.02h302.56l-16.95,96.1Z"
                  fill="#ff2e2e"
                  stroke="#ff2e2e"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="17.83"
                />
                <g>
                  <path d="m676.95,607.39h4.81l-1.06,5.62c2.12-3.87,5.31-5.81,10.12-6l-1,5.31c-5.81-.12-9.12,2.81-10.25,9.12l-3.06,16.31h-5.19l5.62-30.36Z" />
                  <path d="m691.39,628.51l2.25-11.87c1-5.69,5.69-9.37,11.87-9.37h5.37c6.18,0,9.5,3.69,8.5,9.37l-1.19,6.12h-20.49l-1.06,5.5c-.62,3.25,1.19,5.12,4.75,5.12h4.19c3.62,0,6.12-1.88,6.75-5.12l.13-.75h4.87l-.19,1c-1,5.69-5.69,9.37-11.87,9.37h-5.37c-6.18,0-9.5-3.68-8.5-9.37Zm22.62-9.43l.44-2.13c.56-3.25-1.25-5.25-4.87-5.25h-4.19c-3.56,0-6.06,2-6.62,5.25l-.37,2.13h15.62Z" />
                  <path d="m722.51,629.69l.56-3.19c.94-5.44,4.25-8.25,10.43-8.25h4.75c2.62,0,4.62,1.19,5.62,3.12l.87-4.62c.62-3.31-.56-5-4.06-5h-4.12c-2.87,0-4.69,1.37-5.19,3.94h-4.93c1.06-5.5,4.44-8.44,10.81-8.44h5.19c5.56,0,8.62,3.5,7.5,9.62l-3.87,20.87h-4.81l.63-3.31c-1.56,2.19-4,3.5-7.25,3.5h-4.81c-5.31,0-8.25-2.87-7.31-8.25Zm8.75,4.18h5.75c3.06,0,4.87-1.5,5.44-4.68l.37-2.06c.56-3.12-.75-4.75-3.69-4.75h-5.75c-3.06,0-4.62,1.37-5.19,4.31l-.56,3c-.5,2.81.56,4.18,3.62,4.18Z" />
                  <path d="m754.13,627.88l2-10.62c1.12-6.06,6.06-10,12.62-10h5.69c6.56,0,10.12,3.94,9,10l-.5,2.69h-5.06l.44-2.38c.69-3.75-1.19-5.75-5.31-5.75h-4.5c-4.06,0-6.62,2-7.31,5.75l-1.87,10.06c-.69,3.68,1.12,5.68,5.25,5.68h4.37c4.19,0,6.81-2,7.5-5.68l.44-2.5h5.06l-.5,2.75c-1.12,6.06-6.06,10-12.62,10h-5.68c-6.56,0-10.12-3.93-9-10Z" />
                  <path d="m790.37,630.26l3.37-18.37h-6.31l.81-4.5h6.37l1.75-9.5h5.19l-1.75,9.5h6.93l-.81,4.5h-7l-3.37,18.37c-.38,2.06.31,2.94,2.25,2.94h3.75l-.81,4.56h-4.31c-4.75,0-7.06-2.25-6.06-7.5Z" />
                  <path d="m669.07,655.56h4.87l-.81,4.37c1.69-2.81,4.44-4.5,8.18-4.5h2.81c5.06,0,8.37,4,7.18,10.43l-3.69,20.05h-5.19l3.62-19.68c.81-4.25-1.12-6.25-5.12-6.25h-1.25c-3.75,0-6.5,1.88-7.31,5.62l-3.75,20.3h-5.19l5.62-30.36Z" />
                  <path d="m695,677.86l.56-3.19c.94-5.44,4.25-8.25,10.43-8.25h4.75c2.62,0,4.62,1.19,5.62,3.12l.87-4.62c.62-3.31-.56-5-4.06-5h-4.12c-2.87,0-4.69,1.37-5.19,3.94h-4.93c1.06-5.5,4.44-8.44,10.81-8.44h5.19c5.56,0,8.62,3.5,7.5,9.62l-3.87,20.87h-4.81l.63-3.31c-1.56,2.19-4,3.5-7.25,3.5h-4.81c-5.31,0-8.25-2.87-7.31-8.25Zm8.75,4.18h5.75c3.06,0,4.87-1.5,5.44-4.68l.37-2.06c.56-3.12-.75-4.75-3.69-4.75h-5.75c-3.06,0-4.62,1.37-5.19,4.31l-.56,3c-.5,2.81.56,4.18,3.62,4.18Z" />
                  <path d="m729.68,678.43l3.37-18.37h-6.31l.81-4.5h6.37l1.75-9.5h5.19l-1.75,9.5h6.93l-.81,4.5h-7l-3.37,18.37c-.38,2.06.31,2.94,2.25,2.94h3.75l-.81,4.56h-4.31c-4.75,0-7.06-2.25-6.06-7.5Z" />
                  <path d="m751.62,655.56h5.19l-5.69,30.36h-5.19l5.69-30.36Zm4.56-11.81c1.88,0,3.12,1.12,3.12,2.94,0,2-1.5,4-4.06,4-2,0-3.25-1.19-3.25-3,0-2.06,1.63-3.94,4.19-3.94Z" />
                  <path d="m761.74,655.56h5.12l1.69,25.99,11.25-25.99h5.5l-13.99,30.36h-6.75l-2.81-30.36Z" />
                  <path d="m785.61,676.68l2.25-11.87c1-5.69,5.69-9.37,11.87-9.37h5.37c6.19,0,9.5,3.69,8.5,9.37l-1.19,6.12h-20.49l-1.06,5.5c-.62,3.25,1.19,5.12,4.75,5.12h4.19c3.62,0,6.12-1.88,6.75-5.12l.13-.75h4.87l-.19,1c-1,5.69-5.69,9.37-11.87,9.37h-5.37c-6.18,0-9.5-3.68-8.5-9.37Zm22.62-9.43l.44-2.13c.56-3.25-1.25-5.25-4.87-5.25h-4.19c-3.56,0-6.06,2-6.62,5.25l-.37,2.13h15.62Z" />
                </g>
                <g>
                  <path d="m587.36,629.44c2.3-17.83-10.64-31.55-28.49-31.55h-29.08c-1.73,0-3.38,1.4-3.68,3.13l-2.79,15.83c-.3,1.73-1.95,3.13-3.68,3.13h-15.83c-1.73,0-3.38,1.4-3.68,3.13l-2.79,15.83c-.3,1.73.85,3.13,2.58,3.13h15.83c1.73,0,3.38-1.4,3.68-3.13l2.79-15.83c.3-1.73,1.95-3.13,3.68-3.13h29.54c5.77,0,10.18,4.22,9.72,9.96-.53,6.59-6.68,12.14-13.14,12.14h-30.12c-13.88,0-27.11,11.25-29.56,25.12l-2.81,15.94c-.3,1.73.85,3.13,2.58,3.13h15.83c1.73,0,3.38-1.4,3.68-3.13l2.8-15.86c.3-1.71,1.94-3.1,3.65-3.1h30.05c18.84,0,36.78-15.72,39.24-34.75Z" />
                  <path d="m578.14,664.19h-20.75c-2.79,0-4.78,3.37-3.16,5.35l13.04,15.84c.48.59,1.22.92,2.05.92h4.91c1.73,0,3.38-1.4,3.68-3.13l2.79-15.83c.3-1.73-.85-3.13-2.58-3.13Z" />
                </g>
                <path d="m643.81,620.08l.02-.09h-18.97c-1.73,0-3.38,1.4-3.68,3.13l-2.79,15.83c-.31,1.75-1.95,3.14-3.69,3.14h-16.4c-1.41,0-2.77,1.15-3.02,2.56l-6.89,39.07c-.25,1.41.7,2.56,2.11,2.56h16.97c1.41,0,2.77-1.15,3.02-2.56l6.79-38.5c.31-1.75,1.95-3.14,3.69-3.14h16.68c1.26,0,2.1,1.02,1.88,2.28l-6.84,38.78c-.31,1.75.84,3.14,2.58,3.14h15.82c1.75,0,3.38-1.39,3.69-3.14l6.88-39.03c2.23-12.64-5.67-23.01-17.86-24.04Z" />
                <g>
                  <path
                    d="m538.92,604.46c-.17.96-.66,1.79-1.48,2.49-.82.69-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49s.66-1.8,1.48-2.49c.82-.7,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.69.77,1.53.6,2.49Zm-1.86,10.54c-.17.96-.66,1.79-1.48,2.49-.82.7-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04-.77-1.53-.6-2.49.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.77,1.53.6,2.49Zm-1.93,10.92c-.17.96-.66,1.8-1.48,2.49-.82.7-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.69-.77-1.53-.6-2.49s.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.77,1.53.6,2.49Zm12.98-10.92c-.17.96-.66,1.79-1.48,2.49s-1.71,1.04-2.67,1.04-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49s.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.78,1.53.61,2.49Z"
                    fill="#fff"
                  />
                  <path
                    d="m571.05,604.46c-.17.96-.66,1.79-1.48,2.49-.82.69-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49s.66-1.8,1.48-2.49c.82-.7,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.69.77,1.53.6,2.49Zm9.2,10.54c-.17.96-.66,1.79-1.48,2.49s-1.71,1.04-2.67,1.04-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49s.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.78,1.53.61,2.49Z"
                    fill="#fff"
                  />
                  <path
                    d="m603.18,604.46c-.17.96-.66,1.79-1.48,2.49-.82.69-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49.17-.96.66-1.8,1.48-2.49.82-.7,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.69.77,1.53.6,2.49Z"
                    fill="#fff"
                  />
                  <path
                    d="m635.31,604.46c-.17.96-.66,1.79-1.48,2.49-.82.69-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49s.66-1.8,1.48-2.49c.82-.7,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.69.77,1.53.6,2.49Zm11.05,0c-.17.96-.66,1.79-1.48,2.49-.82.69-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49s.66-1.8,1.48-2.49c.82-.7,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.69.78,1.53.61,2.49Z"
                    fill="#fff"
                  />
                  <path
                    d="m665.58,615c-.17.96-.66,1.79-1.48,2.49-.82.7-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04-.77-1.53-.6-2.49.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.77,1.53.6,2.49Zm-1.93,10.92c-.17.96-.66,1.8-1.48,2.49-.82.7-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.69-.77-1.53-.6-2.49s.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.77,1.53.6,2.49Zm14.84-21.46c-.17.96-.66,1.79-1.48,2.49-.82.69-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49s.66-1.8,1.48-2.49c.82-.7,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.69.78,1.53.61,2.49Zm-1.86,10.54c-.17.96-.66,1.79-1.48,2.49s-1.71,1.04-2.67,1.04-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49s.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.78,1.53.61,2.49Z"
                    fill="#fff"
                  />
                </g>
                <g>
                  <path
                    d="m643.41,660.04c-.17.96-.66,1.79-1.48,2.49-.82.69-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49s.66-1.8,1.48-2.49c.82-.7,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.69.77,1.53.6,2.49Zm-3.78,21.46c-.17.96-.66,1.8-1.48,2.49-.82.7-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.69-.77-1.53-.6-2.49s.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.77,1.53.6,2.49Zm14.84-21.46c-.17.96-.66,1.79-1.48,2.49-.82.69-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49s.66-1.8,1.48-2.49c.82-.7,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.69.78,1.53.61,2.49Zm-1.86,10.54c-.17.96-.66,1.79-1.48,2.49s-1.71,1.04-2.67,1.04-1.73-.35-2.31-1.04-.77-1.53-.6-2.49c.17-.96.66-1.79,1.48-2.49.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.78,1.53.61,2.49Z"
                    fill="#fff"
                  />
                  <path
                    d="m675.54,660.04c-.17.96-.66,1.79-1.48,2.49-.82.69-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49s.66-1.8,1.48-2.49c.82-.7,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.69.77,1.53.6,2.49Z"
                    fill="#fff"
                  />
                  <path
                    d="m705.82,670.58c-.17.96-.66,1.79-1.48,2.49-.82.7-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04-.77-1.53-.6-2.49.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.77,1.53.6,2.49Zm-1.93,10.92c-.17.96-.66,1.8-1.48,2.49-.82.7-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.69-.77-1.53-.6-2.49s.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.77,1.53.6,2.49Zm14.84-21.46c-.17.96-.66,1.79-1.48,2.49-.82.69-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49s.66-1.8,1.48-2.49c.82-.7,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.69.78,1.53.61,2.49Zm-1.86,10.54c-.17.96-.66,1.79-1.48,2.49s-1.71,1.04-2.67,1.04-1.73-.35-2.31-1.04-.77-1.53-.6-2.49.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.78,1.53.61,2.49Z"
                    fill="#fff"
                  />
                  <path
                    d="m737.95,670.58c-.17.96-.66,1.79-1.48,2.49-.82.7-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04-.77-1.53-.6-2.49.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.77,1.53.6,2.49Zm12.91-10.54c-.17.96-.66,1.79-1.48,2.49-.82.69-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49s.66-1.8,1.48-2.49c.82-.7,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.69.78,1.53.61,2.49Z"
                    fill="#fff"
                  />
                  <path
                    d="m771.94,660.04c-.17.96-.66,1.79-1.48,2.49-.82.69-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49.17-.96.66-1.8,1.48-2.49.82-.7,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.69.77,1.53.6,2.49Zm-1.86,10.54c-.17.96-.66,1.79-1.48,2.49-.82.7-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04-.77-1.53-.6-2.49.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.77,1.53.6,2.49Zm-1.93,10.92c-.17.96-.66,1.8-1.48,2.49-.82.7-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.69-.77-1.53-.6-2.49s.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.77,1.53.6,2.49Zm11.05,0c-.17.96-.67,1.8-1.48,2.49-.82.7-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.69-.77-1.53-.6-2.49s.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.78,1.53.61,2.49Z"
                    fill="#fff"
                  />
                  <path
                    d="m804.07,660.04c-.17.96-.66,1.79-1.48,2.49-.82.69-1.71,1.04-2.67,1.04s-1.73-.35-2.31-1.04c-.57-.7-.77-1.53-.6-2.49.17-.96.66-1.8,1.48-2.49.82-.7,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.69.77,1.53.6,2.49Zm9.2,10.54c-.17.96-.66,1.79-1.48,2.49s-1.71,1.04-2.67,1.04-1.73-.35-2.31-1.04-.77-1.53-.6-2.49.66-1.79,1.48-2.49c.82-.69,1.71-1.04,2.67-1.04s1.73.35,2.31,1.04c.57.7.78,1.53.61,2.49Z"
                    fill="#fff"
                  />
                </g>
              </g>
              <g
                className="graph__svg__sticker"
                style={{ animationDelay: delay * 5 + "s" }}
              >
                <path
                  d="m992.95,466.37l13.97-13.97c2.76-2.76,4.27-6.42,4.27-10.32s-1.52-7.56-4.27-10.31l-20.6-20.6c-2.76-2.76-6.42-4.28-10.32-4.28s-7.56,1.52-10.32,4.27l-36.56,36.56c-1.65,1.65-4.34,1.65-5.99,0l-36.56-36.56c-2.76-2.75-6.42-4.27-10.31-4.27s-7.56,1.52-10.32,4.27l-13.96,13.96-13.97-13.97c-2.76-2.75-6.42-4.27-10.31-4.27s-7.56,1.52-10.32,4.27l-13.93,13.93-13.93-13.93c-2.76-2.75-6.42-4.27-10.31-4.27s-7.56,1.52-10.32,4.27l-13.96,13.96-13.97-13.97c-2.76-2.75-6.42-4.27-10.31-4.27s-7.56,1.52-10.32,4.27l-20.6,20.6c-2.76,2.76-4.27,6.42-4.27,10.32s1.52,7.56,4.27,10.31l13.97,13.97-13.96,13.97c-2.76,2.76-4.27,6.42-4.27,10.32s1.52,7.56,4.27,10.31l20.6,20.6c2.76,2.75,6.42,4.27,10.31,4.27s7.56-1.52,10.32-4.27l13.96-13.96,13.97,13.97c2.76,2.75,6.42,4.27,10.31,4.27s7.56-1.52,10.32-4.27l13.93-13.93,13.93,13.93c2.76,2.75,6.42,4.27,10.31,4.27s7.56-1.52,10.32-4.27l13.96-13.96,13.97,13.97c2.76,2.75,6.42,4.27,10.31,4.27s7.56-1.52,10.32-4.27l36.56-36.56c1.65-1.65,4.34-1.65,5.99,0l36.56,36.56c2.76,2.75,6.42,4.27,10.31,4.27s7.56-1.52,10.32-4.27l20.6-20.6c5.69-5.69,5.69-14.94,0-20.63l-13.97-13.97Z"
                  stroke="#fff"
                  stroke-miterlimit="10"
                  stroke-width="1.99"
                />
                <path
                  d="m977.84,468.21c-1.02-1.02-1.02-2.66,0-3.68l20.6-20.6c1.02-1.02,1.02-2.66,0-3.68l-20.6-20.6c-1.02-1.02-2.66-1.02-3.68,0l-44.88,44.88c-1.02,1.02-1.02,2.66,0,3.68l44.88,44.88c1.02,1.02,2.66,1.02,3.68,0l20.6-20.6c1.02-1.02,1.02-2.66,0-3.68l-20.6-20.6Z"
                  stroke="#fff"
                  stroke-miterlimit="10"
                  stroke-width="1.99"
                />
                <path
                  d="m878.09,419.64c-1.02-1.02-2.66-1.02-3.68,0l-20.6,20.6c-1.02,1.02-2.66,1.02-3.68,0l-20.6-20.6c-1.02-1.02-2.66-1.02-3.68,0l-20.56,20.56c-1.02,1.02-2.66,1.02-3.68,0l-20.56-20.56c-1.02-1.02-2.66-1.02-3.68,0l-20.6,20.6c-1.02,1.02-2.66,1.02-3.68,0l-20.6-20.6c-1.02-1.02-2.66-1.02-3.68,0l-20.6,20.6c-1.02,1.02-1.02,2.66,0,3.68l20.6,20.6c1.02,1.02,1.02,2.66,0,3.68l-20.6,20.6c-1.02,1.02-1.02,2.66,0,3.68l20.6,20.6c1.02,1.02,2.66,1.02,3.68,0l22.44-22.44,22.44,22.44c1.02,1.02,2.66,1.02,3.68,0l20.56-20.56c1.02-1.02,2.66-1.02,3.68,0l20.56,20.56c1.02,1.02,2.66,1.02,3.68,0l22.44-22.44,22.44,22.44c1.02,1.02,2.66,1.02,3.68,0l44.88-44.88c1.02-1.02,1.02-2.66,0-3.68l-44.88-44.88Z"
                  stroke="#fff"
                  stroke-miterlimit="10"
                  stroke-width="1.99"
                />
                <text
                  transform="translate(725.5 492.96)"
                  fill="#fff"
                  font-family="PPEditorialNew-Italic, 'PP Editorial New'"
                  font-size="68.85"
                  font-style="italic"
                >
                  <tspan x="0" y="0" letter-spacing="-.03em">
                    N
                  </tspan>
                  <tspan x="48.54" y="0">
                    e
                  </tspan>
                  <tspan x="76.5" y="0" letter-spacing="0em">
                    x
                  </tspan>
                  <tspan x="112.51" y="0" letter-spacing="0em">
                    t.
                  </tspan>
                  <tspan x="149" y="0" letter-spacing="-.01em">
                    j
                  </tspan>
                  <tspan x="167.38" y="0">
                    s
                  </tspan>
                </text>
              </g>
              <g
                className="graph__svg__sticker"
                style={{ animationDelay: delay * 7 + "s" }}
              >
                <path
                  d="m1247.87,1055.84h-308.79c-5.42,0-9.23-5.34-7.46-10.46l20.39-59.22c1.1-3.19,4.09-5.32,7.46-5.32h308.79c5.42,0,9.23,5.34,7.46,10.46l-20.39,59.22c-1.1,3.19-4.09,5.32-7.46,5.32Z"
                  fill="#ff592c"
                />
                <path
                  d="m960.67,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m958.47,1003.66c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m956.26,1009.41c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m947.44,1032.39c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m945.23,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="971.49" cy="992.17" r="2.87" fill="#fff" />
                <path
                  d="m966.42,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="967.08" cy="1003.66" r="2.87" fill="#fff" />
                <circle cx="964.88" cy="1009.41" r="2.87" fill="#fff" />
                <circle cx="962.67" cy="1015.15" r="2.87" fill="#fff" />
                <circle cx="956.05" cy="1032.39" r="2.87" fill="#fff" />
                <path
                  d="m950.98,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="951.64" cy="1043.88" r="2.87" fill="#fff" />
                <path
                  d="m974.37,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m972.16,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m967.75,1009.41c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m965.54,1015.15c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m963.34,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m956.72,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m954.51,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="982.98" cy="992.17" r="2.87" fill="#fff" />
                <path
                  d="m977.91,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="974.16" cy="1015.15" r="2.87" fill="#fff" />
                <path
                  d="m969.08,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m962.46,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="963.13" cy="1043.88" r="2.87" fill="#fff" />
                <path
                  d="m985.86,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m983.65,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m977.03,1015.15c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m974.83,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m972.62,1026.64c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m968.21,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m966,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m991.6,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m989.4,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m987.19,1003.66c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m980.57,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m978.37,1026.64c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m976.16,1032.39c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m973.95,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m971.75,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m995.14,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="995.81" cy="1003.66" r="2.87" fill="#fff" />
                <circle cx="986.98" cy="1026.64" r="2.87" fill="#fff" />
                <circle cx="984.78" cy="1032.39" r="2.87" fill="#fff" />
                <path
                  d="m979.7,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1008.84,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1006.63,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1004.43,1003.66c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1017.46" cy="992.17" r="2.87" fill="#fff" />
                <path
                  d="m1012.38,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1013.04" cy="1003.66" r="2.87" fill="#fff" />
                <circle cx="1010.84" cy="1009.41" r="2.87" fill="#fff" />
                <circle cx="1008.63" cy="1015.15" r="2.87" fill="#fff" />
                <path
                  d="m1003.55,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1013.71,1009.41c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1011.5,1015.15c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1009.3,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1007.09,1026.64c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1004.89,1032.39c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1015.71" cy="1026.64" r="2.87" fill="#fff" />
                <circle cx="1013.5" cy="1032.39" r="2.87" fill="#fff" />
                <path
                  d="m1008.43,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1009.09" cy="1043.88" r="2.87" fill="#fff" />
                <path
                  d="m1018.58,1026.64c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1016.38,1032.39c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1014.17,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1011.96,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1030.94,1009.41c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1028.74,1015.15c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1026.53,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1024.33,1026.64c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1022.12,1032.39c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1046.18" cy="992.17" r="2.87" fill="#fff" />
                <path
                  d="m1041.1,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1041.77" cy="1003.66" r="2.87" fill="#fff" />
                <circle cx="1039.56" cy="1009.41" r="2.87" fill="#fff" />
                <circle cx="1037.36" cy="1015.15" r="2.87" fill="#fff" />
                <path
                  d="m1032.28,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1049.05,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1046.85,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1044.64,1003.66c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1060.54,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1058.34,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1056.13,1003.66c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1053.93,1009.41c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1051.72,1015.15c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1049.51,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1047.31,1026.64c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1045.1,1032.39c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1042.9,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1040.69,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1069.16" cy="992.17" r="2.87" fill="#fff" />
                <path
                  d="m1064.08,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1064.75" cy="1003.66" r="2.87" fill="#fff" />
                <circle cx="1062.54" cy="1009.41" r="2.87" fill="#fff" />
                <circle cx="1060.34" cy="1015.15" r="2.87" fill="#fff" />
                <path
                  d="m1055.26,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1055.93" cy="1026.64" r="2.87" fill="#fff" />
                <circle cx="1053.72" cy="1032.39" r="2.87" fill="#fff" />
                <path
                  d="m1048.64,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1049.31" cy="1043.88" r="2.87" fill="#fff" />
                <path
                  d="m1072.03,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1069.83,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1063.21,1015.15c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1061,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1054.39,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1052.18,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1080.65" cy="992.17" r="2.87" fill="#fff" />
                <path
                  d="m1075.57,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1071.83" cy="1015.15" r="2.87" fill="#fff" />
                <path
                  d="m1066.75,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1060.13,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1060.8" cy="1043.88" r="2.87" fill="#fff" />
                <path
                  d="m1083.52,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1081.32,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1074.7,1015.15c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1072.49,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1065.88,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1063.67,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1089.27,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1087.06,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1080.44,1015.15c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1078.24,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1071.62,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1069.41,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1100.76,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1098.55,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1096.35,1003.66c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1094.14,1009.41c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1091.93,1015.15c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1089.73,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1087.52,1026.64c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1085.32,1032.39c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1083.11,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1080.91,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1109.38" cy="992.17" r="2.87" fill="#fff" />
                <path
                  d="m1104.3,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1104.96" cy="1003.66" r="2.87" fill="#fff" />
                <circle cx="1102.76" cy="1009.41" r="2.87" fill="#fff" />
                <circle cx="1100.55" cy="1015.15" r="2.87" fill="#fff" />
                <path
                  d="m1095.47,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1096.14" cy="1026.64" r="2.87" fill="#fff" />
                <circle cx="1093.93" cy="1032.39" r="2.87" fill="#fff" />
                <path
                  d="m1088.86,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1089.52" cy="1043.88" r="2.87" fill="#fff" />
                <path
                  d="m1094.6,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1092.4,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1100.35,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1101.01" cy="1043.88" r="2.87" fill="#fff" />
                <path
                  d="m1106.09,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1103.88,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1111.84,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1109.63,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1129.48,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1127.28,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1138.1" cy="992.17" r="2.87" fill="#fff" />
                <path
                  d="m1133.02,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1140.97,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1138.77,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1146.72,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1144.51,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1142.31,1003.66c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1140.1,1009.41c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1137.89,1015.15c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1135.69,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1133.48,1026.64c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1131.28,1032.39c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1129.07,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1126.86,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1155.33" cy="992.17" r="2.87" fill="#fff" />
                <path
                  d="m1150.26,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1150.92" cy="1003.66" r="2.87" fill="#fff" />
                <circle cx="1148.72" cy="1009.41" r="2.87" fill="#fff" />
                <circle cx="1146.51" cy="1015.15" r="2.87" fill="#fff" />
                <path
                  d="m1141.43,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1142.1" cy="1026.64" r="2.87" fill="#fff" />
                <circle cx="1139.89" cy="1032.39" r="2.87" fill="#fff" />
                <path
                  d="m1134.82,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1135.48" cy="1043.88" r="2.87" fill="#fff" />
                <path
                  d="m1158.21,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1156,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1166.82" cy="992.17" r="2.87" fill="#fff" />
                <path
                  d="m1161.75,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1169.7,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1167.49,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1181.19,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1178.98,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1176.78,1003.66c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1174.57,1009.41c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1172.37,1015.15c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1170.16,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1167.95,1026.64c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1165.75,1032.39c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1163.54,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1161.34,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1189.81" cy="992.17" r="2.87" fill="#fff" />
                <path
                  d="m1184.73,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1185.39" cy="1003.66" r="2.87" fill="#fff" />
                <circle cx="1183.19" cy="1009.41" r="2.87" fill="#fff" />
                <circle cx="1180.98" cy="1015.15" r="2.87" fill="#fff" />
                <path
                  d="m1175.9,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1176.57" cy="1026.64" r="2.87" fill="#fff" />
                <circle cx="1174.37" cy="1032.39" r="2.87" fill="#fff" />
                <path
                  d="m1169.29,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1169.95" cy="1043.88" r="2.87" fill="#fff" />
                <path
                  d="m1192.68,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1190.47,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1183.86,1015.15c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1181.65,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1175.03,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1172.83,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1198.42,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1196.22,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1189.6,1015.15c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1187.39,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1180.78,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1178.57,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1207.04" cy="992.17" r="2.87" fill="#fff" />
                <path
                  d="m1201.96,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1198.22" cy="1015.15" r="2.87" fill="#fff" />
                <path
                  d="m1193.14,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1186.52,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1187.19" cy="1043.88" r="2.87" fill="#fff" />
                <path
                  d="m1209.91,992.17c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1207.71,997.92c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1201.09,1015.15c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1198.88,1020.9c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1192.27,1038.13c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <path
                  d="m1190.06,1043.88c0-1.61,1.26-2.87,2.87-2.87s2.87,1.26,2.87,2.87-1.26,2.87-2.87,2.87-2.87-1.26-2.87-2.87Z"
                  fill="#fff"
                />
                <circle cx="1224.26" cy="992.23" r="2.92" fill="#fff" />
                <circle cx="1230.11" cy="992.23" r="2.92" fill="#fff" />
                <circle cx="1235.96" cy="992.23" r="2.92" fill="#fff" />
                <circle cx="1227.9" cy="998.07" r="2.92" fill="#fff" />
                <circle cx="1225.7" cy="1003.92" r="2.92" fill="#fff" />
                <circle cx="1247.66" cy="992.23" r="2.92" fill="#fff" />
                <circle cx="1245.45" cy="998.07" r="2.92" fill="#fff" />
                <circle cx="1243.24" cy="1003.92" r="2.92" fill="#fff" />
                <circle cx="1259.35" cy="992.23" r="2.92" fill="#fff" />
                <circle cx="1253.5" cy="992.23" r="2.92" fill="#fff" />
                <circle cx="1257.15" cy="998.07" r="2.92" fill="#fff" />
                <circle cx="1254.94" cy="1003.92" r="2.92" fill="#fff" />
                <circle cx="1251.3" cy="998.07" r="2.92" fill="#fff" />
              </g>
              <g
                className="graph__svg__sticker"
                style={{ animationDelay: delay * 1 + "s" }}
              >
                <path
                  d="m307.53,946.36l-.33-4.33-4.37.33-.33-4.36-4.36.33-.33-4.37-39.19,2.97.33,4.37-8.74.66.33,4.36-17.48,1.32.33,4.35-8.65.65-.33-4.37-17.47,1.32-.33-4.36-4.37.33-.33-4.37-17.48,1.32-.33-4.36-4.36.33-.33-4.38-52.3,3.96.33,4.37-4.37.33.33,4.36-17.47,1.32.33,4.36-17.37,1.31.33,4.37-4.36.33.66,8.76-4.37.33.33,4.37-4.37.33,2.14,28.33,4.37-.33.66,8.76-4.37.33,1.48,19.59,34.82-2.63-.33-4.36,4.37-.33-1.65-21.87,4.36-.33-.33-4.4,4.37-.33-.33-4.36,17.48-1.32-.33-4.37,8.76-.66v.02s17.48-1.32,17.48-1.32l.33,4.36,4.36-.33.33,4.36,17.36-1.31.33,4.37,17.48-1.32.33,4.37,39.19-2.96-.33-4.35,21.85-1.65-.33-4.36,4.4-.33,1.32,17.46,4.37-.33.33,4.37,30.45-2.3-.33-4.36,4.36-.33-3.96-52.33-4.36.33Zm-200.97,39.34l-4.36.33.33,4.36-4.37.33.66,8.75,4.37-.33.66,8.76-4.37.33.33,4.36-4.37.33-.33-4.36,4.37-.33-.66-8.76-4.37.33-.99-13.11,4.37-.33-.33-4.37,8.74-.66.33,4.37Zm192.25-10.18l-4.36.33.66,8.76,4.36-.33.33,4.37-4.36.33-.33-4.37-4.37.33-.66-8.76,4.37-.33-.99-13.07-8.74.66-.33-4.37-8.75.66.33,4.37-4.36.33.33,4.37-17.37,1.31.33,4.36-21.85,1.65.33,4.35-8.74.66-.33-4.37-17.48,1.32-.33-4.37-17.36,1.31-.33-4.36-4.36.33-.33-4.36-17.48,1.32-.33-4.37-4.37.33-.33-4.37-13.11.99.33,4.36-4.36.33.33,4.36-17.36,1.31.33,4.37-17.48,1.32.33,4.36-8.74.66-.66-8.74,4.36-.33-.33-4.37,17.37-1.31-.33-4.36,17.47-1.32-.33-4.36,4.37-.33-.33-4.37,21.85-1.65.33,4.38,4.36-.33.33,4.36,17.48-1.32.33,4.37,4.37-.33.33,4.36,17.47-1.32.33,4.37,17.36-1.31.33,4.36,4.37-.33-.33-4.34,17.36-1.31-.33-4.37,17.48-1.32-.33-4.36,8.74-.66-.33-4.37,8.75-.66.33,4.37,4.36-.33.33,4.36,4.37-.33.33,4.33,4.36-.33.99,13.11Z"
                  fill="#7d5efc"
                />
                <path
                  d="m125.03,854.63l.33,4.37,4.37-.33.33,4.37,4.37-.33.33,4.37,4.37-.33.33,4.37,4.37-.33,2.98,39.33-4.37.33.66,8.74-4.37.33.33,4.37-4.37.33.33,4.37-4.37.33-.66-8.74,4.37-.33-2.98-39.33-4.37.33-.66-8.74-8.74.66-.33-4.37-13.11.99-.33-4.37,4.37-.33-.33-4.37,4.37-.33-.33-4.37,13.11-.99m-30.59,2.31l.33,4.37,4.37-.33.66,8.74,4.37-.33.33,4.37-4.37.33.99,13.11,4.37-.33,3.31,43.7,4.37-.33.33,4.37,13.11-.99.33,4.37-4.37.33.33,4.37-8.74.66-.33-4.37-4.37.33,1.65,21.85-8.74.66.33,4.37-8.74.66-2.31-30.59-8.74.66-.33-4.37,4.37-.33-.66-8.74,4.37-.33-3.97-52.44-4.37.33-.33-4.37,4.37-.33-.33-4.37,4.37-.33-.33-4.37,4.37-.33m36.21,71.97l.33,4.37-4.37.33-.33-4.37,4.37-.33m8.45-90.66l-15.22,1.15-13.11.99-2.26.17-15.22,1.15-4.37.33-15.22,1.15.33,4.37-4.37.33.33,4.37-4.37.33,1.15,15.22.33,4.37,1.15,15.22,4.37-.33,1.66,21.99-4.37.33.66,8.74-4.37.33,1.15,15.22.33,4.37,1.15,15.22,8.74-.66,1.16,15.36,1.15,15.22,15.22-1.15,8.74-.66,15.22-1.15-.33-4.37,8.74-.66-1.15-15.22-.17-2.25,13.11-.99-.33-4.37,4.37-.33-.33-4.37,4.37-.33-.33-4.37,4.37-.33-.33-4.37,4.37-.33-.33-4.37,4.37-.33-.66-8.74,4.37-.33-1.15-15.22-2.98-39.33-1.15-15.22-4.37.33-.33-4.37-4.37.33-.33-4.37-4.37.33-.33-4.37-4.37.33-.33-4.37h0Z"
                  fill="#7d5efc"
                />
                <path
                  d="m208.06,848.35l.33,4.37,4.37-.33.33,4.37-4.37.33.33,4.37-4.37.33.33,4.37-4.37.33-.66-8.74-4.37.33-.33-4.37-13.11.99-.33-4.37,26.22-1.98m-25.89,6.35l.33,4.37-4.37.33-.33-4.37,4.37-.33m-4.04,4.7l2.31,30.59,4.37-.33.33,4.37-4.37.33.99,13.11-4.37.33.33,4.37-4.37.33.33,4.37,4.37-.33.33,4.37,8.74-.66.33,4.37,8.74-.66.33,4.37-4.37.33.33,4.37-4.37.33.33,4.37-8.74.66-.33-4.37-8.74.66-.33-4.37-13.11.99-.66-8.74,4.37-.33-.33-4.37,4.37-.33-3.64-48.07-4.37.33-.33-4.37,13.11-.99-.33-4.37,8.74-.66m35.95,10.46l.33,4.37,4.37-.33.33,4.37,4.37-.33,2.31,30.59-4.37.33.66,8.74-4.37.33.33,4.37-4.37.33.33,4.37-4.37.33-.66-8.74,4.37-.33-1.98-26.22-4.37.33-.33-4.37-4.37.33-.33-4.37-8.74.66-.33-4.37,4.37-.33-.33-4.37,8.74-.66-.33-4.37,8.74-.66m-25.23,15.09l.33,4.37-4.37.33-.33-4.37,4.37-.33m15.42,29.6l.33,4.37-4.37.33-.33-4.37,4.37-.33m-4.04,4.7l.33,4.37-4.37.33-.33-4.37,4.37-.33m9.73,12.45l.66,8.74,4.37-.33.33,4.37,8.74-.66.99,13.11-13.11.99-.33-4.37-4.37.33-1.65-21.85,4.37-.33m12.16-99.73l-15.22,1.15-26.22,1.98-15.22,1.15.33,4.37-4.37.33.33,4.37-8.74.66.33,4.37-13.11.99,1.15,15.22.33,4.37,1.15,15.22,4.37-.33,1.33,17.62-4.37.33.33,4.37-4.37.33,1.15,15.22.66,8.74,1.15,15.22,13.11-.99.33,4.37,8.74-.66.33,4.37,15.22-1.15,8.74-.66,2.26-.17.17,2.25,1.15,15.22,4.37-.33.33,4.37,15.22-1.15,13.11-.99,15.22-1.15-1.15-15.22-.99-13.11-1.15-15.22-.34-4.51,4.37-.33-1.15-15.22-2.31-30.59-1.15-15.22-4.37.33-.33-4.37-4.37.33-.33-4.37-.17-2.26-1.15-15.22-4.37.33-.33-4.37h0Z"
                  fill="#7d5efc"
                />
                <path
                  d="m277.98,843.06l.33,4.37,4.37-.33.33,4.37,4.37-.33.33,4.37,4.37-.33.33,4.37,4.37-.33,2.98,39.33-4.37.33.66,8.74-4.37.33.33,4.37-4.37.33.33,4.37-4.37.33-.66-8.74,4.37-.33-2.98-39.33-4.37.33-.66-8.74-8.74.66-.33-4.37-13.11.99-.33-4.37,4.37-.33-.33-4.37,4.37-.33-.33-4.37,13.11-.99m-30.59,2.31l.33,4.37,4.37-.33.66,8.74,4.37-.33.33,4.37-4.37.33.99,13.11,4.37-.33,3.31,43.7,4.37-.33.33,4.37,13.11-.99.33,4.37-4.37.33.33,4.37-8.74.66-.33-4.37-4.37.33,1.65,21.85-8.74.66.33,4.37-8.74.66-2.31-30.59-8.74.66-.33-4.37,4.37-.33-.66-8.74,4.37-.33-3.97-52.44-4.37.33-.33-4.37,4.37-.33-.33-4.37,4.37-.33-.33-4.37,4.37-.33m36.21,71.97l.33,4.37-4.37.33-.33-4.37,4.37-.33m8.45-90.66l-15.22,1.15-13.11.99-2.26.17-15.22,1.15-4.37.33-15.22,1.15.33,4.37-4.37.33.33,4.37-4.37.33,1.15,15.22.33,4.37,1.15,15.22,4.37-.33,1.66,21.99-4.37.33.66,8.74-4.37.33,1.15,15.22.33,4.37,1.15,15.22,8.74-.66,1.16,15.36,1.15,15.22,15.22-1.15,8.74-.66,15.22-1.15-.33-4.37,8.74-.66-1.15-15.22-.17-2.25,13.11-.99-.33-4.37,4.37-.33-.33-4.37,4.37-.33-.33-4.37,4.37-.33-.33-4.37,4.37-.33-.33-4.37,4.37-.33-.66-8.74,4.37-.33-1.15-15.22-2.98-39.33-1.15-15.22-4.37.33-.33-4.37-4.37.33-.33-4.37-4.37.33-.33-4.37-4.37.33-.33-4.37h0Z"
                  fill="#7d5efc"
                />
                <path
                  d="m105.23,968.19l.33,4.37-4.36.33.66,8.74,8.74-.66-.33-4.36,10.85-.82-.66-8.75-15.22,1.15Zm-5.76,40.04l4.37-.33-.66-8.76-4.37.33.66,8.76Zm-4.04,4.7l4.37-.33-.33-4.36-4.37.33.33,4.36Z"
                  fill="#7d5efc"
                />
                <path
                  d="m98.81,999.47l.66,8.76,4.37-.33-.66-8.76-4.37.33Zm-.49-6.46l-4.37.33.49,6.46,4.37-.33-.49-6.46Z"
                  fill="#7d5efc"
                />
                <path
                  d="m97.66,984.25l.16,2.11-4.37.33.99,13.11,4.37-.33-.66-8.75,4.37-.33-.33-4.36,4.36-.33-.16-2.11-8.74.66Zm-2.23,28.68l4.37-.33-.33-4.36-4.37.33.33,4.36Z"
                  fill="#7d5efc"
                />
                <path
                  d="m295.44,988.98l4.36-.33-.33-4.37-4.36.33.33,4.37Zm-1.99-26.25l-.16-2.11-8.74.66.16,2.16,8.74-.66.99,13.07,4.36-.33-.99-13.11-4.36.33Zm-19.59,1.53l2.11-.16-.16-2.16-2.11.16.16,2.16Z"
                  fill="#7d5efc"
                />
                <path
                  d="m295.11,984.61l.33,4.37,4.36-.33-.33-4.37-4.36.33Zm-5.04-8.43l.66,8.76,4.37-.33-.66-8.76-4.37.33Zm-192.25,10.18l-4.37.33.82,10.83,4.37-.33-.49-6.46,4.37-.33-.33-4.36,4.36-.33-.33-4.37-8.74.66.33,4.37Z"
                  fill="#7d5efc"
                />
                <path d="m86.95,932.23l-.66-8.74,4.37-.33-3.97-52.44-4.37.33-.33-4.37,4.37-.33-.33-4.37,4.37-.33-.33-4.37,4.37-.33.33,4.37,4.37-.33.66,8.74,4.37-.33.33,4.37-4.37.33.99,13.11,4.37-.33,3.31,43.7,4.37-.33.33,4.37,13.11-.99.33,4.37-4.37.33.33,4.37-8.74.66-.33-4.37-4.37.33,1.65,21.85-8.74.66.33,4.37-8.74.66-2.31-30.59-8.74.66-.33-4.37,4.37-.33Zm16.89-67.2l4.37-.33-.33-4.37,4.37-.33-.33-4.37,13.11-.99.33,4.37,4.37-.33.33,4.37,4.37-.33.33,4.37,4.37-.33.33,4.37,4.37-.33,2.98,39.33-4.37.33.66,8.74-4.37.33.33,4.37-4.37.33.33,4.37-4.37.33-.66-8.74,4.37-.33-2.98-39.33-4.37.33-.66-8.74-8.74.66-.33-4.37-13.11.99-.33-4.37Zm22.44,64.23l4.37-.33.33,4.37-4.37.33-.33-4.37Z" />
                <path d="m160.91,922.24l-.33-4.37,4.37-.33-3.64-48.07-4.37.33-.33-4.37,13.11-.99-.33-4.37,8.74-.66,2.31,30.59,4.37-.33.33,4.37-4.37.33.99,13.11-4.37.33.33,4.37-4.37.33.33,4.37,4.37-.33.33,4.37,8.74-.66.33,4.37,8.74-.66.33,4.37-4.37.33.33,4.37-4.37.33.33,4.37-8.74.66-.33-4.37-8.74.66-.33-4.37-13.11.99-.66-8.74,4.37-.33Zm16.89-67.2l4.37-.33.33,4.37-4.37.33-.33-4.37Zm4.04-4.7l26.22-1.98.33,4.37,4.37-.33.33,4.37-4.37.33.33,4.37-4.37.33.33,4.37-4.37.33-.66-8.74-4.37.33-.33-4.37-13.11.99-.33-4.37Zm2.65,34.96l4.37-.33.33,4.37-4.37.33-.33-4.37Zm8.41-5.03l4.37-.33-.33-4.37,8.74-.66-.33-4.37,8.74-.66.33,4.37,4.37-.33.33,4.37,4.37-.33,2.31,30.59-4.37.33.66,8.74-4.37.33.33,4.37-4.37.33.33,4.37-4.37.33-.66-8.74,4.37-.33-1.98-26.22-4.37.33-.33-4.37-4.37.33-.33-4.37-8.74.66-.33-4.37Zm2.98,39.33l4.37-.33.33,4.37-4.37.33-.33-4.37Zm4.04-4.7l4.37-.33.33,4.37-4.37.33-.33-4.37Zm5.69,17.15l4.37-.33.66,8.74,4.37-.33.33,4.37,8.74-.66.99,13.11-13.11.99-.33-4.37-4.37.33-1.65-21.85Z" />
                <path d="m239.9,920.65l-.66-8.74,4.37-.33-3.97-52.44-4.37.33-.33-4.37,4.37-.33-.33-4.37,4.37-.33-.33-4.37,4.37-.33.33,4.37,4.37-.33.66,8.74,4.37-.33.33,4.37-4.37.33.99,13.11,4.37-.33,3.31,43.7,4.37-.33.33,4.37,13.11-.99.33,4.37-4.37.33.33,4.37-8.74.66-.33-4.37-4.37.33,1.65,21.85-8.74.66.33,4.37-8.74.66-2.31-30.59-8.74.66-.33-4.37,4.37-.33Zm16.89-67.2l4.37-.33-.33-4.37,4.37-.33-.33-4.37,13.11-.99.33,4.37,4.37-.33.33,4.37,4.37-.33.33,4.37,4.37-.33.33,4.37,4.37-.33,2.98,39.33-4.37.33.66,8.74-4.37.33.33,4.37-4.37.33.33,4.37-4.37.33-.66-8.74,4.37-.33-2.98-39.33-4.37.33-.66-8.74-8.74.66-.33-4.37-13.11.99-.33-4.37Zm22.44,64.23l4.37-.33.33,4.37-4.37.33-.33-4.37Z" />
                <polygon points="106.22 981.33 106.56 985.7 102.19 986.03 102.52 990.4 98.15 990.73 98.81 999.47 94.44 999.8 93.45 986.69 97.82 986.36 97.49 981.99 106.22 981.33" />
                <rect
                  x="95.26"
                  y="1008.39"
                  width="4.39"
                  height="4.38"
                  transform="translate(-75.97 10.23) rotate(-4.33)"
                />
                <rect
                  x="99.14"
                  y="999.29"
                  width="4.39"
                  height="8.79"
                  transform="translate(-75.44 10.51) rotate(-4.33)"
                />
                <rect
                  x="295.27"
                  y="984.44"
                  width="4.38"
                  height="4.39"
                  transform="translate(-73.59 25.26) rotate(-4.33)"
                />
                <rect
                  x="290.4"
                  y="976"
                  width="4.39"
                  height="8.79"
                  transform="translate(-73.14 24.87) rotate(-4.33)"
                />
                <polygon points="297.82 962.41 298.81 975.52 294.45 975.85 293.46 962.78 284.72 963.44 284.39 959.07 275.64 959.73 275.97 964.1 271.61 964.43 271.94 968.81 254.57 970.12 254.9 974.49 233.05 976.14 233.38 980.49 224.64 981.15 224.31 976.77 206.83 978.1 206.5 973.72 189.14 975.04 188.81 970.67 184.44 971 184.11 966.64 166.63 967.96 166.3 963.59 161.93 963.92 161.59 959.55 148.48 960.54 148.82 964.9 144.45 965.23 144.78 969.6 127.42 970.91 127.75 975.29 110.27 976.61 110.6 980.97 101.86 981.63 101.2 972.9 105.56 972.57 105.23 968.19 122.6 966.88 122.27 962.52 139.75 961.19 139.42 956.83 143.79 956.5 143.46 952.13 165.31 950.47 165.64 954.85 170 954.52 170.33 958.89 187.81 957.56 188.14 961.94 192.52 961.61 192.85 965.97 210.32 964.65 210.65 969.02 228.02 967.71 228.35 972.07 232.72 971.74 232.39 967.4 249.76 966.09 249.42 961.72 266.91 960.39 266.58 956.03 275.31 955.37 274.98 950.99 283.73 950.33 284.06 954.71 288.42 954.38 288.75 958.74 293.13 958.41 293.45 962.74 297.82 962.41" />
              </g>
              <g
                className="graph__svg__sticker"
                style={{ animationDelay: delay * 7 + "s" }}
              >
                <path
                  d="m1139.84,625.02c-20.81,4.25-41.19-9.21-45.45-30.02-1.98-9.69-.12-19.28,4.53-27.2-7.39-5.46-12.87-13.55-14.85-23.24-1.98-9.69-.12-19.28,4.53-27.2-7.39-5.46-12.87-13.55-14.85-23.24-4.25-20.81,9.21-41.19,30.02-45.45l50.44-10.31c20.81-4.25,41.19,9.21,45.45,30.02,1.98,9.69.12,19.28-4.53,27.2,7.39,5.46,12.87,13.55,14.85,23.24,4.25,20.81-9.21,41.19-30.02,45.45-4.46.91-8.9,1.01-13.16.4l3.05,14.91c4.25,20.81-9.21,41.19-30.02,45.45Z"
                  fill="#fff"
                />
                <path
                  d="m1111.38,460.58h25.74v51.49h-25.74c-14.21,0-25.74-11.54-25.74-25.74h0c0-14.21,11.54-25.74,25.74-25.74Z"
                  transform="translate(-74.9 232.5) rotate(-11.56)"
                  fill="#f24e1e"
                />
                <path
                  d="m1136.08,450.26h25.74c14.21,0,25.74,11.54,25.74,25.74h0c0,14.21-11.54,25.74-25.74,25.74h-25.74v-51.49h0Z"
                  transform="translate(-71.81 242.4) rotate(-11.56)"
                  fill="#ff7262"
                />
                <path
                  d="m1121.69,511.02h25.74v51.49h-25.74c-14.21,0-25.74-11.54-25.74-25.74h0c0-14.21,11.54-25.74,25.74-25.74Z"
                  transform="translate(-84.79 235.59) rotate(-11.56)"
                  fill="#a259ff"
                />
                <rect
                  x="1146.39"
                  y="500.71"
                  width="51.49"
                  height="51.49"
                  rx="25.74"
                  ry="25.74"
                  transform="translate(-81.7 245.49) rotate(-11.56)"
                  fill="#1abcfe"
                />
                <path
                  d="m1132.01,561.46h25.74v25.74c0,14.21-11.54,25.74-25.74,25.74h0c-14.21,0-25.74-11.54-25.74-25.74h0c0-14.21,11.54-25.74,25.74-25.74Z"
                  transform="translate(-94.69 238.68) rotate(-11.56)"
                  fill="#0acf83"
                />
              </g>
              <path
                d="m1332.39,1109.15l8.58-9.12h-27.54v-3.43h27.54l-8.58-9.12,2.65-2.4,12.25,13.23-12.25,13.23-2.65-2.4Z"
                fill="#e7dfcd"
              />
              <path
                d="m24.06,79.11l-9.12-8.58v27.54h-3.43v-27.54l-9.12,8.58-2.4-2.65,13.23-12.25,13.23,12.25-2.4,2.65Z"
                fill="#e7dfcd"
              />
            </g>
          </svg>
        );
        break;
      case 1:
        stickerData.sort(
          (a, b) =>
            b.caption.rendered.match(/\d+/g).map(Number)[0] -
            a.caption.rendered.match(/\d+/g).map(Number)[0]
        );
        return (
          <ul className="graph__list">
            <li className="graph__skill">
              <p className="graph__skill__columnImg">img</p>
              <p className="graph__skill__title">title</p> <p>score</p>
            </li>
            {stickerData.map((sticker, i) => {
              return (
                <li
                  className="graph__skill graph__know"
                  style={{ animationDelay: i * delay + "s" }}
                >
                  <img
                    className="graph__skill__img"
                    src={sticker.source_url}
                    alt=""
                  />
                  <p className="graph__skill__title">
                    {sticker.title.rendered.split("_")[1]}
                  </p>
                  <p className="graph__skill__score">
                    {sticker.caption.rendered.match(/\d+/g).map(Number)[0]}
                  </p>
                </li>
              );
            })}
          </ul>
        );
        break;

      case 2:
        stickerData.sort(
          (a, b) =>
            b.caption.rendered.match(/\d+/g).map(Number)[1] -
            a.caption.rendered.match(/\d+/g).map(Number)[1]
        );
        return (
          <ul className="graph__list">
            <li className="graph__skill">
              <p className="graph__skill__columnImg">img</p>
              <p className="graph__skill__title">title</p> <p>score</p>
            </li>
            {stickerData.map((sticker, i) => {
              return (
                <li
                  className="graph__skill  graph__do"
                  style={{ animationDelay: i * delay + "s" }}
                >
                  <img
                    className="graph__skill__img"
                    src={sticker.source_url}
                    alt=""
                  />
                  <p className="graph__skill__title">
                    {sticker.title.rendered.split("_")[1]}
                  </p>
                  <p className="graph__skill__score">
                    {sticker.caption.rendered.match(/\d+/g).map(Number)[1]}
                  </p>
                </li>
              );
            })}
          </ul>
        );
        break;
      default:
    }
  }

  useEffect(() => {
    setGraphContent(graphContentHandler());
  }, [activeTab]);

  useEffect(() => {
    getStickerData();
  }, []);

  return (
    <>
      <ul className="graph__tabs">
        <GraphTab
          name="Graph"
          tabSource="icon_graph.svg"
          tab={0}
          changeTab={(tab) => setActiveTab(tab)}
          selectedTab={activeTab}
        />
        <GraphTab
          name="Know"
          tabSource="icon_book.svg"
          tab={1}
          changeTab={(tab) => setActiveTab(tab)}
          selectedTab={activeTab}
        />
        <GraphTab
          name="Do"
          tabSource="icon_screw.svg"
          tab={2}
          changeTab={(tab) => setActiveTab(tab)}
          selectedTab={activeTab}
        />
      </ul>
      <div className="graph__content">{graphContent}</div>
    </>
  );
}

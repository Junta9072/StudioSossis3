import { geoOrthographic, geoPath, geoGraticule } from "d3-geo";
import { select } from "d3-selection";
import { timer } from "d3-timer";
import { useState, useEffect, useRef } from "react";
import world_json from "./world.json";

export default function D3Map() {
  const globeRef = useRef();
  const renderGlobe = useRef(false);

  useEffect(() => {
    if (renderGlobe.current == true) {
      return;
    }

    renderGlobe.current = true;

    let width = 500;
    let height = 500;
    const sensitivity = 75;

    // Create a projection using geoOrthographic from d3-geo
    let projection = geoOrthographic()
      .scale(250)
      .center([0, 0])
      .rotate([0, -30])
      .translate([width / 2, height / 2]);

    const initialScale = projection.scale();
    let path = geoPath().projection(projection);

    let svg = select(globeRef.current)
      .append("div")
      .classed("svg-container", true)
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .classed("svg-content-responsive", true);

    let globe = svg
      .append("circle")
      .attr("fill", "#000")
      .attr("stroke", "#fff")
      .attr("stroke-width", "1")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", initialScale);

    let map = svg.append("g");

    const graticule = geoGraticule().step([30, 30]);

    svg
      .append("path")
      .datum(graticule) // Pass the graticule as GeoJSON
      .attr("class", "graticule")
      .attr("d", path)
      .attr("fill", "none")
      .attr("stroke", "#fff")
      .attr("stroke-width", 0.5)
      .attr("stroke-opacity", 0.8);

    let data = world_json;

    map
      .append("g")
      .attr("class", "countries")
      .selectAll("path")
      .data(data.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "black")
      .style("stroke", "white")
      .style("stroke-width", 1)
      .style("opacity", 1);

    const lines = [
      [
        [4.25, 51.13],
        [-74, 40.7],
      ],
      [
        [14.35, 50.39],
        [4.25, 51.13],
      ],
      [
        [72.54, 19.04], // mumbai
        [14.35, 50.39],
      ],
      [
        [15.18, -4.18],
        [4.25, 51.13],
      ],
      [
        [18.26, -33.54],
        [72.54, 19.04],
      ],
      [
        [18.26, -33.54],
        [15.18, -4.18],
      ],
      [
        [115.51, -31.57],
        [18.26, -33.54],
      ],
      [
        [115.51, -31.57],
        [174.48, -41.17], // Wellington
      ],
      [
        [115.51, -31.57],
        [126.56, 37.31],
      ],
      [
        [72.54, 19.04], // mumbai
        [126.56, 37.31],
      ],
      [
        [139.46, 35.39],
        [126.56, 37.31],
      ],
      [
        [139.46, 35.39],
        [-157.51, 21.17], // Honolulu
      ],
      [
        [174.48, -41.17],
        [-157.51, 21.17], // Honolulu
      ],
      [
        [-122.28, 37.48], // SF
        [-157.51, 21.17], // Honolulu
      ],
      [
        [-122.28, 37.48], // SF
        [-74, 40.7], // NYC
      ],
      [
        [-122.28, 37.48], // SF
        [-99.08, 19.26], // Mexico City
      ],
      [
        [-43.1, -22.55], // Rio
        [-99.08, 19.26], // Mexico City
      ],
      [
        [-74, 40.7], // NYC
        [-99.08, 19.26], // Mexico City
      ],
      [
        [-43.1, -22.55], // Rio
        [4.25, 51.13], // Belgium
      ],
    ];

    // Project the coordinates to SVG space
    const projectedCoordinates = lines.map((d) => projection(d));

    svg
      .append("g")
      .attr("class", "lines")
      .selectAll("path")
      .data(lines)
      .enter()
      .append("path")
      .datum((d) => ({
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: d, // Pass each pair of coordinates
        },
      }))
      .attr("d", path)
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 2);

    // Optional rotation using d3-timer
    timer(function (elapsed) {
      const rotate = projection.rotate();
      const k = sensitivity / projection.scale();
      projection.rotate([rotate[0] - 0.5 * k, rotate[1]]);
      path = geoPath().projection(projection);
      svg.selectAll("path").attr("d", path);
    }, 200);
  }, []);

  return <div className="contact__globe" id="globe" ref={globeRef} />;
}

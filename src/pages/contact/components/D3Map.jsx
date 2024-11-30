import * as d3 from "d3";
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

    let projection = d3
      .geoOrthographic()
      .scale(250)
      .center([0, 0])
      .rotate([0, -30])
      .translate([width / 2, height / 2]);

    const initialScale = projection.scale();
    let path = d3.geoPath().projection(projection);

    let svg = d3
      .select(globeRef.current)
      .append("div")
      // Container class to make it responsive.
      .classed("svg-container", true)
      .append("svg")
      // Responsive SVG needs these 2 attributes and no width and height attr.
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", `0 0 ${width} ${height}`)
      // Class to make it responsive.
      .classed("svg-content-responsive", true);

    let globe = svg
      .append("circle")
      .attr("fill", "#000")
      .attr("stroke", "#fff")
      .attr("stroke-width", "1")
      .attr("cx", width / 2)
      .attr("cy", height / 2)
      .attr("r", initialScale);

    // svg
    //   .call(
    //     d3.drag().on("drag", () => {
    //       const rotate = projection.rotate();
    //       const k = sensitivity / projection.scale();
    //       projection.rotate([
    //         rotate[0] + d3.event.dx * k,
    //         rotate[1] - d3.event.dy * k,
    //       ]);
    //       path = d3.geoPath().projection(projection);
    //       svg.selectAll("path").attr("d", path);
    //     })
    //   )
    //   .call(
    //     d3.zoom().on("zoom", () => {
    //       if (d3.event.transform.k > 0.3) {
    //         projection.scale(initialScale * d3.event.transform.k);
    //         path = d3.geoPath().projection(projection);
    //         svg.selectAll("path").attr("d", path);
    //         globe.attr("r", projection.scale());
    //       } else {
    //         d3.event.transform.k = 0.3;
    //       }
    //     })
    //   );

    let map = svg.append("g");

    const graticule = d3.geoGraticule().step([30, 30]);

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

    // Add a line between London and New York
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
        [72.54, 19.04], //mumbai
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
        [174.48, -41.17], //wellington
      ],
      [
        [115.51, -31.57],
        [126.56, 37.31],
      ],
      [
        [72.54, 19.04], //mumbai
        [126.56, 37.31],
      ],
      [
        [139.46, 35.39],
        [126.56, 37.31],
      ],
      [
        [139.46, 35.39],
        [-157.51, 21.17], //honolulu
      ],
      [
        [174.48, -41.17],
        [-157.51, 21.17], //honolulu
      ],
      [
        [-122.28, 37.48], //sf
        [-157.51, 21.17], //honolulu
      ],
      [
        [-122.28, 37.48], //sf
        [-74, 40.7], //nyc
      ],
      [
        [-122.28, 37.48], //sf
        [-99.08, 19.26], //mexico city
      ],
      [
        [-43.1, -22.55], //rio
        [-99.08, 19.26], //mexico city
      ],
      [
        [-74, 40.7], //nyc
        [-99.08, 19.26], //mexico city
      ],
      [
        [-43.1, -22.55], //rio
        [4.25, 51.13], //be
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

    // Optional rotate
    d3.timer(function (elapsed) {
      const rotate = projection.rotate();
      const k = sensitivity / projection.scale();
      projection.rotate([rotate[0] - 0.5 * k, rotate[1]]);
      path = d3.geoPath().projection(projection);
      svg.selectAll("path").attr("d", path);
    }, 200);
  }, []);

  return <div className="contact__globe" id="globe" ref={globeRef} />;
}

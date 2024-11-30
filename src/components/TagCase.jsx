import { useState, useEffect } from "react";
import "../styles/tagCase.css";
import TagSlider from "../components/TagSlider";
import TagFilter from "../components/TagFilter";

export default function TagCase(props) {
  const [currentFilter, setCurrentFilter] = useState({
    name: "",
    colors: ["#000000", "#ffffff"],
  });
  const [displayFilter, setDisplayFilter] = useState("tagFilter__hidden");

  function filterTags(filter) {
    setCurrentFilter(filter);
    props.filter(filter);
    filterToggle();
  }

  const filterToggle = () => {
    if (displayFilter == "tagFilter__active") {
      setDisplayFilter("tagFilter__hidden");

      setTimeout(() => {
        setCurrentFilter({
          name: "",
          colors: ["#000000", "#ffffff"],
        });
        props.filter({
          name: "",
          colors: ["#000000", "#ffffff"],
        });
      }, 500);
    } else {
      setDisplayFilter("tagFilter__active");
    }
  };

  return (
    <div className="tagCase">
      <TagSlider filter={filterTags} />
      <TagSlider filter={filterTags} />
      <TagSlider filter={filterTags} />
      <TagSlider filter={filterTags} />
      <TagFilter
        data={currentFilter}
        display={displayFilter}
        toggle={filterToggle}
        projects={props.data}
      />
    </div>
  );
}

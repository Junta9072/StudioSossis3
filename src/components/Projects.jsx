import { useState, useEffect } from "react";
import Pamflet from "./Pamflet";
import Postit from "./Postit";

import "../styles/projectThumbnail.css";

export default function Projects(props) {
  const [projects, setProjects] = useState("");

  useEffect(() => {
    if (props.data) {
      //get project tag ID's
      //match project tag ID to tag ID
      setProjects(
        props.data.map((item, i) => {
          if (item.acf.project_tags.some((tag) => tag.name == "Project")) {
            return <Pamflet data={item} key={i} filter={props.filter} />;
          } else if (
            item.acf.project_tags.some((tag) => tag.name == "Micro Project")
          ) {
            return <Postit data={item} key={i} filter={props.filter} />;
          }
        })
      );
    }
  }, [props]);
  return (
    <div className="projects__bg">
      <div className="projects__container">{projects}</div>
    </div>
  );
}

import { useState, useEffect } from "react";

import urls from "../../../paths.json";

export default function ProjectTeaser(props) {
  const [apiRes, setApiRes] = useState([]);
  const [teaserTitle, setTeaserTitle] = useState("");
  const [teaserImage, setTeaserImage] = useState("");
  const [teaserSlug, setTeaserSlug] = useState("");
  const [teaserColor, setTeaserColor] = useState("");

  let preventSelfPromote = [];

  async function getProjectTeaser(name) {
    const response = await fetch(
      urls.live +
        "wp-json/wp/v2/project?order_by=rand&acf_format=standard&_fields=id,slug,title,acf.project_name,acf.project_image_thumbnail,acf.project_color_primary&per_page=4",
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

    preventSelfPromote = json.filter((item) => item.id != props.id);
    let teaserProject =
      preventSelfPromote[
        Math.floor(Math.random() * preventSelfPromote.length - 1)
      ];

    setTeaserSlug(teaserProject.slug);
    setTeaserTitle(teaserProject.acf.project_name);
    setTeaserImage(teaserProject.acf.project_image_thumbnail.url);
    setTeaserColor(teaserProject.acf.project_color_primary);
    console.log(teaserProject);
  }

  useEffect(() => {
    getProjectTeaser();
  }, [props]);

  return (
    <a
      className="teaser__container"
      href={`/${encodeURIComponent(teaserColor)}/${teaserSlug}`}
    >
      <div className="teaser__title">
        <div className="teaser__title__content">Discover More</div>
      </div>

      <div className="teaser__project" style={{ backgroundColor: teaserColor }}>
        <div
          className="teaser__project__bgImg"
          style={{ backgroundImage: "url(" + teaserImage + ")" }}
        ></div>
        <div className="teaser__project__content">
          <div className="teaser__project__title">
            <h3 className="teaser__project--flip1">{teaserTitle}</h3>
            <h3 className="teaser__project--flip2">{teaserTitle}</h3>
          </div>

          <a className="teaser__project__link">
            <div>Take a look</div>
            <div className="teaser__project__arrow"></div>
          </a>
        </div>
      </div>
    </a>
  );
}

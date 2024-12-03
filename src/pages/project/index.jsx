import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import urls from "../../paths.json";

import Menu from "../../components/Menu";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";
import "../../styles/project.css";

import ProjectGallery from "./components/ProjectGallery";
import ImagePreview from "./components/imagePreview";
import ProjectTeaser from "./components/ProjectTeaser";

export default function Project() {
  const { code, project } = useParams();
  console.log(code, project);

  const [loaderDisplay, setLoaderDisplay] = useState("");
  const [apiRes, setApiRes] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [headerImg, setHeaderImg] = useState("");
  const [bodyName, setBodyName] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [gallery, setGallery] = useState({});

  const [id, setId] = useState("");

  const [palette, setPalette] = useState({});

  const [previewToggle, setPreviewToggle] = useState(false);
  const [previewImg, setPreviewImg] = useState("");

  async function getProjectData(name) {
    const response = await fetch(
      urls.live +
        "wp-json/wp/v2/project?acf_format=standard&_fields=id,slug,title,acf&slug=" +
        name,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log("project");
    console.log(json[0].acf);
    setApiRes(json[0].acf);
    setId(json[0].id);
    setTimeout(() => {
      setLoaderDisplay("loader__hidden");
    }, 500);
  }

  const togglePreview = () => {
    console.log("extipr");
    if (previewToggle == true) {
      setPreviewToggle(false);
    } else {
      setPreviewToggle(true);
    }
  };

  const imgPreview = (img) => {
    console.log(img);
    setPreviewImg(img);
    togglePreview();
  };

  useEffect(() => {
    setTitle(project);
    getProjectData(project);
  }, []);

  useEffect(() => {
    try {
      setHeaderImg(apiRes.project_image_header.url);
      setTitle(
        apiRes.project_name.split(" ").map((item, i) => {
          return (
            <div className="" key={i}>
              {item}
            </div>
          );
        })
      );
      setDescription(apiRes.project_description);

      setTags(
        apiRes.project_tags.map((item, i) => {
          return <>&thinsp;{item.name}&thinsp; </>;
        })
      );
      setBodyName(apiRes.project_title);
      setBody(
        apiRes.project_body.split(".").map((item) => {
          return <>{item}</>;
        })
      );
      setGallery(apiRes.project_image_collage);

      setPalette({
        backgroundColor: apiRes.project_color_primary,
        color: apiRes.project_color_secondary,
      });
    } catch {
      //api not ready
    }
  }, [apiRes]);

  return (
    <div
      className="project__page"
      style={{ "--colorPrimary": palette.backgroundColor }}
    >
      <div className="project__bgCover" style={palette}></div>
      <div
        style={{
          backgroundImage: "url('" + headerImg + "')",
          filter: "brightness(.8)",
        }}
        className="project__header__img__container"
      ></div>
      <header className="project__header">
        <div className="project__header__img__cover"></div>
        <div className="project__header__tags__container">
          <h3 className="project__header__tags__title">Tags</h3>
          <div className="project__header__tags__list">{tags}</div>
        </div>

        <div className="project__header__title">{title}</div>
        <div
          className="project__header__desc__container"
          style={{ backgroundColor: palette.backgroundColor }}
        >
          <div className="project__header__desc__content">
            <h3 className="project__header__desc__title">summary</h3>
            <div className="project__header__desc">{description}</div>
          </div>
        </div>
      </header>
      <main className="project__main">
        <div className="project__main__about">
          <div className="project__main__img__cover"></div>
          <h3 className="project__main__title">About</h3>
          <div
            className="project__main__body"
            style={{ backgroundColor: palette.backgroundColor }}
          >
            {body}
          </div>
        </div>

        <ProjectGallery img={gallery} preview={imgPreview} />
      </main>
      <ImagePreview
        exitPreview={togglePreview}
        toggle={previewToggle}
        img={previewImg}
      />
      <ProjectTeaser id={id} />
      <Footer />

      <Loader display={loaderDisplay} />
      <Menu color="#fff" /*bg={"rgba(0,0,0,0.3)"} */ />
    </div>
  );
}

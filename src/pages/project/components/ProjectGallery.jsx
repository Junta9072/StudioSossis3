import { useState, useEffect } from "react";
import "../../../styles/project.css";

export default function ProjectGallery(props) {
  const [images, setImages] = useState("");

  useEffect(() => {
    let galleryArray = Object.values(props.img);
    setImages(
      galleryArray.map((item, i) => {
        if (item == false) {
          return;
        } else if (item.type == "video") {
          return (
            <div className="project__main__slide" key={item.ID}>
              <video
                controls
                className="project__main__slide__image project__main__slide__video"
              >
                <source src={item.url} type={item.mime_type} />
                video.
              </video>
              <div className="project__main__slide__bgCover"></div>

              <div className="project__main__slide__content">
                <h4 className="project__main__slide__title">{item.title}</h4>
                <p className="project__main__slide__desc">{item.caption}</p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="project__main__slide" key={item.ID}>
              <div className="project__main__slide__bgCover"></div>
              <img
                className="project__main__slide__image"
                src={item.url}
                alt=""
                onClick={() => props.preview(item.url)}
              />

              <div className="project__main__slide__container">
                <div className="project__main__slide__content">
                  <h4 className="project__main__slide__title">{item.title}</h4>
                  <p className="project__main__slide__desc">{item.caption}</p>
                </div>
              </div>
            </div>
          );
        }
      })
    );
  }, [props]);
  return <div className="project__main__gallery">{images}</div>;
}

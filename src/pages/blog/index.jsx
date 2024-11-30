import "../../styles/blog.css";

import urls from "../../paths.json";

import Menu from "../../components/Menu";

export default function Blog() {
  return (
    <>
      <div className="blog__page">
        <div
          className="blog__img"
          style={{
            backgroundImage:
              "url(" + urls.localhost + "wp-content/uploads/2024/11/blog.png)",
          }}
        ></div>
        <div className="blog__header">
          <h1 className="blog__title">Blog</h1>
          <p className="blog__desc">
            This page isn't quite finished yet,
            <br /> take a look at some <a href="/">projects</a> that are already
            done for now.
            <br />
            <br />
            Check back soon! <br /> Yarne
          </p>
        </div>
      </div>

      <Menu color="#fff" />
    </>
  );
}

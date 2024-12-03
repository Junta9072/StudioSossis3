import Menu from "../../components/Menu";
import urls from "../../paths.json";
import "../../styles/notFound.css";

export default function NotFound() {
  return (
    <>
      <div className="notFound__page">
        <img
          className="notFound__bg"
          src={urls.live + "wp-content/uploads/2024/11/blog.png)"}
          alt=""
        />
        <div className="notFound__container">
          <div className="notFound__content">
            <img
              className="notFound__icon"
              src="/assets/images/404.svg"
              alt=""
            />
            <h1 className="notFound__title">A bit lost?</h1>
            <a className="notFound__link" href="/">
              Back home
            </a>
            <p className="notFound__desc">
              Looks like this page isn't here (anymore) <br /> If you're sure
              you're in the right place, <br /> send me a message and I'll check
              it out.
            </p>
            <p className="notFound__name">Yarne</p>
          </div>
        </div>
      </div>
      <Menu color="#fff" />
    </>
  );
}

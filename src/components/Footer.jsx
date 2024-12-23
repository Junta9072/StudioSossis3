import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img
            className="footer__logo__sossis"
            src="/assets/images/icon_triSosis.svg"
            alt=""
          />
          <div className="footer__logo__title">
            <h3 className="footer__logo__title__word">Studio Sossis</h3>
          </div>
        </div>
        <div className="footer__dashboard">
          <a className="footer__link" href="./">
            Home
          </a>
          <a className="footer__link" href="./about">
            About
          </a>
          <a className="footer__link" href="./blog">
            Blog
          </a>
          <a className="footer__link" href="./contact">
            Contact
          </a>
          <a className="footer__mail" href="mailto:hello@studiosossis.com">
            <img
              className="footer__mail__icon"
              src="/assets/images/icon_email.svg"
              alt=""
            />
            hello@studiosossis.com
          </a>
        </div>
      </div>
    </div>
  );
}

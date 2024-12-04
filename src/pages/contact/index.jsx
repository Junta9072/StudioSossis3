import { useState, useEffect } from "react";
import "../../styles/contact.css";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

import D3Map from "./components/D3Map";
import ContactForm from "./components/ContactForm";
import ContactFormCover from "./components/ContactFormCover";

export default function Contact() {
  const [graphTime, setGraphTime] = useState("12h 00m 00s (day)");
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState("(day)");

  const handleFormToggle = () => {
    setFormUsedToggle(true);
  };

  const [formUsedToggle, setFormUsedToggle] = useState(false);
  const [formContent, setFormContent] = useState(
    <ContactForm sent={handleFormToggle} />
  );

  useEffect(() => {
    // console.log(localStorage.getItem("contactFormSentTimestamp"));
    if (localStorage.getItem("contactFormSentTimestamp") != null) {
      let formLastUsed = localStorage.getItem("contactFormSentTimestamp");
      let formTimeSinceLastUsed = new Date().getTime() - formLastUsed;
      if (formTimeSinceLastUsed < 86400000) {
        setFormContent(
          <ContactFormCover
            timeout={
              <span>
                Looks like you've recently sent me a message! <br /> In the
                interest of my mailbox I limit them to 1 per day.
              </span>
            }
          />
        );
      }
    }
    if (formUsedToggle == true) {
      setFormContent(<ContactFormCover />);
    }
  }, [formUsedToggle]);

  function convertTZ(date, tzString) {
    return new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        { timeZone: tzString }
      )
    );
  }

  useEffect(() => {
    if (date.getHours() < 22 && date.getHours() > 7) {
      setDay("(day)");
    } else {
      setDay("(night)");
    }

    const interval = setInterval(() => {
      setDate(convertTZ(new Date(), "Europe/Brussels"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="contact__page">
        <div className="contact__slide">
          <div className="contact__graph">
            <div className="contact__graph__data">
              <div className="contact__graph__stat">
                <p>proj_type:</p> <p>orthographic</p>
              </div>
              <div className="contact__graph__stat">
                <p>proj_rot:</p> <p> +30 deg N</p>
              </div>
              <div className="contact__graph__stat">
                <p>origin_conn_strength:</p> <p>nominal</p>
              </div>
              <div className="contact__graph__stat">
                <p>origin_conn_chnl:</p> <p> 2.4GHz ~70MHz</p>
              </div>
            </div>
            <D3Map />
            <div className="contact__graph__data">
              <div className="contact__graph__stat">
                <p>dest_coords:</p> <p>51N 4E</p>
              </div>
              <div className="contact__graph__stat">
                <p>dest_mail:</p> <p>2100 Antwerp</p>
              </div>
              <div className="contact__graph__stat">
                <p>dest_conn:</p> <p>50Mbps ~20Mbps</p>
              </div>
              <div className="contact__graph__stat">
                <p>dest_time:</p>
                <p>
                  {date.getUTCHours() +
                    "h " +
                    date.getUTCMinutes() +
                    "m " +
                    date.getUTCSeconds() +
                    "s " +
                    day}
                </p>
              </div>
            </div>
          </div>
          <div className="contact__form">
            <div className="contact__header">
              <h1 className="contact__title">Contact</h1>
              <img
                className="contact__qr"
                src="./assets/images/hotline.svg"
                alt=""
              />
            </div>
            <div className="contact__description">
              <p>Studio Sossis hotline</p>
              <p>visitor information request</p>
            </div>
            <div className="contact__contactinfo">
              <p>
                Feel free to drop me a line, I would love to hear what you think
                about any projects of mine. Or ideas of yours.
              </p>
              <p>
                For other questions, you can contact me @
                <a href="mailto:hello@studiosossis.com">
                  yarne.brangers@telenet.be
                </a>
                .
              </p>
              <p>
                You can also find me on{" "}
                <a href="https://www.instagram.com/yarne_brangers/">
                  Instagram
                </a>
                {" or "}
                <a href="https://www.linkedin.com/in/yarne-brangers/">
                  Linked-in
                </a>
              </p>
            </div>
            <div className="form__switcher">{formContent}</div>
          </div>
        </div>
      </div>
      <Footer />

      <Menu color="#000" bg="#fff" />
    </>
  );
}

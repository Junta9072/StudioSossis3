import urls from "../../../paths.json";

import Input from "./Input";
import TextArea from "./TextArea";

export default function ContactForm(props) {
  const INPUT = "INPUT";
  const TEXTAREA = "TEXTAREA";
  const fields = [
    {
      label: "name",
      component: INPUT,
      type: "text",
      name: "your-name",
      id: "full_name",
      required: true,
    },
    {
      label: "Email",
      component: INPUT,
      type: "email",
      name: "your-email",
      id: "email",
      required: true,
    },
    {
      label: "subject",
      component: INPUT,
      type: "text",
      name: "your-subject",
      id: "subject",
      required: true,
    },
    {
      label: "message",
      component: TEXTAREA,
      type: "text",
      name: "your-message",
      id: "message",
      required: true,
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(localStorage.getItem("contactFormSentTimestamp"));
    let formLastUsed = localStorage.getItem("contactFormSentTimestamp");
    if (formLastUsed != null) {
      let formTimeSinceLastUsed = new Date().getTime() - formLastUsed;
      if (formTimeSinceLastUsed > 86400000) {
        console.log("form not on cooldown");
        let formData = new FormData(event.target);

        const reqOptions = {
          method: "POST",
          body: formData,
        };

        const req = await fetch(
          urls.live + "wp-json/contact-form-7/v1/contact-forms/300/feedback",
          reqOptions
        );

        const res = await req.json();
        console.log(res);
        props.sent();
      } else {
        console.log("form on cooldown");
        alert(
          "In the interest of my wallet and mailbox, I limit mails to 1 per day."
        );
      }
    }

    localStorage.setItem("contactFormSentTimestamp", new Date().getTime());
  };

  return (
    <form className="form__container" onSubmit={(e) => handleSubmit(e)}>
      {fields.map((field, f) => {
        return (
          <div key={f} className="form__field__container">
            <label className="form__label" htmlFor={field.id}>
              {field.label}
            </label>
            {field.component === INPUT && (
              <Input
                type={field.type}
                required={field.required}
                name={field.name}
                id={field.id}
              />
            )}
            {field.component === TEXTAREA && (
              <TextArea
                required={field.required}
                name={field.name}
                id={field.id}
              />
            )}
          </div>
        );
      })}
      <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f289-o1" />
      <input type="hidden" name="_wpcf7_version" value="6.0" />
      <input type="hidden" name="_wpcf7_locale" value="en_US" />
      <input type="hidden" name="_wpcf7_container_post" value="0" />
      <div className="form__footer">
        <button className="form__submit" type="submit">
          <img
            className="form__barcode"
            src="./assets/images/studiosossisbarcode.svg"
            alt=""
          />
          <div className="form__submit__text">SEND</div>
        </button>
      </div>
    </form>
  );
}

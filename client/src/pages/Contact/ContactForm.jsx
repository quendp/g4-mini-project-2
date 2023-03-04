import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState("Send");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setFormStatus("Submitting...");
    setTimeout(() => {
      setFormStatus("Submitted!");
    }, 1000);

    let contactData = {
      name: name,
      email: email,
      message: message,
    };

    setName("");
    setEmail("");
    setMessage("");

    console.log(contactData);
  };

  return (
    <div className="contact-form__container p-4 p-lg-5 m-0 me-md-5">
      <div className="contact-form__title mb-3 mb-md-4">
        <h2>
          Do you have a question? <br /> Let's talk.
        </h2>
      </div>
      <form onSubmit={onSubmit}>
        <div className="mb-3 mb-md-4">
          <label className="contact-form__label mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            className="form-control"
            type="text"
            id="name"
            required
            onChange={nameChangeHandler}
            value={name}
          />
        </div>
        <div className="mb-3 mb-md-4">
          <label className="contact-form__label mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            className="form-control"
            type="email"
            id="email"
            required
            onChange={emailChangeHandler}
            value={email}
          />
        </div>
        <div className="mb-3 mb-md-4">
          <label className="contact-form__label mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows={5}
            required
            onChange={messageChangeHandler}
            value={message}
          />
        </div>
        <button
          className="contact-form__button text-uppercase px-5 py-2 my-3"
          type={formStatus === "Send" ? "submit" : "button"}
        >
          {formStatus}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

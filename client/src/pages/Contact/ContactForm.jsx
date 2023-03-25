import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import regex from "../../Utils/regEx";

const ContactForm = () => {
  const form = useRef();
  const [errMsg, setErrMsg] = useState(["", 0]);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);

  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);

  const [message, setMessage] = useState("");
  const [messageIsValid, setMessageIsValid] = useState(false);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
    if (regex.NAME_REGEX.test(e.target.value)) {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    if (regex.EMAIL_REGEX.test(e.target.value)) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
    if (regex.MESSAGE_REGEX.test(e.target.value)) {
      setMessageIsValid(true);
    } else {
      setMessageIsValid(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitClicked(true);
    if (nameIsValid && emailIsValid && messageIsValid) {
      setErrMsg(["Submitting...", 1]);
      emailjs
        .sendForm(
          "service_1relyr1",
          "template_94h8mm8",
          form.current,
          "tvJZnW1Ugbcar5bBK"
        )
        .then(
          (result) => {
            setErrMsg([
              "Form successfully submitted. Thank you for contacting us. We'll get back to you as soon as possible.",
              2,
            ]);
            setName("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            setErrMsg([
              "Sorry, an internal server error occurred. Please try again later.",
              1,
            ]);
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contact-form__container p-4 p-lg-5 m-0 me-md-5">
      <div className="contact-form__title mb-3 mb-md-4">
        <h2>
          Do you have a question? <br /> Let's talk.
        </h2>
      </div>
      <div>
        <p className="p-dark text-center">{errMsg[0]}</p>
      </div>
      {errMsg[1] != 2 && (
        <form ref={form} onSubmit={onSubmit} noValidate>
          <div className="mb-3 mb-md-4">
            <label className="contact-form__label mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className={`form-control ${
                isSubmitClicked && !nameIsValid ? "isInvalid" : ""
              }
              ${isSubmitClicked && nameIsValid ? "isValid" : ""}`}
              type="text"
              id="name"
              name="name"
              required
              onChange={nameChangeHandler}
              value={name}
            />
            <div className="invalid-feedback">
              The Full name you entered is invalid, try again.
            </div>
          </div>
          <div className="mb-3 mb-md-4">
            <label className="contact-form__label mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className={`form-control ${
                isSubmitClicked && !emailIsValid ? "isInvalid" : ""
              }
              ${isSubmitClicked && emailIsValid ? "isValid" : ""}`}
              type="email"
              id="email"
              name="email"
              required
              onChange={emailChangeHandler}
              value={email}
            />
            <div className="invalid-feedback">
              The email you entered is invalid, try again.
            </div>
          </div>
          <div className="mb-3 mb-md-4">
            <label className="contact-form__label mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className={`form-control ${
                isSubmitClicked && !messageIsValid ? "isInvalid" : ""
              }
              ${isSubmitClicked && messageIsValid ? "isValid" : ""}`}
              id="message"
              rows={5}
              name="message"
              required
              onChange={messageChangeHandler}
              style={{ maxHeight: "50vh" }}
              value={message}
            />
            <div className="invalid-feedback">
              The message you entered is invalid, try again. Up to 2000
              characters.
            </div>
          </div>
          <button
            className="contact-form__button text-uppercase px-5 py-2 my-3"
            type="submit"
            disabled={errMsg[1] === 1 ? true : false}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

import React from "react";
import "./Contact.css";
import ContactHeading from "./ContactHeading";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import SinglePage from "../../components/SinglePage/SinglePage";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [detailsRef, detailsInView] = useInView({ threshold: 0.1 });
  const [formRef, formInView] = useInView({ threshold: 0.1 });

  return (
    <SinglePage>
      <div className="contact-page__container container-fluid min-vh-100 pb-5 mb-5">
        <ContactHeading />
        <div className="row p-2 ps-md-3 ps-lg-5 justify-content-center align-items-start m-0">
          <div
            className="col-12 col-md-6 p-2 p-md-5 m-0"
            style={{
              opacity: detailsInView ? "1" : "0",
              transform: detailsInView ? "translateX(0)" : "translateX(-10rem)",
              transition:
                "opacity 400ms ease-in-out 100ms, transform 400ms ease-in-out 100ms",
            }}
            ref={detailsRef}
          >
            <ContactDetails />
          </div>
          <div
            className="col-12 col-md-6 p-2 py-md-5 pe-md-3 pe-lg-5 m-0"
            style={{
              opacity: formInView ? "1" : "0",
              transform: formInView ? "translateX(0)" : "translateX(10rem)",
              transition:
                "opacity 400ms ease-in-out 100ms, transform 400ms ease-in-out 100ms",
            }}
            ref={formRef}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </SinglePage>
  );
};

export default Contact;

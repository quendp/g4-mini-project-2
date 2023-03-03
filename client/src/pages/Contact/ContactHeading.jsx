import React from "react";
import "./ContactHeading.css";
import { useInView } from "react-intersection-observer";

const ContactHeading = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.15 });

  return (
    <div
      className="contact-heading__container row px-0 px-md-3 px-lg-5"
      style={{
        opacity: titleInView ? "1" : "0",
        transform: titleInView ? "translateX(0)" : "translateX(-10rem)",
        transition: "opacity 400ms ease-in-out, transform 400ms ease-in-out",
      }}
      ref={titleRef}
    >
      <h1 className="text-center text-md-start px-0 px-md-5">Contact Us</h1>
    </div>
  );
};

export default ContactHeading;

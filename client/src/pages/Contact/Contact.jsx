import React from "react";
import "./Contact.css";
import ContactHeading from "./ContactHeading";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";
import SinglePage from "../../components/SinglePage/SinglePage";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  /*

    Feedback - Feb/23/2023 - Quen DP 
    
    Good day!

        Upon checking you first commit, here are some of the things I noticed as well as my comments and suggestions on how to improve them:

        1. Great job on doing the form in the "ContactForm.jsx" component. It was also a good idea that you have already created a submit form function. As a suggestion, I think it will be a good idea to:
          a. remove the "contact number" section and just ask for the user's email address to avoid redundancy and improve user experience.
          b. clear the form upon submission, and use setTimeOut (for the meantime) to revert the button text back to "submit" after a few seconds.
          c. increase the height of the "message" input box a little bit.
          d. move the text "DO YOU HAVE A QUESTION? LET'S TALK." to the right side on top of the form.

        2. Regarding the "ContactDetails.jsx" component, I think it looks good already. However, I'd suggest that it will be better if you can change its content because it looks a little bit like our footer section. Here are some recommendations on what you can put there instead:
          a. a google map iframe showing the location of the company. You can just put any location since the company doesn't really exist.
          b. Some placeholder text...

        3. Lastly, just add a little bit more styling to your components and make it look as engaging as possible. You can copy the styles of the example I gave you in our trello board, or you can also search for design inspirations on sites like dribble, pinterest, etc. So, don't be afraid to experiment on various styles, color combinations, and layouts as long as they are relevant to the theme of our website.
        
        I think that's all I can say about your first commit on this branch. Feel free to ask me if you have any questions or clarifications.

        Thank you and have a nice day!

    - Quen DP
    
    
    */

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

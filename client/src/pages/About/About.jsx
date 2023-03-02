import React from "react";
import SinglePage from "../../components/SinglePage/SinglePage";
import "./About.css";

const About = () => {
  return (
    <SinglePage>
      <div className="container-fluid vh-100 about-container">
        <h1>WHAT IS THIS PAGE ALL ABOUT?</h1>
        <p>
          This is a page where you can PLAN your Future trip or Dream travel
          without hassle.
        </p>
      </div>
    </SinglePage>
  );
};

export default About;

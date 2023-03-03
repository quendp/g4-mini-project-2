import React from "react";
import SinglePage from "../../components/SinglePage/SinglePage";
import { useInView } from "react-intersection-observer";

import "./About.css";

const About = () => {
  const [aboutRef, aboutInView] = useInView({ threshold: 0.15 });

  return (
    <SinglePage>
      <div
        className="container-fluid vh-100 about-page__container d-flex flex-column justify-content-start align-items-center"
        ref={aboutRef}
        style={{
          opacity: aboutInView ? 1 : 0,
        }}
      >
        <div className="row justify-content-center align-items-center h-75">
          <div className="col-11 col-md-6 text-center">
            <h1 className="mb-4 mb-md-5">About Us</h1>
            <p className="p-dark">
              Lakbay is a Filipino travel agency which showcases various tourist
              spots in the Philippines and offers transportation and guiding
              services to customers. Our tours which lasts from half - 3 days
              focus on one primary destination (e.g. Puerto Princesa Underground
              River) and some nearby locations as secondary. Our clients come
              from various backgrounds and is mainly young adventurous adults
              from all around the globe.
            </p>
          </div>
        </div>
      </div>
    </SinglePage>
  );
};

export default About;

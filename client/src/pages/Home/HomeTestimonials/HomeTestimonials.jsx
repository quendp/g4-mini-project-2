import React from "react";
import "./HomeTestimonials.css";
import CardContainer from "./TestimonialCard/CardContainer";
import { testimonials } from "../../../components/Data/TestimonialsMockData";
import Card from "./TestimonialCard/Card";

const HomeTestimonials = () => {
  return (
    <div className="home-testimonials-wrapper pt-5 vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className="text-center">
        <h2 className="h2-dark fw-bold">
          Take a look at some insights <br /> from our previous clients
        </h2>
      </div>
      <CardContainer className="home-testimonials-container">
        {testimonials.map((testimony) => (
          <Card
            key={testimony.id}
            className="home-testimonials-card"
            data={testimony}
          />
        ))}
      </CardContainer>
    </div>
  );
};

export default HomeTestimonials;

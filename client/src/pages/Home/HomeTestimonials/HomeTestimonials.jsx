import React, { useState } from "react";
import "./HomeTestimonials.css";
import { testimonials } from "../../../Data/TestimonialsMockData";
import TestimonialsCard from "./TestimonialCard/TestimonialsCard";
import HomeTestimonialsTitle from "./HomeTestimonialsTitle";
import { useInView } from "react-intersection-observer";

const HomeTestimonials = ({ categoryCurrent }) => {
  const [testimonialsCardRef, testimonialsCardInView] = useInView({
    threshold: 0.3,
  });

  const [currentTransform, setCurrentTransform] = useState(0);

  const onPrevCard = () => {
    setCurrentTransform((prevTrasform) => {
      if (prevTrasform == 0) {
        return 0;
      }
      return prevTrasform + 1;
    });
  };

  const onNextCard = () => {
    setCurrentTransform((prevTrasform) => {
      if (prevTrasform == -7) {
        return -7;
      }
      return prevTrasform - 1;
    });
  };

  return (
    <section className="home-testimonials__wrapper container-fluid p-0 m-0 py-5">
      <div className="row p-0 py-md-5 ps-md-5 pe-md-0 mx-0 ms-md-5 my-5 position-relative h-100">
        <div
          className="home-testimonials__background position-absolute start-0 top-0 h-100"
          style={{
            backgroundColor: categoryCurrent.accentLight,
          }}
        ></div>
        <HomeTestimonialsTitle categoryCurrent={categoryCurrent} />
        <div
          className="col-12 col-md-7 d-flex flex-column justify-content-center p-0"
          ref={testimonialsCardRef}
          style={{
            opacity: testimonialsCardInView ? "1" : "0",
            transform: testimonialsCardInView
              ? "translateX(0)"
              : "translateX(10rem)",
            transition:
              "opacity 400ms ease-in-out, transform 400ms ease-in-out",
          }}
        >
          <div className="home-testimonials-card__container d-flex">
            {testimonials.map((testimony) => (
              <TestimonialsCard
                key={testimony.id}
                data={testimony}
                categoryCurrent={categoryCurrent}
                currentTransform={currentTransform}
              />
            ))}
          </div>
          <div
            className="row justify-content-center justify-content-md-center my-3 mt-lg-0 mb-lg-0"
            style={{ color: categoryCurrent.accent }}
          >
            <i
              className="home-testimonials__chevron fa-solid fa-chevron-left mx-3"
              style={{
                opacity: currentTransform == 0 ? "0.5" : "1",
              }}
              onClick={onPrevCard}
            ></i>
            <i
              className="home-testimonials__chevron fa-solid fa-chevron-right mx-3"
              style={{
                opacity: currentTransform == -7 ? "0.5" : "1",
              }}
              onClick={onNextCard}
            ></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;

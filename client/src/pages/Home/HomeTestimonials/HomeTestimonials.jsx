import React from "react";
import "./HomeTestimonials.css";
import { testimonials } from "../../../Data/TestimonialsMockData";
import Card from "./TestimonialCard/TestimonialsCard";
import HomeTestimonialsTitle from "./HomeTestimonialsTitle";
import { useInView } from "react-intersection-observer";

const HomeTestimonials = ({ categoryCurrent }) => {
  const [testimonialsCardRef, testimonialsCardInView] = useInView({
    threshold: 0.3,
  });
  return (
    <section className="home-testimonials__wrapper container-fluid p-0 m-0 py-5">
      <div className="row p-0 py-md-5 ps-md-5 pe-md-0 m-0 my-5 position-relative h-100 overflow-hidden">
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
              <Card
                key={testimony.id}
                data={testimony}
                categoryCurrent={categoryCurrent}
              />
            ))}
          </div>
          <div
            className="row justify-content-center justify-content-md-start my-3 mt-lg-5 mb-lg-0"
            style={{ color: categoryCurrent.accent }}
          >
            <i class="home-testimonials__chevron mx-3 me-md-4 mx-xl-5 fa-solid fa-circle-chevron-left"></i>
            <i class="home-testimonials__chevron fa-solid fa-circle-chevron-right"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;

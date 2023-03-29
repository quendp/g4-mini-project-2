import React from "react";
import { useInView } from "react-intersection-observer";

const HomeTestimonialsTitle = ({ categoryCurrent }) => {
  const [testimonialsTiltleRef, testimonialsTiltleInView] = useInView({
    threshold: 0.3,
  });

  return (
    <div
      className="home-testimonials-title__container col-12 col-md-5 p-5 pb-0 p-md-5"
      ref={testimonialsTiltleRef}
      style={{
        opacity: testimonialsTiltleInView ? "1" : "0",
        transform: testimonialsTiltleInView
          ? "translateX(0)"
          : "translateX(-10rem)",
        transition: "opacity 400ms ease-in-out, transform 400ms ease-in-out",
      }}
    >
      <h3
        className="home-testimonials-title__h3 text-uppercase mb-4"
        style={{ color: categoryCurrent.accent }}
      >
        Testimonials
      </h3>
      <h2 className="home-testimonials-title__h2 text-center text-md-start mb-4">
        What Our Clients Said About Our Service
      </h2>
      <p
        className="home-testimonials-title__description p-3 p-md-5"
        style={{
          backgroundColor: categoryCurrent.accent,
        }}
      >
        There is no such thing as a perfect company. However, here in Lakbay,
        our agents will ensure you that your travel experience will be as
        flawless as possible and one that you will never forget.
      </p>
    </div>
  );
};

export default HomeTestimonialsTitle;

import React from "react";
import { useInView } from "react-intersection-observer";

const HomeServicesTitle = ({ categoryCurrent }) => {
  const [serviceTiltleRef, serviceTiltleInView] = useInView({ threshold: 0.3 });

  return (
    <div
      className="row pt-5"
      style={{
        opacity: serviceTiltleInView ? "1" : "0",
        transform: serviceTiltleInView ? "translateX(0)" : "translateX(-10rem)",
        transition: "opacity 400ms ease-in-out, transform 400ms ease-in-out",
      }}
      ref={serviceTiltleRef}
    >
      <div className="col-12 mx-auto text-center px-5">
        <h2 className="h2-light home-services__title">
          Do you want to travel?
          <span
            style={{
              color: categoryCurrent.accentLight,
            }}
          >
            {" "}
            We got you covered.
          </span>
        </h2>
        <p className="p-light">
          Here are some of the services we have to offer.
        </p>
      </div>
    </div>
  );
};

export default HomeServicesTitle;

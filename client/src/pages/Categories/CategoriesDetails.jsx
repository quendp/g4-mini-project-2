import React from "react";
import { useInView } from "react-intersection-observer";
import CategoriesCard from "./CategoriesCard";

const CategoriesDetails = ({
  currentCategory,
  currentDestination,
  destinationPackages,
}) => {
  const [descriptionRef, descriptionInView] = useInView({ threshold: 0.3 });

  return (
    <section className="categories-page__details row m-0 px-3 py-3 py-md-0 px-md-5">
      <div
        className="p-light col-12 col-md-6 p-3 p-md-5 ps-md-3 m-0 text-center text-md-start"
        ref={descriptionRef}
        style={{
          opacity: descriptionInView ? "1" : "0",
          transition: "opacity 400ms ease-in-out 200ms",
        }}
      >
        <p>{currentDestination.details}</p>
      </div>
      <CategoriesCard
        currentCategory={currentCategory}
        currentDestination={currentDestination}
        destinationPackages={destinationPackages}
      />
    </section>
  );
};

export default CategoriesDetails;

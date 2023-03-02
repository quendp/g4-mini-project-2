import React from "react";

const CategoriesDetails = ({ currentDestination }) => {
  return (
    <section className="categories-page__details row m-0 px-3 py-3 py-md-0 px-md-5">
      <div className="p-light col-12 col-md-6 p-3 m-0 text-center text-md-start">
        <p>{currentDestination.details}</p>
      </div>
      <div className="col-12 col-md-6"></div>
    </section>
  );
};

export default CategoriesDetails;

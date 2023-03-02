import React from "react";

const CategoriesTitle = ({ currentCategory, currentDestination }) => {
  return (
    <section className="categories-page__title row m-0 px-3 py-0 p-md-5">
      <div className="col-12 m-0 p-0">
        <h3
          className="categories-page-title__category lh-1 mx-0 mb-0 text-center text-md-start"
          style={{
            color: currentCategory.accentLight,
            textShadow: `2px 2px 5px rgba(0,0,0,0.6), 0 0 25px ${currentCategory.accent} `,
          }}
        >
          {currentCategory.category}
        </h3>
        <h1 className="categories-page-title__destination lh-1 my-0 text-center text-md-start">
          {currentDestination.destination}
        </h1>
      </div>
    </section>
  );
};

export default CategoriesTitle;

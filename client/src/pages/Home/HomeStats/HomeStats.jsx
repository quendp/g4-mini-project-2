import React from "react";
import "./HomeStats.css";

const HomeStats = () => {
  return (
    <section className="m-stats-section row m-0 py-0 py-md-5 flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
      <div className="order-2 order-md-1 col-12 col-md-7 p-0 p-md-5 d-flex flex-column flex-md-row justify-content-between align-items-center align-items-md-start parallax-scroll align-self-center">
        <div className="w-100 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
          <h3 className="m-stats-count m-0 lh-1">0</h3>
          <span className="text-center">Trips in the last 5 years</span>
        </div>
        <div className="w-100 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
          <h3 className="m-stats-count m-0 lh-1">0</h3>
          <span className="text-center">Major Destinations</span>
        </div>
        <div className="w-100 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0">
          <h3 className="m-stats-count m-0 lh-1">0</h3>
          <span className="text-center">Members around the world</span>
        </div>
      </div>
      <div className="col-12 col-md-4 p-4 p-md-5 text-center text-md-start order-1 order-md-2 parallax-scroll">
        <h2 className="m-heading-2-dark mb-3 mb-sm-4 fw-bold">
          Why choose Lakbay Travel Agency?
        </h2>
        <p className="m-paragraph-text-dark">
          The fastest growing travel agency in the Philippines. Providing
          hassle-free travel services at an affordable price but premium
          quality. Guiding you in your journey since 2018 and still counting.
        </p>
      </div>
    </section>
  );
};

export default HomeStats;

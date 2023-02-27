import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const HomeServicesStats = ({ categoryCurrent }) => {
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });
  return (
    <div
      className="home-services-stats__wrapper row w-100 p-3 px-sm-5 p-md-5 d-flex justify-content-center"
      style={{
        opacity: statsInView ? "1" : "0",
        transform: statsInView ? "scale(1)" : "scale(0.9)",
        transition: "opacity 400ms ease-in-out, transform 400ms ease-in-out",
      }}
      ref={statsRef}
    >
      <div className="home-services-stats__container row d-flex justify-content-center w-100 overflow-hidden p-0">
        <div className="home-services-stats__numbers order-2 order-md-1 col-12 col-md-8 p-0 d-flex flex-column flex-xl-row justify-content-center justify-content-xl-between align-items-center">
          <div className="w-100 d-flex flex-column justify-content-center align-items-center mb-3 mb-xl-0">
            <h3
              className="mb-2 mb-xl-3 lh-1 home-services-stats__digit"
              style={{
                color: categoryCurrent.accentLight,
              }}
            >
              <CountUp
                start={1000}
                end={statsInView ? 13675 : 0}
                duration={2}
                suffix={"+"}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </h3>

            <span className="text-center home-services-stats__text">
              Tours since establishment
            </span>
          </div>
          <div className="w-100 d-flex flex-column justify-content-center align-items-center mb-3 mb-xl-0">
            <h3
              className="mb-2 mb-xl-3 lh-1 home-services-stats__digit"
              style={{
                color: categoryCurrent.accentLight,
              }}
            >
              <CountUp start={0} end={statsInView ? 30 : 0} duration={2}>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </h3>
            <span className="text-center home-services-stats__text">
              Destinations across the country
            </span>
          </div>
          <div className="w-100 d-flex flex-column justify-content-center align-items-center mb-3 mb-xl-0">
            <h3
              className="mb-2 mb-xl-3 lh-1 home-services-stats__digit"
              style={{
                color: categoryCurrent.accentLight,
              }}
            >
              <CountUp
                start={1000}
                end={statsInView ? 35467 : 0}
                duration={2}
                suffix={"+"}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </h3>
            <span className="text-center home-services-stats__text">
              Members around the world
            </span>
          </div>
        </div>
        <div
          className="col-12 col-md-4 p-4 p-md-5 text-center text-md-start order-1 order-md-2 d-flex flex-column justify-content-center align-items-center"
          style={{
            backgroundColor: categoryCurrent.accentLight,
          }}
        >
          <h2 className="h3-dark fw-bold mb-3 mb-md-4">
            Why choose Lakbay Travel Agency?
          </h2>
          <p className="home-services-stats__text">
            The fastest growing travel agency in the Philippines. Providing
            hassle-free travel services at an affordable price but premium
            quality. Guiding you in your journey since 2018 and still counting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeServicesStats;

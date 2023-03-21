import React from "react";
import cloudsImg from "../../assets/images/clouds.png";
import mountainImg from "../../assets/images/mountain.png";
import "./SinglePage.css";

const SinglePage = ({ children }) => {
  return (
    <section className="single-page__container container-fluid min-vh-100 overflow-hidden position-relative p-0 m-0 d-flex flex-column justify-content-center align-items-center">
      <img
        className="single-page__top position-absolute start-0 w-100"
        src={cloudsImg}
        alt="clouds"
        loading="lazy"
      />

      <div className="single-page__bottom position-absolute w-100 ">
        <svg
          className="w-100"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask>
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image
                xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg"
                width="1200"
                height="800"
              />
            </g>
          </mask>
          <image xlinkHref={mountainImg} width="1200" height="1040" />
          <image
            xlinkHref="https://assets.codepen.io/721952/cloud2.png"
            width="1200"
            height="800"
          />
          <image
            xlinkHref="https://assets.codepen.io/721952/cloud1.png"
            width="1200"
            height="800"
          />
          <image
            xlinkHref="https://assets.codepen.io/721952/cloud3.png"
            width="1200"
            height="800"
          />
        </svg>
      </div>
      {children}
    </section>
  );
};

export default SinglePage;

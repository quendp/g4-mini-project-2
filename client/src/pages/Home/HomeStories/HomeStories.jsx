import React from "react";
import cloudsImg from "../../../assets/images/clouds.png";
import quotesImg from "../../../assets/images/quote.svg";
import "./HomeStories.css";

const HomeStories = () => {
  return (
    <section className="home-stories__wrapper position-relative p-0 m-0 d-flex flex-column justify-content-start align-items-center">
      <img
        className="home-stories-cloudImg__top position-absolute start-0 w-100"
        src={cloudsImg}
        alt="clouds"
      />

      <div className="position-absolute w-100 bottom-0">
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
          <image
            xlinkHref="https://assets.codepen.io/721952/mountBg.png"
            width="1200"
            height="800"
          />
          <image
            xlinkHref="https://assets.codepen.io/721952/mountMg.png"
            width="1200"
            height="800"
          />
          <image
            xlinkHref="https://assets.codepen.io/721952/cloud2.png"
            width="1200"
            height="800"
          />
          <image
            xlinkHref="https://assets.codepen.io/721952/mountFg.png"
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
      <div className="home-stories-quote d-flex flex-column justify-content-start align-items-center w-75">
        <div className="home-stories-quote__open align-self-start">
          <img src={quotesImg} alt="quotation marks" fill="red" />
        </div>
        <p className="w-75 text-center m-0 p-0 position-relative">
          Memories are created in memorable places. And here in Lakbay Travel
          Agency, we will help you create those picture-perfect moments. <br />
          <span className="position-absolute end-0 text-uppercase mt-4">
            - John Doe, CEO
          </span>
        </p>
        <div className="home-stories-quote__close align-self-end">
          <img src={quotesImg} alt="quotation marks" />
        </div>
      </div>
      <div
        className="container-fluid m-0 px-0 px-md-5"
        style={{ zIndex: "99" }}
      >
        <div className="home-stories-content row m-0 px-3 px-md-5 py-5 mt-5">
          <div className="col-12 col-md-6 p-3 p-sm-5 text-center text-md-start">
            <h2 className="home-stories__title">
              Read the stories of fellow travelers who accompanied us these past
              few years
            </h2>
          </div>
          <div className="col-12 col-md-6 p-3 p-sm-5 text-center text-md-start">
            <p className="home-stories__description p-1 p-lg-5 pt-lg-3">
              Join our community and read the stories of fellow travel lovers in
              our "Share your Story" page. You can also share your own story if
              you already took part in our trips before.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeStories;

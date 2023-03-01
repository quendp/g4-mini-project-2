import React from "react";
import "./PrivateLayoutLogin.css";
import cloudsImg from "../../../assets/images/clouds.png";
import { Link } from "react-router-dom";

const PrivateLayoutLogin = () => {
  return (
    <section className="private-layout-login__container container-fluid vh-100 overflow-hidden position-relative p-0 m-0 d-flex flex-column justify-content-center align-items-center">
      <img
        className="private-layout-login__top position-absolute start-0 w-100"
        src={cloudsImg}
        alt="clouds"
      />

      <div className="private-layout-login__bottom position-absolute w-100 ">
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
      <div className="private-layout-login__content row d-flex flex-column justify-content-center align-items-center text-center">
        <div className="col-10">
          <h2 className="mb-4">Oops.</h2>
          <h1 className="mb-5">
            You are trying to access a page you don't have access to.
          </h1>
          <div className="mb-3">
            <button className="cta-dark m-3 rounded-pill px-4 py-3">
              Log in
            </button>
            <span>or</span>
            <button className="cta-dark m-3 rounded-pill px-4 py-3">
              Sign Up
            </button>
          </div>
          <Link to="/">Go back to the home page</Link>
        </div>
      </div>
    </section>
  );
};

export default PrivateLayoutLogin;
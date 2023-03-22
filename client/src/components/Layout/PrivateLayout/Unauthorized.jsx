import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import SinglePage from "../../SinglePage/SinglePage";
import "./Unauthorized.css";

const Unauthorized = () => {
  const { setHasAccount } = useAuth();

  const openLoginModal = () => {
    setHasAccount(true);
  };

  const openSignUpModal = () => {
    setHasAccount(false);
  };

  return (
    <SinglePage>
      <div className="private-layout-login__content row d-flex flex-column justify-content-center align-items-center text-center">
        <div className="col-12">
          <h2 className="mb-5">Oops.</h2>
          <h1 className="mb-5">
            You are trying to access a page
            <br /> you currently have no authorization to.
          </h1>
          <div className="mb-3">
            <button
              className="cta-dark m-3 rounded-pill px-4 py-3"
              data-bs-toggle="modal"
              data-bs-target="#signUpModal"
              onClick={openLoginModal}
            >
              Log in
            </button>
            <span>or</span>
            <button
              className="cta-dark m-3 rounded-pill px-4 py-3"
              data-bs-toggle="modal"
              data-bs-target="#signUpModal"
              onClick={openSignUpModal}
            >
              Sign Up
            </button>
          </div>
          <Link to="/">Go back to the home page</Link>
        </div>
      </div>
    </SinglePage>
  );
};

export default Unauthorized;

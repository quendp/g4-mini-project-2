import React from "react";
import { Link, useRouteError } from "react-router-dom";
import SinglePage from "../../components/SinglePage/SinglePage";
import "./NotFound.css";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <SinglePage>
      <div className="not-found-page__container vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-center">Oops!</h1>
        <p className="p-dark text-center">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="p-dark text-center mb-5">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">Go back to the home page</Link>
      </div>
    </SinglePage>
  );
};

export default NotFound;

import React from "react";
import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
      <h1 className="h2-light text-center">Oops!</h1>
      <p className="p-light text-center">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="p-light text-center">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default NotFound;

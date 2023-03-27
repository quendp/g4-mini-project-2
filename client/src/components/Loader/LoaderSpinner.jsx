import React from "react";
import "./LoaderSpinner.css";

const LoaderSpinner = () => {
  return (
    <div className="loaderSpinner-loader__icon col-12 w-100 m-0 p-0 d-flex justify-content-center align-items-center">
      <i className="fa-solid fa-spinner fa-spin"></i>
    </div>
  );
};

export default LoaderSpinner;

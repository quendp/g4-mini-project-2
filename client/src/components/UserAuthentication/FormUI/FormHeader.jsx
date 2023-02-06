import React from "react";

const FormHeader = ({ mode, handleChangeMode }) => {
    let headerTitle = "";
    let headerText = "";
    let headerLink = "";
    if(mode === "login") {
        headerTitle = "Log in to your Lakbay Account";
        headerText = "Doesn't have an account? ";
        headerLink = <a href="#" onClick={handleChangeMode}>Sign up here.</a>;
    } else if (mode === "signup") {
        headerTitle = "Create a Lakbay Account";
        headerText = "Already have an account? ";
        headerLink = <a href="#" onClick={handleChangeMode}>Log in here.</a>;
    } else {
        headerTitle = "Confirm log out";
        headerText = "Are you sure you want to log out?";
    }
  return (
    <div className="modal-header pt-4 flex-column justify-content-center">
      <h1 className="modal-title mb-2" id="signUpModalLabel">
        {headerTitle}
      </h1>
      <p className="signUpCreateLink">
        {headerText}{headerLink}
      </p>
    </div>
  );
};

export default FormHeader;

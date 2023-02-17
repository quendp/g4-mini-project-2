import React, { useState } from "react";
import LogInForm from "./LogInForm/LogInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import LogOutForm from "./LogOutForm/LogOutForm";

const UserAuthentication = ({
  logInToken,
  handleLogOut,
  submitHandler,
  children,
}) => {
  const [hasAccount, setHasAccount] = useState(true);

  const handleChangeMode = () => {
    hasAccount === true ? setHasAccount(false) : setHasAccount(true);
  };

  return (
    <>
      <div
        className="modal fade"
        id="signUpModal"
        tabIndex="-1"
        aria-labelledby="signUpModalLabel"
        aria-hidden="true"
      >
        <div
          className={`modal-dialog ${
            logInToken.length === 0 && !hasAccount ? "modal-lg" : "modal-md"
          } modal-dialog-centered`}
        >
          {logInToken.length === 0 && hasAccount && (
            <LogInForm
              handleChangeMode={handleChangeMode}
              submitHandler={submitHandler}
            />
          )}
          {logInToken.length === 0 && !hasAccount && (
            <SignUpForm
              handleChangeMode={handleChangeMode}
              submitHandler={submitHandler}
            />
          )}
          {logInToken.length > 0 && <LogOutForm handleLogOut={handleLogOut} />}
        </div>
      </div>
      {children}
    </>
  );
};

export default UserAuthentication;

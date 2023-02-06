import React, { useState } from "react";
import "./UserAuthentication.css";
import LogInForm from "./LogInForm/LogInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import LogOutForm from "./LogOutForm/LogOutForm";

const UserAuthentication = ({ isLoggedIn, handleLogOut, setLogInToken }) => {
  const [hasAccount, setHasAccount] = useState(true);
  const handleChangeMode = () => {
    hasAccount === true ? setHasAccount(false) : setHasAccount(true);
  };
  return (
    <div
      className="modal fade"
      id="signUpModal"
      tabIndex="-1"
      aria-labelledby="signUpModalLabel"
      aria-hidden="true"
    >
      <div className={`modal-dialog ${(!isLoggedIn && !hasAccount) ? 'modal-lg': 'modal-md'} modal-dialog-centered`}>
        <div className="modal-content p-3 p-md-4">
          {!isLoggedIn && hasAccount && (
            <LogInForm mode="login" handleChangeMode={handleChangeMode} setLogInToken={setLogInToken} />
          )}
          {!isLoggedIn && !hasAccount && (
            <SignUpForm mode="signup" handleChangeMode={handleChangeMode} setLogInToken={setLogInToken} />
          )}
          {isLoggedIn && (
            <LogOutForm mode="logout" handleLogOut={handleLogOut}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAuthentication;

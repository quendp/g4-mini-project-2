import React, { useState, createContext } from "react";
import LogInForm from "./LogInForm/LogInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import LogOutForm from "./LogOutForm/LogOutForm";

const UserAuthContext = createContext({});

export const UserAuthentication = ({ children }) => {
  const [hasAccount, setHasAccount] = useState(true);
  const [logInToken, setLogInToken] = useState("asdfasdf");

  const handleChangeMode = () => {
    hasAccount === true ? setHasAccount(false) : setHasAccount(true);
  };

  const submitLogInHandler = (token) => {
    setLogInToken(token);
    localStorage.setItem("token", token);
    console.log("user logged in with token:", token);
    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
    myModal.hide();
  };

  const handleLogOut = () => {
    setLogInToken("");
    console.log("user logged out");
    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
    myModal.hide();
  };

  return (
    <UserAuthContext.Provider value={{ logInToken }}>
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
              submitHandler={submitLogInHandler}
            />
          )}
          {logInToken.length === 0 && !hasAccount && (
            <SignUpForm
              handleChangeMode={handleChangeMode}
              submitHandler={submitLogInHandler}
            />
          )}
          {logInToken.length > 0 && <LogOutForm handleLogOut={handleLogOut} />}
        </div>
      </div>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;

import React, { useState, createContext, useMemo } from "react";
import LogInForm from "./LogInForm/LogInForm";
import SignUpForm from "./SignUpForm/SignUpForm";
import LogOutForm from "./LogOutForm/LogOutForm";

const UserAuthContext = createContext({});

export const UserAuthentication = ({ children }) => {
  const [hasAccount, setHasAccount] = useState(true);
  const [logInToken, setLogInToken] = useState({ token: "" });

  const handleChangeMode = () => {
    hasAccount === true ? setHasAccount(false) : setHasAccount(true);
  };

  const submitHandler = (jwtToken) => {
    setLogInToken({ token: jwtToken });
    console.log("user logged in with token:", jwtToken);
    closeModal();
  };

  const closeModal = () => {
    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
    myModal.hide();
  };

  const userData = useMemo(() => logInToken, [logInToken]);

  return (
    <UserAuthContext.Provider value={userData}>
      <div
        className="modal fade"
        id="signUpModal"
        tabIndex="-1"
        aria-labelledby="signUpModalLabel"
        aria-hidden="true"
      >
        <div
          className={`modal-dialog ${
            userData.token.length === 0 && !hasAccount ? "modal-lg" : "modal-md"
          } modal-dialog-centered`}
        >
          {userData.token.length === 0 && hasAccount && (
            <LogInForm
              handleChangeMode={handleChangeMode}
              submitHandler={submitHandler}
            />
          )}
          {userData.token.length === 0 && !hasAccount && (
            <SignUpForm
              handleChangeMode={handleChangeMode}
              submitHandler={submitHandler}
            />
          )}
          {userData.token.length > 0 && (
            <LogOutForm submitHandler={submitHandler} />
          )}
        </div>
      </div>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;

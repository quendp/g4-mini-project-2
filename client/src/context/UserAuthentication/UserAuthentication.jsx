import React, { createContext, useEffect, useMemo, useState } from "react";
import LogInForm from "./LogInForm/LogInForm";
import LogOutForm from "./LogOutForm/LogOutForm";
import SignUpForm from "./SignUpForm/SignUpForm";

const UserAuthContext = createContext({});

export const UserAuthentication = ({ children }) => {
  const [hasAccount, setHasAccount] = useState(true);
  const [logInToken, setLogInToken] = useState({ token: "" });

  const handleChangeMode = () => {
    hasAccount === true ? setHasAccount(false) : setHasAccount(true);
  };

  const submitHandler = (jwtToken, username) => {
    setLogInToken({ token: jwtToken, username: username });
    console.log("user logged in with token:", jwtToken);
    console.log("user logged in with username:", username);
  };

  useEffect(() => {
    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
    myModal.hide();
  }, [logInToken]);

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

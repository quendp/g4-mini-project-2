import React, { createContext, useEffect, useMemo, useState } from "react";
import LogInForm from "./LogInForm/LogInForm";
import LogOutForm from "./LogOutForm/LogOutForm";
import SignUpForm from "./SignUpForm/SignUpForm";

const UserAuthContext = createContext({});

export const UserAuthentication = ({ children }) => {
  // For development purposes remove in production

  const MOCK_LOGGED_IN = {
    token: "sampleToken",
    username: "sample@username",
    role: "admin",
  };

  const MOCK_LOGGED_OUT = {
    token: false,
    username: "login",
    role: false,
  };

  useEffect(() => {
    console.log("Mock data log in : ", MOCK_LOGGED_IN);
    console.log("Mock data log out : ", MOCK_LOGGED_OUT);
  }, []);

  // For development purposes remove in production

  const [hasAccount, setHasAccount] = useState(true);
  const [logInToken, setLogInToken] = useState("");

  const handleChangeMode = () => {
    hasAccount === true ? setHasAccount(false) : setHasAccount(true);
  };

  const handleLogInMode = () => {
    setHasAccount(true);
  };

  const handleSignUpMode = () => {
    setHasAccount(false);
  };

  const submitHandler = (jwtToken, username) => {
    let userRole;
    if (!jwtToken) {
      userRole = "";
    } else if (username == "admin_mark") {
      userRole = "admin";
    } else if (username == "agent_jane") {
      userRole = "agent";
    } else {
      userRole = "user";
    }

    setLogInToken({ token: jwtToken, username: username, role: userRole });

    console.log("user logged in with token:", jwtToken);
    console.log("user logged in with username:", username);
    console.log("user logged in with role:", userRole);
  };

  useEffect(() => {
    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
    myModal.hide();
  }, [logInToken]);

  const userData = useMemo(
    () => ({ logInToken, handleLogInMode, handleSignUpMode }),
    [logInToken]
  );

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
            !userData.logInToken.token && !hasAccount ? "modal-lg" : "modal-md"
          } modal-dialog-centered`}
        >
          {!userData.logInToken.token && hasAccount && (
            <LogInForm
              handleChangeMode={handleChangeMode}
              submitHandler={submitHandler}
            />
          )}
          {!userData.logInToken.token && !hasAccount && (
            <SignUpForm
              handleChangeMode={handleChangeMode}
              submitHandler={submitHandler}
            />
          )}
          {userData.logInToken.token && (
            <LogOutForm submitHandler={submitHandler} />
          )}
        </div>
      </div>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;

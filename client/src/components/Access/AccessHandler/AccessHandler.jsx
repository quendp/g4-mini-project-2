import React, { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import LogInForm from "../LogInForm/LogInForm";
import LogOutForm from "../LogOutForm/LogOutForm";
import SignUpForm from "../SignUpForm/SignUpForm";

const AccessHandler = ({ children }) => {
  const { logInToken, setLogInToken, hasAccount, setHasAccount } = useAuth();

  const handleChangeMode = () => {
    console.log("has account before : ", hasAccount);
    setHasAccount(!hasAccount);
    setTimeout(() => {
      console.log("has account after : ", hasAccount);
    }, 3000);
  };

  const submitHandler = (jwtToken, username, role) => {
    setLogInToken({ token: jwtToken, username: username, role: role });
    console.log(jwtToken);
  };

  useEffect(() => {
    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
    myModal.hide();
  }, [logInToken]);

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
            !logInToken.token && !hasAccount ? "modal-lg" : "modal-md"
          } modal-dialog-centered`}
        >
          {!logInToken.token && hasAccount && (
            <LogInForm
              handleChangeMode={handleChangeMode}
              submitHandler={submitHandler}
            />
          )}
          {!logInToken.token && !hasAccount && (
            <SignUpForm
              handleChangeMode={handleChangeMode}
              submitHandler={submitHandler}
            />
          )}
          {logInToken.token && <LogOutForm submitHandler={submitHandler} />}
        </div>
      </div>
      {children}
    </>
  );
};

export default AccessHandler;

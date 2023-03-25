import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import LogInForm from "../LogInForm/LogInForm";
import LogOutForm from "../LogOutForm/LogOutForm";
import ResetPassword from "../ResetPassword/ResetPassword";
import SignUpForm from "../SignUpForm/SignUpForm";

const AccessHandler = ({ children }) => {
  const { accessData, setAccessData, hasAccount, setHasAccount } = useAuth();
  const [isResetPass, setIsResetPass] = useState(false);

  const handleChangeMode = () => {
    setHasAccount(!hasAccount);
  };

  const submitHandler = (jwtToken, username, role) => {
    setAccessData({ token: jwtToken, username: username, role: role });
    jwtToken
      ? localStorage.setItem("accessToken", jwtToken)
      : localStorage.removeItem("accessToken");
  };

  useEffect(() => {
    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
    myModal.hide();
  }, [accessData]);

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
            !accessData.token && !hasAccount ? "modal-lg" : "modal-md"
          } modal-dialog-centered`}
        >
          {isResetPass && <ResetPassword setIsResetPass={setIsResetPass} />}
          {!isResetPass && !accessData.token && hasAccount && (
            <LogInForm
              handleChangeMode={handleChangeMode}
              submitHandler={submitHandler}
              setIsResetPass={setIsResetPass}
            />
          )}
          {!isResetPass && !accessData.token && !hasAccount && (
            <SignUpForm
              handleChangeMode={handleChangeMode}
              submitHandler={submitHandler}
            />
          )}
          {!isResetPass && accessData.token && (
            <LogOutForm submitHandler={submitHandler} />
          )}
        </div>
      </div>
      {children}
    </>
  );
};

export default AccessHandler;

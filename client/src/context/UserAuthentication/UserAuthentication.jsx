import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import LogInForm from "./LogInForm/LogInForm";
import LogOutForm from "./LogOutForm/LogOutForm";
import SignUpForm from "./SignUpForm/SignUpForm";

const UserAuthContext = createContext({});

export const UserAuthentication = ({ children }) => {
  // For development purposes remove in production

  const MOCK_LOGIN = {
    token: "sampleToken",
    username: "sample@username",
    role: "user",
  };

  const MOCK_LOGOUT = {
    token: false,
    username: "login",
    role: false,
  };

  console.log("Mock data log in : ", MOCK_LOGIN);
  console.log("Mock data log out : ", MOCK_LOGOUT);

  // For development purposes remove in production

  const [hasAccount, setHasAccount] = useState(true);
  const [logInToken, setLogInToken] = useState(MOCK_LOGOUT);

  const handleChangeMode = () => {
    hasAccount === true ? setHasAccount(false) : setHasAccount(true);
  };

  const handleLogInMode = () => {
    setHasAccount(true);
  };

  const handleSignUpMode = () => {
    setHasAccount(false);
  };

  const submitHandler = (jwtToken, username, role) => {
    setLogInToken({ token: jwtToken, username: username, role: role });

    console.log("user logged in with token:", jwtToken);
    console.log("user logged in with username:", username);
    console.log("user logged in with role:", role);
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
            !userData.token && !hasAccount ? "modal-lg" : "modal-md"
          } modal-dialog-centered`}
        >
          {!userData.token && hasAccount && (
            <LogInForm
              handleChangeMode={handleChangeMode}
              submitHandler={submitHandler}
            />
          )}
          {!userData.token && !hasAccount && (
            <SignUpForm
              handleChangeMode={handleChangeMode}
              submitHandler={submitHandler}
            />
          )}
          {userData.token && <LogOutForm submitHandler={submitHandler} />}
        </div>
      </div>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;

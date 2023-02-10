import React, { useState } from "react";
import FormModal from "../../FormUI/FormModal";
import showPassImg from "../../../assets/images/showPass.png";
import hidePassImg from "../../../assets/images/hidePass.png";

const LogInForm = ({ handleChangeMode, submitHandler }) => {
  const [showPass, setShowPass] = useState(false);

  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  const onClickSubmit = (event) => {
    event.preventDefault();
    submitHandler(logInData, "sample log in token");
  };

  const headerTitle = "Log in to your Lakbay Account";
  const headerText = "Doesn't have an account? ";
  const headerLink = (
    <a href="#" onClick={handleChangeMode}>
      Sign up here.
    </a>
  );
  const btnLeftClass = "modal-cancel-btn";
  const dataDismiss = "modal";
  const btnLeftText = "cancel";
  const btnRightType = "submit";
  const btnRightText = "Sign In";

  return (
    <FormModal
      submitHandler={onClickSubmit}
      headerTitle={headerTitle}
      headerText={headerText}
      headerLink={headerLink}
      btnLeftClass={btnLeftClass}
      dataDismiss={dataDismiss}
      btnLeftText={btnLeftText}
      btnRightType={btnRightType}
      btnRightText={btnRightText}
    >
      <div className="form-floating mb-3">
        <input
          type="text"
          id="formUserName"
          className="form-control"
          placeholder="UserName"
          aria-label="UserName"
          required
          onChange={(e) => {
            setLogInData({
              ...logInData,
              username: e.target.value,
            });
          }}
          onBlur={() => console.log("blurred")}
          value={logInData.username}
        />
        <label htmlFor="formUserName">Username or Email</label>
        <div className="invalid-feedback">
          The username or email you entered isn’t connected to an account.
        </div>
      </div>
      <div className="form-floating mb-3">
        <input
          type={!showPass ? "password" : "text"}
          className="form-control"
          id="formPassword"
          placeholder="Password"
          required
          onChange={(e) => {
            setLogInData({
              ...logInData,
              password: e.target.value,
            });
          }}
          value={logInData.password}
        />
        <label htmlFor="formPassword">Password</label>
        <div className="invalid-feedback">
          The password you’ve entered is incorrect
        </div>
        <div className="mt-2">
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>
        <div
          className="signUpForm-seePass position-absolute"
          onClick={() => setShowPass(showPass ? false : true)}
          style={{
            backgroundImage: `url(${!showPass ? hidePassImg : showPassImg})`,
          }}
        ></div>
      </div>
    </FormModal>
  );
};

export default LogInForm;

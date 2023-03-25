import React, { useState, useEffect } from "react";
import axios from "../../../Utils/axios";

import FormModal from "../../FormUI/FormModal";
import showPassImg from "../../../assets/images/showPass.png";
import hidePassImg from "../../../assets/images/hidePass.png";
import useTheme from "../../../hooks/useTheme";
import regEx from "../../../Utils/regEx";

const LogInForm = ({ handleChangeMode, submitHandler, setIsResetPass }) => {
  const { currentTheme } = useTheme();

  const LOGIN_URL = "/api/users/login";
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [showPass, setShowPass] = useState(false);

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState();
  const [usernameClass, setUsernameClass] = useState("");

  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passClass, setPassClass] = useState("");

  const logInData = {
    usernameOrEmail: username,
    password: password,
  };

  // Open password modal
  const resetPassHandler = () => {
    setIsResetPass(true);
  };

  useEffect(() => {
    const result =
      regEx.USERNAME_REGEX.test(username) || regEx.EMAIL_REGEX.test(username);
    setValidUsername(result);
    if (!result && isSubmitClicked) {
      setUsernameClass("isInvalid");
    } else if (result && isSubmitClicked) {
      setUsernameClass("isValid");
    }
  }, [username]);

  useEffect(() => {
    const result = regEx.PWD_REGEX.test(password);
    setValidPass(result);
    if (!result && isSubmitClicked) {
      setPassClass("isInvalid");
    } else if (result && isSubmitClicked) {
      setPassClass("isValid");
    }
  }, [password]);

  const onClickBtnLeft = () => {
    setUsernameClass("");
    setPassClass("");
    setErrMsg("");
    setIsSubmitClicked(false);
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
    setIsSubmitClicked(true);
    if (!validUsername || !validPass) {
      !validUsername ? setUsernameClass("isInvalid") : setUsernameClass("");
      !validPass ? setPassClass("isInvalid") : setPassClass("");
    } else {
      setErrMsg("Submitting...");
      submitToServer();
    }
  };

  const submitToServer = async () => {
    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify(logInData), {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (response.data.message) {
        setErrMsg(response.data.message);
      } else {
        submitHandler(
          response.data.token,
          response.data.username,
          response.data.role
        );
        setErrMsg("");
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Registration failed. Cannot connect to the server.");
      } else if (err.response?.status === 409) {
        setErrMsg("Username or email already exists. Try a different one.");
      } else {
        setErrMsg(
          "Registration failed. Please check your internet connection."
        );
      }
    } finally {
      setIsSubmitClicked(false);
    }
  };

  const headerTitle = "Log in to your Lakbay Account";
  const headerText = "Doesn't have an account? ";
  const headerLink = (
    <a
      href="#"
      onClick={handleChangeMode}
      style={{
        color: currentTheme,
      }}
    >
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
      onClickBtnLeft={onClickBtnLeft}
      btnLeftClass={btnLeftClass}
      dataDismiss={dataDismiss}
      btnLeftText={btnLeftText}
      btnRightType={btnRightType}
      btnRightText={btnRightText}
      errMsg={errMsg}
    >
      <div className="form-floating mb-3">
        <input
          type="text"
          id="formUserName"
          className={`form-control ${usernameClass}`}
          placeholder="UserName"
          aria-label="UserName"
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <label htmlFor="formUserName">Username or Email</label>
        <div className="invalid-feedback">
          The username or email you entered is invalid, try again.
        </div>
      </div>
      <div className="form-floating mb-3">
        <input
          type={!showPass ? "password" : "text"}
          className={`form-control ${passClass}`}
          id="formPassword"
          placeholder="Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <label htmlFor="formPassword">Password</label>
        <div className="invalid-feedback">
          The password you’ve enterred is invalid, try again.
        </div>
        <div className="mt-2">
          <a href="#" className="forgot-password" onClick={resetPassHandler}>
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

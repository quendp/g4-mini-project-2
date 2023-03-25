import React, { useState, useEffect } from "react";
import axios from "../../../Utils/axios";
import SignUpFormAccount from "./SignUpFormAccount";
import SignUpFormPersonal from "./SignUpFormPersonal";
import FormModal from "../../FormUI/FormModal";
import useTheme from "../../../hooks/useTheme";
import regEx from "../../../Utils/regEx";

const SignUpForm = ({ handleChangeMode, submitHandler }) => {
  const { currentTheme } = useTheme();

  const REGISTER_URL = "/api/users/register/1";

  const [step, setStep] = useState(0);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState();
  const [usernameClass, setUsernameClass] = useState("");

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailClass, setEmailClass] = useState("");

  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passClass, setPassClass] = useState("");

  const [passMatch, setPassMatch] = useState("");
  const [validPassMatch, setValidPassMatch] = useState(false);
  const [passMatchClass, setPassMatchClass] = useState("");

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameClass, setFirstNameClass] = useState("");

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameClass, setLastNameClass] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [validNumber, setValidNumber] = useState(false);
  const [numberClass, setNumberClass] = useState("");

  const [age, setAge] = useState("");
  const [validAge, setValidAge] = useState(false);
  const [ageClass, setAgeClass] = useState("");

  const [address, setAddress] = useState("");
  const [validAddress, setValidAddress] = useState(false);
  const [addressClass, setAddressClass] = useState("");

  const signUpData = {
    username: username,
    firstname: firstName,
    lastname: lastName,
    email: email,
    phone_number: phoneNumber,
    age: age,
    address: address,
    password: password,
  };

  useEffect(() => {
    setErrMsg("");
    const result = regEx.USERNAME_REGEX.test(username);
    setValidUsername(result);
    if (!result && isNextClicked) {
      setUsernameClass("isInvalid");
    } else if (result && isNextClicked) {
      setUsernameClass("isValid");
    }
  }, [username]);

  useEffect(() => {
    setErrMsg("");
    const result = regEx.EMAIL_REGEX.test(email);
    setValidEmail(result);
    if (!result && isNextClicked) {
      setEmailClass("isInvalid");
    } else if (result && isNextClicked) {
      setEmailClass("isValid");
    }
  }, [email]);

  useEffect(() => {
    const result = regEx.PWD_REGEX.test(password);
    setValidPass(result);
    if (!result && isNextClicked) {
      setPassClass("isInvalid");
    } else if (result && isNextClicked) {
      setPassClass("isValid");
    }
  }, [password]);

  useEffect(() => {
    const result = password === passMatch;
    setValidPassMatch(result);
    if (!result && isNextClicked) {
      setPassMatchClass("isInvalid");
    } else if (result && isNextClicked) {
      setPassMatchClass("isValid");
    }
  }, [passMatch]);

  useEffect(() => {
    const result = regEx.NAME_REGEX.test(firstName);
    setValidFirstName(result);
    if (!result && isSubmitClicked) {
      setFirstNameClass("isInvalid");
    } else if (result && isSubmitClicked) {
      setFirstNameClass("isValid");
    }
  }, [firstName]);

  useEffect(() => {
    const result = regEx.NAME_REGEX.test(lastName);
    setValidLastName(result);
    if (!result && isSubmitClicked) {
      setLastNameClass("isInvalid");
    } else if (result && isSubmitClicked) {
      setLastNameClass("isValid");
    }
  }, [lastName]);

  useEffect(() => {
    const result = regEx.NUMBER_REGEX.test(phoneNumber);
    setValidNumber(result);
    if (!result && isSubmitClicked) {
      setNumberClass("isInvalid");
    } else if (result && isSubmitClicked) {
      setNumberClass("isValid");
    }
  }, [phoneNumber]);

  useEffect(() => {
    const result = regEx.AGE_REGEX.test(age) && age >= 16;
    setValidAge(result);
    if (!result && isSubmitClicked) {
      setAgeClass("isInvalid");
    } else if (result && isSubmitClicked) {
      setAgeClass("isValid");
    }
  }, [age]);

  useEffect(() => {
    const result = regEx.ADDRESS_REGEX.test(address);
    setValidAddress(result);
    if (!result && isSubmitClicked) {
      setAddressClass("isInvalid");
    } else if (result && isSubmitClicked) {
      setAddressClass("isValid");
    }
  }, [address]);

  const conditionalComponent = () => {
    switch (step) {
      case 0:
        return (
          <SignUpFormAccount
            username={username}
            setUsername={setUsername}
            usernameClass={usernameClass}
            email={email}
            setEmail={setEmail}
            emailClass={emailClass}
            password={password}
            setPassword={setPassword}
            passClass={passClass}
            passMatch={passMatch}
            setPassMatch={setPassMatch}
            passMatchClass={passMatchClass}
          />
        );
      case 1:
        return (
          <SignUpFormPersonal
            firstName={firstName}
            setFirstName={setFirstName}
            firstNameClass={firstNameClass}
            lastName={lastName}
            setLastName={setLastName}
            lastNameClass={lastNameClass}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            numberClass={numberClass}
            age={age}
            setAge={setAge}
            ageClass={ageClass}
            address={address}
            setAddress={setAddress}
            addressClass={addressClass}
          />
        );
      default:
    }
  };

  const onClickBtnLeft = () => {
    setTimeout(() => {
      setStep(0);
      setIsNextClicked(false);
      setIsSubmitClicked(false);
    }, 100);
  };

  useEffect(() => {
    if (errMsg == "Username is already taken.") setUsernameClass("isInvalid");
    else if (errMsg == "Email address already have an account.")
      setEmailClass("isInvalid");
  }, [errMsg]);

  const onClickBtnRight = () => {
    setIsNextClicked(true);
    if (!validUsername || !validEmail || !validPass || !validPassMatch) {
      !validUsername ? setUsernameClass("isInvalid") : setUsernameClass("");
      !validEmail ? setEmailClass("isInvalid") : setEmailClass("");
      !validPass ? setPassClass("isInvalid") : setPassClass("");
      validPassMatch && passMatch.length > 0
        ? setPassMatchClass("")
        : setPassMatchClass("isInvalid");
    } else {
      setTimeout(() => {
        setStep(1);
      }, 100);
      setUsernameClass("");
      setEmailClass("");
      setPassClass("");
      setPassMatchClass("");
    }
  };

  const onClickSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitClicked(true);
    if (
      !validFirstName ||
      !validLastName ||
      !validNumber ||
      !validAge ||
      !validAddress
    ) {
      !validFirstName ? setFirstNameClass("isInvalid") : setFirstNameClass("");
      !validLastName ? setLastNameClass("isInvalid") : setLastNameClass("");
      !validNumber ? setNumberClass("isInvalid") : setNumberClass("");
      !validAge ? setAgeClass("isInvalid") : setAgeClass("");
      !validAddress ? setAddressClass("isInvalid") : setAddressClass("");
    } else {
      setErrMsg("Submitting...");
      submitToServer();
    }
  };

  const submitToServer = async () => {
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify(signUpData),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.data.message) {
        setErrMsg(response.data.message);
        onClickBtnLeft();
      } else {
        submitHandler(
          response.data.token,
          response.data.username,
          response.data.role
        );
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Registration failed. Cannot connect to the server.");
      } else if (err.response?.status === 409) {
        setErrMsg("Username or email already exists. Try a different one.");
        onClickBtnLeft();
      } else {
        setErrMsg(
          "Registration failed. Please check your internet connection."
        );
      }
    }
  };

  const headerTitle = "Create a Lakbay Account";
  const headerText = "Already have an account? ";
  const headerLink = (
    <a
      href="#"
      onClick={handleChangeMode}
      style={{
        color: currentTheme,
      }}
    >
      Log in here.
    </a>
  );
  const btnLeftClass = "modal-cancel-btn";
  const dataDismiss = step === 0 ? "modal" : "";
  const btnLeftText = step === 0 ? "cancel" : "previous";
  const btnRightType = step === 0 ? "button" : "submit";
  const btnRightText = step === 0 ? "next" : "submit";

  return (
    <FormModal
      headerTitle={headerTitle}
      headerText={headerText}
      headerLink={headerLink}
      submitHandler={onClickSubmit}
      btnLeftClass={btnLeftClass}
      dataDismiss={dataDismiss}
      onClickBtnLeft={onClickBtnLeft}
      btnLeftText={btnLeftText}
      btnRightType={btnRightType}
      onClickBtnRight={onClickBtnRight}
      btnRightText={btnRightText}
      errMsg={errMsg}
    >
      <div className="mb-4">
        <h3>
          <span>Step {step + 1} of 2 :</span>{" "}
          {step == 0 ? "Account Details" : "Personal Details"}
        </h3>
      </div>
      {conditionalComponent()}
    </FormModal>
  );
};

export default SignUpForm;

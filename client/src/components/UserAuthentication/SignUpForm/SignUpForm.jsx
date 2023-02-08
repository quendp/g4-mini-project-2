import React, { useState, useRef, useEffect } from "react";
import SignUpFormAccount from "./SignUpFormAccount";
import SignUpFormPersonal from "./SignUpFormPersonal";
import FormModal from "../../FormUI/FormModal";

const SignUpForm = ({ mode, handleChangeMode, setLogInToken }) => {
  
  const [step, setStep] = useState(0);

  const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%]).{8,24}$/;
  const NAME_REGEX = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{0,30}$/;
  const NUMBER_REGEX = /^\d{10,12}$/;
  const AGE_REGEX = /^\d{1,3}$/;
  const ADDRESS_REGEX = /^[\w'\-,.][^_!¡?÷?¿/\\+=@#$%^&*{}|~<>;:[\]]{0,200}$/;

  const usernameRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameClass, setUsernameClass] = useState("");

  const validateUserName = () => {

  }

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [passFocus, setPassFocus] = useState(false);

  const [passMatch, setPassMatch] = useState("");
  const [validPassMatch, setValidPassMatch] = useState(false);
  const [passMatchFocus, setPassMatchFocus] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [lastNameFocus, setLastNameFocus] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [validNumber, setValidNumber] = useState(false);
  const [numberFocus, setNumberFocus] = useState(false);

  const [age, setAge] = useState("");
  const [validAge, setValidAge] = useState(false);
  const [ageFocus, setAgeFocus] = useState(false);

  const [address, setAddress] = useState("");
  const [validAddress, setValidAddress] = useState(false);
  const [addressFocus, setAddressFocus] = useState(false);

  const formData = {
    username: username,
    email: email,
    password: password,
    firstname: firstName,
    lastname: lastName,
    phone_number: phoneNumber,
    age: age,
    address: address,
  };

  useEffect(() => {
    const result = USERNAME_REGEX.test(username);
    console.log(result);
    console.log(username);
    setValidUsername(result);
    if (!validUsername) {
      setUsernameClass("isInvalid")
    } else {
      setUsernameClass("isValid")
    }
  }, [username]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPass(result);
    const match = password === passMatch;
    setValidPassMatch(match);
  }, [password]);

  useEffect(() => {
    const result = NAME_REGEX.test(firstName);
    console.log(result);
    console.log(firstName);
    setValidFirstName(result);
  }, [firstName]);

  useEffect(() => {
    const result = NAME_REGEX.test(lastName);
    console.log(result);
    console.log(lastName);
    setValidLastName(result);
  }, [lastName]);

  useEffect(() => {
    const result = NUMBER_REGEX.test(phoneNumber);
    console.log(result);
    console.log(phoneNumber);
    setValidNumber(result);
  }, [phoneNumber]);

  useEffect(() => {
    const result = AGE_REGEX.test(age);
    console.log(result);
    console.log(age);
    setValidNumber(result);
  }, [age]);

  useEffect(() => {
    const result = ADDRESS_REGEX.test(address);
    console.log(result);
    console.log(address);
    setValidAddress(result);
  }, [address]);

  const conditionalComponent = () => {
    switch (step) {
      case 0:
        return (
          <SignUpFormAccount
            username={username}
            setUsername={setUsername}
            usernameClass={usernameClass}
            validateUserName={validateUserName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            passMatch={passMatch}
            setPassMatch={setPassMatch}
          />
        );
      case 1:
        return (
          <SignUpFormPersonal
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            age={age}
            setAge={setAge}
            address={address}
            setAddress={setAddress}
          />
        );
      default:
    }
  };

  const handleClickNext = () => {
    setTimeout(() => {
      setStep(1);
    }, 100);
    console.log("clicked next");
  };

  const handleSubmit = () => {
    console.log("sign up submitted");
    setLogInToken(true);
    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
    myModal.hide();
  };

  return (
    <FormModal
      mode={mode}
      step={step}
      setStep={setStep}
      handleSubmit={handleSubmit}
      handleClickNext={handleClickNext}
      handleChangeMode={handleChangeMode}
    >
      <div className="mb-4">
        <h3>
          <span>Step {step + 1} of 2 :</span> Account Details
        </h3>
      </div>
      {conditionalComponent()}
    </FormModal>
  );
};

export default SignUpForm;

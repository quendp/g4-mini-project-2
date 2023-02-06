import React, { useState } from "react";
import SignUpFormAccount from "./SignUpFormAccount";
import SignUpFormPersonal from "./SignUpFormPersonal";
import FormModal from "../FormUI/FormModal";

const SignUpForm = ({mode, handleChangeMode, setLogInToken}) => {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    firstname: "",
    lastname: "",
    phone_number: "",
    age: "",
    address: "",
  });

  const conditionalComponent = () => {
    switch (step) {
      case 0:
        return (
          <SignUpFormAccount formData={formData} setFormData={setFormData} />
        );
      case 1:
        return (
          <SignUpFormPersonal formData={formData} setFormData={setFormData} />
        );
      default:
    }
  };

  const handleClickNext = () => {
    setTimeout(() => {
      setStep(1);
    }, 100)
    console.log("clicked next")
  };

  const handleSubmit = () => {
    console.log(formData);
    console.log("sign up submitted")
    setLogInToken(true)
    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst );
    myModal.hide();
  }

  return (
    <FormModal mode={mode} step={step} setStep={setStep} handleSubmit={handleSubmit} handleClickNext={handleClickNext} handleChangeMode={handleChangeMode}>
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

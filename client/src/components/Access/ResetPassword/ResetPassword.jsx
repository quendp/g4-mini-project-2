import React, { useEffect, useState } from "react";
import FormModal from "../../FormUI/FormModal";
import OtpCode from "./OtpCode";
import ChangePassword from "./ChangePassword";
import LogInForm from "../LogInForm/LogInForm";

const ResetPassword = ({ cancelResetPass }) => {
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState();
  const [emailClass, setEmailClass] = useState("");

  const [step, setStep] = useState(0);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
    if (!result && isSubmitClicked) {
      setEmailClass("isInvalid");
    } else if (result && isSubmitClicked) {
      setEmailClass("isValid");
    }
  }, [email]);

  const onClickSubmit = (e) => {
    e.preventDefault();
    setIsSubmitClicked(true);
    if (!validEmail) {
      !validEmail ? setEmailClass("isInvalid") : setEmailClass("");
    } else {
      console.log(email);
      setStep(1);
    }
  };

  const onClickBtnLeft = () => {
    setErrMsg("");
    setIsSubmitClicked(false);
    cancelResetPass();
  };

  const cancelOtpCode = () => {
    setStep(0);
  };

  const onVerify = () => {
    setStep(2);
  };

  const cancelChangePassword = () => {
    setStep(1);
  };

  const onContinueLogin = () => {
    setStep(3);
  };

  const headerTitle = "Reset Password";
  const headerText = "";
  const headerLink = "";
  const btnLeftClass = "modal-cancel-btn";
  const dataDismiss = "modal";
  const btnLeftText = "cancel";
  const btnRightType = "submit";
  const btnRightText = "Send Code";

  return (
    <>
      {step === 0 && (
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
          <>
            <p className="p-light">Send us your email</p>
            <div className="form-floating mb-3 mb-sm-4 col-12">
              <input
                type="email"
                className={`form-control ${emailClass}`}
                id="formEmail"
                placeholder="name@example.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <label htmlFor="formEmail" className="ps-3 ps-sm-4">
                Email Address
              </label>
              <div className="invalid-feedback">
                Please choose a valid email.
              </div>
            </div>
          </>
        </FormModal>
      )}
      {step === 1 && (
        <OtpCode
          cancelOtpCode={cancelOtpCode}
          email={email}
          digits={4}
          onVerify={onVerify}
          errMsg={errMsg}
          setErrMsg={setErrMsg}
          isSubmitClicked={isSubmitClicked}
          setIsSubmitClicked={setIsSubmitClicked}
        />
      )}
      {step === 2 && (
        <ChangePassword
          cancelChangePassword={cancelChangePassword}
          onContinueLogin={onContinueLogin}
          errMsg={errMsg}
          setErrMsg={setErrMsg}
          isSubmitClicked={isSubmitClicked}
          setIsSubmitClicked={setIsSubmitClicked}
        />
      )}
      {step === 3 && <LogInForm />}
    </>
  );
};

export default ResetPassword;

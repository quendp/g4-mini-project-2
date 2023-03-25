import React, { useState } from "react";
import FormModal from "../../FormUI/FormModal";

const OtpCode = ({ cancelOtpCode, email, onVerify }) => {
  const [errMsg, setErrMsg] = useState(null);
  const [otpCode, setOtpCode] = useState("");
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitClicked(true);

    if (otpCode.length === 4) {
      setOtpCode("");
      onVerify();
    }
  };

  const onClickBtnLeft = () => {
    setErrMsg("");
    setIsSubmitClicked(false);
    cancelOtpCode();
  };

  const headerTitle = "OTP Code Verification";
  const headerText = `We sent a verification code to ${email}. Please enter the 4-digit code below.`;
  const btnLeftClass = "modal-cancel-btn";
  const btnLeftText = "Previous";
  const btnRightType = "submit";
  const btnRightText = "Verify Code";

  return (
    <FormModal
      submitHandler={onSubmit}
      headerTitle={headerTitle}
      headerText={headerText}
      onClickBtnLeft={onClickBtnLeft}
      btnLeftClass={btnLeftClass}
      btnLeftText={btnLeftText}
      btnRightType={btnRightType}
      btnRightText={btnRightText}
      errMsg={errMsg}
    >
      <div className="form-floating mb-3 mb-sm-4 col-12">
        <input
          type="text"
          className={`form-control ${
            isSubmitClicked && otpCode.length !== 4 ? "isInvalid" : ""
          }`}
          id="otpCode"
          placeholder="0000"
          required
          maxLength={4}
          onChange={(e) => setOtpCode(e.target.value)}
          value={otpCode}
        />
        <label htmlFor="otpCode" className="ps-3 ps-sm-4">
          OTP Code
        </label>
        {isSubmitClicked && otpCode.length !== 4 && (
          <div className="invalid-feedback">
            Please enter a valid 4-digit OTP code.
          </div>
        )}
      </div>
    </FormModal>
  );
};

export default OtpCode;

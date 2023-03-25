import { useState, useEffect } from "react";
import FormModal from "../../FormUI/FormModal";
import regEx from "../../../Utils/regEx";

const ChangePassword = ({ cancelChangePassword, onContinueLogin }) => {
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState();
  const [passClass, setPassClass] = useState("");

  const [passMatch, setPassMatch] = useState("");
  const [validPassMatch, setValidPassMatch] = useState();
  const [passMatchClass, setPassMatchClass] = useState("");

  useEffect(() => {
    const result = regEx.PWD_REGEX.test(password);
    setValidPass(result);
    if (!result && isSubmitClicked) {
      setPassClass("isInvalid");
    } else if (result && isSubmitClicked) {
      setPassClass("isValid");
    }
  }, [password]);

  useEffect(() => {
    const result = password === passMatch;
    setValidPassMatch(result);
    if (!result && isSubmitClicked) {
      setPassMatchClass("isInvalid");
    } else if (result && isSubmitClicked) {
      setPassMatchClass("isValid");
    }
  }, [passMatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitClicked(true);
    if (!validPass || !validPassMatch) {
      !validPass ? setPassClass("isInvalid") : setPassClass("");
      validPassMatch && passMatch.length > 0
        ? setPassMatchClass("")
        : setPassMatchClass("isInvalid");
    } else {
      setPassClass("");
      setPassMatchClass("");
      onContinueLogin();
      alert("Password changed successfully. Please proceed to login.");
    }
  };

  const headerTitle = "Change Password";
  const headerText = "Please enter your new password below.";
  const btnLeftClass = "modal-cancel-btn";
  const dataDismiss = "modal";
  const btnLeftText = "Cancel";
  const btnRightType = "submit";
  const btnRightText = "Change Password";

  return (
    <FormModal
      submitHandler={onSubmit}
      headerTitle={headerTitle}
      headerText={headerText}
      onClickBtnLeft={onContinueLogin}
      btnLeftClass={btnLeftClass}
      dataDismiss={dataDismiss}
      btnLeftText={btnLeftText}
      btnRightType={btnRightType}
      btnRightText={btnRightText}
    >
      <div className="form-floating mb-3 mb-sm-4 col-12">
        <input
          type="password"
          className={`form-control ${passClass}`}
          id="password"
          placeholder="********"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label htmlFor="password" className="ps-3 ps-sm-4">
          New Password
        </label>

        {isSubmitClicked && (
          <div className="invalid-feedback">
            Please choose a valid password.
          </div>
        )}
      </div>
      <div className="form-floating mb-3 mb-sm-4 col-12">
        <input
          type="password"
          className={`form-control ${passMatchClass}`}
          id="confirmPassword"
          placeholder="********"
          required
          onChange={(e) => setPassMatch(e.target.value)}
          value={passMatch}
        />
        <label htmlFor="confirmPassword" className="ps-3 ps-sm-4">
          Confirm Password
        </label>
        <div className="invalid-feedback">Passwords do not match.</div>
      </div>
    </FormModal>
  );
};

export default ChangePassword;

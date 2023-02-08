import React, {useState} from "react";
import FormModal from "../../FormUI/FormModal";

const LogInForm = ({mode, handleChangeMode, setLogInToken}) => {
  const [logInData, setLogInData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    setLogInToken(true)
    console.log(logInData);
    console.log("submitted");

    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst );
    myModal.hide();
  }

  return (
    <FormModal mode={mode} handleSubmit={handleSubmit} handleChangeMode={handleChangeMode}>
      <div className="form-floating mb-3">
        <input
          type="text"
          id="formUserName"
          className="form-control"
          placeholder="UserName"
          aria-label="UserName"
          required
          onChange={(e) =>{
            setLogInData({
                ...logInData,
                username: e.target.value,
            });
          }}
          onBlur={()=>console.log("blurred")}
          value={logInData.username}
        />
        <label htmlFor="formUserName">Username or Email</label>
        <div className="invalid-feedback">
          The username or email you entered isn’t connected to an account.
        </div>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="formPassword"
          placeholder="Password"
          required
          onChange={(e) =>{
            setLogInData({
                ...logInData,
                password: e.target.value,
            });
          }}
          value={logInData.password}
        />
        <label htmlFor="formPassword">Password</label>
        <div className="invalid-feedback">Wrong password</div>
        <div className="mt-2">
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>
      </div>
    </FormModal>
  );
};

export default LogInForm;

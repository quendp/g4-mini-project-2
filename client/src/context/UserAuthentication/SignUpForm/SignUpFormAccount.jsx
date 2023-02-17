import React, {useState} from "react";
import showPassImg from "../../../assets/images/showPass.png";
import hidePassImg from "../../../assets/images/hidePass.png";

const SignUpFormAccount = (props) => {
  const [showPass, setShowPass] = useState(false);
  const [showPassMatch, setShowPassMatch] = useState(false);
  return (
    <div>
      <div className="row g-0 g-sm-4">
        <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
          <input
            type="text"
            id="formUsername"
            className={`form-control ${props.usernameClass}`}
            placeholder="Username"
            aria-label="Username"
            required
            onChange={(e) =>{
                props.setUsername(e.target.value);
            }}
            value={props.username}
          />
          <label htmlFor="formUsername" className="ps-3 ps-sm-4">
            Username
          </label>
          <div className="invalid-feedback">Username can only contain letters, numbers and "_". Should be 3-16 characters long.</div>
        </div>
        <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
          <input
            type="email"
            className={`form-control ${props.emailClass}`}
            id="formEmail"
            placeholder="name@example.com"
            required
            onChange={(e) =>{
                props.setEmail(e.target.value)
            }}
            value={props.email}
          />
          <label htmlFor="formEmail" className="ps-3 ps-sm-4">
            Email Address
          </label>
          <div className="invalid-feedback">Please choose a valid email.</div>
        </div>
      </div>
      <div className="form-floating mb-3 mb-sm-4">
        <input
          type={!showPass ? "password" : "text"}
          className={`form-control ${props.passClass}`}
          id="formPassword"
          placeholder="Password"
          required
            onChange={(e) =>{
                props.setPassword(e.target.value)
            }}
            value={props.password}
        />
        <label htmlFor="formPassword">Password</label>
        <div className="invalid-feedback">Please choose a valid password. Should be 8-32 characters.</div>
        <div
          className="signUpForm-seePass position-absolute"
          onClick={() => setShowPass(showPass ? false : true)}
          style={{
            backgroundImage: `url(${!showPass ? hidePassImg : showPassImg})`,
          }}
        ></div>
      </div>
      <div className="form-floating mb-3 mb-sm-4">
        <input
          type={!showPassMatch ? "password" : "text"}
          className={`form-control ${props.passMatchClass}`}
          id="formConfirmPass"
          placeholder="Confirm Password"
          required
            onChange={(e) =>{
                props.setPassMatch(e.target.value)
            }}
            value={props.passMatch}
        />
        <label htmlFor="formConfirmPass">Confirm Password</label>
        <div className="invalid-feedback">Password doesn't match.</div>
        <div
          className="signUpForm-seePass position-absolute"
          onClick={() => setShowPassMatch(showPassMatch ? false : true)}
          style={{
            backgroundImage: `url(${!showPassMatch ? hidePassImg : showPassImg})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default SignUpFormAccount;

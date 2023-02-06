import React from "react";

const SignUpFormAccount = ({ formData, setFormData }) => {
  const formValidty = ""
  return (
    <div>
      <div className="row g-0 g-sm-4">
        <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
          <input
            type="text"
            id="formUsername"
            className={`form-control ${formValidty}`}
            placeholder="Username"
            aria-label="Username"
            required
            onChange={(e) =>{
                setFormData({
                    ...formData,
                    username: e.target.value,
                });
            }}
            value={formData.username}
          />
          <label htmlFor="formUsername" className="ps-3 ps-sm-4">
            Username
          </label>
          <div className="invalid-feedback">Username cannot be empty.</div>
        </div>
        <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
          <input
            type="email"
            className={`form-control ${formValidty}`}
            id="formEmail"
            placeholder="name@example.com"
            required
            onChange={(e) =>{
                setFormData({
                    ...formData,
                    email: e.target.value,
                });
            }}
            value={formData.email}
          />
          <label htmlFor="formEmail" className="ps-3 ps-sm-4">
            Email Address
          </label>
          <div className="invalid-feedback">Please choose a valid email.</div>
        </div>
      </div>
      <div className="form-floating mb-3 mb-sm-4">
        <input
          type="password"
          className={`form-control ${formValidty}`}
          id="formPassword"
          placeholder="Password"
          required
          onChange={(e) =>{
            setFormData({
                ...formData,
                password: e.target.value,
            });
        }}
        value={formData.password}
        />
        <label htmlFor="formPassword">Password</label>
        <div className="invalid-feedback">Please choose a valid password.</div>
      </div>
      <div className="form-floating mb-3 mb-sm-4">
        <input
          type="password"
          className={`form-control ${formValidty}`}
          id="formConfirmPass"
          placeholder="Confirm Password"
          required
          onChange={(e) =>{
            setFormData({
                ...formData,
                passwordConfirmation: e.target.value,
            });
        }}
        value={formData.passwordConfirmation}
        />
        <label htmlFor="formConfirmPass">Confirm Password</label>
        <div className="invalid-feedback">Password doesn't match.</div>
      </div>
    </div>
  );
};

export default SignUpFormAccount;

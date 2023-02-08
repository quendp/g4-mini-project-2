import React from "react";

const SignUpFormPersonal = (props) => {
  const formValidty = "";
  return (
    <div>
      <div className="row g-0 g-sm-4">
        <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
          <input
            type="text"
            id="formFirstName"
            className={`form-control ${formValidty}`}
            placeholder="Firstname"
            aria-label="Firstname"
            required
            onChange={(e) => {
              props.setFirstName(e.target.value);
            }}
            value={props.firstName}
          />
          <label htmlFor="formFirstName" className="ps-3 ps-sm-4">
            First Name
          </label>
          <div className="invalid-feedback">First name cannot be empty.</div>
        </div>
        <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
          <input
            type="text"
            id="formLastName"
            className={`form-control ${formValidty}`}
            placeholder="Lastname"
            aria-label="Lastname"
            required
            onChange={(e) => {
              props.setLastName(e.target.value);
            }}
            value={props.lastName}
          />
          <label htmlFor="formLastName" className="ps-3 ps-sm-4">
            Last Name
          </label>
          <div className="invalid-feedback">Last name cannot be empty.</div>
        </div>
      </div>
      <div className="row g-0 g-sm-4">
        <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
          <input
            type="number"
            className={`form-control ${formValidty}`}
            id="formNumber"
            placeholder="____ - ___ - ____"
            required
            onChange={(e) => {
              props.setPhoneNumber(e.target.value);
            }}
            value={props.phoneNumber}
          />
          <label htmlFor="formNumber" className="ps-3 ps-sm-4">
            Phone Number
          </label>
          <div className="invalid-feedback">Please choose a valid number.</div>
        </div>
        <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
          <input
            type="number"
            className={`form-control ${formValidty}`}
            id="formAge"
            placeholder="Age"
            required
            onChange={(e) => {
              props.setAge(e.target.value);
            }}
            value={props.age}
          />
          <label htmlFor="formAge" className="ps-3 ps-sm-4">
            Age
          </label>
          <div className="invalid-feedback">Please choose a valid age.</div>
        </div>
      </div>
      <div className="form-floating mb-3 mb-sm-4">
        <input
          type="text"
          className={`form-control ${formValidty}`}
          id="formAddress"
          placeholder="Current Address"
          required
          onChange={(e) => {
            props.setAddress(e.target.value);
          }}
          value={props.address}
        />
        <label htmlFor="formAddress">Current Address</label>
        <div className="invalid-feedback">Please enter a valid address.</div>
      </div>
    </div>
  );
};

export default SignUpFormPersonal;

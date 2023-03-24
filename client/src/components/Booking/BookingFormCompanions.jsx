import React, { useState } from "react";
import useTheme from "../../hooks/useTheme";

const BookingFormCompanions = (props) => {
  const { currentTheme } = useTheme();

  const [firstname, setFirstname] = useState("");
  const addFirstname = (e) => {
    e.preventDefault();
    setFirstname(e.target.value);
    props.setCompanions((prev) => {
      prev[props.index].firstname = e.target.value;
      return prev;
    });
  };

  const [lastname, setLastname] = useState("");
  const addLastname = (e) => {
    e.preventDefault();
    setLastname(e.target.value);
    props.setCompanions((prev) => {
      prev[props.index].lastname = e.target.value;
      return prev;
    });
  };

  const [age, setAge] = useState("");
  const addAge = (e) => {
    e.preventDefault();
    setAge(e.target.value);
    props.setCompanions((prev) => {
      prev[props.index].age = e.target.value;
      return prev;
    });
  };

  const removeCompHandler = () => {
    props.removeCompHandler(props.companion.id);
  };

  return (
    <div
      className="booking-form-companions__wrapper p-4 mb-3 mb-md-4 position-relative"
      style={{ boxShadow: `0 0 2px ${currentTheme}` }}
    >
      <i
        className="fa-solid fa-circle-xmark position-absolute bottom-100 start-100 rounded-circle"
        onClick={removeCompHandler}
      ></i>
      <div className="row g-0 g-sm-4">
        <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
          <input
            type="text"
            id="formFirstName"
            className={`form-control`}
            placeholder="Firstname"
            aria-label="Firstname"
            required
            onChange={addFirstname}
            value={firstname}
          />
          <label htmlFor="formFirstName" className="ps-3 ps-sm-4">
            First Name
          </label>
        </div>
        <div className="form-floating mb-3 mb-sm-4 col-12 col-sm-6">
          <input
            type="text"
            id="formLastName"
            className={`form-control`}
            placeholder="Lastname"
            aria-label="Lastname"
            required
            onChange={addLastname}
            value={lastname}
          />
          <label htmlFor="formLastName" className="ps-3 ps-sm-4">
            Last Name
          </label>
        </div>
      </div>
      <div className="row g-0 g-sm-4">
        <div className="form-floating col-12">
          <input
            type="number"
            className={`form-control`}
            id="formAge"
            placeholder="Age"
            required
            onChange={addAge}
            value={age}
          />
          <label htmlFor="formAge" className="ps-3 ps-sm-4">
            Age
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookingFormCompanions;

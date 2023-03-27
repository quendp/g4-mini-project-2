import React from "react";

const DashboardUIPersonalForm = ({
  isEditing,
  userInfo,
  firstname,
  setFirstname,
  lastname,
  setLastname,
  age,
  setAge,
  address,
  setAddress,
}) => {
  return (
    <section className="dashboardUI-sections__wrapper row w-100 m-0 py-4 justify-content-center align-items-center text-start">
      <h2 className="p-dark text-sm-start ps-sm-5 mb-3">
        II. Personal Information
      </h2>
      <p className="p-dark ps-2 ms-5 ps-sm-5">
        <span>First Name : </span>
        {!isEditing && userInfo.firstname ? userInfo.firstname : ""}
        {isEditing && (
          <input
            type="text"
            id="updateFirstname"
            aria-label="Firstname"
            required
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            value={firstname}
          />
        )}
      </p>
      <p className="p-dark ps-2 ms-5 ps-sm-5">
        <span>Last Name : </span>
        {!isEditing && userInfo.lastname ? userInfo.lastname : ""}
        {isEditing && (
          <input
            type="text"
            id="updateLastname"
            aria-label="lastname"
            required
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            value={lastname}
          />
        )}
      </p>
      <p className="p-dark ps-2 ms-5 ps-sm-5">
        <span>Age : </span>
        {!isEditing && userInfo.age ? userInfo.age : ""}
        {isEditing && (
          <input
            type="number"
            id="updateAge"
            aria-label="age"
            required
            onChange={(e) => {
              setAge(e.target.value);
            }}
            value={age}
          />
        )}
      </p>
      <p className="p-dark ps-2 ms-5 ps-sm-5">
        <span>Address : </span>
        {!isEditing && userInfo.address ? userInfo.address : ""}
        {isEditing && (
          <input
            type="text"
            id="updateAdress"
            aria-label="address"
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
          />
        )}
      </p>
    </section>
  );
};

export default DashboardUIPersonalForm;

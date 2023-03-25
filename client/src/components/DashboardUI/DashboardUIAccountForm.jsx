import React from "react";

const DashboardUIAccountForm = ({
  isEditing,
  userInfo,
  username,
  setUsername,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  password,
  setPassword,
}) => {
  return (
    <section className="dashboardUI-sections__wrapper row w-100 m-0 mb-4 py-4 justify-content-center align-items-center text-start">
      <h2 className="p-dark text-sm-start ps-sm-5 mb-3">
        I. Account Information
      </h2>
      <p className="p-dark ps-2 ms-5 ps-sm-5">
        <span>Username : </span>
        {!isEditing && userInfo.username ? userInfo.username : ""}
        {isEditing && (
          <input
            type="text"
            id="updateUsername"
            aria-label="Username"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        )}
      </p>
      <p className="p-dark ps-2 ms-5 ps-sm-5">
        <span>Email : </span>
        {!isEditing && userInfo.email ? userInfo.email : ""}
        {isEditing && (
          <input
            type="email"
            id="updateEmail"
            aria-label="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        )}
      </p>
      <p className="p-dark ps-2 ms-5 ps-sm-5">
        <span>Phone Number : </span>
        {!isEditing && userInfo.phone_number ? userInfo.phone_number : ""}
        {isEditing && (
          <input
            type="text"
            id="updatePhoneNumber"
            aria-label="Phone Number"
            required
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            value={phoneNumber}
          />
        )}
      </p>
      <p className="p-dark ps-2 ms-5 ps-sm-5">
        <span>Password : </span>
        {!isEditing && userInfo.password ? userInfo.password : ""}
        {isEditing && (
          <input
            type="password"
            id="updatePassword"
            aria-label="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        )}
      </p>
    </section>
  );
};

export default DashboardUIAccountForm;

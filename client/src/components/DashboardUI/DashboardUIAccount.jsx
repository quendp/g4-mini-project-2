import React from "react";

const DashboardUIAccount = ({ userInfo }) => {
  return (
    <div className="container-fluid p-0 py-3 m-0">
      <section className="dashboardUI-sections__wrapper row w-100 m-0 mb-4 py-4 justify-content-center align-items-center text-start">
        <h2 className="p-dark text-sm-start ps-sm-5 mb-3">
          I. Account Information
        </h2>
        <p className="p-dark ps-2 ms-5 ps-sm-5">
          <span>Username : </span>
          {userInfo.username ? userInfo.username : ""}
        </p>
        <p className="p-dark ps-2 ms-5 ps-sm-5">
          <span>Email : </span>
          {userInfo.email ? userInfo.email : ""}
        </p>
        <p className="p-dark ps-2 ms-5 ps-sm-5">
          <span>Phone Number : </span>
          {userInfo.phone_number ? userInfo.phone_number : ""}
        </p>
        <p className="p-dark ps-2 ms-5 ps-sm-5">
          <span>Password : </span>
          {userInfo.password ? userInfo.password : ""}
        </p>
      </section>
      <section className="dashboardUI-sections__wrapper row w-100 m-0 py-4 justify-content-center align-items-center text-start">
        <h2 className="p-dark text-sm-start ps-sm-5 mb-3">
          II. Personal Information
        </h2>
        <p className="p-dark ps-2 ms-5 ps-sm-5">
          <span>First Name : </span>
          {userInfo.firstname ? userInfo.firstname : ""}
        </p>
        <p className="p-dark ps-2 ms-5 ps-sm-5">
          <span>Last Name : </span>
          {userInfo.lastname ? userInfo.lastname : ""}
        </p>
        <p className="p-dark ps-2 ms-5 ps-sm-5">
          <span>Age : </span>
          {userInfo.age ? userInfo.age : ""}
        </p>
        <p className="p-dark ps-2 ms-5 ps-sm-5">
          <span>Address : </span>
          {userInfo.address ? userInfo.address : ""}
        </p>
      </section>
    </div>
  );
};

export default DashboardUIAccount;

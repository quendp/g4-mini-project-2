import React from "react";

const DashboardUIAccount = ({ userInfo }) => {
  return (
    <div>
      <p className="p-dark">
        Fullname: {userInfo ? userInfo.firstname : "loading"}{" "}
        {userInfo ? userInfo.lastname : ""}
      </p>
      <p className="p-dark">Email: {userInfo ? userInfo.email : "Loading"}</p>
      <p className="p-dark">
        Phone Number: {userInfo ? userInfo.phone_number : "Loading"}
      </p>
      <p className="p-dark">Age: {userInfo ? userInfo.age : "Loading"}</p>
      <p className="p-dark">
        Adress: {userInfo ? userInfo.address : "Loading"}
      </p>
    </div>
  );
};

export default DashboardUIAccount;

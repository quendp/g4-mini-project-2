import React from "react";
import userAvatar from "../../assets/images/user-avatar/user1.jpg";

const UserSidebar = ({ userData, changeComponentHandler, activeComponent }) => {
  return (
    <header className="user-page-sidebar__container container-fluid vh-100 d-flex flex-column justify-content-between py-5 px-4">
      <div className="row">
        <div className="col-4 p-3 m-0">
          <img
            className="w-100 user-page-sidebar__avatar"
            src={userAvatar}
            alt="user avatar"
          />
        </div>
        <div className="col-8 p-2 px-3 m-0 d-flex flex-column justify-content-center align-items-start">
          <p className="user-page-sidebar__username pb-1 m-0">
            {userData.logInToken.username}
          </p>
          <p className="user-page-sidebar__role text-uppercase pt-1 m-0">
            <span className="p-1 px-2 me-2 rounded"> Role : </span>{" "}
            {userData.logInToken.role}
          </p>
        </div>
      </div>
      <div className="row px-3 m-0">
        <div
          className={`user-page-sidebar__item col-12 p-4 ps-5 m-0 my-2 d-flex justify-content-start align-items-center ${
            activeComponent === "home" ? "isActive" : ""
          }`}
          onClick={() => changeComponentHandler("home")}
        >
          <p className="lh-1 p-0 m-0">
            <i class="fa-solid fa-house me-2"></i> Home
          </p>
        </div>
        <div
          className={`user-page-sidebar__item col-12 p-4 ps-5 m-0 my-2 d-flex justify-content-start align-items-center ${
            activeComponent === "bookings" ? "isActive" : ""
          }`}
          onClick={() => changeComponentHandler("bookings")}
        >
          <p className="lh-1 p-0 m-0">
            <i class="fa-solid fa-book me-2"></i> Bookings
          </p>
        </div>
        <div
          className={`user-page-sidebar__item col-12 p-4 ps-5 m-0 my-2 d-flex justify-content-start align-items-center ${
            activeComponent === "updates" ? "isActive" : ""
          }`}
          onClick={() => changeComponentHandler("updates")}
        >
          <p className="lh-1 p-0 m-0">
            <i class="fa-solid fa-clock me-2"></i> Updates
          </p>
        </div>
      </div>
      <div className="row m-0 px-3">
        <div className="user-page-sidebar__bottom col-12 p-3">
          <div className="text-center m-0 p-0">
            <p className="lh-1 p-2 py-3 m-2">My Account</p>
          </div>
          <div className="text-center m-0 p-0">
            <p className="lh-1 p-2 py-3 m-2">Settings</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserSidebar;

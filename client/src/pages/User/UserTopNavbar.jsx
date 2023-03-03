import React from "react";
import { Link } from "react-router-dom";

const UserTopNavbar = ({ userData }) => {
  return (
    <div className="row m-0 p-5 ps-0 display-flex justify-between">
      <div className="user-page-topnav__greeting col-7">
        <h2>Hello, {userData.logInToken.username}!</h2>
      </div>
      <div className="col-5 d-flex justify-content-end align-items-center">
        <div className="user-page-topnav__search me-5">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn px-3" type="submit">
              Search
            </button>
          </form>
        </div>
        <Link to="/" className="user-page-topnav__logout">
          <i className="user-page-topnav__logout fa-solid fa-right-from-bracket"></i>
        </Link>
      </div>
    </div>
  );
};

export default UserTopNavbar;

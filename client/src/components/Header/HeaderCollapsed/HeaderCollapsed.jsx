import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../Header.module.css";
import headerLogo from "../../../assets/images/logo-svg/logo-outline-white.svg";
import UserAuthContext from "../../../context/UserAuthentication/UserAuthentication";

const HeaderCollapsed = (props) => {
  const userData = useContext(UserAuthContext);
  return (
    <div className={`row navbar px-0 px-sm-2 px-md-2 px-lg-5`}>
      <div className="col-3">
        <Link
          className="navbar-brand h-logo"
          to="/"
          onClick={props.onCloseHeader}
        >
          <img src={headerLogo} alt="Lakbay Travel Agency Logo" width="40px" />
        </Link>
      </div>
      <div className={`${styles.title} position-relative col-6`}>
        <span className="position-absolute top-50 start-50"> LAKBAY </span>
        <h2 className="position-absolute top-50 start-50 w-100 text-center text-uppercase">
          Exploring The Philippines and Creating Stories
        </h2>
      </div>
      <div
        className={`${styles.ham} col-3 d-flex justify-content-end align-items-center`}
      >
        <button
          type="button"
          className={`${styles.signupBtn} btn me-4 px-4 py-2 d-none d-md-block position-relative overflow-hidden rounded-pill`}
          data-bs-toggle="modal"
          data-bs-target="#signUpModal"
        >
          {userData.token.length > 0 ? "LOG OUT" : "LOG IN"}
        </button>
        <div
          className={`${styles.hamBtn} position-relative`}
          onClick={props.onBurgerClick}
        >
          <span className="position-absolute start-50"></span>
          <span className="position-absolute start-50"></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderCollapsed;

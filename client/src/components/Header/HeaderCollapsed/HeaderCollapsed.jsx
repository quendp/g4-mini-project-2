import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Header.module.css";
import headerLogo from "../../../assets/images/logo-svg/logo-outline-white.svg";
import UserAuthContext from "../../../context/UserAuthentication/UserAuthentication";
import { animationDelay } from "../../../Utils/AnimationDelay";

const HeaderCollapsed = (props) => {
  const userData = useContext(UserAuthContext);

  const [burgerTopWidth, setBurgerTopWidth] = useState("70%");
  const [burgerTopPos, setBurgerTopPos] = useState("40%");
  const [burgerBotPos, setBurgerBotPos] = useState("60%");
  const [burgerRotation, setBurgerRotation] = useState("0");

  const burgerTop = {
    width: burgerTopWidth,
    top: burgerTopPos,
    transform: `translate(-50%, -50%) rotate(${burgerRotation}deg)`,
  };

  const burgerBot = {
    top: burgerBotPos,
    transform: `translate(-50%, -50%) rotate(-${burgerRotation}deg)`,
  };

  useEffect(() => {
    (async () => {
      if (props.isHeaderClosed) {
        setBurgerRotation("0");
        await animationDelay(200);
        setBurgerTopPos("40%");
        setBurgerBotPos("60%");
        await animationDelay(200);
        setBurgerTopWidth("70%");
      }
    })();
  }, [props.isHeaderClosed]);

  const burgerClickHandler = async () => {
    props.onBurgerClick();
    if (props.isActiveClass == "") {
      setBurgerTopWidth("100%");
      await animationDelay(200);
      setBurgerTopPos("50%");
      setBurgerBotPos("50%");
      await animationDelay(200);
      setBurgerRotation("45");
    } else {
      setBurgerRotation("0");
      await animationDelay(200);
      setBurgerTopPos("40%");
      setBurgerBotPos("60%");
      await animationDelay(200);
      setBurgerTopWidth("70%");
    }
  };

  const openLoginModal = () => {
    userData.handleLogInMode();
  };

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
          onClick={openLoginModal}
        >
          {userData.logInToken.token ? "LOG OUT" : "LOG IN"}
        </button>
        <div
          className={`${styles.hamBtn} position-relative`}
          onClick={burgerClickHandler}
        >
          <span className="position-absolute start-50" style={burgerTop}></span>
          <span className="position-absolute start-50" style={burgerBot}></span>
        </div>
      </div>
    </div>
  );
};

export default HeaderCollapsed;

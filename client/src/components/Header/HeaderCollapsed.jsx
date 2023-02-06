import React from 'react'
import headerLogo from '../../assets/images/logo-svg/logo-outline-white.svg';

const HeaderCollapsed = (props) => {
  return (
    <div className="row navbar px-0 px-sm-2 px-md-2 px-lg-5">
      <div className="col-3">
        <a className="navbar-brand h-logo" href="./index.html">
          <img src={headerLogo} alt="Lakbay Travel Agency Logo" width="40px" />
        </a>
      </div>
      <div className="h-header-title position-relative col-6">
        <span className="position-absolute top-50 start-50"> LAKBAY </span>
        <h2 className="position-absolute top-50 start-50 w-100 text-center text-uppercase">
          Exploring The Philippines and Creating Stories
        </h2>
      </div>
      <div className="h-ham-container col-3 d-flex justify-content-end align-items-center">
        <button type="button"
          className="h-btn-signUp btn me-4 px-4 py-2 d-none d-md-block position-relative overflow-hidden rounded-pill"
          data-bs-toggle="modal" data-bs-target="#signUpModal">
          {props.isLoggedIn === true ? "LOG OUT": "SIGN IN" }
        </button>
        <div className="h-btn-ham position-relative" onClick={props.onBurgerClick}>
          <span className="position-absolute start-50"></span>
          <span className="position-absolute start-50"></span>
        </div>
      </div>
    </div>
  )
}

export default HeaderCollapsed
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminModalUI from "../AdminModalUI/AdminModalUI";

const AdminTopNav = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const onSubmitSearchValue = (e) => {
    e.preventDefault();
    props.searchValueHandler(searchValue);
  };

  return (
    <div className="col-xxl-10 col-xl-9 col-lg-9  ms-auto bg-dark fixed-top py-2 admin-top__navbar d-flex py-3">
      <form
        className=" ms-auto me-0 me-md-3 me-3 my-2 my-md-0"
        onSubmit={onSubmitSearchValue}
      >
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search for..."
            aria-describedby="btnNavbarSearch"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button
            className="btn btn-secondary"
            id="btnNavbarSearch"
            type="submit"
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
      <div className="d-flex align-items-center justify-content-center">
        <Link
          to="/"
          className="nav-link"
          // onClick={() => props.openModal("adminTopNavCloseModal")}
        >
          <i
            role="button"
            className="fa-solid fa-right-from-bracket fa-fw text-secondary fa-xl "
          ></i>
        </Link>
      </div>
      <AdminModalUI
        showModal={props.showModal.adminTopNavCloseModal}
        closeModal={() => props.closeModal("adminTopNavCloseModal")}
        modalType="adminTopNavCloseModal"
      />
    </div>
  );
};

export default AdminTopNav;

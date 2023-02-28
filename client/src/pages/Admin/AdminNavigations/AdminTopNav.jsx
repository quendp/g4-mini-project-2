import React, { useState } from "react";

const AdminTopNav = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const onSubmitSearchValue = (e) => {
    e.preventDefault();
    props.searchValueHandler(searchValue);
  };

  return (
    <div className="col-xxl-10 col-xl-9 col-lg-9  ms-auto bg-dark fixed-top py-2 admin-top__navbar d-flex">
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
      <ul className="navbar-nav ms-md-0">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fas fa-user fa-fw text-secondary"></i>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-secondary dropdown-menu-end"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <a className="dropdown-item" href="#!">
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AdminTopNav;

import React from "react";

const AgentTopNav = () => {
  return (
    <div className="col-xxl-10 col-xl-9 col-lg-9 bg-dark  ms-auto fixed-top px-3 py-2 agentTopNav d-flex">
      <form className=" ms-auto me-0 me-md-3 me-3 my-2 my-md-0">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            placeholder="Search for..."
            aria-label="Search for..."
            aria-describedby="btnNavbarSearch"
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
        <a href="#" className="nav-link">
          <i
            role="button"
            className="fa-solid fa-right-from-bracket fa-fw text-secondary fa-xl "
          ></i>
        </a>
      </div>
    </div>
  );
};

export default AgentTopNav;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const DashboardUITop = ({ openSideBar }) => {
  const { accessData, setHasAccount } = useAuth();
  const navigate = useNavigate();

  const openLogOutModal = () => {
    setHasAccount(true);
  };
  useEffect(() => {
    if (accessData.role === 0) {
      navigate("/");
    }
  }, [accessData]);

  return (
    <header className="dashboardUI-top__wrapper w-100 position-sticky top-0 start-0 d-flex align-items-center px-3">
      <button
        className="d-block d-md-none dashboardUI-nav__burger me-3"
        onClick={openSideBar}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <div className="row m-0 p-0 display-flex justify-content-end w-100">
        <div className="col-5 d-flex justify-content-end align-items-center">
          <div className="dashboardUI-top__search me-4 d-none d-md-block">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="dashboardUI-main__btn px-3" type="submit">
                Search
              </button>
            </form>
          </div>
          <button
            className="dashboardUI-top__logout"
            data-bs-toggle="modal"
            data-bs-target="#signUpModal"
            onClick={openLogOutModal}
          >
            <i className="dashboardUI-top__logout fa-solid fa-right-from-bracket"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardUITop;

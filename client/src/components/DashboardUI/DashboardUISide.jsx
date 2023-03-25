import React, { useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import lakbayLogo from "../../assets/images/logo-svg/logo-outline-white.svg";
import useAuth from "../../hooks/useAuth";

const DashboardUISide = ({
  isSidebarOpen,
  closeSideBar,
  sidebarMenu,
  userInfo,
}) => {
  const { accessData, setHasAccount } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const openLogOutModal = () => {
    setHasAccount(true);
  };

  useEffect(() => {
    if (accessData.role === 0) {
      navigate("/");
    }
  }, [accessData]);

  return (
    <div
      className={`${
        isSidebarOpen ? "isClicked" : ""
      } dashboardUI-side__wrapper vh-100 top-0 start-0 p-3 pt-0 pt-md-4 d-flex flex-column justify-content-between`}
    >
      <button
        className="dashboardUI-nav__burger d-block d-md-none mt-3 me-3 align-self-start"
        onClick={closeSideBar}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="w-100 p-0 m-0 d-flex flex-column justify-content-center align-items-center align-items-md-stretch">
        <Link
          to="/"
          className="dashboardUI-side__title d-flex align-items-center justify-content-center p-3 pb-md-4 mb-4 text-decoration-none"
        >
          <img src={lakbayLogo} alt="Lakbay Travel Agency Logo" />
          <h3 className="h3-light m-0 mx-3">LAKBAY</h3>
        </Link>

        <div className="dashboardUI-side__username d-flex flex-row w-100 p-3 mb-4 justify-content-center justify-content-md-start justify-self-start">
          <div className="dashboardUI-side__avatar me-4 p-0 rounded-circle d-flex align-items-center justify-content-center">
            <span className="p-0 m-0">
              {userInfo ? userInfo.firstname[0] + userInfo.lastname[0] : ""}
            </span>
          </div>
          <div className="d-flex flex-column align-items-start justify-content-center">
            <p className="m-0 p-0">
              {userInfo ? userInfo.firstname + " " + userInfo.lastname : ""}
            </p>
            <p className="m-0 p-0">@{accessData.username}</p>
          </div>
        </div>
        <div className="row p-0 m-0">
          {sidebarMenu.map((item) => (
            <NavLink
              className={`${
                item.id === 1 && location.pathname === `/${accessData.username}`
                  ? "active"
                  : ""
              } dashboardUI-side__navitem col-12 p-2 ps-4 m-0 my-3 ms-4 d-flex justify-content-start align-items-center text-decoration-none`}
              key={item.id}
              to={item.path}
              onClick={closeSideBar}
            >
              <p className="lh-1 p-0 m-0">
                <i className={`fa-solid fa-${item.icon} ms-2 me-3`}></i>{" "}
                {item.title}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="dashboardUI-side__bottom py-2 px-3 text-uppercase">
        <div className="m-0 p-0">
          <NavLink
            to={`/${accessData.username}/account`}
            className="text-center m-0 p-0 text-decoration-none"
            onClick={closeSideBar}
          >
            <p className="lh-1 p-2 py-3 m-2">My Account</p>
          </NavLink>
        </div>
        <div
          className="text-center m-0 p-0"
          data-bs-toggle="modal"
          data-bs-target="#signUpModal"
          onClick={openLogOutModal}
        >
          <p className="lh-1 p-2 py-3 m-2">Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardUISide;

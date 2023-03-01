import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserAuthContext from "../../../context/UserAuthentication/UserAuthentication";
import styles from "../Header.module.css";

const HeaderNavMenu = ({ onCloseHeader }) => {
  const userData = useContext(UserAuthContext);

  const headerLinks = [
    {
      id: 1,
      page: "Home",
      path: "/",
    },
    {
      id: 2,
      page: "Contact",
      path: "/contact",
    },
    {
      id: 3,
      page: "About",
      path: "/about",
    },
    {
      id: 4,
      page: "Dashboard",
      path: `/${userData.username}`,
    },
  ];

  return (
    <ul
      className={`${styles.navList} w-100 py-4 mb-4 rounded d-flex justify-content-evenly p-0`}
    >
      {headerLinks.map((linkItem) => (
        <li key={linkItem.id} className="position-relative text-center">
          <NavLink
            className={({ isActive }) => {
              let activeClass = "text-uppercase text-decoration-none ";
              if (isActive) activeClass += styles.active;
              return activeClass;
            }}
            onClick={onCloseHeader}
            to={linkItem.path}
          >
            {linkItem.page}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNavMenu;

import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardUI from "../../components/DashboardUI/DashboardUI";
import DashboardUIAccount from "../../components/DashboardUI/DashboardUIAccount";
import UserAuthContext from "../../context/UserAuthentication/UserAuthentication";
import fetchUserInfo from "../../Utils/fetchUserInfo";
import UserBookings from "./UserBookings";
import UserDashboard from "./UserDashboard";
import UserUpdates from "./UserUpdates";

const User = ({ onTokenExpire }) => {
  const userData = useContext(UserAuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(false);
  const FETCH_API = `/api/users/${userData.logInToken.username}`;

  useEffect(() => {
    let isLoggedIn = true;

    const controller = new AbortController();

    const getUserInfo = async () => {
      try {
        const info = await fetchUserInfo(
          userData.logInToken.token,
          FETCH_API,
          controller
        );
        isLoggedIn && setUserInfo(info.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUserInfo();
    return () => {
      isLoggedIn = false;
      controller.abort();
    };
  }, [userData]);

  const sidebarMenu = [
    {
      id: 1,
      title: "Dashboard",
      icon: "house",
      path: `/${userData.logInToken.username}/dashboard`,
    },
    {
      id: 2,
      title: "Bookings",
      icon: "book",
      path: `/${userData.logInToken.username}/bookings`,
    },
    {
      id: 3,
      title: "Updates",
      icon: "clock",
      path: `/${userData.logInToken.username}/updates`,
    },
  ];

  const [currentContent, setCurrentContent] = useState();

  useEffect(() => {
    if (
      location.pathname === sidebarMenu[0].path ||
      location.pathname === `/${userData.logInToken.username}`
    ) {
      setCurrentContent(<UserDashboard />);
    } else if (location.pathname === sidebarMenu[1].path) {
      setCurrentContent(<UserBookings />);
    } else if (location.pathname === sidebarMenu[2].path) {
      setCurrentContent(<UserUpdates />);
    } else if (
      location.pathname === `/${userData.logInToken.username}/account`
    ) {
      setCurrentContent(<DashboardUIAccount />);
    } else if (location.pathname === "/login") {
      navigate(-1);
    } else {
      navigate("not-found");
    }
  }, [location]);

  return (
    <DashboardUI
      userData={userData}
      sidebarMenu={sidebarMenu}
      userInfo={userInfo}
    >
      {currentContent}
      <h1 className="h2-dark">
        Fullname: {userInfo ? userInfo.firstname : "loading"}{" "}
        {userInfo ? userInfo.lastname : ""}
      </h1>
      <h1 className="h2-dark">
        Email: {userInfo ? userInfo.email : "Loading"}
      </h1>
    </DashboardUI>
  );
};

export default User;

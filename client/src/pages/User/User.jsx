import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardUI from "../../components/DashboardUI/DashboardUI";
import DashboardUIAccount from "../../components/DashboardUI/DashboardUIAccount";
import useAuth from "../../hooks/useAuth";
import fetchUserInfo from "../../Utils/fetchUserInfo";
import UserBookings from "./UserBookings";
import UserDashboard from "./UserDashboard";
import UserUpdates from "./UserUpdates";

const User = () => {
  const { accessData } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(false);
  const FETCH_API = `/api/users/${accessData.username}`;

  useEffect(() => {
    let isLoggedIn = true;

    const controller = new AbortController();

    const getUserInfo = async () => {
      try {
        const info = await fetchUserInfo(
          accessData.token,
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
  }, [accessData]);

  const sidebarMenu = [
    {
      id: 1,
      title: "Dashboard",
      icon: "house",
      path: `/${accessData.username}/dashboard`,
    },
    {
      id: 2,
      title: "Bookings",
      icon: "book",
      path: `/${accessData.username}/bookings`,
    },
    {
      id: 3,
      title: "Updates",
      icon: "clock",
      path: `/${accessData.username}/updates`,
    },
  ];

  const [currentContent, setCurrentContent] = useState();

  useEffect(() => {
    if (
      location.pathname === sidebarMenu[0].path ||
      location.pathname === `/${accessData.username}`
    ) {
      setCurrentContent(<UserDashboard />);
    } else if (location.pathname === sidebarMenu[1].path) {
      setCurrentContent(<UserBookings />);
    } else if (location.pathname === sidebarMenu[2].path) {
      setCurrentContent(<UserUpdates />);
    } else if (location.pathname === `/${accessData.username}/account`) {
      setCurrentContent(<DashboardUIAccount />);
    } else if (location.pathname === "/login") {
      navigate(-1);
    } else {
      navigate("not-found");
    }
  }, [location]);

  return (
    <DashboardUI sidebarMenu={sidebarMenu} userInfo={userInfo}>
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

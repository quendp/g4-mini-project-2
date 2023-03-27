import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardUI from "../../components/DashboardUI/DashboardUI";
import DashboardUIAccount from "../../components/DashboardUI/DashboardUIAccount";
import useAuth from "../../hooks/useAuth";
import fetchUserInfo from "../../Utils/fetchUserInfo";
import AgentBookings from "./AgentBookings";
import AgentDashboard from "./AgentDashboard";
import AgentUpdates from "./AgentUpdates";
import "../User/User.css";

const Agent = () => {
  const { accessData } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Store user information
  const [userInfo, setUserInfo] = useState(false);
  const [updateUserInfo, setUpdateUserInfo] = useState(false);
  const FETCH_API = `/api/users/agent/${accessData.username}`;

  // Get user information from the API
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
        if (isLoggedIn) {
          setUserInfo(info.data);
          console.log("agent : ", info.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUserInfo();

    return () => {
      isLoggedIn = false;
      controller.abort();
    };
  }, [accessData, updateUserInfo]);

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
      id: 7,
      title: "Updates",
      icon: "clock",
      path: `/${accessData.username}/updates`,
    },
  ];

  const [currentContent, setCurrentContent] = useState();

  // Conditionally render content based on the URL pathname
  useEffect(() => {
    switch (location.pathname) {
      case sidebarMenu[0].path:
      case `/${accessData.username}`:
        setCurrentContent(
          <AgentDashboard
            bookings={userInfo.Bookings}
            accessData={accessData}
          />
        );
        break;
      case sidebarMenu[1].path:
        setCurrentContent(
          <AgentBookings
            userInfo={userInfo}
            accessData={accessData}
            setUpdateUserInfo={setUpdateUserInfo}
          />
        );
        break;
      case sidebarMenu[2].path:
        setCurrentContent(<AgentUpdates bookings={userInfo.Bookings} />);
        break;
      case `/${accessData.username}/account`:
        setCurrentContent(
          <DashboardUIAccount
            userInfo={userInfo}
            setUpdateUserInfo={setUpdateUserInfo}
          />
        );
        break;
      case "/login":
        navigate(-1);
        break;
      default:
        navigate("not-found");
    }
  }, [location, userInfo]);

  return (
    <DashboardUI sidebarMenu={sidebarMenu} userInfo={userInfo}>
      {currentContent}
    </DashboardUI>
  );
};

export default Agent;

import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DashboardUI from "../../components/DashboardUI/DashboardUI";
import UserAuthContext from "../../context/UserAuthentication/UserAuthentication";
import UserBookings from "./UserBookings";
import UserDashboard from "./UserDashboard";
import UserUpdates from "./UserUpdates";

const User = () => {
  const userData = useContext(UserAuthContext);
  const location = useLocation();
  const navigate = useNavigate();

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
    } else {
      navigate("not-found");
    }
  }, [location]);

  return (
    <DashboardUI userData={userData} sidebarMenu={sidebarMenu}>
      {currentContent}
    </DashboardUI>
  );
};

export default User;

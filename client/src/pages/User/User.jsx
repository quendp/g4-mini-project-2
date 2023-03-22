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

  const [bookingsByStatus, setBookingsByStatus] = useState([
    {
      id: 1,
      status: "Waitlisted Bookings",
      bookings: [],
    },
    {
      id: 2,
      status: "Tentative Bookings",
      bookings: [],
    },
    {
      id: 3,
      status: "Confirmed Bookings",
      bookings: [],
    },
    {
      id: 4,
      status: "Successful Bookings",
      bookings: [],
    },
    {
      id: 5,
      status: "Cancelled Bookings",
      bookings: [],
    },
    {
      id: 6,
      status: "Total Bookings",
      bookings: [],
    },
  ]);

  const getBookingsByStatus = (bookings) => {
    setBookingsByStatus([
      {
        id: 1,
        status: "Waitlisted Bookings",
        bookings: bookings.filter(
          (booking) => booking.booking_status === "waitlist"
        ),
      },
      {
        id: 2,
        status: "Tentative Bookings",
        bookings: bookings.filter(
          (booking) => booking.booking_status === "tentative"
        ),
      },
      {
        id: 3,
        status: "Confirmed Bookings",
        bookings: bookings.filter(
          (booking) => booking.booking_status === "confirmed"
        ),
      },
      {
        id: 4,
        status: "Successful Bookings",
        bookings: bookings.filter(
          (booking) => booking.booking_status === "successful"
        ),
      },
      {
        id: 5,
        status: "Cancelled Bookings",
        bookings: bookings.filter(
          (booking) => booking.booking_status === "cancelled"
        ),
      },
      {
        id: 6,
        status: "Total Bookings",
        bookings: bookings,
      },
    ]);
  };

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
        if (info.data.Bookings) getBookingsByStatus(info.data.Bookings);
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
      setCurrentContent(
        <UserDashboard
          bookingsByStatus={bookingsByStatus}
          accessData={accessData}
        />
      );
    } else if (location.pathname === sidebarMenu[1].path) {
      setCurrentContent(<UserBookings />);
    } else if (location.pathname === sidebarMenu[2].path) {
      setCurrentContent(<UserUpdates />);
    } else if (location.pathname === `/${accessData.username}/account`) {
      setCurrentContent(<DashboardUIAccount userInfo={userInfo} />);
    } else if (location.pathname === "/login") {
      navigate(-1);
    } else {
      navigate("not-found");
    }
  }, [location, userInfo]);

  return (
    <DashboardUI sidebarMenu={sidebarMenu} userInfo={userInfo}>
      {currentContent}
    </DashboardUI>
  );
};

export default User;

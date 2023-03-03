import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import SinglePage from "../../components/SinglePage/SinglePage";
import UserAuthContext from "../../context/UserAuthentication/UserAuthentication";
import "./User.css";
import UserBookings from "./UserBookings";
import UserHome from "./UserHome";
import UserSidebar from "./UserSidebar";
import UserTopNavbar from "./UserTopNavbar";
import UserUpdates from "./UserUpdates";

const User = () => {
  const { username } = useParams();
  const userData = useContext(UserAuthContext);

  const [activeComponent, setActiveComponent] = useState("home");

  const changeComponentHandler = (mode) => {
    setActiveComponent(mode);
  };

  return (
    <SinglePage>
      <main className="user-page__container container-fluid vh-100 m-0 p-0 overflow-hidden">
        <div className="row m-0 p-0 h-100">
          <div className="col-3 h-100 m-0 p-0 pe-5">
            <UserSidebar
              userData={userData}
              activeComponent={activeComponent}
              changeComponentHandler={changeComponentHandler}
            />
          </div>
          <div className="col-9 h-100">
            <UserTopNavbar userData={userData} />
            {activeComponent === "home" && <UserHome />}
            {activeComponent === "bookings" && <UserBookings />}
            {activeComponent === "updates" && <UserUpdates />}
          </div>
        </div>
      </main>
    </SinglePage>
  );
};

export default User;

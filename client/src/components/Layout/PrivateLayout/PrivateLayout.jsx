import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserAuthContext from "../../../context/UserAuthentication/UserAuthentication";
import Admin from "../../../pages/Admin/Admin";
import Agent from "../../../pages/Agent/Agent";
import NotFound from "../../../pages/NotFound/NotFound";
import User from "../../../pages/User/User";
import PrivateLayoutLogin from "./PrivateLayoutLogin";

const PrivateLayout = () => {
  const userData = useContext(UserAuthContext);
  const { username } = useParams();
  const [privateContent, setPrivateContent] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.logInToken.token) {
      setPrivateContent(<PrivateLayoutLogin />);
    } else if (
      username !== "login" &&
      username !== userData.logInToken.username
    ) {
      navigate(`/not-found`);
      setPrivateContent(<NotFound />);
    } else {
      navigate(`/${userData.logInToken.username}`);
      if (userData.logInToken.role === "user") {
        setPrivateContent(<User />);
      } else if (userData.logInToken.role === "agent") {
        setPrivateContent(<Agent />);
      } else if (userData.logInToken.role === "admin") {
        setPrivateContent(<Admin />);
      }
    }
  }, [userData]);

  return <main className="body-wrapper m-0 p-0">{privateContent}</main>;
};

export default PrivateLayout;

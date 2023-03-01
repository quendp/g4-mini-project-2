import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserAuthContext from "../../../context/UserAuthentication/UserAuthentication";
import Admin from "../../../pages/Admin/Admin";
import Agent from "../../../pages/Agent/Agent";
import User from "../../../pages/User/User";
import PrivateLayoutLogin from "./PrivateLayoutLogin";

const PrivateLayout = () => {
  const userData = useContext(UserAuthContext);
  const { username } = useParams();
  const [privateContent, setPrivateContent] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.token) {
      setPrivateContent(<PrivateLayoutLogin />);
    } else if (username !== userData.username) {
      console.log(username);
      navigate("/");
    } else if (userData.role === "user") {
      setPrivateContent(<User />);
    } else if (userData.role === "agent") {
      setPrivateContent(<Agent />);
    } else if (userData.role === "admin") {
      setPrivateContent(<Admin />);
    }
  }, []);

  return <main className="body-wrapper m-0 p-0">{privateContent}</main>;
};

export default PrivateLayout;

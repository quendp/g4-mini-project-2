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

  const handleTokenExpire = () => {
    setPrivateContent(<PrivateLayoutLogin />);
    userData.submitHandler(false, "login", 0);
    console.log("handle token expire FUNCTION IS CALLED");
  };

  useEffect(() => {
    if (!userData.logInToken.token) {
      setPrivateContent(<PrivateLayoutLogin />);
    } else if (
      username === userData.logInToken.username ||
      username === "login"
    ) {
      navigate(`/${userData.logInToken.username}/dashboard`);
      if (userData.logInToken.role === 1) {
        setPrivateContent(<User onTokenExpire={handleTokenExpire} />);
      } else if (userData.logInToken.role === 2) {
        setPrivateContent(<Agent onTokenExpire={handleTokenExpire} />);
      } else if (userData.logInToken.role === 3) {
        setPrivateContent(<Admin onTokenExpire={handleTokenExpire} />);
      }
    } else {
      navigate(`/not-found`);
      setPrivateContent(<NotFound />);
    }
  }, [userData]);

  return <main className="body-wrapper m-0 p-0">{privateContent}</main>;
};

export default PrivateLayout;

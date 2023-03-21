import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Admin from "../../../pages/Admin/Admin";
import Agent from "../../../pages/Agent/Agent";
import NotFound from "../../../pages/NotFound/NotFound";
import User from "../../../pages/User/User";
import Unauthorized from "./Unauthorized";

const PrivateLayout = () => {
  const { logInToken } = useAuth();
  const { username } = useParams();
  const [privateContent, setPrivateContent] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!logInToken.token) {
      setPrivateContent(<Unauthorized />);
    } else if (username === logInToken.username || username === "login") {
      navigate(`/${logInToken.username}/dashboard`);
      if (logInToken.role === 1) {
        setPrivateContent(<User />);
      } else if (logInToken.role === 2) {
        setPrivateContent(<Agent />);
      } else if (logInToken.role === 3) {
        setPrivateContent(<Admin />);
      }
    } else {
      navigate(`/not-found`);
      setPrivateContent(<NotFound />);
    }
  }, [logInToken]);

  return <main className="body-wrapper m-0 p-0">{privateContent}</main>;
};

export default PrivateLayout;

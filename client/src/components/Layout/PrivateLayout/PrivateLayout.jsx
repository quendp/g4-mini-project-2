import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Admin from "../../../pages/Admin/Admin";
import Agent from "../../../pages/Agent/Agent";
import NotFound from "../../../pages/NotFound/NotFound";
import User from "../../../pages/User/User";
import Unauthorized from "./Unauthorized";

const PrivateLayout = () => {
  const location = useLocation();
  const { accessData } = useAuth();
  const { username } = useParams();
  const [privateContent, setPrivateContent] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessData.token) {
      setPrivateContent(<Unauthorized />);
    } else if (username === accessData.username || username === "login") {
      navigate(
        username === "login"
          ? `/${accessData.username}/dashboard`
          : location.pathname
      );
      if (accessData.role === 1) {
        setPrivateContent(<User />);
      } else if (accessData.role === 2) {
        setPrivateContent(<Agent />);
      } else if (accessData.role === 3) {
        setPrivateContent(<Admin />);
      }
    } else {
      navigate(`/not-found`);
      setPrivateContent(<NotFound />);
    }
  }, [accessData]);

  return <main className="body-wrapper m-0 p-0">{privateContent}</main>;
};

export default PrivateLayout;

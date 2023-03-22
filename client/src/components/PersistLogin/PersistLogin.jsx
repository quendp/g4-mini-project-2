import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { accessData, setAccessData } = useAuth();

  useEffect(() => {
    const verifyAccessToken = async () => {
      try {
        console.log("hello world");
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    !auth?.accessToken ? verifyAccessToken() : setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log("isLoading : ", isLoading);
    console.log("token : ", accessData.token);
  }, [isLoading]);

  return <>{isLoading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistLogin;

import React, { useContext, useDebugValue } from "react";
import UserAuthContext from "../context/UserAuthentication/UserAuthentication";

const useAuth = () => {
  const { logInToken } = useContext(UserAuthContext);
  useDebugValue(logInToken, (logInToken) =>
    logInToken?.token ? "Logged In" : "Logged Out"
  );
  return useContext(UserAuthContext);
};

export default useAuth;

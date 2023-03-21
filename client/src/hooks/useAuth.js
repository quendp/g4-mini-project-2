import React, { useContext, useDebugValue } from "react";
import UserAuthContext from "../context/UserAuthentication/UserAuthentication";

const useAuth = () => {
  const { accessData } = useContext(UserAuthContext);
  useDebugValue(accessData, (accessData) =>
    accessData?.token ? "Logged In" : "Logged Out"
  );
  return useContext(UserAuthContext);
};

export default useAuth;

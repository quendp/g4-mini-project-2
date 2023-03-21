import React, { useContext } from "react";
import UserAuthContext from "../context/UserAuthentication/UserAuthentication";

const useAuth = () => {
  const userData = useContext(UserAuthContext);

  return userData;
};

export default useAuth;

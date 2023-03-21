import React, { createContext, useMemo, useState } from "react";

const UserAuthContext = createContext({});

export const UserAuthentication = ({ children }) => {
  const [hasAccount, setHasAccount] = useState(true);
  const [logInToken, setLogInToken] = useState({
    token: false,
    username: "login",
    role: 0,
  });

  const userData = useMemo(
    () => ({ logInToken, setLogInToken, hasAccount, setHasAccount }),
    [logInToken, hasAccount]
  );

  return (
    <UserAuthContext.Provider value={userData}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;

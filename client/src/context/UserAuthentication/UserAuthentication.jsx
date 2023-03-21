import React, { createContext, useMemo, useState } from "react";

const UserAuthContext = createContext({});

export const UserAuthentication = ({ children }) => {
  const [hasAccount, setHasAccount] = useState(true);
  const [accessData, setAccessData] = useState({
    token: false,
    username: "login",
    role: 0,
  });

  const userData = useMemo(
    () => ({ accessData, setAccessData, hasAccount, setHasAccount }),
    [accessData, hasAccount]
  );

  return (
    <UserAuthContext.Provider value={userData}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;

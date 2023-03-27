import React, { createContext, useEffect, useMemo, useState } from "react";
import axios from "../../Utils/axios";
import LoaderSpinner from "../../components/Loader/LoaderSpinner";

const UserAuthContext = createContext({});

export const UserAuthentication = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasAccount, setHasAccount] = useState(true);
  const [accessData, setAccessData] = useState({
    token: false,
    username: "login",
    role: 0,
  });

  // Check local storage for tokens and persist user login
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const persistUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (token) {
          const response = await axios.post(
            "/api/users/persist",
            { token: token },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              withCredentials: true,
              signal: controller.signal,
            }
          );
          localStorage.removeItem("accessToken");
          if (isMounted && response?.data) {
            setAccessData(response.data);
            localStorage.setItem("accessToken", response.data.token);
          }
        }
      } catch (err) {
        localStorage.removeItem("accessToken");
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    persistUser();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const userData = useMemo(
    () => ({
      accessData,
      setAccessData,
      hasAccount,
      setHasAccount,
    }),
    [accessData, hasAccount]
  );

  return (
    <UserAuthContext.Provider value={userData}>
      {isLoading && (
        <div
          className="vh-100 vw-100 position-fixed row"
          style={{
            backgroundColor: "#00000055",
            zIndex: "9999999",
            color: "white",
          }}
        >
          <LoaderSpinner />
        </div>
      )}
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContext;

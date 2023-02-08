import React, { useState, useEffect } from "react";
import axios from "axios";
import TestingArea from "./components/TestingArea";
import UserAuthentication from "./components/UserAuthentication/UserAuthentication";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [logInToken, setLogInToken] = useState(false);

  useEffect(() => {
    if (!logInToken) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [logInToken]);

  const handleLogOut = () => {
    setLogInToken(false);
    console.log("user logged out");
    console.log("is there a token (log out) ? : ", logInToken);
    setTimeout(() => {
      console.log("is user logged in? : ", isLoggedIn);
    }, 1000);
  };

  console.log("is there a token ? : ", logInToken);
  setTimeout(() => {
    console.log("is user logged in? : ", isLoggedIn);
  }, 1000);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/api/users/2`);
        setData(response.data);
        setError(null);
        console.log(data);
      } catch (err) {
        setError(err.message);
        console.log(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [loading]);

  return (
    <div>
      <UserAuthentication
        isLoggedIn={isLoggedIn}
        handleLogOut={handleLogOut}
        setLogInToken={setLogInToken}
      />
      <TestingArea
        isLoggedIn={isLoggedIn}
        handleLogOut={handleLogOut}
        loading={loading}
        data={data}
        logInToken={logInToken}
      />
    </div>
  );
}

export default App;

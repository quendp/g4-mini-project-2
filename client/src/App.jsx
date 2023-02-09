import React, { useState, useEffect } from "react";
import axios from "axios";
import TestingArea from "./components/TestingArea";
import UserAuthentication from "./components/UserAuthentication/UserAuthentication";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [logInToken, setLogInToken] = useState("");


  const submitLogInHandler = (logInData) => {
    setLogInToken("tokenSample");
    console.log("user logged in");
    console.log(logInData);

    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
    myModal.hide();
  }

  useEffect(() => {
    console.log("submitted with token: ", logInToken);
  }, [logInToken])

  const handleLogOut = () => {
    setLogInToken("");
    console.log("user logged out");

    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
    myModal.hide();
  };

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
        submitHandler = {submitLogInHandler}
        logInToken={logInToken}
        handleLogOut={handleLogOut}
      />
      <TestingArea
        logInToken={logInToken}
        loading={loading}
        data={data}
      />
    </div>
  );
}

export default App;

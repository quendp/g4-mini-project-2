import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PublicLayout from "./components/Layout/PublicLayout";
import PrivateLayout from "./components/Layout/PrivateLayout";
import UserAuthentication from "./components/UserAuthentication/UserAuthentication";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Agent from "./pages/Agent/Agent";
import Admin from "./pages/Admin/Admin";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Categories from "./pages/Categories/Categories";

function App() {
  const [logInToken, setLogInToken] = useState("asdfasdf");

  const submitLogInHandler = (token) => {
    setLogInToken(token);
    localStorage.setItem("token", token);
    console.log("user logged in with token:", token);

    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
    myModal.hide();
  };

  const handleLogOut = () => {
    setLogInToken("");
    console.log("user logged out");

    const signUpModalInst = document.getElementById("signUpModal");
    const myModal = bootstrap.Modal.getOrCreateInstance(signUpModalInst);
    myModal.hide();
  };

  return (
    <>
      <UserAuthentication
        submitHandler={submitLogInHandler}
        logInToken={logInToken}
        handleLogOut={handleLogOut}
      />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route element={<PublicLayout logInToken={logInToken} />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="categories" element={<Categories />} />
          </Route>

          {/* role-based routes */}
          <Route element={<PrivateLayout />}>
            <Route path="user" element={<User />} />
            <Route path="agent" element={<Agent />} />
            <Route path="admin" element={<Admin />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

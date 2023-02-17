import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PublicLayout from "./components/Layout/PublicLayout";
import PrivateLayout from "./components/Layout/PrivateLayout";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import Agent from "./pages/Agent/Agent";
import Admin from "./pages/Admin/Admin";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Categories from "./pages/Categories/Categories";

// context
import { UserAuthentication } from "./context/UserAuthentication/UserAuthentication";

// testing area
import { developers } from "./components/TestingArea";

function App() {
  return (
    <>
      <UserAuthentication>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route element={<PublicLayout />}>
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

            {/* developers testing area */}
            <Route path="/roland" element={developers.roland} />
            <Route path="/nherwin" element={developers.nherwin} />
            <Route path="/radilyn" element={developers.radilyn} />
            <Route path="/ce" element={developers.ce} />
            <Route path="/nick" element={developers.nick} />

            {/* catch all */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </UserAuthentication>
    </>
  );
}

export default App;

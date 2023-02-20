import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import PrivateLayout from "./components/Layout/PrivateLayout";
import PublicLayout from "./components/Layout/PublicLayout";
import About from "./pages/About/About";
import Admin from "./pages/Admin/Admin";
import Agent from "./pages/Agent/Agent";
import Categories from "./pages/Categories/Categories";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import User from "./pages/User/User";

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

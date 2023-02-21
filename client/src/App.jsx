import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          element: <PublicLayout />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/categories",
              element: <Categories />,
            },
            {
              path: "/contact",
              element: <Contact />,
            },
          ],
        },
        {
          element: <PrivateLayout />,
          children: [
            {
              path: "/admin",
              element: <Admin />,
            },
            {
              path: "/:username",
              element: <User />,
            },
            {
              path: "/agent",
              element: <Agent />,
            },
          ],
        },
        {
          path: "/roland",
          element: developers.roland,
        },
        {
          path: "/nherwin",
          element: developers.nherwin,
        },
        {
          path: "/radilyn",
          element: developers.radilyn,
        },
        {
          path: "/ce",
          element: developers.ce,
        },
        {
          path: "/nick",
          element: developers.nick,
        },
      ],
    },
  ]);
  return (
    <UserAuthentication>
      <RouterProvider router={router} />
    </UserAuthentication>
  );
}

export default App;

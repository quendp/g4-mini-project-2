import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import PrivateLayout from "../components/Layout/PrivateLayout/PrivateLayout";
import PublicLayout from "../components/Layout/PublicLayout/PublicLayout";
import About from "../pages/About/About";
import Categories from "../pages/Categories/Categories";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";

// testing area
import { developers } from "../components/TestingArea";

export const router = createBrowserRouter([
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
            children: [
              {
                path: "/categories/:category",
                element: <Categories />,
                children: [
                  {
                    path: "/categories/:category/:destination",
                    element: <Categories />,
                  },
                ],
              },
            ],
          },
          {
            path: "/contact",
            element: <Contact />,
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
        path: "/radi",
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
      {
        path: "/:username",
        element: <PrivateLayout />,
      },
    ],
  },
]);

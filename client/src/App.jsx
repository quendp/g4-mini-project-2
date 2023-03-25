import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Utils/Router";
import { UserAuthentication } from "./context/UserAuthentication/UserAuthentication";
import AccessHandler from "./components/Access/AccessHandler/AccessHandler";
import { CurrentTheme } from "./context/CurrentTheme/CurrentTheme";

function App() {
  return (
    <UserAuthentication>
      <CurrentTheme>
        <AccessHandler>
          <RouterProvider router={router} />
        </AccessHandler>
      </CurrentTheme>
    </UserAuthentication>
  );
}

export default App;

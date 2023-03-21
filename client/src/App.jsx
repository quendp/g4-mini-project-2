import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Utils/Router";
import { UserAuthentication } from "./context/UserAuthentication/UserAuthentication";
import AccessHandler from "./components/Access/AccessHandler/AccessHandler";

function App() {
  return (
    <UserAuthentication>
      <AccessHandler>
        <RouterProvider router={router} />
      </AccessHandler>
    </UserAuthentication>
  );
}

export default App;

import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Utils/Router";
import { UserAuthentication } from "./context/UserAuthentication/UserAuthentication";

function App() {
  return (
    <UserAuthentication>
      <RouterProvider router={router} />
    </UserAuthentication>
  );
}

export default App;

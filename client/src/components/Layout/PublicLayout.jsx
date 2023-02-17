import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <div className="body-wrapper m-0 p-0">
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default PublicLayout;
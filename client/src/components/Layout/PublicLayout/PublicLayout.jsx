import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

/*

 --- IMPORT OF TESTING AREA FOR DEVELOPMENT ---
import TestingArea from "../../TestingArea";

*/

const PublicLayout = () => {
  return (
    <>
      <Header />
      <div className="body-wrapper m-0 p-0">
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>

      {/* <TestingArea /> */}
    </>
  );
};

export default PublicLayout;

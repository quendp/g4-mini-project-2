import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

/*

 --- IMPORT OF TESTING AREA FOR DEVELOPMENT ---
import TestingArea from "../../TestingArea";

*/

const PublicLayout = () => {
  const [currentTheme, setCurrentTheme] = useState(
    "var(--clr-accent-lights-100)"
  );

  const changeThemeHandler = (newTheme) => {
    setCurrentTheme(newTheme);
  };

  return (
    <>
      <Header currentTheme={currentTheme} />
      <div className="body-wrapper m-0 p-0">
        <main>
          <Outlet context={changeThemeHandler} />
        </main>
        <Footer currentTheme={currentTheme} />
      </div>

      {/* <TestingArea /> */}
    </>
  );
};

export default PublicLayout;

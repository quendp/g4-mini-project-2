import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import PageTransition from "../../PageTransition/PageTransition";

const PublicLayout = () => {
  const [currentTheme, setCurrentTheme] = useState(
    "var(--clr-accent-lights-100)"
  );
  const [currentPath, setCurrentPath] = useState("cosmopolitan-lights");

  const changeThemeHandler = (newTheme, newPath) => {
    setCurrentTheme(newTheme);
    setCurrentPath(newPath);
  };

  return (
    <>
      {/* <PageTransition /> */}
      <Header currentTheme={currentTheme} />
      <div className="body-wrapper m-0 p-0">
        <main>
          <Outlet context={changeThemeHandler} />
        </main>
        <Footer currentTheme={currentTheme} currentPath={currentPath} />
      </div>

      {/* <TestingArea /> */}
    </>
  );
};

export default PublicLayout;

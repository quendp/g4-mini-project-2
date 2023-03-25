import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import useTheme from "../../../hooks/useTheme";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import PageTransition from "../../PageTransition/PageTransition";

const PublicLayout = () => {
  const { setCurrentTheme } = useTheme();
  const [currentPath, setCurrentPath] = useState("cosmopolitan-lights");

  const changeThemeHandler = (newTheme, newPath) => {
    setCurrentTheme(newTheme);
    setCurrentPath(newPath);
  };

  return (
    <>
      {/* <PageTransition /> */}
      <Header />
      <div className="body-wrapper m-0 p-0">
        <main>
          <Outlet context={changeThemeHandler} />
        </main>
        <Footer currentPath={currentPath} />
      </div>

      {/* <TestingArea /> */}
    </>
  );
};

export default PublicLayout;

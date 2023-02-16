import React, { useState } from "react";
import "./TestingArea.css";

import About from "../pages/About/About";
import Admin from "../pages/Admin/Admin";
import Contact from "../pages/Contact/Contact";
import HomeStories from "../pages/Home/HomeStories/HomeStories";
import Footer from "./Footer/Footer";

const TestingArea = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [currentDeveloper, setCurrentDeveloper] = useState("");

  const startTesting = (developer) => {
    setIsTesting(true);
    setCurrentDeveloper(developer);
  };

  return (
    <>
      <div>
        {!isTesting && (
          <div className="vh-100 d-flex flex-column justify-content-center">
            {/* <Header logInToken={logInToken} /> */}
            <div className="testingArea-wrapper px-3 py-5 mx-auto">
              <h1 className="h3-light-bold text-center mb-3">TESTING AREA</h1>
              <div className="d-flex flex-column justify-content-center align-items-center mx-2 mx-md-5">
                <button
                  onClick={() => {
                    startTesting("roland");
                  }}
                  className="cta-dark rounded-pill mb-3"
                >
                  Click here for Sir Roland
                </button>
                <button
                  onClick={() => {
                    startTesting("nherwin");
                  }}
                  className="cta-dark rounded-pill mb-3"
                >
                  Click here for Sir Nherwin
                </button>
                <button
                  onClick={() => {
                    startTesting("radilyn");
                  }}
                  className="cta-dark rounded-pill mb-3"
                >
                  Click here for Ms. Radilyn
                </button>
                <button
                  onClick={() => {
                    startTesting("ce");
                  }}
                  className="cta-dark rounded-pill mb-3"
                >
                  Click here for Ms. CE
                </button>
                <button
                  onClick={() => {
                    startTesting("nick");
                  }}
                  className="cta-dark rounded-pill mb-3"
                >
                  Click here for Sir Nick
                </button>
              </div>
            </div>
          </div>
        )}
        {isTesting && currentDeveloper == "roland" && <About />}
        {isTesting && currentDeveloper == "nherwin" && <Admin />}
        {isTesting && currentDeveloper == "radilyn" && <Footer />}
        {isTesting && currentDeveloper == "ce" && <Contact />}
        {isTesting && currentDeveloper == "nick" && <HomeStories />}
      </div>
    </>
  );
};

export default TestingArea;

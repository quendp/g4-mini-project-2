import React from "react";
import "./TestingArea.css";

import { Link } from "react-router-dom";
import About from "../../pages/About/About";
import Agent from "../../pages/Agent/Agent";
import Contact from "../../pages/Contact/Contact";
import Categories from "../../pages/Categories/Categories";
import Footer from "../../components/Footer/Footer";

const developers = {
  roland: <About />,
  nherwin: <Agent />,
  radilyn: <Footer />,
  ce: <Contact />,
  nick: <Categories />,
};

const TestingArea = () => {
  return (
    <div>
      <div className="testingArea-bg vh-100 d-flex flex-column justify-content-center">
        <div className="testingArea-wrapper px-3 py-5 mx-auto">
          <h1 className="h3-light-bold text-center mb-3">TESTING AREA</h1>
          <div className="d-flex flex-column justify-content-center align-items-center mx-2 mx-md-5">
            <Link to="/roland" className="anchor-light w-100 h-100">
              <button className="cta-dark rounded-pill mb-3">
                Click here for Sir Roland
              </button>
            </Link>
            <Link to="/nherwin" className="anchor-light w-100 h-100">
              <button className="cta-dark rounded-pill mb-3">
                Click here for Sir Nherwin
              </button>
            </Link>
            <Link to="/radi" className="anchor-light w-100 h-100">
              <button className="cta-dark rounded-pill mb-3">
                Click here for Ms. Radilyn
              </button>
            </Link>
            <Link to="/ce" className="anchor-light w-100 h-100">
              <button className="cta-dark rounded-pill mb-3">
                Click here for Ms. CE
              </button>
            </Link>
            <Link to="/nick" className="anchor-light w-100 h-100">
              <button className="cta-dark rounded-pill mb-3">
                Click here for Sir Nick
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { developers };

export default TestingArea;

import React from "react";
import "./Footer.css";
import FooterSections from "./FooterSections";

const Footer = () => {
  return (
    <>
      <div className="footer-container container-fluid f-footer-bottom w-100 justify-self-end py-5 m-0">
        <div className="footer-talk mx-auto p-5">
          <div className="footer-help text-center row py-1">
            <h2 className="h2-light">First-time traveler?</h2>

            <p className="p-light mb-2">
              "Travel to your heart's content and leave the planning to us!"
            </p>
          </div>

          <div className="py-4">
            <button className="cta-light rounded-pill text-uppercase py-3">
              See here for tips!
            </button>
          </div>
        </div>

        <FooterSections />
      </div>

      <div>
        <p className="footer-copyright">
          © Copyright Lakbay 2023 | All Rights Reserved | Privacy Policy | Terms
          & Conditions
        </p>
      </div>
    </>
  );
};

export default Footer;

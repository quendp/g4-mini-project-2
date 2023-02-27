import React from "react";
import "./Footer.css";
import FooterSections from "./FooterSections";

const Footer = () => {
  return (
    <footer className="footer-section__wrapper container-fluid m-0 p-0 overflow-hidden">
      <section className="row px-5 pt-5 justify-content-center">
        <div className="footer-section__top col-12 col-md-10 text-center p-4 p-sm-5">
          <h2 className="h2-light mb-3">
            First-time <span>traveler</span> ?
          </h2>

          <p className="footer-section-top__text mb-5">
            "Travel to your heart's content and leave the planning to us!"
          </p>
          <button className="cta-dark footer-talk__btn rounded-pill text-uppercase mb-3 px-4 py-3 px-sm-5 py-sm-3">
            See here for tips!
          </button>
        </div>
      </section>

      <section className="row px-5 justify-content-center">
        <FooterSections />
      </section>

      <section className="row m-0 p-0">
        <p className="footer-section__bottom col-12 py-3 text-center m-0">
          © Copyright Lakbay 2023 | All Rights Reserved | Privacy Policy | Terms
          & Conditions
        </p>
      </section>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./FooterSections.css";
import FooterSearch from "./FooterSearch";

const FooterSections = () => {
  return (
    <div className="footer-section__mid col-12 col-md-10 p-0 ">
      <div className="row m-0 p-0">
        <div className="col-12 col-xl-5 m-0 px-0 py-5">
          <div className="footer-section-mid__info footer-section__top px-1 py-4 p-sm-4 p-md-5 text-center">
            <h2 className="footer-section-mid-info__title mb-3">LAKBAY</h2>
            <FooterSearch />
            <div className="footer-section-mid-info__details text-break py-3">
              <p>18th Floor, W Fifth, 5th Avenue, Taguig</p>
              <p>(+63 65) 888-888</p>
              <p>support@lakbay.agency</p>
            </div>
            <div className="footer-section-mid-info__social w-100">
              <ul className="d-flex justify-content-center p-0">
                <li className="p-0 mx-3">
                  <a href="https://www.facebook.com">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li className="p-0 mx-3">
                  <a href="https://www.twitter.com">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="p-0 mx-3">
                  <a href="https://www.instagram.com">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="p-0 mx-3">
                  <a href="https://www.tiktok.com">
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-none d-xl-block col-xl-1"></div>
        <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center text-center text-xl-start justify-content-xl-start align-items-sm-start col-xl-3 p-0 p-md-5 mb-0 mb-sm-5">
          <div className="footer-section-mid__navigation">
            <h3 className="mb-4 pt-5 h3-light">Navigation</h3>
            <ul className="p-0">
              <li className="p-0">
                <a href="">Home Page</a>
              </li>
              <li className="p-0">
                <a href="">About Page</a>
              </li>
              <li className="p-0">
                <a href="">Contact Us</a>
              </li>
              <li className="p-0">
                <a href="">Dashboard</a>
              </li>

              <li className="p-0">
                <a href="">Categories</a>
              </li>
              <li className="p-0">
                <a href="">Destinations</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center text-center text-xl-start justify-content-xl-start align-items-sm-start col-xl-3 p-0 p-md-5 mb-5">
          <div className="footer-section-mid__navigation">
            <h3 className="mb-4 pt-5 h3-light">Category</h3>
            <ul className="p-0">
              <li className="p-0">
                <a href="">Cosmopolitan Lights</a>
              </li>
              <li className="p-0">
                <a href="">Dive Under Water</a>
              </li>
              <li className="p-0">
                <a href="">Explore the Summit</a>
              </li>
              <li className="p-0">
                <a href="">Look Back in History</a>
              </li>
              <li className="p-0">
                <a href="">Nature and Culture</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSections;

import React from "react";
import "./FooterSections.css";
import FooterSearch from "./FooterSearch";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useTheme from "../../hooks/useTheme";

const FooterSections = () => {
  const { currentTheme } = useTheme();

  const { accessData } = useAuth();

  return (
    <div className="footer-section__mid col-12 col-md-10 p-0 pb-5">
      <div className="row m-0 p-0">
        <div className="col-12 col-xl-5 m-0 px-0 pt-5">
          <div className="footer-section-mid__info footer-section__top px-1 py-4 p-sm-4 p-md-5 text-center">
            <h2
              className="footer-section-mid-info__title mb-3"
              style={{ color: currentTheme }}
            >
              LAKBAY
            </h2>
            <FooterSearch />
            <div className="footer-section-mid-info__details text-break py-3">
              <p>18th Floor, W Fifth, 5th Avenue, Taguig</p>
              <p>(+63 65) 888-888</p>
              <p>support@lakbay.agency</p>
            </div>
            <div className="footer-section-mid-info__social w-100">
              <ul className="d-flex justify-content-center p-0">
                <li className="p-0 mx-3">
                  <a
                    href="https://www.facebook.com"
                    style={{ color: currentTheme }}
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li className="p-0 mx-3">
                  <a
                    href="https://www.twitter.com"
                    style={{ color: currentTheme }}
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="p-0 mx-3">
                  <a
                    href="https://www.instagram.com"
                    style={{ color: currentTheme }}
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="p-0 mx-3">
                  <a
                    href="https://www.tiktok.com"
                    style={{ color: currentTheme }}
                  >
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-none d-xl-block col-xl-1"></div>
        <div className="col-12 col-xl-6">
          <div className="row w-100 m-0 p-0 pt-5">
            <div className="row m-0 p-0">
              <div className="col-12 pt-5">
                <h3 className="footer-about__title text-center text-xl-start">
                  About Lakbay Travel Agency
                </h3>
                <p className="footer-about__description p-3">
                  Lakbay is a Filipino travel agency which showcases various
                  tourist spots in the Philippines and offers transportation and
                  guiding services to customers. Their tours which lasts from
                  half - 3 days focus on one primary destination (e.g. Puerto
                  Princesa Underground River) and some nearby locations as
                  secondary.
                </p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-start text-center text-xl-start justify-content-xl-start p-0 mb-3">
              <div className="footer-section-mid__navigation">
                <h3 className="footer-about__title mb-4 pt-5">Navigation</h3>
                <ul className="px-3">
                  <li className="p-0">
                    <Link to="/">Home Page</Link>
                  </li>
                  <li className="p-0">
                    <Link to="/about">About Page</Link>
                  </li>
                  <li className="p-0">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="p-0">
                    <Link to={`/${accessData.username}`}>Dashboard</Link>
                  </li>

                  <li className="p-0">
                    <Link to="/categories">Categories</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-start text-center text-xl-start justify-content-xl-start p-0 mb-3">
              <div className="footer-section-mid__navigation">
                <h3 className="footer-about__title mb-4 pt-5">Category</h3>
                <ul className="px-3">
                  <li className="p-0">
                    <Link to="/categories/cosmopolitan-lights/star-city">
                      Cosmopolitan Lights
                    </Link>
                  </li>
                  <li className="p-0">
                    <Link to="/categories/dive-under-water/bantayan-island">
                      Dive Under Water
                    </Link>
                  </li>
                  <li className="p-0">
                    <Link to="/categories/explore-the-summit/mt-apo">
                      Explore the Summit
                    </Link>
                  </li>
                  <li className="p-0">
                    <Link to="/categories/look-back-in-history/calle-crisologo">
                      Look Back in History
                    </Link>
                  </li>
                  <li className="p-0">
                    <Link to="/categories/nature-and-culture/chocolate-hills">
                      Nature and Culture
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSections;

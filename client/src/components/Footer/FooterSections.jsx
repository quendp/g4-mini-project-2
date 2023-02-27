import React from "react";
import "./FooterSections.css";
import FooterSearch from "./FooterSearch";

const FooterSections = () => {
  return (
    <div className="footer-sections w-100 m-0 p-0 pt-5 row">
      <div className="col-12 m-0 p-4 col-xl-5 col-md-12">
        <div className="footer-lakbay p-5 w-75 text-center">
          <h2 className="lakbay mb-4">LAKBAY</h2>

          <div className="footer_info">
            <p>18th Floor, W Fifth, 5th Avenue, Taguig</p>
            <p>(+63 65) 888-888</p>
            <p>support@lakbay.agency</p>
          </div>
        </div>
      </div>

      <div className="footer-navigation col-12 m-0 p-0 col-xl-2 col-md-5 col-10 pt-4">
        <h3 className="mb-4 h3-light">Category</h3>
        <ul className="ps-2">
          <li className="py-2">
            <a href="">Cosmopolitan Lights</a>
          </li>
          <li className="py-2">
            <a href="">Dive Under Water</a>
          </li>
          <li className="py-2">
            <a href="">Explore the Summit</a>
          </li>
          <li className="py-2">
            <a href="">Look Back in History</a>
          </li>
          <li className="py-2">
            <a href="">Nature and Culture</a>
          </li>
        </ul>
      </div>

      <div className="footer-navigation col-12 m-0 p-0 col-xl-2 col-md-5 col-10 pt-4">
        <h3 className="mb-4 h3-light">Navigation</h3>
        <ul className="ps-2">
          <li className="py-2">
            <a href="">Home</a>
          </li>
          <li className="py-2">
            <a href="">About</a>
          </li>
          <li className="py-2">
            <a href="">Dashboard</a>
          </li>
          <li className="py-2">
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>

      <div className="footer-navigation footer-follow col-12 m-0 p-0 pe-5 col-md-3 pt-4">
        <h3 className="h3-light mb-4">Follow Us</h3>
        <ul className="">
          <li className="me-4">
            <a href="https://www.facebook.com">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li className="mx-4">
            <a href="https://www.twitter.com">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="mx-4">
            <a href="https://www.instagram.com">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="mx-4">
            <a href="https://www.tiktok.com">
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </li>
        </ul>

        <div className="footer-search-container w-100">
          <FooterSearch />
        </div>
      </div>
    </div>
  );
};

export default FooterSections;

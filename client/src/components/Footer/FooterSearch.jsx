import React from "react";
import "./FooterSearch.css";

const FooterSearch = () => {
  return (
    <div className="w-100 m-0 p-0 pt-5">
      <div className="footer-search">
        <form className="footer-search-form">
          <input className="w-75" type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default FooterSearch;

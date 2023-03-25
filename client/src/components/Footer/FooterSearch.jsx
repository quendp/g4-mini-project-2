import React, { useState } from "react";
import useTheme from "../../hooks/useTheme";
import "./FooterSearch.css";

const FooterSearch = () => {
  const { currentTheme } = useTheme();

  const [searchValue, setSearchValue] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    console.log(searchValue);
  };
  return (
    <form
      className="d-flex flex-column flex-md-row justify-content-center align-items-center p-2"
      role="search"
      onSubmit={searchSubmitHandler}
    >
      <input
        className="footer-search__input form-control me-0 me-md-3 mb-3 rounded-pill px-4 py-2"
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        style={{ border: `1px solid ${currentTheme}` }}
      />
      <button
        className="footer-search__btn btn rounded-pill mb-3 px-4 py-2"
        type="submit"
        style={{ backgroundColor: currentTheme }}
      >
        SEARCH
      </button>
    </form>
  );
};

export default FooterSearch;

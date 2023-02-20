import React from "react";
import HeaderNavMenu from "./HeaderNavMenu";
import HeaderCategories from "./HeaderCategories";
import styles from "../Header.module.css";

const HeaderExpanded = (props) => {
  return (
    <nav
      className={`${props.showExpanded} ${styles.navCon} d-flex flex-column justify-content-start align-items-center pt-5`}
    >
      <HeaderNavMenu onCloseHeader={props.onCloseHeader} />
      <HeaderCategories
        onCloseHeader={props.onCloseHeader}
        showExpanded={props.showExpanded}
      />
    </nav>
  );
};

export default HeaderExpanded;

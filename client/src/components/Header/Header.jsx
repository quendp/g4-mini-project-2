import React, { useState } from "react";
import styles from "./Header.module.css";
import HeaderCollapsed from "./HeaderCollapsed/HeaderCollapsed";
import HeaderExpanded from "./HeaderExpanded/HeaderExpanded";
import grainOverlay from "../../assets/images/grain.png";
import useTheme from "../../hooks/useTheme";

const Header = () => {
  const [isActiveClass, setIsActiveClass] = useState("");
  const [showExpanded, setShowExpanded] = useState("d-none");
  const [headerBgColor, setHeaderBgColor] = useState("transparent");
  const [headerBgImage, setHeaderBgImage] = useState("");
  const [headerBlur, setHeaderBlur] = useState("blur(0px)");
  const [headerTransform, setHeaderTransform] = useState("translateY(0)");
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [isHeaderClosed, setIsHeaderClosed] = useState(false);

  window.addEventListener("scroll", () => {
    adjustHeader();
    setLastScrollY(window.scrollY);
  });

  const headerClickHandler = () => {
    document.body.classList.toggle("disableScroll");
    if (isActiveClass == "") {
      setIsHeaderClosed(false);
      setIsActiveClass(styles.expandHeader);
      setShowExpanded("");
      setHeaderBgColor("var(--clr-primary-dark)");
      setHeaderBgImage(`url(${grainOverlay})`);
    } else {
      setIsActiveClass("");
      setShowExpanded("d-none");
      adjustHeader();
    }
  };

  const onCloseHeader = () => {
    document.body.classList.remove("disableScroll");
    setIsHeaderClosed(true);
    setIsActiveClass("");
    setShowExpanded("d-none");
    adjustHeader();
  };

  const adjustHeader = () => {
    if (window.scrollY == 0) {
      setHeaderBgColor("transparent");
      setHeaderBgImage("none");
      setHeaderBlur("blur(0px)");
    } else if (lastScrollY < window.scrollY) {
      setHeaderBgColor("transparent");
      setHeaderBlur("blur(2px)");
      setHeaderTransform("translateY(-10vh)");
    } else {
      setHeaderBgColor("var(--clr-primary-glass)");
      setHeaderBgImage(`url(${grainOverlay})`);
      setHeaderBlur("blur(2px)");
      setHeaderTransform("translateY(0)");
    }
  };

  const headerWrapperStyle = {
    backgroundColor: headerBgColor,
    backgroundImage: headerBgImage,
    backdropFilter: headerBlur,
    transform: headerTransform,
  };

  return (
    <header
      className={`${isActiveClass} ${styles.wrapper} container-fluid position-fixed top-0 start-0`}
      style={headerWrapperStyle}
    >
      <HeaderCollapsed
        onBurgerClick={headerClickHandler}
        onCloseHeader={onCloseHeader}
        isActiveClass={isActiveClass}
        isHeaderClosed={isHeaderClosed}
      />
      <HeaderExpanded
        showExpanded={showExpanded}
        onCloseHeader={onCloseHeader}
      />
    </header>
  );
};

export default Header;

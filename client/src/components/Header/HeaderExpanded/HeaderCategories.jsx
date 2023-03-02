import React, { useState } from "react";
import { Link } from "react-router-dom";
import { categoriesInfo } from "../../../Data/CategoriesMockData";
import styles from "../Header.module.css";

const HeaderCategories = (props) => {
  const [headerTitle, setHeaderTitle] = useState("");
  const [titleColor, setTitleColor] = useState("");
  const [titleShadow, setTitleShadow] = useState("");
  const [titleDisplay, setTitleDisplay] = useState("none");
  const [titleOpacity, setTitleOpacity] = useState("0");
  const [previewImage, setPreviewImage] = useState("");
  const [previewHeight, setPreviewHeight] = useState("0");
  const [previewBgPosition, setPreviewBgPosition] = useState("top");
  const [previewTransDuration, setPreviewTransDuration] =
    useState("500ms, 10ms");

  const headerTitleStyle = {
    display: titleDisplay,
    opacity: titleOpacity,
    color: titleColor,
    textShadow: `0 0 1rem ${titleShadow}`,
  };

  const previewImageStyle = {
    height: previewHeight,
    backgroundImage: `url(${previewImage})`,
    backgroundPosition: previewBgPosition,
    transitionDuration: previewTransDuration,
  };

  const showImage = (index) => {
    setPreviewImage(categoriesInfo[index - 1].previewImage);
    setHeaderTitle(categoriesInfo[index - 1].headerTitle);
    setTitleColor(categoriesInfo[index - 1].accentLight);
    setTitleShadow(categoriesInfo[index - 1].accentLight);
    setTitleDisplay("block");
    setPreviewHeight("100%");
    setPreviewBgPosition("bottom");
    setPreviewTransDuration("500ms, 3000ms");
    setTimeout(() => {
      setTitleOpacity("1");
    }, 100);
  };

  const hideImage = () => {
    setTitleDisplay("none");
    setTitleOpacity("0");
    setPreviewHeight("0%");
    setPreviewBgPosition("top");
    setPreviewTransDuration("500ms, 10ms");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 position-relative">
      <div
        className={`${styles.imgCon} d-flex justify-content-center align-items-center position-relative w-100 h-100`}
      >
        <h2 className={`${styles.explore} lh-1 text-uppercase`}>explore</h2>
        <div
          className={`${styles.img} d-flex justify-content-center align-items-start align-items-md-center position-absolute bottom-0 start-0 w-100 rounded`}
          style={previewImageStyle}
        >
          <h2
            className={`${props.showExpanded} ${styles.imgTitle} py-5`}
            style={headerTitleStyle}
          >
            {headerTitle}
          </h2>
          <p
            className={`${styles.imgDesc} px-3 py-1 position-absolute start-50 text-center text-uppercase`}
          >
            hover items below to preview
          </p>
        </div>
      </div>
      <ul
        className={`${styles.categList} container-fluid d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly align-items-center p-0 my-3`}
      >
        {categoriesInfo.map((category) => (
          <li className="my-2" key={category.categoryId}>
            <Link
              className="text-decoration-none"
              to={`/categories/${category.categoryPath}/${category.destinations[0].path}`}
              onMouseEnter={() => {
                showImage(category.categoryId);
              }}
              onMouseLeave={hideImage}
              onClick={props.onCloseHeader}
            >
              {category.category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderCategories;

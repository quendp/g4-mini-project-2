import React, { useState } from "react";



const HeaderCategories = (props) => {

  const [headerTitle, setHeaderTitle] = useState("");
  const [titleColor, setTitleColor] = useState("");
  const [titleShadow, setTitleShadow] = useState("");
  const [titleDisplay, setTitleDisplay] = useState("none");
  const [titleOpacity, setTitleOpacity] = useState("0");
  const [previewImage, setPreviewImage] = useState("");
  const [previewHeight, setPreviewHeight] = useState("0");
  const [previewBgPosition, setPreviewBgPosition] = useState("top");
  const [previewTransDuration, setPreviewTransDuration] = useState("500ms, 10ms");

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
    setPreviewImage(props.categoriesData[index].previewImage);
    setHeaderTitle(props.categoriesData[index].headerTitle);
    setTitleColor(props.categoriesData[index].accentLight);
    setTitleShadow(props.categoriesData[index].accentLight);
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
    setPreviewTransDuration("500ms, 10ms")
  };


  return (
    <div className="h-categories-container d-flex flex-column justify-content-center align-items-center w-100 h-100 position-relative">
      <div className="h-preview-image-sub d-flex justify-content-center align-items-center position-relative w-100 h-100">
        <h2 className="hPreviewImageTitle-top lh-1">EXPLORE</h2>
        <div className="h-preview-image d-flex justify-content-center align-items-start align-items-md-center position-absolute bottom-0 start-0 w-100 rounded" style={previewImageStyle} >
          <h2 className={props.onBurgerClick + " h-preview-image-title py-5"} style={headerTitleStyle}>
            {headerTitle}
          </h2>
          <p className="hPreviewImageDesc position-absolute start-50 text-center">
            HOVER ITEMS BELOW TO PREVIEW
          </p>
        </div>
      </div>
      <ul className="h-categories-list container-fluid d-flex flex-column flex-md-row justify-content-center justify-content-md-evenly align-items-center p-0 my-3">
        {props.categoriesData.map((category) => (
          <li className="my-2" key={props.categoriesData.indexOf(category)}>
            <a className="text-decoration-none" href="#" onMouseEnter={() => {showImage(props.categoriesData.indexOf(category))}} onMouseLeave={hideImage}>
              {category.category}
            </a>
          </li>
        ))}
      </ul>
    </div> 
  );
};

export default HeaderCategories;

import React, { useEffect, useState } from "react";

const HomeHeroMenuItem = ({
  category,
  onChangeCategory,
  categoryIndex,
  changeMenuTitle,
}) => {
  const [thumbnailBorder, setThumbnailBorder] = useState("none");

  const thumbnailStyle = {
    border: thumbnailBorder,
  };

  const changeCategoryHandler = () => {
    onChangeCategory(category.categoryId - 1);
    setThumbnailBorder(`2px solid ${category.accentLight}`);
  };

  const hoverHandler = () => {
    changeMenuTitle(category.categoryId - 1);
  };

  const hoverOutHandler = () => {
    changeMenuTitle(categoryIndex);
  };

  useEffect(() => {
    if (category.categoryId !== categoryIndex + 1) {
      setThumbnailBorder(`none`);
    } else {
      setThumbnailBorder(`2px solid ${category.accentLight}`);
    }
  }, [categoryIndex]);

  return (
    <div className="col-2 d-flex align-items-end px-0 py-3">
      <div
        className="w-100 rounded overflow-hidden m-hero-thumb"
        style={thumbnailStyle}
        onClick={changeCategoryHandler}
        onMouseOver={hoverHandler}
        onMouseOut={hoverOutHandler}
      >
        <img
          className="rounded"
          src={category.thumbnail}
          alt={category.category}
          width="100%"
          height="auto"
        />
      </div>
    </div>
  );
};

export default HomeHeroMenuItem;

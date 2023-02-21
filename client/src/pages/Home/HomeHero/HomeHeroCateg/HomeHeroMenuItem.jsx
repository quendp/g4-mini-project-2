import React, { useEffect, useRef, useState } from "react";

const HomeHeroMenuItem = ({ category, onChangeCategory }) => {
  const [thumbnailBorder, setThumbnailBorder] = useState("none");
  const clickedThumbnail = useRef("1");

  const thumbnailStyle = {
    border: thumbnailBorder,
    borderRadius: "0.8rem",
  };

  const changeCategoryHandler = () => {
    onChangeCategory(category.categoryId);
    clickedThumbnail.current = category.categoryId;
  };

  useEffect(() => {
    if (category.categoryId == clickedThumbnail.current) {
      setThumbnailBorder(`3px solid ${category.accentLight}`);
    } else {
      setThumbnailBorder("none");
    }
  }, [clickedThumbnail]);

  return (
    <div className="col-2 d-flex align-items-end px-0 py-3">
      <div
        className="w-100 rounded overflow-hidden m-hero-thumb"
        onClick={changeCategoryHandler}
      >
        <img
          src={category.thumbnail}
          alt={category.category}
          width="100%"
          height="auto"
          style={thumbnailStyle}
        />
      </div>
    </div>
  );
};

export default HomeHeroMenuItem;

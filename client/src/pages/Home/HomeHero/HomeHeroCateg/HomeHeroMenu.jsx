import React from "react";
import { categoriesInfo } from "../../../../Data/CategoriesMockData";

const HomeHeroMenu = () => {
  return (
    <div className="row h-25 p-0 m-0 justify-content-center">
      <div className="col-12 py-0 px-0 px-md-5 m-0 d-flex flex-column align-items-center">
        <div className="row p-0 m-0 h-75 d-flex justify-content-between">
          <div className="col-2 d-flex align-items-end px-0 py-3">
            <div
              className="w-100 rounded overflow-hidden m-hero-thumb m-hero-thumb-1"
              id="mHeroThumb1"
            >
              <img
                src={categoriesInfo[0].thumbnail}
                alt="city lights thumbnail"
                width="100%"
                height="auto"
              />
            </div>
          </div>
          <div className="col-2 d-flex align-items-end px-0 py-3">
            <div
              className="w-100 rounded overflow-hidden m-hero-thumb m-hero-thumb-2"
              id="mHeroThumb2"
            >
              <img
                src={categoriesInfo[1].thumbnail}
                alt="dive underwater thumbnail"
                width="100%"
                height="auto"
              />
            </div>
          </div>
          <div className="col-2 d-flex align-items-end px-0 py-3">
            <div
              className="w-100 rounded overflow-hidden m-hero-thumb m-hero-thumb-3"
              id="mHeroThumb3"
            >
              <img
                src={categoriesInfo[2].thumbnail}
                alt="mountains thumbnail"
                width="100%"
                height="auto"
              />
            </div>
          </div>
          <div className="col-2 d-flex align-items-end px-0 py-3">
            <div
              className="w-100 rounded overflow-hidden m-hero-thumb m-hero-thumb-4"
              id="mHeroThumb4"
            >
              <img
                src={categoriesInfo[3].thumbnail}
                alt="history thumbnail"
                width="100%"
                height="auto"
              />
            </div>
          </div>
          <div className="col-2 d-flex align-items-end px-0 py-3">
            <div
              className="w-100 rounded overflow-hidden m-hero-thumb m-hero-thumb-5"
              id="mHeroThumb5"
            >
              <img
                src={categoriesInfo[4].thumbnail}
                alt="nature thumbnail"
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>
        <div className="row h-25 p-0 m-0 text-uppercase lh-1 d-flex justify-content-center align-items-start">
          <div className="overflow-hidden h-75 d-flex justify-content-center align-items-center">
            <span id="mThumbDesc">Cosmopolitan Lights</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroMenu;

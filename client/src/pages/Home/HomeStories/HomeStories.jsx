import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./HomeStories.css";
import cloudsImg from "../../../assets/images/clouds.png";
import mountainImg from "../../../assets/images/mountain.png";
import storyImage1 from "../../../assets/images/home-stories/story-1.jpg";
import storyImage2 from "../../../assets/images/home-stories/story-2.jpg";
import storyImage3 from "../../../assets/images/home-stories/story-3.jpg";
import storyImage4 from "../../../assets/images/home-stories/story-4.jpg";
import storyImage5 from "../../../assets/images/home-stories/story-5.jpg";
import storyImage6 from "../../../assets/images/home-stories/story-6.jpg";
import storyImage7 from "../../../assets/images/home-stories/story-7.jpg";

const HomeStories = ({ categoryCurrent }) => {
  const [quoteRef, quoteInView] = useInView({ threshold: 0.3 });
  const [titleRef, titleInView] = useInView({
    threshold: 0.5,
  });
  const [descriptionLeftRef, descriptionLeftInView] = useInView({
    threshold: 0.5,
  });
  const [descriptionRightRef, descriptionRightInView] = useInView({
    threshold: 0.5,
  });
  const [galleryRef, galleryInView] = useInView({
    threshold: 0.2,
  });

  return (
    <section className="home-stories__wrapper position-relative p-0 m-0 d-flex flex-column justify-content-start align-items-center">
      <img
        className="home-stories-cloudImg__top position-absolute start-0 w-100"
        src={cloudsImg}
        alt="clouds"
      />

      {/* Mountain svg foreground */}
      <div
        style={{ zIndex: "2", pointerEvents: "none" }}
        className="position-absolute w-100 bottom-0"
      >
        <svg
          className="w-100"
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask>
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image
                xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg"
                width="1200"
                height="800"
              />
            </g>
          </mask>
          <image xlinkHref={mountainImg} width="1200" height="1040" />
          <image
            xlinkHref="https://assets.codepen.io/721952/cloud2.png"
            width="1200"
            height="800"
          />
          <image
            xlinkHref="https://assets.codepen.io/721952/cloud1.png"
            width="1200"
            height="800"
          />
          <image
            xlinkHref="https://assets.codepen.io/721952/cloud3.png"
            width="1200"
            height="800"
          />
        </svg>
      </div>

      {/* Home stories content with gallery and description */}
      <div style={{ zIndex: "1" }} className="container-fluid m-0 px-0 px-md-5">
        <div className="home-stories-content row px-3 px-lg-5 py-5 align-content-start">
          <div className="row m-0 mb-4 p-0 px-md-5 justify-content-center justify-content-md-start">
            <div
              className="col-12 px-md-5"
              ref={titleRef}
              style={{
                opacity: titleInView ? "1" : "0",
                transform: titleInView ? "translateX(0)" : "translateX(-10rem)",
                transition:
                  "opacity 400ms ease-in-out 200ms, transform 400ms ease-in-out 200ms",
              }}
            >
              <h3 className="text-center text-md-start">
                Inspiring Fellow Travelers
              </h3>
              <h2 className="text-center text-md-start h2-dark ps-0 ps-md-2">
                A Continuously Growing{" "}
                <span
                  style={{
                    color: categoryCurrent.accent,
                  }}
                >
                  Community
                </span>
              </h2>
            </div>
          </div>
          <div className="home-stories__top row m-auto p-0">
            <div
              className="col-12 col-md-6 px-2 px-sm-5 p-md-3 text-center text-md-start"
              ref={descriptionLeftRef}
              style={{
                opacity: descriptionLeftInView ? "1" : "0",
                transform: descriptionLeftInView
                  ? "translateX(0)"
                  : "translateX(-10rem)",
                transition:
                  "opacity 400ms ease-in-out 200ms, transform 400ms ease-in-out 200ms",
              }}
            >
              <p className="home-stories__description p-1 px-lg-3 pb-lg-0 pt-lg-3">
                Traveling is about creating memories and making stories. In our
                years of service, we have witnessed the most inspiring and most
                enjoyable experiences of our clients. Read the stories of your
                fellow travelers who have been with us through their fun and
                exciting ventures.
              </p>
            </div>
            <div
              className="col-12 col-md-6 px-2 px-sm-5 p-md-3 text-center text-md-start"
              ref={descriptionRightRef}
              style={{
                opacity: descriptionRightInView ? "1" : "0",
                transform: descriptionRightInView
                  ? "translateX(0)"
                  : "translateX(10rem)",
                transition:
                  "opacity 400ms ease-in-out 200ms, transform 400ms ease-in-out 200ms",
              }}
            >
              <p className="home-stories__description p-1 px-lg-3 pb-lg-0 pt-lg-3">
                It is always fun reading the exciting anecdotes of other people.
                However, what's even better is creating you own. Join our
                community and read the stories of fellow travel lovers. You can
                also share your own story if you already took part in our trips
                before.
              </p>
            </div>
          </div>
          <div
            className="home-stories__gallery row p-0 m-auto position-relative"
            ref={galleryRef}
            style={{
              opacity: galleryInView ? "1" : "0",
              transform: galleryInView ? "scale(1)" : "scale(0.8)",
              transition:
                "opacity 1000ms ease-in-out 200ms, transform 1000ms ease-in-out 200ms",
            }}
          >
            <div className="home-stories-gallery__left col-12 col-md-7">
              <div className="row h-75">
                <div className="col-5 h-100 p-0">
                  <img src={storyImage1} alt="travel story 1" />
                </div>
                <div className="col-7 h-100">
                  <div className="row h-50">
                    <div className="col-12 p-0 h-100">
                      <img src={storyImage2} alt="travel story 2" />
                    </div>
                  </div>
                  <div className="row h-50">
                    <div className="col-12 p-0 h-100">
                      <img src={storyImage3} alt="travel story 3" />
                    </div>
                  </div>
                  <div className="row"></div>
                </div>
              </div>
              <div className="row h-25">
                <div className="col-12 h-100 p-0">
                  <img src={storyImage4} alt="travel story 4" />
                </div>
              </div>
            </div>
            <div className="home-stories-gallery__right col-12 col-md-5">
              <div className="row h-50">
                <div className="col-12 h-100 p-0">
                  <img src={storyImage5} alt="travel story 5" />
                </div>
              </div>
              <div className="row h-50">
                <div className="col-7 h-100 p-0">
                  <img src={storyImage6} alt="travel story 6" />
                </div>
                <div className="col-5 h-100 p-0">
                  <img src={storyImage7} alt="travel story 7" />
                </div>
              </div>
            </div>
            <div className="home-stories-gallery__overlay position-absolute h-100 w-100 start-0 top-0 d-flex justify-content-center align-items-center">
              <Link
                to="https://www.facebook.com/groups/892518778651643/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="cta-light home-stories-gallery__button text-uppercase px-4 py-3 rounded-pill"
                  style={{
                    backgroundColor: categoryCurrent.accentLight,
                  }}
                >
                  JOIN THE LAKBAY COMMUNITY
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quotation by the CEO */}
      <div
        style={{
          zIndex: "99",
          opacity: quoteInView ? "1" : "0",
          transition: "opacity 400ms ease-in-out 200ms",
        }}
        className="home-stories-quote d-flex flex-column justify-content-start align-items-center w-75"
        ref={quoteRef}
      >
        <div className="home-stories-quote__open align-self-start">
          <svg
            width="100%"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 191.029 191.029"
            xmlSpace="preserve"
          >
            <path
              style={{ fill: categoryCurrent.accentLight }}
              d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918
	C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433
	c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474
	C152.613,48.759,171.149,48.759,181.107,48.759z"
            />
          </svg>
        </div>
        <p className="w-75 text-center m-0 p-0 position-relative">
          Whether you are looking for a vacation, an adventurous journey, or a
          cultural immersion, we have something for everyone. <br />
          <span className="position-absolute end-0 mt-4">- John Doe, CEO</span>
        </p>
        <div className="home-stories-quote__close align-self-end">
          <svg
            width="100%"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 191.029 191.029"
            xmlSpace="preserve"
          >
            <path
              style={{ fill: categoryCurrent.accentLight }}
              d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918
	C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433
	c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474
	C152.613,48.759,171.149,48.759,181.107,48.759z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HomeStories;

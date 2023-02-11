import React from "react";
import "./HomeTestimonials.css";
import CardContainer from './HomeComponents/CardContainer'
import { testimonials } from "./HomeComponents/testimonialsData";
import Card from "./HomeComponents/Card";
import { animated, useSpring } from "@react-spring/web";
import { useScroll } from "@use-gesture/react";





const HomeTestimonials = () => {

  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)"
  }));


  const clamp = (value, clampAt = 50) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  const bind = useScroll(event => {

    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`
    });
  });

  return (
    <>
    <div className="home-testimonials-wrapper pt-5 vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className="text-center">
        <h2 className="h2-dark fw-bold">
          Take a look at some insights <br /> from our previous clients
        </h2>
      </div>
      
        <CardContainer className="container "  {...bind() }>
          {
            testimonials.map((testimony, idx) => (
                <animated.div
                className="card"
                key={idx}
                style={{ ...style,}}
                >
                  <Card data={testimony} />
                </animated.div>
              )
            )
          }
        </CardContainer>

    </div>
    </>
  );
};


export default HomeTestimonials;

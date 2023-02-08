import React from "react";
import picture1 from "./HomeImages/user1.jpg";
import picture2 from "./HomeImages/user2.jpg";
import picture3 from "./HomeImages/user3.jpg";
import picture4 from "./HomeImages/user4.jpg";
import picture5 from "./HomeImages/user5.jpg";
import picture6 from "./HomeImages/user6.jpg";
import picture7 from "./HomeImages/user7.jpg";
import picture8 from "./HomeImages/user8.jpg";
import "./HomeTestimonials.css";

const ImageContainer = (props) => {
  return (
    <div style={{ width: "340px", textAlign: "center" }}>
      <img src={props.image} alt={props.alt} style={{ width: "25%" }} />
      <p className="description">{props.description}</p>
    </div>
  );
};

const TestCard = (props) => {
  return (
    <div className="CardHolder">
      <ImageContainer
        image={props.image}
        alt={props.alt}
        description={props.description}
      />
    </div>
  );
};

const HomeTestimonials = () => {
  return (
    <div>
      <div className="Testimonials">
        <header className="m-testimonials section">
          <h1>
            Take a look at some insights <br /> from our previous clients
          </h1>
        </header>
      </div>
      <div className="Gallery">
        <TestCard image={picture1} alt="pic1" />
        <TestCard
          image={picture2}
          alt="pic2"
          description="Everyone was very helpful with our scheduling our excursions. They remembered our names and took great care of us. All of the guides were great!"
        />
        <TestCard
          image={picture3}
          alt="pic3"
          description="My husband and I are extremely happy to use Lakbay Travel's services. Hands down! Best travel agency in the Philippines!"
        />
        <TestCard
          image={picture4}
          alt="pic4"
          description="I'm a very busy person and decided to finally go on a vacation. The money I spent was all worth it. I've never been so relax like this!"
        />
        <TestCard
          image={picture5}
          alt="pic5"
          description="This is an example of image5"
        />
        <TestCard
          image={picture6}
          alt="pic5"
          description="This is an example of image6"
        />
        <TestCard
          image={picture7}
          alt="pic5"
          description="This is an example of image7"
        />
        <TestCard
          image={picture8}
          alt="pic5"
          description="I'm glad I chose to book with Lakbay Travel! It was one of the most unforgettable travel I did! Thank you so much!!"
        />
      </div>
    </div>
  );
};

export default HomeTestimonials;

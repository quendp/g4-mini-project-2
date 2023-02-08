/* 
  notes: 
  1) Try utilizing bootstrap utility classes for things like padding, margin, flexbox, alignment and such. 
    The trick is to search the style name (for example: padding) in the bootstrap 5 documentation and you will see there how to do it.

  2) use lowercase letters for classNames. I already changed those like the image-container, card-holder, etc.
*/
import React from "react";
import picture1 from "../../../assets/images/home-testimonials-images/user1.jpg";
import picture2 from "../../../assets/images/home-testimonials-images/user2.jpg";
import picture3 from "../../../assets/images/home-testimonials-images/user3.jpg";
import picture4 from "../../../assets/images/home-testimonials-images/user4.jpg";
import picture5 from "../../../assets/images/home-testimonials-images/user5.jpg";
import picture6 from "../../../assets/images/home-testimonials-images/user6.jpg";
import picture7 from "../../../assets/images/home-testimonials-images/user7.jpg";
import picture8 from "../../../assets/images/home-testimonials-images/user8.jpg";
import "./HomeTestimonials.css";



/* 
  3) I removed the "description in this function because the component's name is "ImageContainer", so I think it makes more sense if we only have images here.
    I also added bootstrap classes here as you can see to reduce the lines of our custom css.
*/
const ImageContainer = (props) => {
  return (
    <div className="image-container m-0 p-0 position-absolute top-0 start-50 rounded-circle">
      <img className="rounded-circle" src={props.image} alt={props.alt} /> 
    </div>
  );
};


/* 
  4) I think this is a pretty nice way of using components. I am assuming that this is just for "testing" purposes, hence, the name "TestCard"...
    I also added the {props.name} to see if the spacing is right.
    As a suggestion, I think you can also create a "Card" component that uses {props.children} just like what sir JM did in the adapto-todo-app.
    Feel free to ask me if you have any questions about that. 
*/
const TestCard = (props) => {
  return (
    <div className="card-holder position-relative d-flex flex-column align-items-center px-3 px-md-4 py-3 py-md-5 m-4">
      <ImageContainer image={props.image} alt={props.alt} />
      <h3 className="h3-dark pt-4">{props.name}</h3>
      <p className="p-2 m-0 description">{props.description}</p>
    </div>
  );
};


/*
  5) I added a className "home-testimonials-wrapper" here where I added the background-color styling. It's just less redundant.
    As a suggestion, you can make an array of objects where you can store the "TestCard" attributes like image, alt, name, and description.
    Then just use the map array method to display them as cards. I didn't do it yet as a challenge to you, but if you need assistance just tell me so.
*/
const HomeTestimonials = () => {
  return (
    <div className="home-testimonials-wrapper pt-5 vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className="text-center">
        <h2 className="h2-dark fw-bold">
          Take a look at some insights <br /> from our previous clients
        </h2>
      </div>
      <div className="gallery d-flex w-100 py-5">
        <TestCard
          image={picture1}
          alt="pic1"
          name={"Juan Dela Cruz"}
          description="Everyone was very helpful with our scheduling our excursions. They remembered our names and took great care of us. All of the guides were great!"
        />
        <TestCard
          image={picture2}
          alt="pic2"
          name={"Juan Dela Cruz"}
          description="Everyone was very helpful with our scheduling our excursions. They remembered our names and took great care of us. All of the guides were great!"
        />
        <TestCard
          image={picture3}
          alt="pic3"
          name={"Juan Dela Cruz"}
          description="My husband and I are extremely happy to use Lakbay Travel's services. Hands down! Best travel agency in the Philippines!"
        />
        <TestCard
          image={picture4}
          alt="pic4"
          name={"Juan Dela Cruz"}
          description="I'm a very busy person and decided to finally go on a vacation. The money I spent was all worth it. I've never been so relax like this!"
        />
        <TestCard
          image={picture5}
          alt="pic5"
          name={"Juan Dela Cruz"}
          description="Everyone was very helpful with our scheduling our excursions. They remembered our names and took great care of us. All of the guides were great!"
        />
        <TestCard
          image={picture6}
          alt="pic5"
          name={"Juan Dela Cruz"}
          description="Everyone was very helpful with our scheduling our excursions. They remembered our names and took great care of us. All of the guides were great!"
        />
        <TestCard
          image={picture7}
          alt="pic5"
          name={"Juan Dela Cruz"}
          description="Everyone was very helpful with our scheduling our excursions. They remembered our names and took great care of us. All of the guides were great!"
        />
        <TestCard
          image={picture8}
          alt="pic5"
          name={"Juan Dela Cruz"}
          description="I'm glad I chose to book with Lakbay Travel! It was one of the most unforgettable travel I did! Thank you so much!!"
        />
      </div>
    </div>
  );
};

/*
  Overall, nice work! Here are just a few things I'd like to add before we wrap this up:

  1. I think you already know it, but for formality's sake, create separate files for the components.

  2. We haven't added the feature that we want yet which is to make the components draggable instead of using the scrollbar.
    I will let you experiment on that. Just follow the tutorial I sent you before (no need to copy everything). Here's the link: https://medium.com/dailyjs/horizontal-scroll-animation-fc39ae43cbe5
    You are free to install the packages mentioned here. I think we are done with the "basic setup" section in this article, so, you can go straight to "Adding animation" section. 

  3. Lastly, try to look for other "testimonials section layout" (the design in my mini project 1 is very rushed so do not follow or copy it).
    You are free to design it on your own. I will also send you some samples for reference. I think, your UI designing skills is pretty decent so I'll let you decide on that one.

  That's all, thank you!

    ~ Quen DP
*/

export default HomeTestimonials;

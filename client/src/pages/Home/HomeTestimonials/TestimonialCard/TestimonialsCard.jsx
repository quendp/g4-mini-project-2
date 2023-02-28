import React from "react";

const TestimonialsCard = (props) => {
  const data = props.data;
  return (
    <div
      className="home-testimonials-card__body px-3 px-md-4 py-3 py-md-5 m-4 d-flex flex-column justify-content-between"
      style={{
        transform: `translateX(calc(${props.currentTransform} * calc(100% + 3rem)))`,
      }}
    >
      <div className="w-100">
        <svg
          width="10%"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 191.029 191.029"
          xmlSpace="preserve"
        >
          <path
            style={{ fill: props.categoryCurrent.accentLight }}
            d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918
	C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433
	c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474
	C152.613,48.759,171.149,48.759,181.107,48.759z"
          />
        </svg>
      </div>
      <p className="p-3 m-0 home-testimonials-title__description">
        {data.description}
      </p>
      <div className="w-100 px=md-3 pt-md-3 pb-0 ">
        <img
          className="home-testimonials-card__img me-3 me-lg-4"
          src={data.image.src}
          alt={data.image.alt}
        />
        <h3
          className="p-0 text-start home-testimonials-card__name"
          style={{ color: props.categoryCurrent.accent }}
        >
          {data.name}
        </h3>
      </div>
    </div>
  );
};

export default TestimonialsCard;

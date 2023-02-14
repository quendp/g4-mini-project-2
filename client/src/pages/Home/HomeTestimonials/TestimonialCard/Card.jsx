const Card = (props) => {
  const data = props.data;
  return (
    <div className="home-testimonials-card-holder position-relative d-flex flex-column align-items-center px-3 px-md-4 py-3 py-md-5 m-4">
      <div className="home-testimonials-image-container m-0 p-0 position-absolute top-0 start-50 rounded-circle">
        <img className="rounded-circle" src={data.image.src} alt={data.image.alt} />
      </div>
      <h3 className="h3-dark pt-4">{data.name}</h3>
      <p className="p-2 m-0 description">{data.description}</p>
    </div>
  );
};

export default Card;

const ImageContainer = (props) => {
    return (
      <div className="image-container m-0 p-0 position-absolute top-0 start-50 rounded-circle">
        <img className="rounded-circle" src={props.image} alt={props.alt} /> 
      </div>
    );
  };

export default ImageContainer
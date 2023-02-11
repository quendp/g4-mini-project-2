import ImageContainer from './ImageContainer'

const Card = (props) => {
    const data = props.data
    return (
      <div className="card-holder position-relative d-flex flex-column align-items-center px-3 px-md-4 py-3 py-md-5 m-4">
        <ImageContainer image={data.image.src} alt={data.image.alt} />
        <h3 className="h3-dark pt-4">{data.name}</h3>
        <p className="p-2 m-0 description">{data.description}</p>
      </div>
    );
  }
  
  
  export default Card
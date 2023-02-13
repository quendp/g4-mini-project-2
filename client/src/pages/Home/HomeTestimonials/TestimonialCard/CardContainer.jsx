const CardContainer = (props) => {
    return (
        <div className="home-testimonials-gallery d-flex w-100 py-5">
            {props.children }
        </div>
    )
  }

export default CardContainer
const CardContainer = (props) => {
    return (
        <div className="gallery d-flex w-100 py-5" {...props}>
            { props.children }
        </div>
    )
  }

export default CardContainer
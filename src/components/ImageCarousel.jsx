import { Carousel } from "react-bootstrap";
import "../assets/css/Carousel.css";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel controls={false} style={{ position: "relative", top: "0", left: "0", width: "100%" }}>
      {images?.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 carousel-image" src={image.img} alt={image.title} />
          <Carousel.Caption>
            <h3 className="d-none d-md-block">{image.title}</h3>
            <p className="d-none d-md-block">{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;

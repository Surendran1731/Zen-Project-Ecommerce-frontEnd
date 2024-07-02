import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="/image1.jpg" alt="img" className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/image2.jpg" alt="img" className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/image3.jpg" alt="img" className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/image4.jpg" alt="img" className="d-block w-100" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/image5.jpg" alt="img" className="d-block w-100" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;

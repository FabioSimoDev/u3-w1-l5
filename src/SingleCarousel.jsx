import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import React, { useRef } from "react";

const SingleCarousel = function ({ startImg, title, query, getData }) {
  console.warn(query);
  getData(query);
  const imgCount = 18;
  let imgIndex = 1;
  imgIndex = startImg;

  const getImage = function () {
    if (imgIndex > 0 && imgIndex <= imgCount) {
      let imgToUse = imgIndex;
      if (imgIndex === imgCount) {
        imgIndex = 1;
        imgToUse = imgIndex;
        imgIndex++;
        return imgToUse;
      } else {
        if (imgIndex === 1) {
          imgIndex++;
        } else {
          imgToUse = imgIndex;
          imgIndex++;
        }
        // imgToUse = imgIndex;
      }
      console.log(imgIndex);
      return imgToUse;
    }
    console.log(imgIndex);
    return 1;
  };

  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      console.log(carouselRef);
      const carouselInstance = carouselRef.current;
      const carouselInner = carouselInstance.querySelector(".carousel-inner");

      setTimeout(() => {
        carouselInner.scrollTo({ left: 0, behavior: "smooth" });
        const cardWidth =
          carouselInner.querySelector(".carousel-item").offsetWidth;
        const scrollPosition = carouselInner.scrollLeft;

        const totalScroll =
          carouselInner.scrollWidth - carouselInner.offsetWidth;

        if (
          scrollPosition < totalScroll &&
          !(scrollPosition + cardWidth > totalScroll)
        ) {
          carouselInner.scrollTo({
            left: scrollPosition + cardWidth,
            behavior: "smooth"
          });
        }
      }, 0);
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      console.log(carouselRef);
      const carouselInstance = carouselRef.current;
      const carouselInner = carouselInstance.querySelector(".carousel-inner");

      setTimeout(() => {
        carouselInner.scrollTo({ left: 0, behavior: "smooth" });
        const cardWidth =
          carouselInner.querySelector(".carousel-item").offsetWidth;
        let scrollPosition = carouselInner.scrollLeft;
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          carouselInner.scrollTo({ left: scrollPosition, behavior: "smooth" });
        }
      }, 0);
    }
  };

  return (
    <Col xs={12} className="col-12 p-0 mb-lg-5 mb-3">
      <h2 className="h4 fw-semibold p-0 mb-3">{title}</h2>
      <div
        id="carouselControls"
        className="carousel p-0"
        ref={carouselRef}
        interval={false}
        wrap={false}
      >
        <div className="carousel-inner d-flex pe-5">
          <Carousel.Item className="d-block me-0 active">
            <Card className="rounded-0 m-1 border-0 shadow-sm">
              <img
                src={require(`./mockup/assets/${getImage()}.png`)}
                className="d-block w-100"
                alt="Netflix-assets/Netflix-assets/assets/media/media0.webp"
              />
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-block me-0">
            <Card className="rounded-0 m-1 border-0 shadow-sm">
              <img
                src={require(`./mockup/assets/${getImage()}.png`)}
                className="d-block w-100"
                alt="Netflix-assets/Netflix-assets/assets/media/media0.webp"
              />
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-block me-0">
            <Card className="rounded-0 m-1 border-0 shadow-sm">
              <img
                src={require(`./mockup/assets/${getImage()}.png`)}
                className="d-block w-100"
                alt="Netflix-assets/Netflix-assets/assets/media/media0.webp"
              />
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-block me-0">
            <Card className="rounded-0 m-1 border-0 shadow-sm">
              <img
                src={require(`./mockup/assets/${getImage()}.png`)}
                className="d-block w-100"
                alt="Netflix-assets/Netflix-assets/assets/media/media0.webp"
              />
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-block me-0">
            <Card className="rounded-0 m-1 border-0 shadow-sm">
              <img
                src={require(`./mockup/assets/${getImage()}.png`)}
                className="d-block w-100"
                alt="Netflix-assets/Netflix-assets/assets/media/media0.webp"
              />
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-block me-0">
            <Card className="rounded-0 m-1 border-0 shadow-sm">
              <img
                src={require(`./mockup/assets/${getImage()}.png`)}
                className="d-block w-100"
                alt="Netflix-assets/Netflix-assets/assets/media/media0.webp"
              />
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-block me-0">
            <Card className="rounded-0 m-1 border-0 shadow-sm">
              <img
                src={require(`./mockup/assets/${getImage()}.png`)}
                className="d-block w-100"
                alt="Netflix-assets/Netflix-assets/assets/media/media0.webp"
              />
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-block me-0">
            <Card className="rounded-0 m-1 border-0 shadow-sm">
              <img
                src={require(`./mockup/assets/${getImage()}.png`)}
                className="d-block w-100"
                alt="Netflix-assets/Netflix-assets/assets/media/media0.webp"
              />
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-block me-0">
            <Card className="rounded-0 m-1 border-0 shadow-sm">
              <img
                src={require(`./mockup/assets/${getImage()}.png`)}
                className="d-block w-100"
                alt="Netflix-assets/Netflix-assets/assets/media/media0.webp"
              />
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-block me-0">
            <Card className="rounded-0 m-1 border-0 shadow-sm">
              <img
                src={require(`./mockup/assets/${getImage()}.png`)}
                className="d-block w-100"
                alt="Netflix-assets/Netflix-assets/assets/media/media0.webp"
              />
            </Card>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-block me-0">
            <Card className="rounded-0 m-1 border-0 shadow-sm">
              <img
                src={require(`./mockup/assets/${getImage()}.png`)}
                className="d-block w-100"
                alt="Netflix-assets/Netflix-assets/assets/media/media0.webp"
              />
            </Card>
          </Carousel.Item>
        </div>
        <button
          className="carousel-control-prev top-50 rounded-circle translate-middle-y"
          type="button"
          data-bs-target="#carouselControls"
          data-bs-slide="prev"
          onClick={handlePrev}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next top-50 rounded-circle translate-middle-y"
          type="button"
          data-bs-target="#carouselControls"
          data-bs-slide="next"
          onClick={handleNext}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </Col>
  );
};

export default SingleCarousel;

import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SingleCarousel = function ({ title, query, getData, setLoadingState }) {
  const [filmDataState, setFilmDataState] = useState({ Search: [] });
  const [mouseHover, setMouseHover] = useState("");

  const handleMouseDown = function (index) {
    if (mouseHover === index) {
      //se è già uguale, deseleziona la card
      setMouseHover("");
    } else {
      setMouseHover(index);
    }
  };

  const aspectRatio = 1.3;

  function resizeImage(img = undefined) {
    if (img) {
      const calculatedHeight = aspectRatio * img.clientWidth;
      img.style.height = `${calculatedHeight}px`;
    }
  }

  const getFilms = async function () {
    const data = await getData(query);
    if (data) {
      setFilmDataState(data);
      if (setLoadingState) {
        setLoadingState(false);
      }
    }
  };

  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
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

  //al caricamento del componente a funzione.
  useEffect(() => {
    getFilms();
  }, []);

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
          {filmDataState.Search.length > 0 &&
            filmDataState.Search.map((film, index) => (
              <Carousel.Item className="d-block me-0" key={film.imdbID}>
                {mouseHover === index && (
                  <p className="text-white start-50 w-100 text-center translate-middle-x px-1 position-absolute">
                    <Link
                      to={"/movie-details/" + film.imdbID}
                      className="text-white"
                    >
                      <small className="fw-semibold">{film.Title}</small>
                    </Link>
                  </p>
                )}

                <Card
                  className={
                    mouseHover === index
                      ? "rounded-0 m-1 border-0 shadow-sm slide-down"
                      : "rounded-0 m-1 border-0 shadow-sm"
                  }
                  onMouseDown={() => handleMouseDown(index)}
                  id={index}
                >
                  <img
                    src={film.Poster}
                    onLoad={(e) => resizeImage(e.target)}
                    className="d-block w-100"
                    alt={film.title}
                  />
                </Card>
              </Carousel.Item>
            ))}
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

import React, { useState } from "react";
import Slider from "react-slick";
import s from "./Carousel.module.css"; // Estilos CSS personalizados

const Test = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };

  return (
    <div>
      <h2>Custom Carousel</h2>
      <div>
      <Slider {...settings}>
        {/* Agrega aquí tus elementos del carrusel */}
        <div className={currentSlide === 0 ? s.red : s.carouselItem}>Elemento 1</div>
        <div className={currentSlide === 1 ? s.red : s.carouselItem}>Elemento 2</div>
        <div className={currentSlide === 2 ? s.red : s.carouselItem}>Elemento 3</div>
        <div className={currentSlide === 3 ? s.red : s.carouselItem}>Elemento 4</div>
        <div className={currentSlide === 4 ? s.red : s.carouselItem}>Elemento 5</div>
      </Slider>
      </div>
    </div>
  );
};

export default Test;

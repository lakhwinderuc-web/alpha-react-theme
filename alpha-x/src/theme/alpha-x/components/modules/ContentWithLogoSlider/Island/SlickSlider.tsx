import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SlickSlider = ({ logos = [],slideToShow,slidesToScroll,autoPlay,sliderArrows,sliderDots,autoPlaySpeed }) => {
  const settings = {
    dots: sliderDots,
    infinite: true,
    arrows: sliderArrows,
    speed: 800,
    cssEase: "ease-in-out",
    slidesToShow: slideToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoPlay,
    autoplaySpeed: autoPlaySpeed,
    pauseOnHover: false,
    pauseOnFocus: false
  };

  return (
    <Slider {...settings}>
      {logos.map((logo, index) => {
        const img =
          logo?.LogoSliderImage?.logoImg ||
          logo?.logo_slider?.logo_image ||
          {};

        const src = img.src || img.url || "";
        const alt = img.alt || img.name || "Logo";
        const width = img.width || undefined;
        const height = img.height || undefined;

        return (
          
          <div key={index}>
            <div className="content-with-slider__logo-img">
              {src ? (
                <img
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  loading="lazy"
                />
              ) : (
                <span>Image Missing</span>
              )}
            </div>
          </div>
        );
      })}
    </Slider>
  );
};


export default SlickSlider;

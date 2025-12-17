import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";

export  function SpliderSlide({ cards }) {
  return (
    <Splide
      options={{
       type: "loop",
        autoplay: true,
        interval: 3000,       // Slide every 3 seconds
        pauseOnHover: false,  // Keeps sliding even when hovered
        resetProgress: false,
        arrows: true,         // Keep arrows (your choice)
        pagination: true,     // Keep dots
        perPage: 2,
          perMove: 2,   //moving two page
        gap: "1rem",
        speed: 600,
      }}
      aria-label="Card Slider"
    >
      {cards.map((card, index) => (
        <SplideSlide key={index}>
          <div className="icon-content-card__items">
            <div className="icon-content-card__icon">
              {card.image_field?.src && (
                <img
                  src={card.image_field.src}
                  alt={card.image_field.alt}
                  width={card.image_field.width}
                  height={card.image_field.height}
                  loading="lazy"
                />
              )}
            </div>

            <div
              className="icon-content-card__title"
              dangerouslySetInnerHTML={{ __html: card.heading_description }}
            />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default SpliderSlide;
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { Icon } from "@hubspot/cms-components";
export default function SlickSlider({ cards, autoplay, autoplaySpeed }) {
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.73148 9.00364L1.00705 2.53895C0.82189 2.36138 0.720031 2.12395 0.720031 1.87079C0.720031 1.61749 0.82189 1.38021 1.00705 1.20235L1.59628 0.636186C1.78114 0.458048 2.02827 0.359987 2.29161 0.359987C2.55495 0.359987 2.80178 0.458048 2.98679 0.636186L10.9933 8.33295C11.179 8.51137 11.2808 8.74978 11.28 9.00322C11.2808 9.25778 11.1792 9.49591 10.9933 9.67447L2.99425 17.3638C2.80923 17.5419 2.56241 17.64 2.29892 17.64C2.03558 17.64 1.78875 17.5419 1.60359 17.3638L1.0145 16.7976C0.63118 16.4291 0.63118 15.8292 1.0145 15.4609L7.73148 9.00364Z" fill="#D8D8D8"></path></svg>
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style }}
      onClick={onClick}
    >
      <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.26852 8.99636L10.993 15.461C11.1781 15.6386 11.28 15.876 11.28 16.1292C11.28 16.3825 11.1781 16.6198 10.993 16.7976L10.4037 17.3638C10.2189 17.542 9.97173 17.64 9.70839 17.64C9.44505 17.64 9.19822 17.542 9.01321 17.3638L1.0067 9.66705C0.820956 9.48863 0.719243 9.25022 0.719974 8.99678C0.719243 8.74222 0.820809 8.50409 1.0067 8.32553L9.00575 0.636214C9.19077 0.458075 9.43759 0.360014 9.70108 0.360014C9.96442 0.360014 10.2113 0.458075 10.3964 0.636213L10.9855 1.20238C11.3688 1.57088 11.3688 2.17076 10.9855 2.53912L4.26852 8.99636Z" fill="#D8D8D8"></path></svg>
    </div>
  );
};
const settings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 600,
  cssEase: "ease-in-out",
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: autoplay,
  autoplaySpeed: autoplaySpeed,
  pauseOnHover: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

  return (
    <Slider {...settings} className="icon-content-cards__cards slider-enable">
      {cards.map((card, index) => (
        <div key={index}>
          <div className="icon-content-card__items">
            
            <div className="icon-content-card__icon">
              {card.icon_group?.icon_image_choice === 'hubspot' && (
                <Icon
                  fieldPath={`cards_repeat.items[${index}].icon_group.icon_field`}
                  style={{ width: "48px", height: "48px" }}
                />
              )}
            
              {card.icon_group?.icon_image_choice === 'image' && card.icon_group?.image_field?.src && (
                <img
                  src={card.icon_group.image_field.src}
                  width={card.icon_group.image_field.width}
                  height={card.icon_group.image_field.height}
                  alt={card.icon_group.image_field.alt || 'Icon Image'}
                />
              )}
            </div>

            <div
              className="icon-content-card__title"
              dangerouslySetInnerHTML={{
                __html: card.heading_description || '',
              }}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
}

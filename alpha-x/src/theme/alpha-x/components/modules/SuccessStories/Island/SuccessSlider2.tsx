import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

  // Reusable Star Component
const StarRating = ({ rating }) => {
  const totalStars = 5;
  const numRating = Number(rating) || 3;

  return (
    <ul className="stars">
      {[...Array(totalStars)].map((_, index) => (
        <li key={index} className={index < numRating ? "show" : ""}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </li>
      ))}
    </ul>
  );
};

const SuccessSlider2 = ({
  items=[],
  slider,
  autoplay,
  autoplaySpeed,
  dotsEnableDs,
  arrowEnableDs,
  slideToShowDs,
  slidesToScrollDs,
  dotsEnableTs,
  arrowEnableTs,
  slideToShowTs,
  slidesToScrollTs,
  dotsEnableMs,
  arrowEnableMs,
  slideToShowMs,
  slidesToScrollMs,
}) => {
  var settings = {
    dots: dotsEnableDs,
    infinite: true,
    arrows: arrowEnableDs ,
    speed: 1000,
    cssEase: "ease-in-out",
    slidesToShow: slideToShowDs,
    slidesToScroll: slidesToScrollDs,
    pauseOnHover: true,
    pauseOnFocus: true,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,

    responsive: [

        {
        breakpoint: 1024,
        settings: {
          dots: dotsEnableTs,
          infinite: true,
          arrows:arrowEnableTs,
          slidesToShow:slideToShowTs,
          slidesToScroll:slidesToScrollTs

        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: dotsEnableMs,
          infinite: true,
          arrows:arrowEnableMs,
          slidesToShow:slideToShowMs,
          slidesToScroll:slidesToScrollMs

        },
      },

          {
        breakpoint: 580,
        settings: {
          dots: false,
          infinite: true,
          arrows:false,

        },
      },

         
    ],
  };




  return (

    <>

    {slider?(<Slider {...settings}>
      {items.map((item, index) => (
        <div className="success-stories__item" key={index}>
          <div className="success-stories__content">
                <div className="success-stories__client-wrap">
            <div className="success-stories__testimonial-image profile-inr">
              <img
                src={item?.client_section?.client_image.src}
                alt={item?.client_section?.client_image.alt}
                loading="lazy"
                height={item?.client_section?.client_image.height}
                width={item?.client_section?.client_image.width}
              />
            </div>
            <div className="success-stories__client-info">
              <div className="success-stories__client-name">
                <h3>{item?.client_section?.client_name}</h3>
              </div>
              <div className="success-stories__client-role">
                <p>{item?.client_section?.client_role}</p>
              </div>
            </div>

            <div className="success-stories__rating">
<StarRating rating={item?.client_section?.reviews} />
            </div>
          </div>

            <div className="success-stories__text">
              <div
                dangerouslySetInnerHTML={{
                  __html: item?.testimonial_content?.testimonial_desc,
                }}
              />
            </div>
          </div>
     
        </div>
      ))}
    </Slider>):(
      <>
{items.map((item, index) => (
        <div className="success-stories__item" key={index}>
          <div className="success-stories__content">
            {item?.add_quote?.quote_image_choice === "svg_code" && (
              <div
                className="success-stories__quote"
                dangerouslySetInnerHTML={{ __html: item.add_quote.svg_code }}
              />
            )}

            {item?.add_quote?.quote_image_choice === "image" && (
              <div className="success-stories__quote">
                <img
                  src={item?.add_quote?.quote_image?.src}
                  alt={item?.add_quote?.quote_image?.alt}
                  loading="lazy"
                  height={item?.add_quote?.quote_image?.height}
                  width={item?.add_quote?.quote_image?.width}
                />
              </div>
            )}

            <div className="success-stories__text">
              <div
                dangerouslySetInnerHTML={{
                  __html: item?.testimonial_content?.testimonial_desc,
                }}
              />
            </div>
          </div>
          <div className="success-stories__client">
            <div className="success-stories__client-image">
              <img
                src={item?.client_section?.client_image.src}
                alt={item?.client_section?.client_image.alt}
                loading="lazy"
                height={item?.client_section?.client_image.height}
                width={item?.client_section?.client_image.width}
              />
            </div>
            <div className="success-stories__client-info">
              <div className="success-stories__client-name">
                <h3>{item?.client_section?.client_name}</h3>
              </div>
              <div className="success-stories__client-role">
                <p>{item?.client_section?.client_role}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
</>
    )}
    
    </>
  );
};

export default SuccessSlider2;
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuccessSlider = ({
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

export default SuccessSlider;

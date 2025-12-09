  import  ReactSlick from 'react-slick';
  import 'slick-carousel/slick/slick.css';
  import 'slick-carousel/slick/slick-theme.css';
  export const Component = () => {
  const Slider = ReactSlick.default || ReactSlick; 
    const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  draggable: true,
  swipe: true,
  swipeToSlide: true,
  touchMove: true,
  accessibility: false,
    };

    return (
      <>

      <style>
            {
        `
        .text_inner{
        text-align:center
        }
        .simple-slider{
  overflow:hidden;
        }
  .simple-slider .slick-dots {
      position: static;
  }
      .simple-slider .slick-prev {
      left: 0;
  }

  .simple-slider .slick-next {
      right: 0;
  }

  .simple-slider button.slick-arrow {
      background: red;
  }
      `
  }
      </style>

      <div className='simple-slider'>
      <Slider {...settings}>
        <div className='text_inner'><h3>1</h3></div>
        <div className='text_inner'><h3>2</h3></div>
        <div className='text_inner'><h3>3</h3></div>
        <div className='text_inner'><h3>4</h3></div>
          <div className='text_inner'><h3>5</h3></div>
      </Slider>
      </div>
      </>
    );
  };


  export { fields } from "./fields.js";


  export const meta = {
  "label": "Card Slider",
  "css_assets": [],
  "external_js": [],
  "global": false,
  "help_text": "",
  "content_types": [
    "ANY"
  ],
  "js_assets": [],
  "other_assets": [],
  "smart_type": "NOT_SMART",
  "tags": [],
  "is_available_for_new_content": true
  }
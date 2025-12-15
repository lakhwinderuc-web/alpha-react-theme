import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonialSlider = ({items,slideToShow,slidesToScroll,sliderDots,autoPlay,autoPlaySpeed,sliderArrows,sliderEnable}) => {
  
   var settings = {
 dots: sliderDots,
  infinite: true,
  arrows: sliderArrows,
  speed: 1000,                
  cssEase: "ease-in-out",    
  slidesToShow: slideToShow,
  slidesToScroll: slidesToScroll,
  autoplay: autoPlay,          
  autoplaySpeed: autoPlaySpeed,    
  pauseOnHover: true,  
  pauseOnFocus: true,
  };
  return (
  
<Slider {...settings}>
{items.map((item,index)=>(
  <div key={index}>
    <div  className='bg-image-with-slider__content'>
<div  dangerouslySetInnerHTML={{ __html: item.testimonialText}}/>
<div  dangerouslySetInnerHTML={{__html:item.authorName}}/>
    </div>
  </div>
))}
</Slider>
  )
}

export default testimonialSlider

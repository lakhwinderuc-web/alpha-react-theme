import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonialSlider = ({items,autoPlay,autoPlaySpeed}) => {
  
   var settings = {
 dots: true,
  infinite: true,
  arrows: false,
  speed: 1000,                
  cssEase: "ease-in-out",    
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: autoPlay,          
  autoplaySpeed: autoPlaySpeed,    
  pauseOnHover: true,  
  pauseOnFocus: true,
  
responsive: [
    {
      breakpoint: 580,
      settings: {
       dots: false,
  infinite: true,
  arrows: true
      }
    }
  ]
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

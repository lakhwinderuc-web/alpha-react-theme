import { Island, RichText } from "@hubspot/cms-components";
import { useId } from "react";
import testimonialSlider from "./Island/testimonialSlider.js?island";
import testimonalbg from"../../../images/testimonial bg.webp"

export const Component = ({ fieldValues }) => {
  const reactId=useId();
  const uniqueClass = `module_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;

  const customClass = fieldValues?.customCss?.customClass ||"New";
  const customId = fieldValues?.customCss?.customId || "New";
  const bgimg=fieldValues?.backgroundImage?.bgImage;
  const testmonials = fieldValues?.headingGroup?.testimonialField;
  const testimonialText =
  fieldValues?.headingGroup?.testimonialField?.[0]?.testimonialText;

const authorName =
  fieldValues?.headingGroup?.testimonialField?.[0]?.authorName;

   const sliderEnable=fieldValues?.style?.sliderSettings.sliderEnable;
  const slideToShow=fieldValues?.style?.sliderSettings.slidesToShow;
  const slidesToScroll=fieldValues?.style?.sliderSettings.slidesToScroll;
  const autoPlay=fieldValues?.style?.sliderSettings?.autoPlay;
  const autoPlaySpeed=fieldValues?.style?.sliderSettings?.autoPlaySpeed;
  const sliderDots=fieldValues?.style?.sliderSettings?.sliderDots;
  const sliderArrows=fieldValues?.style?.sliderSettings?.sliderArrows;
  console.log(testimonialText)
  console.log(sliderEnable)

const topBg = {
  backgroundImage: `url(${bgimg.src})`,
};


  

  const ds = fieldValues.style?.spacing?.desktop?.desktop_spacing || {};
const desktopStyle = {
  paddingTop: (ds.padding?.top?.value || 0) + (ds.padding?.top?.units || 'px'),
  paddingBottom: (ds.padding?.bottom?.value || 0) + (ds.padding?.bottom?.units || 'px'),
  paddingLeft: (ds.padding?.left?.value || 0) + (ds.padding?.left?.units || 'px'),
  paddingRight: (ds.padding?.right?.value || 0) + (ds.padding?.right?.units || 'px'),
};

const ts = fieldValues.style?.spacing?.tablet?.tablet_spacing || {};
const tabletStyle = {
  paddingTop: (ts.padding?.top?.value || 0) + (ts.padding?.top?.units || 'px'),
  paddingBottom: (ts.padding?.bottom?.value || 0) + (ts.padding?.bottom?.units || 'px'),
  paddingLeft: (ts.padding?.left?.value || 0) + (ts.padding?.left?.units || 'px'),
  paddingRight: (ts.padding?.right?.value || 0) + (ts.padding?.right?.units || 'px'),
};

const ms = fieldValues.style?.spacing?.mobile?.mobile_spacing || {};
const mobileStyle = {
  paddingTop: (ms.padding?.top?.value || 0) + (ms.padding?.top?.units || 'px'),
  paddingBottom: (ms.padding?.bottom?.value || 0) + (ms.padding?.bottom?.units || 'px'),
  paddingLeft: (ms.padding?.left?.value || 0) + (ms.padding?.left?.units || 'px'),
  paddingRight: (ms.padding?.right?.value || 0) + (ms.padding?.right?.units || 'px'),
};

const bg = fieldValues.style?.background;
let backgroundCSS = "";

// gradient background
if (bg?.background_type === "bg_color" && bg?.bg_gradient) {
  const vertical = bg.bg_gradient.side_or_corner?.verticalSide;
  const horizontal = bg.bg_gradient.side_or_corner?.horizontalSide;

  let direction = "to bottom";
  if (vertical && horizontal) {
    direction = `to ${vertical.toLowerCase()} ${horizontal.toLowerCase()}`;
  } else if (vertical) {
    direction = vertical.toLowerCase() === "top" ? "to top" : "to bottom";
  } else if (horizontal) {
    direction = horizontal.toLowerCase() === "left" ? "to left" : "to right";
  }

  const rgbaColors = bg.bg_gradient.colors.map(c => {
    const col = c.color;
    return `rgba(${col.r}, ${col.g}, ${col.b}, ${col.a})`;
  });

  backgroundCSS = `
    background: linear-gradient(
      ${direction},
      ${rgbaColors.join(", ")}
    );
  `;
}

// background image
if (bg?.background_type === "bg_image" && bg?.bg_image) {
  const positionMap = {
    TOP_LEFT: "top left",
    TOP_CENTER: "top center",
    TOP_RIGHT: "top right",
    MIDDLE_LEFT: "center left",
    MIDDLE_CENTER: "center center",
    MIDDLE_RIGHT: "center right",
    BOTTOM_LEFT: "bottom left",
    BOTTOM_CENTER: "bottom center",
    BOTTOM_RIGHT: "bottom right",
  };

  const bgPos = positionMap[bg.bg_image.background_position] || "center center";
  backgroundCSS = `
    background-image: url(${bg.bg_image.src});
    background-size: ${bg.bg_image.background_size};
    background-position: ${bgPos};
  `;
}

  return (
    <>
      <style>

        {`
        
         .bg-image-with-slider.${uniqueClass} {
  ${backgroundCSS}
          padding-top: ${desktopStyle.paddingTop};
          padding-bottom: ${desktopStyle.paddingBottom};
          padding-left: ${desktopStyle.paddingLeft};
          padding-right: ${desktopStyle.paddingRight};
        }
            @media(max-width:1024px) {
          .bg-image-with-slider.${uniqueClass} {
            padding-top: ${tabletStyle.paddingTop};
            padding-bottom: ${tabletStyle.paddingBottom};
            padding-left: ${tabletStyle.paddingLeft};
            padding-right: ${tabletStyle.paddingRight};
}
            }
 @media(max-width:767px) {
         
          .bg-image-with-slider.${uniqueClass} {
            padding-top: ${mobileStyle.paddingTop};
            padding-bottom: ${mobileStyle.paddingBottom};
            padding-left: ${mobileStyle.paddingLeft};
            padding-right: ${mobileStyle.paddingRight};
          }
        }
        
        
        .bg-image-with-slider__testimonial-main{
      background:rgba(40, 39, 39, 100%);
      color:#fff;
      text-align:center;
      }
  
  .bg-image-with-slider__bg-top-img{
      width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 200px;
    padding-right: 15px;
    padding-bottom: 200px;
    padding-left: 15px;}
      `}
      </style>
      <div id={customId} className={`bg-image-with-slider ${uniqueClass} ${customClass}`}>
        <div className="bg-image-with-slider__testimonial-slider ">
          <div className="bg-image-with-slider__wrapper">
            <div className={`bg-image-with-slider__bg-top-img `} style={topBg}/>
            <div className="bg-image-with-slider__testimonial-main" >
              <RichText className="bg-image-with-slider__testimonial-heading" fieldPath="headingGroup.topHeading"/>
              {sliderEnable?(<Island
                hydrateOn="load"
                module={testimonialSlider}
                moduleName="testimonialSlider"
                clientOnly={true}
                items={testmonials}
                sliderEnable={sliderEnable}
                slideToShow={slideToShow}
                slidesToScroll={slidesToScroll}
                autoPlay={autoPlay}
                autoPlaySpeed={autoPlaySpeed}
                sliderDots={sliderDots}
                sliderArrows={sliderArrows}

              />):(<div  className='bg-image-with-slider__content'>
<div dangerouslySetInnerHTML={{__html:testimonialText}}/>
<div dangerouslySetInnerHTML={{__html:authorName}}/>

    </div>)}
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Bg image With Testimonial",
  css_assets: [],
  external_js: [],
  global: false,
  help_text: "",
  content_types: [
    "ANY",
    "LANDING_PAGE",
    "SITE_PAGE",
    "BLOG_POST",
    "BLOG_LISTING",
  ],
  js_assets: [],
  other_assets: [],
  smart_type: "NOT_SMART",
  tags: [],
  is_available_for_new_content: true,
};

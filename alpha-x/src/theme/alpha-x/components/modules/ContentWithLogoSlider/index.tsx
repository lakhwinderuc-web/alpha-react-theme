import { Island, RichText } from "@hubspot/cms-components";
import SlickSlider from "./Island/SlickSlider.js?island";
import { useId } from "react";


export const Component = ({ fieldValues }) => {
const reactId=useId();
const uniqueClass = `module_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const customClass = fieldValues?.customCss?.customClass;
  const customId = fieldValues?.customCss?.customId;

  const logos = fieldValues?.logoSlider?.logoGroup;
  const sliderEnable=fieldValues?.style?.sliderSettings.sliderEnable;
  const slideToShow=fieldValues?.style?.sliderSettings.slidesToShow;
  const slidesToScroll=fieldValues?.style?.sliderSettings.slidesToScroll;
  const autoPlay=fieldValues?.style?.sliderSettings?.autoPlay;
  const autoPlaySpeed=fieldValues?.style?.sliderSettings?.autoPlaySpeed;
  const sliderDots=fieldValues?.style?.sliderSettings?.sliderDots;
  const sliderArrows=fieldValues?.style?.sliderSettings?.sliderArrows;
  // console.log(logos);
  // console.log("slideToShow",slideToShow)
  // console.log("slideToScroll",slidesToScroll);
  console.log("autoplay",autoPlay)



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
  .content-with-slider.${uniqueClass} {
  ${backgroundCSS}
          padding-top: ${desktopStyle.paddingTop};
          padding-bottom: ${desktopStyle.paddingBottom};
          padding-left: ${desktopStyle.paddingLeft};
          padding-right: ${desktopStyle.paddingRight};
        }
            @media(max-width:1024px) {
          .content-with-slider.${uniqueClass} {
            padding-top: ${tabletStyle.paddingTop};
            padding-bottom: ${tabletStyle.paddingBottom};
            padding-left: ${tabletStyle.paddingLeft};
            padding-right: ${tabletStyle.paddingRight};
}
            }
 @media(max-width:767px) {
         
          .content-with-slider.${uniqueClass} {
            padding-top: ${mobileStyle.paddingTop};
            padding-bottom: ${mobileStyle.paddingBottom};
            padding-left: ${mobileStyle.paddingLeft};
            padding-right: ${mobileStyle.paddingRight};
          }
        }

        /* Parent wrapper that contains all .content-with-slider__logo-img items */
.content-with-slider__logo-wrapper {
 display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 40px;        /* adjust spacing */
  overflow-x: auto; /* optional: scroll if logos overflow */       /* hide overflow if items exceed width */
}

/* Each logo item */
.content-with-slider__logo-img {
  flex: 0 0 auto;              /* do not grow or shrink — fixed basis set by width */
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}

/* The image itself — keep aspect ratio and avoid distortion */
.content-with-slider__logo-img img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;         /* ensures the full logo fits inside the box */
  display: block;
}


`}
      </style>
      <div id={customId} className={`content-with-slider ${uniqueClass} ${customClass}`}>
        <div className="content-with-slider__wrapper content-wrapper">
          <div className="content-with-slider__content">
            <div className="content-with-slider__heading">
              <RichText fieldPath="headingGroup.headingTitle" />
              <RichText fieldPath="headingGroup.headingTitlePara" />
            {
  sliderEnable ? (
    <Island
      hydrateOn="load"
      module={SlickSlider}
      moduleName="SlickSlider"
      clientOnly={true}
      logos={logos}
      slideToShow={slideToShow}
      slidesToScroll={slidesToScroll}
      autoPlay={autoPlay}  // autoplay logic handled inside SlickSlider
      autoPlaySpeed={autoPlaySpeed}
      sliderDots={sliderDots}
      sliderArrows={sliderArrows}


    />
  ) : (
    <>
     {logos?.map((logo, index) => {
  const image =
    logo?.LogoSliderImage?.logoImg ||
    logo?.logo_slider?.logo_image ||   // add this if real structure
    logo?.logo_slider ||               // fallback
    null;

  const src = image?.src || "";
  const alt = image?.alt || "logo";

  return (
    <div  key={index} className="content-with-slider__logo-wrapper">
      <div className="content-with-slider__logo-img">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </div>
  );
})}
    </>
  )
}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Content With Logo Slider",
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
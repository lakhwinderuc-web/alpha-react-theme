import { useId } from 'react';
import { Island } from '@hubspot/cms-components';
import SlickSlider from './Island/SlickSlider.js?island';
import { Icon } from "@hubspot/cms-components";
export const Component = ({ fieldValues }) => {
const cards = fieldValues.cards_repeat?.items || [];
const reactId = useId();
const uniqueClass = `module_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;
const sliderEnabled = fieldValues.slider_enable?.enable;
const autoplay = fieldValues.style.slider_style?.autolpay_enable;
const autoplaySpeed = fieldValues.style.slider_style?.speed;

  const customClass = fieldValues?.custom_id_class?.class;
  const customId = fieldValues?.custom_id_class?.custom_id;


// ---- Extract Dynamic Style Fields ----
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
 ${sliderEnabled ? `
  .${uniqueClass} .slick-arrow {
        width: 40px;
  height: 40px;
  z-index: 1000;
  background: #051f46;
  display: flex !important;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
        }


        .${uniqueClass} .slick-prev {
          left: 0;
        }

        .${uniqueClass} .slick-next {
          right: 0;
        }

        .${uniqueClass} .slick-prev:hover,
        .${uniqueClass} .slick-next:hover {
          opacity: 0.8;
        }

        /* Slick dots styling */
        .${uniqueClass} .slick-dots {
          position: relative;
          bottom: 0;
          margin-top: 30px;
        }

        .${uniqueClass} .slick-dots li { height: auto; width: auto; line-height: normal;}
.${uniqueClass} .slick-dots li button {
  padding: 0 ;
  background: #051f46;
  height: 12px;
  width: 12px;
  border-radius: 100px;
  opacity: 0.5;
}
        .${uniqueClass} .slick-dots li button:before {
          content:none
        }
         .${uniqueClass} .slick-dots li.slick-active button {
    opacity: 1;
}
      .${uniqueClass} .slick-slide {
          padding: 25px;
          border-radius: 10px;
          border: 1px solid #051f46;
        
        }
   .${uniqueClass} .icon-content-cards__cards.slider-enable {
          width: 100%;
          padding:0 50px
        }
   .${uniqueClass} .slick-slide>div { height: 100%;}
.${uniqueClass} .slick-slide>div>div {  height: 100%;}
        .${uniqueClass} .slick-track{  display: flex ;}
       .${uniqueClass} .slick-slide{  margin:0 5px;  height: inherit;}
        .${uniqueClass} .slick-arrow:before { content: unset;}
        .${uniqueClass} .slick-arrow svg path { fill: #fff;}
  ` : `
          
.${uniqueClass} .no-slider {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
}
  .${uniqueClass} .no-slider .icon-content-card__items {
          padding: 25px;
          border-radius: 10px;
          border: 1px solid #051f46;
        
        }
@media(max-width:1024px){
.${uniqueClass} .no-slider {
  grid-template-columns: repeat(2, 1fr);
}
}
      @media(max-width:767px) {
          .${uniqueClass} .no-slider {
  grid-template-columns: repeat(1, 1fr);
}
 }
  `}

        .icon-content-cards.${uniqueClass} {
          ${backgroundCSS};
          padding-top: ${desktopStyle.paddingTop};
          padding-bottom: ${desktopStyle.paddingBottom};
          padding-left: ${desktopStyle.paddingLeft};
          padding-right: ${desktopStyle.paddingRight};
        }

        .${uniqueClass} .icon-content-cards__wrapper {
          max-width: 1280px;
          padding: 0 20px;
          margin: 0 auto;
          width:100%;
        }

        .${uniqueClass} .icon-content-cards__heading {
          text-align: center;
          margin-bottom: 50px;
        }

        .${uniqueClass} .icon-content-cards__heading > *,
        .${uniqueClass} .cardHeading > * {
          margin: 0;
        }

      

        .${uniqueClass} .icon-content-card__icon {
          margin-bottom: 20px;
        }

        .${uniqueClass} .icon-content-card__icon img {
          display: block;
          object-fit: contain;
          max-width: 100%;
          height: auto;
        }

        .${uniqueClass} .iconInner {
          margin-bottom: 30px;
        }

        .${uniqueClass} .iconInner svg {
          height: 20px;
        }



        @media(max-width:1024px) {
          .icon-content-cards.${uniqueClass} {
            padding-top: ${tabletStyle.paddingTop};
            padding-bottom: ${tabletStyle.paddingBottom};
            padding-left: ${tabletStyle.paddingLeft};
            padding-right: ${tabletStyle.paddingRight};
          }

        }

        @media(max-width:767px) {
          .icon-content-cards.${uniqueClass} {
            padding-top: ${mobileStyle.paddingTop};
            padding-bottom: ${mobileStyle.paddingBottom};
            padding-left: ${mobileStyle.paddingLeft};
            padding-right: ${mobileStyle.paddingRight};
          }

      
        }
      `}
    </style>

    <div {...(customId ? { id: customId } : {})} className={`icon-content-cards ${customClass} ${uniqueClass}`}>
      <div className="icon-content-cards__wrapper">
        <div
          className="icon-content-cards__heading"
          dangerouslySetInnerHTML={{ __html: fieldValues.main_heading?.heading || '' }}
        />

    {sliderEnabled ? (
// ---------- SLIDER VERSION ----------
<Island
module={SlickSlider}
hydrateOn="load"
cards={cards}
autoplay={autoplay}       
autoplaySpeed={autoplaySpeed }  
clientOnly={true}
/>
) : (

<div className="icon-content-cards__cards no-slider">
  {cards.map((card, index) => (
    <div key={index} className="icon-content-card__items">
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
          dangerouslySetInnerHTML={{ __html: card.heading_description || '' }}
        />
    </div>
  ))}
</div>
)}


      </div>
    </div>
  </>
);
};




export { fields } from "./fields.js";

export const meta = {
label: "Icon Content Cards",
css_assets: [],
external_js: [],
global: false,
help_text: "",
content_types: ["LANDING_PAGE", "SITE_PAGE"],
js_assets: [],
other_assets: [],
smart_type: "NOT_SMART",
tags: [],
is_available_for_new_content: true
};

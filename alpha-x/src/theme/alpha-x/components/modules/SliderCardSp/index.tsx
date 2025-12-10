import styles from "./sample-react-module.module.css";
import { useId } from "react";
import { Island } from "@hubspot/cms-components";
import SpliderSlide from "./Island/SpliderSlide.js?island";

export const Component = ({ fieldValues }) => {
  const cards = fieldValues.cards_repeat?.items || [];
  const reactId = useId();
  const uniqueClass = `module_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;

  // ---- Extract Dynamic Style Fields ----
  const ds = fieldValues.style?.spacing?.desktop?.desktop_spacing;
  const desktopStyle = {
    paddingTop: ds?.padding?.top?.value + ds?.padding?.top?.units,
    paddingBottom: ds?.padding?.bottom?.value + ds?.padding?.bottom?.units,
    paddingLeft: ds?.padding?.left?.value + ds?.padding?.left?.units,
    paddingRight: ds?.padding?.right?.value + ds?.padding?.right?.units,
  };

  const ts = fieldValues.style?.spacing?.tablet?.tablet_spacing;
  const tabletStyle = {
    paddingTop: ts?.padding?.top?.value + ts?.padding?.top?.units,
    paddingBottom: ts?.padding?.bottom?.value + ts?.padding?.bottom?.units,
    paddingLeft: ts?.padding?.left?.value + ts?.padding?.left?.units,
    paddingRight: ts?.padding?.right?.value + ts?.padding?.right?.units,
  };

  const ms = fieldValues.style?.spacing?.mobile?.mobile_spacing;
  const mobileStyle = {
    paddingTop: ms?.padding?.top?.value + ms?.padding?.top?.units,
    paddingBottom: ms?.padding?.bottom?.value + ms?.padding?.bottom?.units,
    paddingLeft: ms?.padding?.left?.value + ms?.padding?.left?.units,
    paddingRight: ms?.padding?.right?.value + ms?.padding?.right?.units,
  };

  const bg = fieldValues.style?.background;
  let backgroundCSS = "";

  // gradient
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

    const rgbaColors = bg.bg_gradient.colors.map((c) => {
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

    const bgPos =
      positionMap[bg.bg_image.background_position] || "center center";

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
          }
 
          .${uniqueClass} .icon-content-cards__heading {
            text-align: center;
            margin-bottom: 50px;
          }
 
          .${uniqueClass} .icon-content-cards__heading > *,
          .${uniqueClass} .cardHeading > * {
            margin: 0;
          }
 
          .${uniqueClass} .icon-content-cards__cards {
            width: 100%;
            position: relative;
            padding: 0 50px;
          }
 
          .${uniqueClass} .slick-slide {
            padding: 0 10px;
            box-sizing: border-box;
          }
 
          .${uniqueClass} .icon-content-card__items {
            padding: 25px;
            border-radius: 10px;
            border: 1px solid #051f46;
            height: 100%;
            box-sizing: border-box;
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
 
          /* Slick arrows styling */
          .${uniqueClass} .slick-arrow {
            width: 40px;
            height: 40px;
            z-index: 1000;  /* increased for click priority */
            background: #000;
          }
 
          .${uniqueClass} .slick-arrow:before {
            font-size: 40px;
            opacity: 1;
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
 
          .${uniqueClass} .slick-dots li {
            margin: 0 5px;
          }
 
          .${uniqueClass} .slick-dots li button:before {
            font-size: 12px;
            opacity: 0.5;
          }
 
          .${uniqueClass} .slick-dots li.slick-active button:before {
            opacity: 1;
          }
 
          @media(max-width:1024px) {
            .icon-content-cards.${uniqueClass} {
              padding-top: ${tabletStyle.paddingTop};
              padding-bottom: ${tabletStyle.paddingBottom};
              padding-left: ${tabletStyle.paddingLeft};
              padding-right: ${tabletStyle.paddingRight};
            }
 
            .${uniqueClass} .icon-content-cards__cards {
              padding: 0 40px;
            }
          }
 
          @media(max-width:767px) {
            .icon-content-cards.${uniqueClass} {
              padding-top: ${mobileStyle.paddingTop};
              padding-bottom: ${mobileStyle.paddingBottom};
              padding-left: ${mobileStyle.paddingLeft};
              padding-right: ${mobileStyle.paddingRight};
            }
 
            .${uniqueClass} .icon-content-cards__cards {
              padding: 0 35px;

            }

        `}
      </style>
      <div className={`icon-content-cards ${uniqueClass}`}>
        <div className="icon-content-cards__wrapper">
          <div
            className="icon-content-cards__heading"
            dangerouslySetInnerHTML={{
              __html: fieldValues.main_heading.heading,
            }}
          />

           <Island
            hydrateOn="load"
            module={SpliderSlide}
            moduleName="SpliderSlide"
            clientOnly={true}
            cards={cards}          // passing repeater data to Splide
          />
          
        </div>
      </div>
    </>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Slider Card Sp",
  css_assets: [],
  external_js: [],
  global: false,
  help_text: "",
  content_types: ["LANDING_PAGE", "SITE_PAGE"],
  js_assets: [],
  other_assets: [],
  smart_type: "NOT_SMART",
  tags: [],
  is_available_for_new_content: true,
};

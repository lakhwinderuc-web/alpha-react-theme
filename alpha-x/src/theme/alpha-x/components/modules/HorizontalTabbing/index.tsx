import { Island, RichText } from "@hubspot/cms-components";
import HorizontalTabbing from "./Island/HorizontalTabbing.js?island";

import { useId } from "react";

export const Component = ({ fieldValues }) => {
const tabData=fieldValues?.tab_content?.tab_data;
  const reactId = useId();
  const uniqueClass = `widget_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;

  const customClass = fieldValues?.custom_id_class?.class;
  const customId = fieldValues?.custom_id_class?.custom_id;
  const maxWidthEnable=fieldValues?.style?.maximum_content_width?.show_hide_width;
 const maxWidth=fieldValues?.style?.maximum_content_width?.max_width + "px";
const paddingLeftRight=fieldValues?.style?.maximum_content_width?.padding_left_right;
const textColor=fieldValues?.style?.tab_color?.default_style?.text_color?.color;
const bgcolor=fieldValues?.style?.tab_color?.default_style?.background_color?.color;
const activeTextColor=fieldValues?.style?.tab_color?.active_style?.active_text_color?.color;
const activeBgColor=fieldValues?.style?.tab_color?.active_style?.active_background_color?.color;
const svgColor=fieldValues?.style?.svg_icon_style?.svg_icon_color?.color;

 // ---- Extract Dynamic Style Fields ----
  const ds = fieldValues.style?.spacing?.desktop?.desktop_spacing || {};
  const desktopStyle = {
    paddingTop:
      (ds.padding?.top?.value || 0) + (ds.padding?.top?.units || "px"),
    paddingBottom:
      (ds.padding?.bottom?.value || 0) + (ds.padding?.bottom?.units || "px"),
    paddingLeft:
      (ds.padding?.left?.value || 0) + (ds.padding?.left?.units || "px"),
    paddingRight:
      (ds.padding?.right?.value || 0) + (ds.padding?.right?.units || "px"),
    marginTop: (ds?.margin?.top?.value || 0) + (ds?.margin?.top?.units || "px"),
    marginBottom:
      (ds?.margin?.bottom?.value || 0) + (ds?.margin?.bottom?.units || "px"),
  };

  const ts = fieldValues.style?.spacing?.tablet?.tablet_spacing || {};
  const tabletStyle = {
    paddingTop:
      (ts.padding?.top?.value || 0) + (ts.padding?.top?.units || "px"),
    paddingBottom:
      (ts.padding?.bottom?.value || 0) + (ts.padding?.bottom?.units || "px"),
    paddingLeft:
      (ts.padding?.left?.value || 0) + (ts.padding?.left?.units || "px"),
    paddingRight:
      (ts.padding?.right?.value || 0) + (ts.padding?.right?.units || "px"),
    marginTop: (ts?.margin?.top?.value || 0) + (ts?.margin?.top?.units || "px"),
    marginBottom:
      (ts?.margin?.bottom?.value || 0) + (ts?.margin?.bottom?.units || "px"),
  };

  const ms = fieldValues.style?.spacing?.mobile?.mobile_spacing || {};
  const mobileStyle = {
    paddingTop:
      (ms.padding?.top?.value || 0) + (ms.padding?.top?.units || "px"),
    paddingBottom:
      (ms.padding?.bottom?.value || 0) + (ms.padding?.bottom?.units || "px"),
    paddingLeft:
      (ms.padding?.left?.value || 0) + (ms.padding?.left?.units || "px"),
    paddingRight:
      (ms.padding?.right?.value || 0) + (ms.padding?.right?.units || "px"),
    marginTop: (ms?.margin?.top?.value || 0) + (ms?.margin?.top?.units || "px"),
    marginBottom:
      (ms?.margin?.bottom?.value || 0) + (ms?.margin?.bottom?.units || "px"),
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
.horizontal-tabbing-container.${uniqueClass} {
         ${backgroundCSS}
          padding-top: ${desktopStyle.paddingTop};
          padding-bottom: ${desktopStyle.paddingBottom};
          padding-left: ${desktopStyle.paddingLeft};
          padding-right: ${desktopStyle.paddingRight};
           margin-top:${desktopStyle.marginTop};
      margin-bottom: ${desktopStyle.marginBottom};
   

        }
  @media(max-width:1024px) {
          .horizontal-tabbing-container.${uniqueClass} {
            padding-top: ${tabletStyle.paddingTop} ;
            padding-bottom: ${tabletStyle.paddingBottom} ;
            padding-left: ${tabletStyle.paddingLeft};
            padding-right: ${tabletStyle.paddingRight};
             margin-top:${tabletStyle.marginTop};
      margin-bottom:${tabletStyle.marginBottom};
          }
        }

        @media(max-width:767px) {
          .horizontal-tabbing-container.${uniqueClass} {
            padding-top: ${mobileStyle.paddingTop};
            padding-bottom: ${mobileStyle.paddingBottom};
            padding-left: ${mobileStyle.paddingLeft};
            padding-right: ${mobileStyle.paddingRight};
             margin-top:${mobileStyle.marginTop};
      margin-bottom:${mobileStyle.marginBottom};
          }
      }
          .${uniqueClass} .page-width{
          width: 100%;
  max-width: ${maxWidthEnable ? maxWidth : "1050px"};
margin: 0 auto;
padding: 0 ${maxWidthEnable ? `${paddingLeftRight}px` : "0px"};
          }

          .${uniqueClass} .horizontal-tabbing-container__main-heading{
              margin-bottom: 2.0rem;
              text-align:center;
          }

          .${uniqueClass} .layout-two .horizontal-tabbing {
    text-align: center;
}

.${uniqueClass} .horizontal-tabbing ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin: 0 auto;
    max-width: max-content;
    overflow: hidden;
    padding: 0;
    grid-column-gap: .1rem;
    grid-row-gap: .1rem;
    border-radius: 2.0rem;
}

.${uniqueClass} .horizontal-tabbing li {
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    position: relative;
    padding: 0.5625rem 1.875rem;
    color: ${textColor};
    background-color: ${bgcolor};
    transition: 0.3s
}

.${uniqueClass} .horizontal-tabbing li.active {
    color: ${activeTextColor};
    background-color: ${activeBgColor};
}

.${uniqueClass} .horizontal-tabbing-intro__tab-box {
    padding-top: 4.0rem;
}

.${uniqueClass} .horizontal-tabbing-intro__tab-content-wrap {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
   .${uniqueClass} .horizontal-tabbing-intro__left-section {
    padding-top: 3.125rem;
}
    .${uniqueClass} .horizontal-tabbing-intro__image, .${uniqueClass} .horizontal-tabbing-intro__left-section {
    flex: 0 0 50%;
    max-width: 48%;
}
   .${uniqueClass} .horizontal-tabbing-intro__left-section {
    transition: all 1.5s cubic-bezier(.165, .84, .44, 1);
}

.${uniqueClass} .horizontal-tabbing-intro__icon svg, .${uniqueClass} .horizontal-tabbing-intro__icon>img, .${uniqueClass} .horizontal-tabbing-intro__icon>span>svg {
    object-fit: contain;
    transition: .3s;
    width: 100%;
}
.${uniqueClass} .horizontal-tabbing-intro__icon svg,
.${uniqueClass} .horizontal-tabbing-intro__icon img {
  max-height:4.0rem;
  border-radius:0.5rem;
}
  .${uniqueClass} .horizontal-tabbing-intro__icon svg{
  fill:${svgColor};
  }

.${uniqueClass} .horizontal-tabbing-intro__image img {
    max-height: 21.875rem;
        object-fit: cover;
    width: 100%;
    border-radius: 0.1875rem;
}

`}
    </style>
    <div {...(customId ? { id: customId } : {})} className={`horizontal-tabbing-container ${uniqueClass} ${customClass ? customClass : ""}`}>
     <div className="page-width">
<div className="horizontal-tabbing-container__main-heading">
<RichText  fieldPath="main_heading.heading"/>
</div>
<Island
 hydrateOn="load"
              module={HorizontalTabbing}
              moduleName="HorizontalTabbing}"
              clientOnly={true}
              tabData={tabData}
/>
     </div>
    </div>
    </>
  );
};

export { fields } from "./fields.js";


export const meta = {
 "label": "Horizontal Tabbing",
 "css_assets": [],
 "external_js": [],
 "global": false,
 "help_text": "",
 "content_types": [
  "ANY",
  "LANDING_PAGE",
  "SITE_PAGE",
  "BLOG_POST",
  "BLOG_LISTING"
 ],
 "js_assets": [],
 "other_assets": [],
 "smart_type": "NOT_SMART",
 "tags": [],
 "is_available_for_new_content": true
}
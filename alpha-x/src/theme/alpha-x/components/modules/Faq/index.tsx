import { Island, RichText } from "@hubspot/cms-components";
import { useId } from "react";
import Tabbing from "./Island/Tabbing.js?island";


export const Component = ({ fieldValues }) => {
  const reactId = useId();
  const uniqueClass = `widget_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;

  const customClass = fieldValues?.custom_id_class?.class;
  const customId = fieldValues?.custom_id_class?.custom_id;

  const faq=fieldValues?.faq_repeater?.faq;
  const FaqBgColor=fieldValues?.style?.faq_style?.faq_list_bg?.faq_bg_color?.color;
  const border=fieldValues?.style?.faq_style?.border_radius_group?.border;
  const activeBorder=fieldValues?.style?.faq_style?.border_radius_group?.active_border;
  const faqBorderRadius=fieldValues?.style?.faq_style?.border_radius_group?.border_radius;
 const iconSize=fieldValues?.style?.faq_style?.icon_types_style?.icon_size;
const iconBold=fieldValues?.style?.faq_style?.icon_types_style?.icon_bold;
const iconColor=fieldValues?.style?.faq_style?.icon_types_style?.icon_color?.color;
const iconColorHover=fieldValues?.style?.faq_style?.icon_types_style?.icon_color_hover_active?.color;
const iconBackStyleEnable=fieldValues?.style?.faq_style?.icon_types_style?.icon_bg_style_enable;
const iconBgColor=fieldValues?.style?.faq_style?.icon_background_style?.background_color?.color;
const iconBgColorActive=fieldValues?.style?.faq_style?.icon_background_style?.active_color?.color;
const itemHoverColor=fieldValues?.style?.faq_style?.hover_active?.background_color?.color;
const itemTextColor=fieldValues?.style?.faq_style?.hover_active?.question_text_color?.color;

const twoColumnLayoutEnable=fieldValues?.style?.faq_style?.two_column_layout_enable;
const colNumber=fieldValues?.style?.faq_style?.two_column_faq_setting?.faq_item_column_number;
const colSpacing=fieldValues?.style?.faq_style?.two_column_faq_setting?.column_center_spacing;


const maximumContentWidthEnalbe=fieldValues?.style?.maximum_content_width?.show_hide_width;
const maxWidth=fieldValues?.style?.maximum_content_width?.max_width;
const paddingLeftRight=fieldValues?.style?.maximum_content_width?.padding_left_right;

  const boxShadowEnable =
    fieldValues?.style?.faq_style?.box_shadow_edit?.box_shadow_enable;
  const boxShadowType =
    fieldValues?.style?.faq_style?.box_shadow?.shadowType
      ?.shadowType;
  const horizontalOffset =
    fieldValues?.style?.faq_style?.box_shadow
      ?.horizontal_offset;
  const verticalOffset =
    fieldValues?.style?.faq_style?.box_shadow
      ?.vertical_offset;
  const blurRadius =
    fieldValues?.style?.faq_style?.box_shadow
      ?.blur_radius;
  const spreadRadius =
    fieldValues?.style?.faq_style?.box_shadow
      ?.spread_radius;
  const shadowColor =
    fieldValues?.style?.faq_style?.box_shadow
      ?.shadow_color?.color;

  const boxShadowStyle = boxShadowEnable
    ? `${boxShadowType} ${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`
    : "none";


const BorderStyling = {
  // We check if borderStyle exists AND if the specific side exists
  borderTop: border?.top?.width
    ? `${border.top.width.value}${border.top.width.units} ${border.top.style} ${border.top.color}`
    : 'none',

  borderRight: border?.right?.width
    ? `${border.right.width.value}${border.right.width.units} ${border.right.style} ${border.right.color}`
    : 'none',

  borderBottom: border?.bottom?.width
    ? `${border.bottom.width.value}${border.bottom.width.units} ${border.bottom.style} ${border.bottom.color}`
    : 'none',

  borderLeft: border?.left?.width
    ? `${border.left.width.value}${border.left.width.units} ${border.left.style} ${border.left.color}`
    : 'none',

  // Use optional chaining for opacity and provide a fallback of 1
  opacity: border?.top?.opacity !== undefined ? border.top.opacity / 100 : 1,
};


const ActiveBorderStyling = {
  // We check if borderStyle exists AND if the specific side exists
  borderTop: activeBorder?.top?.width
    ? `${activeBorder.top.width.value}${activeBorder.top.width.units} ${activeBorder.top.style} ${activeBorder.top.color}`
    : 'none',

  borderRight: activeBorder?.right?.width
    ? `${activeBorder.right.width.value}${activeBorder.right.width.units} ${activeBorder.right.style} ${activeBorder.right.color}`
    : 'none',

  borderBottom: activeBorder?.bottom?.width
    ? `${activeBorder.bottom.width.value}${activeBorder.bottom.width.units} ${activeBorder.bottom.style} ${activeBorder.bottom.color}`
    : 'none',

  borderLeft: activeBorder?.left?.width
    ? `${activeBorder.left.width.value}${activeBorder.left.width.units} ${activeBorder.left.style} ${activeBorder.left.color}`
    : 'none',

  // Use optional chaining for opacity and provide a fallback of 1
  opacity: activeBorder?.top?.opacity !== undefined ? activeBorder.top.opacity / 100 : 1,
};


  
const FaqItemsSpacingDs=fieldValues?.style?.faq_style?.faq_items_spacing?.desktop?.desktop_spacing;
const FaqItemsSpacingMs=fieldValues?.style?.faq_style?.faq_items_spacing?.mobile?.mobile_spacing;
const ItemdesktopStyle = {
    paddingTop:
      (FaqItemsSpacingDs.padding?.top?.value || 0) + (FaqItemsSpacingDs.padding?.top?.units || "px"),
    paddingBottom:
      (FaqItemsSpacingDs.padding?.bottom?.value || 0) + (FaqItemsSpacingDs.padding?.bottom?.units || "px"),
    paddingLeft:
      (FaqItemsSpacingDs.padding?.left?.value || 0) + (FaqItemsSpacingDs.padding?.left?.units || "px"),
    paddingRight:
      (FaqItemsSpacingDs.padding?.right?.value || 0) + (FaqItemsSpacingDs.padding?.right?.units || "px"),
    marginTop: (FaqItemsSpacingDs?.margin?.top?.value || 0) + (FaqItemsSpacingDs?.margin?.top?.units || "px"),
    marginBottom:
      (FaqItemsSpacingDs?.margin?.bottom?.value || 0) + (FaqItemsSpacingDs?.margin?.bottom?.units || "px"),
  };

  const itemMobileStyle = {
    paddingTop:
      (FaqItemsSpacingMs.padding?.top?.value || 0) + (FaqItemsSpacingMs.padding?.top?.units || "px"),
    paddingBottom:
      (FaqItemsSpacingMs.padding?.bottom?.value || 0) + (FaqItemsSpacingMs.padding?.bottom?.units || "px"),
    paddingLeft:
      (FaqItemsSpacingMs.padding?.left?.value || 0) + (FaqItemsSpacingMs.padding?.left?.units || "px"),
    paddingRight:
      (FaqItemsSpacingMs.padding?.right?.value || 0) + (FaqItemsSpacingMs.padding?.right?.units || "px"),
    marginTop: (FaqItemsSpacingMs?.margin?.top?.value || 0) + (FaqItemsSpacingMs?.margin?.top?.units || "px"),
    marginBottom:
      (FaqItemsSpacingMs?.margin?.bottom?.value || 0) + (FaqItemsSpacingMs?.margin?.bottom?.units || "px"),
  };

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
      {
        `
 .faq-accordion.${uniqueClass} {
         ${backgroundCSS}
          padding-top: ${desktopStyle.paddingTop};
          padding-bottom: ${desktopStyle.paddingBottom};
          padding-left: ${desktopStyle.paddingLeft};
          padding-right: ${desktopStyle.paddingRight};
           margin-top:${desktopStyle.marginTop};
      margin-bottom: ${desktopStyle.marginBottom};
   

        }
  @media(max-width:1024px) {
          .faq-accordion.${uniqueClass} {
            padding-top: ${tabletStyle.paddingTop} ;
            padding-bottom: ${tabletStyle.paddingBottom} ;
            padding-left: ${tabletStyle.paddingLeft};
            padding-right: ${tabletStyle.paddingRight};
             margin-top:${tabletStyle.marginTop};
      margin-bottom:${tabletStyle.marginBottom};
          }
        }

        @media(max-width:767px) {
          .faq-accordion.${uniqueClass} {
            padding-top: ${mobileStyle.paddingTop};
            padding-bottom: ${mobileStyle.paddingBottom};
            padding-left: ${mobileStyle.paddingLeft};
            padding-right: ${mobileStyle.paddingRight};
             margin-top:${mobileStyle.marginTop};
      margin-bottom:${mobileStyle.marginBottom};
          }
      }

      .${uniqueClass} .faq-accordion__item .${uniqueClass}faq-accordion__item-current{
background-color: rgba(250, 249, 251, 100%);
       border-top: ${activeBorder.borderTop};
border-right: ${activeBorder.borderRight};
border-bottom: ${activeBorder.borderBottom};
border-left: ${activeBorder.borderLeft};
}
.${uniqueClass} .faq-accordion__page-width
{
    width: 100%;
    max-width: ${maximumContentWidthEnalbe}?${maxWidth}px:"";
    margin: 0 auto;
    padding: 0 ${maximumContentWidthEnalbe}?${paddingLeftRight}px: 0;
}

.${uniqueClass} .faq-accordion__item-title{
    align-items: center;
    display: flex;
    justify-content: space-between;
}
    .${uniqueClass} .faq-accordion__item-title:hover{
    color:${itemTextColor};
    }

.${uniqueClass} .faq-accordion__answer{
    overflow: hidden;
    transition: height 0.4s ease, padding-top 0.4s ease;
}

.${uniqueClass} .faq-accordion__item{
padding-top: ${ItemdesktopStyle.paddingTop} ;
            padding-bottom: ${ItemdesktopStyle.paddingBottom} ;
            padding-left: ${ItemdesktopStyle.paddingLeft};
            padding-right: ${ItemdesktopStyle.paddingRight};
             margin-top:${ItemdesktopStyle.marginTop};
      margin-bottom:${ItemdesktopStyle.marginBottom};
    position: relative;
    cursor: pointer;
    transition: all 0.3s;
    background-color: ${FaqBgColor};
    border-radius: ${faqBorderRadius}px;
     border-top: ${BorderStyling.borderTop};
border-right: ${BorderStyling.borderRight};
border-bottom: ${BorderStyling.borderBottom};
border-left: ${BorderStyling.borderLeft};
    box-shadow: ${boxShadowStyle};
}

  @media(max-width:767px) {
  .${uniqueClass} .faq-accordion__item{
  padding-top: ${itemMobileStyle.paddingTop} ;
            padding-bottom: ${itemMobileStyle.paddingBottom} ;
            padding-left: ${itemMobileStyle.paddingLeft};
            padding-right: ${itemMobileStyle.paddingRight};
             margin-top:${itemMobileStyle.marginTop};
      margin-bottom:${itemMobileStyle.marginBottom};
  }
  }
    .${uniqueClass} .faq-accordion__item:hover{
        background-color: ${itemHoverColor};

    }

.${uniqueClass} .faq-accordion__toggle-arrow {
    width: ${iconSize}px;
    height: ${iconSize}px;
    border-radius: 25px;
    stroke-width:${iconBold}px;
    stroke:${iconColor};
    padding: 0.3125rem;
    background-color:  (${iconBackStyleEnable} ? ${iconBgColor}) : '#fffff';
transform: rotate(180deg);
}    
.${uniqueClass} .faq-accordion__toggle-arrow:hiver {
    background-color:  (${iconBackStyleEnable} ? ${iconBgColorActive}) : '#fffff'
}

.${uniqueClass} .faq-accordion__toggle-arrow:hover{
    stroke:${iconColorHover};
} 

.${uniqueClass} .faq-accordion__list{
      display: grid;
grid-column-gap: ${twoColumnLayoutEnable ? `${colSpacing}px` : '0px'};
grid-template-columns: ${twoColumnLayoutEnable ? `repeat(${colNumber}, 1fr)` : '1fr'};
}

        `}
    </style>

    <section {...(customId ? { id: customId } : {})} className={`faq-accordion ${uniqueClass} ${customClass ? customClass : ""} `}>
    <div className="faq-accordion__container page-center faq-accordion__page-width">
      <div className="faq-accordion__row-wrapper">
<div className="faq-accordion__row-content">
<RichText fieldPath="add_heading.heading"/>
</div>
 <Island
              hydrateOn="load"
              module={Tabbing}
              moduleName="Tabbing"
              clientOnly={true}
              items={faq}
              iconBold={iconBold}
            />
      </div>
    </div>
    </section>
    </>

  );
};

export { fields } from "./fields.js";


export const meta = {
 "label": "Faq",
 "css_assets": [],
 "external_js": [],
 "global": false,
 "help_text": "",
 "content_types": [
  "ANY",
  "LANDING_PAGE",
  "SITE_PAGE"
 ],
 "js_assets": [],
 "other_assets": [],
 "smart_type": "NOT_SMART",
 "tags": [],
 "is_available_for_new_content": true
}
import { Island, RichText } from "@hubspot/cms-components";
import { useId } from "react";

import CounterWidget from "./Island/CounterWidget.js?island";

export const Component = ({ fieldValues }) => {
  const reactId = useId();
  const uniqueClass = `widget_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;

  const customClass = fieldValues?.custom_id_class?.class;
  const customId = fieldValues?.custom_id_class?.custom_id;

  const numberContent = fieldValues?.content_repeater?.number_content;
  const number = fieldValues?.content_repeater?.number_content?.add_number;
  const sign = fieldValues?.content_repeater?.number_content?.add_sign;
  const duration =
    fieldValues?.content_repeater?.number_content?.speed_duration;
  const symbol = fieldValues?.content_repeater?.number_content?.add_symbol;
  const content = fieldValues?.content_repeater?.number_content?.add_content;
  const lastTextWrap =
    fieldValues?.content_repeater?.number_content
      ?.last_text_wrap_new_line_toggle;

  // cards per row

  const cardPerRowDs = fieldValues?.style?.card_per_row?.card_per_row_desktop;
  const cardPerRowTs = fieldValues?.style?.card_per_row?.card_per_row_tablet;
  const cardPerRowMs = fieldValues?.style?.card_per_row?.card_per_row_mobile;
  const cardPerRowSs =
    fieldValues?.style?.card_per_row?.card_per_row_small_screen;

  // card styling

  const boxBackGroundColor =
    fieldValues?.style?.card_style?.box_background_color?.background_color
      ?.color;
  const counterNumberColor =
    fieldValues?.style?.card_style?.counter_number_color_size_alignment
      ?.counter_number_color?.color;
  const headingTag =
    fieldValues?.style?.card_style?.counter_number_color_size_alignment
      ?.counter_heading_tag;
  const textAlignMent =
    fieldValues?.style?.card_style?.counter_number_color_size_alignment
      ?.text_allignment.text_align;
  const customFontEnbale =
    fieldValues?.style?.card_style?.counter_number_color_size_alignment
      ?.custom_font_show_hide;

  // font size
  const fontSizeDs =
    fieldValues?.style?.card_style?.counter_number_font_size
      ?.font_size_desktop || 12;
  const fontSizeMs =
    fieldValues?.style?.card_style?.counter_number_font_size
      ?.font_size_mobile || 12;

      const fontSizeDsFinal=customFontEnbale?fontSizeDs:"12";
      const fontSizeMsFinal=customFontEnbale?fontSizeMs:"12";
     console.log("customFontEnbale",customFontEnbale);
      console.log("fontSizeDsFinal",fontSizeDsFinal);
      console.log("fontSizeMsFinal",fontSizeMsFinal);
  // content flex
  const flexJustify =
    fieldValues?.style?.card_style?.justify_content_type
      ?.justify_content_choice;

  // align-content
  const alignItems =
    fieldValues?.style?.card_style?.card_vertical_alignment_direction_spacing
      ?.align_items;
  const flexDirection =
    fieldValues?.style?.card_style?.card_vertical_alignment_direction_spacing
      ?.flex_direction_choice;

  //card_content_center_spacing

  const cardContentCenterSpacingDs =
    fieldValues?.style?.card_style?.card_content_center_spacing
      ?.desktop_spacing;
  const cardContentCenterSpacingMs =
    fieldValues?.style?.card_style?.card_content_center_spacing?.mobile_spacing;

  // border Styling
  const borderStyle =
    fieldValues?.style?.card_style?.border_radius_shadow?.border_style.style ||
    "none";
  const boxRadius =
    fieldValues?.style?.card_style?.border_radius_shadow?.box_radius;
  const boxShadowEnable =
    fieldValues?.style?.card_style?.border_radius_shadow?.box_shadow_enable;
  const boxShadowType =
    fieldValues?.style?.card_style?.border_radius_shadow?.box_shadow
      ?.shadowType;
  const horizontalOffset =
    fieldValues?.style?.card_style?.border_radius_shadow?.box_shadow
      ?.horizontal_offset;
  const verticalOffset =
    fieldValues?.style?.card_style?.border_radius_shadow?.box_shadow
      ?.vertical_offset;
  const blurRadius =
    fieldValues?.style?.card_style?.border_radius_shadow?.box_shadow
      ?.blur_radius;
  const spreadRadius =
    fieldValues?.style?.card_style?.border_radius_shadow?.box_shadow
      ?.spread_radius;
  const shadowColor =
    fieldValues?.style?.card_style?.border_radius_shadow?.box_shadow
      ?.shadow_color?.color;

  const boxShadowStyle = boxShadowEnable
    ? `${boxShadowType} ${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`
    : "none";

  // Row and column spacing

  const desktopRowSpacing =
    fieldValues?.style?.card_style?.box_column_row_spacing?.add_spacing_desktop;
  const tabletRowSpacing =
    fieldValues?.style?.card_style?.box_column_row_spacing?.add_spacing_tab;
  const mobileRowSpacing =
    fieldValues?.style?.card_style?.box_column_row_spacing?.add_spacing_mobile;

  // card_column_inside_spacing

  const cardInsideSpacingDs =
    fieldValues?.style?.card_style?.card_column_inside_spacing
      ?.card_spacing_inside_ds?.desktop_spacing||{};
  const cardInsideSpacingTs =
    fieldValues?.style?.card_style?.card_column_inside_spacing
      ?.card_spacing_inside_ts?.tablet_spacing||{};
  const cardInsideSpacingMs =
    fieldValues?.style?.card_style?.card_column_inside_spacing
      ?.card_spacing_inside_ms?.mobile_spacing||{};

      console.log("cardInsideSpacingDs",cardInsideSpacingDs);
      console.log("cardInsideSpacingTs",cardInsideSpacingTs);

      const cardInSpaceDs={
 paddingTop:
      (cardInsideSpacingDs.padding?.top?.value || 0) + (cardInsideSpacingDs.padding?.top?.units || "px"),
    paddingBottom:
      (cardInsideSpacingDs.padding?.bottom?.value || 0) + (cardInsideSpacingDs.padding?.bottom?.units || "px"),
    paddingLeft:
      (cardInsideSpacingDs.padding?.left?.value || 0) + (cardInsideSpacingDs.padding?.left?.units || "px"),
    paddingRight:
      (cardInsideSpacingDs.padding?.right?.value || 0) + (cardInsideSpacingDs.padding?.right?.units || "px"),
    marginTop: (cardInsideSpacingDs?.margin?.top?.value || 0) + (cardInsideSpacingDs?.margin?.top?.units || "px"),
    marginBottom:
      (cardInsideSpacingDs?.margin?.bottom?.value || 0) + (cardInsideSpacingDs?.margin?.bottom?.units || "px"),
      }

      const cardInSpaceTs={
paddingTop:
      (cardInsideSpacingTs.padding?.top?.value || 0) + (cardInsideSpacingTs.padding?.top?.units || "px"),
    paddingBottom:
      (cardInsideSpacingTs.padding?.bottom?.value || 0) + (cardInsideSpacingTs.padding?.bottom?.units || "px"),
    paddingLeft:
      (cardInsideSpacingTs.padding?.left?.value || 0) + (cardInsideSpacingTs.padding?.left?.units || "px"),
    paddingRight:
      (cardInsideSpacingTs.padding?.right?.value || 0) + (cardInsideSpacingTs.padding?.right?.units || "px"),
    marginTop: (cardInsideSpacingTs?.margin?.top?.value || 0) + (cardInsideSpacingTs?.margin?.top?.units || "px"),
    marginBottom:
      (cardInsideSpacingTs?.margin?.bottom?.value || 0) + (cardInsideSpacingTs?.margin?.bottom?.units || "px"),
      }

      const cardInSpaceMs={
paddingTop:
      (cardInsideSpacingMs.padding?.top?.value || 0) + (cardInsideSpacingMs.padding?.top?.units || "px"),
    paddingBottom:
      (cardInsideSpacingMs.padding?.bottom?.value || 0) + (cardInsideSpacingMs.padding?.bottom?.units || "px"),
    paddingLeft:
      (cardInsideSpacingMs.padding?.left?.value || 0) + (cardInsideSpacingMs.padding?.left?.units || "px"),
    paddingRight:
      (cardInsideSpacingMs.padding?.right?.value || 0) + (cardInsideSpacingMs.padding?.right?.units || "px"),
    marginTop: (cardInsideSpacingMs?.margin?.top?.value || 0) + (cardInsideSpacingMs?.margin?.top?.units || "px"),
    marginBottom:
      (cardInsideSpacingMs?.margin?.bottom?.value || 0) + (cardInsideSpacingMs?.margin?.bottom?.units || "px"),

      }


  //card_spacing_outside_spacing
  const cardOutSideSpacingDs =
    fieldValues?.style?.card_style?.card_column_outside_spacing
      ?.card_spacing_outside_ds?.desktop_spacing;
  const cardOutSideSpacingTs =
    fieldValues?.style?.card_style?.card_column_outside_spacing
      ?.card_spacing_outside_ts?.tablet_spacing;
  const cardOutSideSpacingMs =
    fieldValues?.style?.card_style?.card_column_outside_spacing
      ?.card_spacing_outside_ms?.mobile_spacing;

const cardSpacingOutDs={
   paddingTop:
      (cardOutSideSpacingDs.padding?.top?.value || 0) + (cardOutSideSpacingDs.padding?.top?.units || "px"),
    paddingBottom:
      (cardOutSideSpacingDs.padding?.bottom?.value || 0) + (cardOutSideSpacingDs.padding?.bottom?.units || "px"),
    paddingLeft:
      (cardOutSideSpacingDs.padding?.left?.value || 0) + (cardOutSideSpacingDs.padding?.left?.units || "px"),
    paddingRight:
      (cardOutSideSpacingDs.padding?.right?.value || 0) + (cardOutSideSpacingDs.padding?.right?.units || "px"),
    marginTop: (cardOutSideSpacingDs?.margin?.top?.value || 0) + (cardOutSideSpacingDs?.margin?.top?.units || "px"),
    marginBottom:
      (cardOutSideSpacingDs?.margin?.bottom?.value || 0) + (cardOutSideSpacingDs?.margin?.bottom?.units || "px"),
}

const cardSpacingOutTs={
   paddingTop:
      (cardOutSideSpacingTs.padding?.top?.value || 0) + (cardOutSideSpacingTs.padding?.top?.units || "px"),
    paddingBottom:
      (cardOutSideSpacingTs.padding?.bottom?.value || 0) + (cardOutSideSpacingTs.padding?.bottom?.units || "px"),
    paddingLeft:
      (cardOutSideSpacingTs.padding?.left?.value || 0) + (cardOutSideSpacingTs.padding?.left?.units || "px"),
    paddingRight:
      (cardOutSideSpacingTs.padding?.right?.value || 0) + (cardOutSideSpacingTs.padding?.right?.units || "px"),
    marginTop: (cardOutSideSpacingTs?.margin?.top?.value || 0) + (cardOutSideSpacingTs?.margin?.top?.units || "px"),
    marginBottom:
      (cardOutSideSpacingTs?.margin?.bottom?.value || 0) + (cardOutSideSpacingTs?.margin?.bottom?.units || "px"),
}

const cardSpacingOutMs={
   paddingTop:
      (cardOutSideSpacingMs.padding?.top?.value || 0) + (cardOutSideSpacingMs.padding?.top?.units || "px"),
    paddingBottom:
      (cardOutSideSpacingMs.padding?.bottom?.value || 0) + (cardOutSideSpacingMs.padding?.bottom?.units || "px"),
    paddingLeft:
      (cardOutSideSpacingMs.padding?.left?.value || 0) + (cardOutSideSpacingMs.padding?.left?.units || "px"),
    paddingRight:
      (cardOutSideSpacingMs.padding?.right?.value || 0) + (cardOutSideSpacingMs.padding?.right?.units || "px"),
    marginTop: (cardOutSideSpacingMs?.margin?.top?.value || 0) + (cardOutSideSpacingMs?.margin?.top?.units || "px"),
    marginBottom:
      (cardOutSideSpacingMs?.margin?.bottom?.value || 0) + (cardOutSideSpacingMs?.margin?.bottom?.units || "px"),
}

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
         .counter-widget.${uniqueClass} {
         ${backgroundCSS}
          padding-top: ${desktopStyle.paddingTop};
          padding-bottom: ${desktopStyle.paddingBottom};
          padding-left: ${desktopStyle.paddingLeft};
          padding-right: ${desktopStyle.paddingRight};
           margin-top:${desktopStyle.marginTop};
      margin-bottom: ${desktopStyle.marginBottom};
   

        }
  @media(max-width:1024px) {
          .counter-widget.${uniqueClass} {
            padding-top: ${tabletStyle.paddingTop} ;
            padding-bottom: ${tabletStyle.paddingBottom} ;
            padding-left: ${tabletStyle.paddingLeft};
            padding-right: ${tabletStyle.paddingRight};
             margin-top:${tabletStyle.marginTop};
      margin-bottom:${tabletStyle.marginBottom};
          }
        }

        @media(max-width:767px) {
          .counter-widget.${uniqueClass} {
            padding-top: ${mobileStyle.paddingTop};
            padding-bottom: ${mobileStyle.paddingBottom};
            padding-left: ${mobileStyle.paddingLeft};
            padding-right: ${mobileStyle.paddingRight};
             margin-top:${mobileStyle.marginTop};
      margin-bottom:${mobileStyle.marginBottom};
          }
        }

        .${uniqueClass} .counter-widget_container.container-wrapper{
         max-width: 77.5rem;
        }
      
        .${uniqueClass} .counter-widget__content{
            display: flex;
    flex-wrap: wrap;
 justify-content: ${flexJustify};
       padding-top: ${cardSpacingOutDs.paddingTop};
          padding-bottom: ${cardSpacingOutDs.paddingBottom};
          padding-left: ${cardSpacingOutDs.paddingLeft};
          padding-right: ${cardSpacingOutDs.paddingRight};
           margin-top:${cardSpacingOutDs.marginTop};
      margin-bottom: ${cardSpacingOutDs.marginBottom};
    grid-gap: ${desktopRowSpacing}px;
        }

@media(max-width:1024px){
.${uniqueClass} .counter-widget__content{
  grid-gap: ${tabletRowSpacing}px;
   padding-top: ${cardSpacingOutTs.paddingTop};
          padding-bottom: ${cardSpacingOutTs.paddingBottom};
          padding-left: ${cardSpacingOutTs.paddingLeft};
          padding-right: ${cardSpacingOutTs.paddingRight};
           margin-top:${cardSpacingOutTs.marginTop};
      margin-bottom: ${cardSpacingOutTs.marginBottom};
}
}
  @media(max-width:767px){
  .${uniqueClass} .counter-widget__content{
  grid-gap: ${mobileRowSpacing}px;
   padding-top: ${cardSpacingOutMs.paddingTop};
          padding-bottom: ${cardSpacingOutMs.paddingBottom};
          padding-left: ${cardSpacingOutMs.paddingLeft};
          padding-right: ${cardSpacingOutMs.paddingRight};
           margin-top:${cardSpacingOutMs.marginTop};
      margin-bottom: ${cardSpacingOutMs.marginBottom};
  }
  }



        .${uniqueClass} .counter-widget__text{
         display: flex;
         text-align: ${textAlignMent};
    flex-direction: ${flexDirection};
    grid-gap: ${cardContentCenterSpacingDs}px;
    border-radius:${boxRadius}px;
    border: 1px ${borderStyle} #000000;
    box-shadow: ${boxShadowStyle};
    flex: 0 0 calc((100% - (3 * 1.25rem)) / ${cardPerRowDs});
            padding-top: ${cardInSpaceDs.paddingTop};
            padding-bottom: ${cardInSpaceDs.paddingBottom};
            padding-left: ${cardInSpaceDs.paddingLeft};
            padding-right: ${cardInSpaceDs.paddingRight};
             margin-top:${cardInSpaceDs.marginTop};
      margin-bottom:${cardInSpaceDs.marginBottom};
    background-color:${boxBackGroundColor};
        align-items: ${alignItems};
        }

         @media(max-width:1024px){
         .${uniqueClass} .counter-widget__text{
          flex: 0 0 calc((100% - (3 * 1.25rem)) / ${cardPerRowTs});
           padding-top: ${cardInSpaceTs.paddingTop};
            padding-bottom: ${cardInSpaceTs.paddingBottom};
            padding-left: ${cardInSpaceTs.paddingLeft};
            padding-right: ${cardInSpaceTs.paddingRight};
             margin-top:${cardInSpaceTs.marginTop};
      margin-bottom:${cardInSpaceTs.marginBottom};
         }
         }

        @media(max-width:767px){
           flex: 0 0 calc((100% - (3 * 1.25rem)) / ${cardPerRowMs});
            padding-top: ${cardInSpaceMs.paddingTop};
            padding-bottom: ${cardInSpaceMs.paddingBottom};
            padding-left: ${cardInSpaceMs.paddingLeft};
            padding-right: ${cardInSpaceMs.paddingRight};
             margin-top:${cardInSpaceMs.marginTop};
      margin-bottom:${cardInSpaceMs.marginBottom};
           gap:${cardContentCenterSpacingMs}px;
        }
  @media(max-width:580px){
           flex: 0 0 calc((100% - (3 * 1.25rem)) / ${cardPerRowSs});
        }

.${uniqueClass} .counter-widget__animate {
    color: ${counterNumberColor};
    font-size: ${fontSizeDsFinal}px;
}
     @media(max-width:767px){
     .${uniqueClass} ..counter-widget__animate{
  font-size: ${fontSizeMsFinal}px;
     }
     }
    `}
      </style>
      <div
        {...(customId ? { id: customId } : {})}
        className={`counter-widget ${uniqueClass} ${customClass ? customClass : ""}`}
      >
        <div className="counter-widget_container container-wrapper">
          <div className="counter-widget_heading">
            <RichText fieldPath="main_heading.add_content" />
          </div>

          <Island
            hydrateOn="load"
            module={CounterWidget}
            moduleName="CounterWidget"
            clientOnly={true}
            items={numberContent}
            value={number}
            symbol={symbol}
            sign={sign}
            duration={duration}
            content={content}
            heading={headingTag}
          />
        </div>
      </div>
    </>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Counter",
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

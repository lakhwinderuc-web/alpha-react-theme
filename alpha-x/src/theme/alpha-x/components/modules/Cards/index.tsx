import { Icon, RichText } from "@hubspot/cms-components";
import { useId } from "react";

export const Component = (fieldValues) => {
  const reactId = useId();
  const uniqueClass = `module_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;

    const customClass = fieldValues?.custom_id_class?.class;
      const customId = fieldValues?.custom_id_class?.custom_id;

  const cards = fieldValues?.add_card?.card_repeater;
  const cardsPerRow =
    fieldValues?.style?.card_style?.cards_per_row?.cards_per_row_desktop || {};

  const cardBackgroundColor =
    fieldValues?.style?.card_color_styling?.card_background_color?.color ||
    "";
  const iconBackgroundColor =
    fieldValues?.style?.card_color_styling?.icon_background_color?.color;
  const iconColor =
    fieldValues?.style?.card_color_styling?.icon_color?.color;
  const cardBackgroundSize =
    fieldValues?.style?.card_color_styling
      ?.card_background_size_desktop;
  const iconSize =
    fieldValues?.style?.card_color_styling?.icon_size;
  const flexJustify =
    fieldValues?.style?.flex_justify_style?.flex_justify_content_choice ;
  const cardHoverEnable =
    fieldValues?.style?.card_hover_style
      ?.card_hover_style_show_hide;
  const shadowColor =
    fieldValues?.style?.card_hover_style?.shadow_color?.color;
  const cardBorderRadius =
    fieldValues?.style?.card_border_radius?.border_radius;


    console.log(flexJustify);
    console.log(shadowColor);
    console.log(cardBorderRadius);

      const cardsInnerSpacingDs =
    fieldValues?.style?.card_style?.cards_inner_spacing?.desktop_spacing
      ?.desktop || {};
  const DesktopCardStyle = {
    paddingTop:
      (cardsInnerSpacingDs.padding?.top?.value || 0) +
      (cardsInnerSpacingDs.padding?.top?.units || "px"),
    paddingBottom:
      (cardsInnerSpacingDs.padding?.bottom?.value || 0) +
      (cardsInnerSpacingDs.padding?.bottom?.units || "px"),
    paddingLeft:
      (cardsInnerSpacingDs.padding?.left?.value || 0) +
      (cardsInnerSpacingDs.padding?.left?.units || "px"),
    paddingRight:
      (cardsInnerSpacingDs.padding?.right?.value || 0) +
      (cardsInnerSpacingDs.padding?.right?.units || "px"),
  marginTop: (cardsInnerSpacingDs?.margin?.top?.value|| 0) + (cardsInnerSpacingDs?.margin?.top?.units||"px"),
    marginBottom: (cardsInnerSpacingDs?.margin?.bottom?.value||0) + (cardsInnerSpacingDs?.margin?.bottom?.units||"px"),
  
  };

  console.log(cardsInnerSpacingDs);
  const cardsInnerSpacingTs =
    fieldValues?.style?.card_style?.cards_inner_spacing?.tablet_spacing?.tablet;
  const TabletCardStyle = {
    paddingTop:
      (cardsInnerSpacingTs.padding?.top?.value || 0) +
      (cardsInnerSpacingTs.padding?.top?.units || "px"),
    paddingBottom:
      (cardsInnerSpacingTs.padding?.bottom?.value || 0) +
      (cardsInnerSpacingTs.padding?.bottom?.units || "px"),
    paddingLeft:
      (cardsInnerSpacingTs.padding?.left?.value || 0) +
      (cardsInnerSpacingTs.padding?.left?.units || "px"),
    paddingRight:
      (cardsInnerSpacingTs.padding?.right?.value || 0) +
      (cardsInnerSpacingTs.padding?.right?.units || "px"),
 marginTop: (cardsInnerSpacingTs?.margin?.top?.value|| 0) + (cardsInnerSpacingTs?.margin?.top?.units||"px"),
    marginBottom: (cardsInnerSpacingTs?.margin?.bottom?.value||0) + (cardsInnerSpacingTs?.margin?.bottom?.units||"px"),
  };

  const cardsInnerSpacingMs =
    fieldValues?.style?.card_style?.cards_inner_spacing?.mobile_spacing?.mobile;
  const MobileCardStyle = {
    paddingTop:
      (cardsInnerSpacingMs.padding?.top?.value || 0) +
      (cardsInnerSpacingMs.padding?.top?.units || "px"),
    paddingBottom:
      (cardsInnerSpacingMs.padding?.bottom?.value || 0) +
      (cardsInnerSpacingMs.padding?.bottom?.units || "px"),
    paddingLeft:
      (cardsInnerSpacingMs.padding?.left?.value || 0) +
      (cardsInnerSpacingMs.padding?.left?.units || "px"),
    paddingRight:
      (cardsInnerSpacingMs.padding?.right?.value || 0) +
      (cardsInnerSpacingMs.padding?.right?.units || "px"),
    marginTop:
      (cardsInnerSpacingMs?.margin?.top?.value || 0) +
      (cardsInnerSpacingMs?.margin?.top?.units || "px"),
    marginBottom:
      (cardsInnerSpacingMs?.margin?.bottom?.value || 0) +
      (cardsInnerSpacingMs?.margin?.bottom?.units|| "px"),
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
    marginTop: (ds?.margin?.top?.value|| 0) + (ds?.margin?.top?.units||"px"),
    marginBottom: (ds?.margin?.bottom?.value||0) + (ds?.margin?.bottom?.units||"px"),
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
    marginBottom: (ts?.margin?.bottom?.value||0) + (ts?.margin?.bottom?.units|| "px"),
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
    marginTop: (ms?.margin?.top?.value|| 0) + (ms?.margin?.top?.units|| "px"),
    marginBottom: (ms?.margin?.bottom?.value || 0) + (ms?.margin?.bottom?.units|| "px"),
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
  .cards.${uniqueClass} {
         ${backgroundCSS}
          padding-top: ${desktopStyle.paddingTop};
          padding-bottom: ${desktopStyle.paddingBottom};
          padding-left: ${desktopStyle.paddingLeft};
          padding-right: ${desktopStyle.paddingRight};
           margin-top:${desktopStyle.marginTop};
      margin-bottom: ${desktopStyle.marginBottom};
        position:relative;
       flex: 0 0 calc((100% - (2 * 20px)) / ${cardsPerRow});

        }
  @media(max-width:1024px) {
          .cards.${uniqueClass} {
            padding-top: ${tabletStyle.paddingTop} ;
            padding-bottom: ${tabletStyle.paddingBottom} ;
            padding-left: ${tabletStyle.paddingLeft};
            padding-right: ${tabletStyle.paddingRight};
             margin-top:${tabletStyle.marginTop};
      margin-bottom:${tabletStyle.marginBottom};
          }

        }

        @media(max-width:767px) {
          .cards.${uniqueClass} {
            padding-top: ${mobileStyle.paddingTop};
            padding-bottom: ${mobileStyle.paddingBottom};
            padding-left: ${mobileStyle.paddingLeft};
            padding-right: ${mobileStyle.paddingRight};
             margin-top:${mobileStyle.marginTop};
      margin-bottom:${mobileStyle.marginBottom};
          }
        }


      .${uniqueClass} .cards__row .${uniqueClass} .cards__card-item{
           display: flex;
      }
      .${uniqueClass} .cards__row{
      display:flex;
    justify-content: ${flexJustify};
    padding-top: 20px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    gap: 20px;
   flex-wrap:wrap;
      }
     

      .${uniqueClass} .cards__card-item{
    display: flex;
    grid-gap: 20px;
    flex-direction: column;
    position: relative;
          border-radius: ${cardBorderRadius}px;
    border: 1px none #000000;
   box-shadow: ${shadowColor ? `0px 4px 12px 0px ${shadowColor}` : "none"};
  transition: box-shadow 0.3s ease;
    background-color: ${cardBackgroundColor};
    background-size:${cardBackgroundSize}px;


    padding-top: ${DesktopCardStyle.paddingTop};
          padding-bottom: ${DesktopCardStyle.paddingBottom};
          padding-left: ${DesktopCardStyle.paddingLeft};
          padding-right: ${DesktopCardStyle.paddingRight};
           margin-top:${DesktopCardStyle.marginTop};
      margin-bottom: ${DesktopCardStyle.marginBottom};
    }
      @media(max-width:1024px) {
      .${uniqueClass} .cards__card-item{
           padding-top: ${TabletCardStyle.paddingTop} ;
            padding-bottom: ${TabletCardStyle.paddingBottom} ;
            padding-left: ${TabletCardStyle.paddingLeft};
            padding-right: ${TabletCardStyle.paddingRight};
             margin-top:${TabletCardStyle.marginTop};
      margin-bottom:${TabletCardStyle.marginBottom};
      
      }
      }

      @media(max-width:767px){
.${uniqueClass} .cards__card-item{
      padding-top: ${MobileCardStyle.paddingTop} ;
            padding-bottom: ${MobileCardStyle.paddingBottom} ;
            padding-left: ${MobileCardStyle.paddingLeft};
            padding-right: ${MobileCardStyle.paddingRight};
             margin-top:${MobileCardStyle.marginTop};
      margin-bottom:${MobileCardStyle.marginBottom};
}
      }
    .${uniqueClass} .cards__image svg{
    height:40px;
    width:40px;
    }
      .${uniqueClass} .cards__image img{
      width: auto;
    max-height: ${iconSize}px;
    }

    .${uniqueClass} .cards__image img,svg{
    background-color:${iconBackgroundColor};
    color:${iconColor}
    }
      
      `}
      </style>
      <div {...(customId ? { id: customId } : {})} className={`cards ${uniqueClass}  ${customClass ? customClass : ''} `}>
        <div className="cards__conatainer container-wrapper">
          <div className="cards__heading">
            <RichText fieldPath="add_content.heading_description" />
          </div>
          <div className="cards__row">
            {cards.map((card, index) => {
              return (
                <div className="cards__card-item" key={index}>
                  <div className="cards__image">
                    {card?.icon_image_hubspot_icon == "image" && (
                      <img
                        src={card?.image_field.src}
                        alt={card?.image_field.alt}
                        width={card?.image_field.width}
                        height={card?.image_field.height}
                        loading="lazy"
                      />
                    )}
                    {card?.icon_image_hubspot_icon == "hubspot" && (
                      <Icon
                        fieldPath={`add_card.card_repeater[${index}].icon_field`}
                      />
                    )}
                  </div>
                  <div className="cards__logo-title">
                    <RichText
                      fieldPath={`add_card.card_repeater[${index}].heading_description`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Cards",
  css_assets: [],
  external_js: [],
  global: false,
  help_text: "",
  content_types: ["LANDING_PAGE", "SITE_PAGE", "BLOG_POST", "BLOG_LISTING"],
  js_assets: [],
  other_assets: [],
  smart_type: "NOT_SMART",
  tags: [],
  is_available_for_new_content: true,
};

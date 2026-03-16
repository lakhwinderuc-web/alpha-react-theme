import { Island, RichText } from "@hubspot/cms-components";
import { useId } from "react";
import { Icon } from "@hubspot/cms-components";


export const Component = ({ fieldValues }) => {
const reactId = useId();
const uniqueClass = `module_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;
 const customClass = fieldValues?.custom_id_class?.class;
  const customId = fieldValues?.custom_id_class?.custom_id;

  const items=fieldValues?.repeater_items?.add_items;
  console.log("items",items);


    const cardsPerRowDs=fieldValues?.style?.icon_text_grid_per_row?.cards_per_row_ds;
  const cardsPerRowTS=fieldValues?.style?.icon_text_grid_per_row?.cards_per_row_ts;
  const cardsPerRowMS=fieldValues?.style?.icon_text_grid_per_row?.cards_per_row_ms;

  const iconGapDesktop=fieldValues?.style?.gap_between_icon_text_grid?.gap_between_cards_desktop;
  const iconGapTablet=fieldValues?.style?.gap_between_icon_text_grid?.gap_between_cards_tablet;
  const iconGapMobile=fieldValues?.style?.gap_between_icon_text_grid?.gap_between_cards_mobile;


  const iconBackgroundSize=fieldValues?.style?.icon_style?.icon_background_size?.icon_background_size;
  const iconBackgroundColor=fieldValues?.style?.icon_style?.background_color?.color;
  const iconSize=fieldValues?.style?.icon_style?.icon_size;
  const iconColor=fieldValues?.style?.icon_style?.icon_svg_color?.color;
  const iconFlexDireaction=fieldValues?.style?.icon_style?.icon_text_flex_direction_column;

  function resolveLink(linkField) {
  if (!linkField || !linkField.url) {
    return { href: "#", target: "_self", rel: "" };
  }

  const { href, type } = linkField.url;
  const openInNewTab = linkField.open_in_new_tab;
  const noFollow = linkField.no_follow;

  let finalHref = href || "#";
  let rel = "";
  let target = openInNewTab ? "_blank" : "_self";

  switch (type) {
    case "EMAIL_ADDRESS":
      finalHref = `mailto:${href}`;
      rel = "nofollow";
      target = "_self";
      break;

    case "PHONE_NUMBER":
      finalHref = `tel:${href}`;
      rel = "nofollow";
      target = "_self";
      break;

    case "WHATSAPP_NUMBER":
      finalHref = `https://wa.me/${href}`;
      rel = "nofollow";
      target = "_blank";
      break;

    case "FILE":
      rel = "noopener";
      break;

    case "EXTERNAL":
      rel = openInNewTab
        ? "noopener nofollow"
        : noFollow
        ? "nofollow"
        : "";
      break;

    default:
      rel = noFollow ? "nofollow" : "";
      break;
  }

  return { href: finalHref, target, rel };
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
      .icon-text-grid.${uniqueClass} {
         ${backgroundCSS}
          padding-top: ${desktopStyle.paddingTop};
          padding-bottom: ${desktopStyle.paddingBottom};
          padding-left: ${desktopStyle.paddingLeft};
          padding-right: ${desktopStyle.paddingRight};
           margin-top:${desktopStyle.marginTop};
      margin-bottom: ${desktopStyle.marginBottom};
        }

  @media(max-width:1024px) {
          .icon-text-grid.${uniqueClass} {
            padding-top: ${tabletStyle.paddingTop} ;
            padding-bottom: ${tabletStyle.paddingBottom} ;
            padding-left: ${tabletStyle.paddingLeft};
            padding-right: ${tabletStyle.paddingRight};
             margin-top:${tabletStyle.marginTop};
      margin-bottom:${tabletStyle.marginBottom};
          }
        }

        @media(max-width:767px) {
          .icon-text-grid.${uniqueClass} {
            padding-top: ${mobileStyle.paddingTop};
            padding-bottom: ${mobileStyle.paddingBottom};
            padding-left: ${mobileStyle.paddingLeft};
            padding-right: ${mobileStyle.paddingRight};
             margin-top:${mobileStyle.marginTop};
      margin-bottom:${mobileStyle.marginBottom};
          }
      }

      .${uniqueClass} .icon-text-grid{
    position: relative;
    padding: 0px;
      }

      .${uniqueClass} .icon-text-grid__title-heading{
      margin-bottom: 1.25rem;
      }

     .${uniqueClass} .icon-text-grid__content-list-box{
      display: flex;
      flex-direction:${`${iconFlexDireaction}?'column' :''`}
      flex-wrap: wrap;
      grid-gap: ${iconGapDesktop}px;
      }

       @media(max-width:1024px){
        .${uniqueClass} .icon-text-grid__content-list-box{
      grid-gap: ${iconGapTablet}px;
        }
       }

       @media(max-width:767px){
        .${uniqueClass} .icon-text-grid__content-list-box{
      grid-gap: ${iconGapMobile}px;
       }

      .${uniqueClass} .icon-text-grid__icon-wrapper--top{
     width: ${iconBackgroundSize}px || 1.3125rem;
     height: ${iconBackgroundSize}px || 1.3125rem;
      border-radius: 100%;
     display: inline-flex;
     align-items: center;
     justify-content: center;
     background-color: ${iconBackgroundColor};
      }

      .${uniqueClass} .icon-text-grid__icon-wrapper svg{
    height: ${iconSize}px || 1.3125rem;
    width: ${iconSize}px || 1.3125rem;
    fill:${iconColor};
      }
     .${uniqueClass} .icon-text-grid__icon-wrapper img{
    height: ${iconSize}px || 1.3125rem;
    width: ${iconSize}px || 1.3125rem;
      }
    
      .${uniqueClass} .icon-text-grid__content{
      line-height: 1.2
      }

      .${uniqueClass} .icon-text-grid__content-list .${uniqueClass} .icon-text-grid__content-list-box>div{
            flex: 0 0 calc((100% - (1 - 1) * ${iconGapDesktop}px) / ${cardsPerRowDs});
      }

       @media(max-width:1024px){
       .${uniqueClass}.icon-text-grid__content-list ${uniqueClass} .icon-text-grid__content-list-box>div{
            flex: 0 0 calc((100% - (1 - 1) * ${iconGapTablet}px) / ${cardsPerRowTS});
       }
 @media(max-width:767px){
       .${uniqueClass}.icon-text-grid__content-list ${uniqueClass} .icon-text-grid__content-list-box>div{
            flex: 0 0 calc((100% - (1 - 1) * ${iconGapMobile}px) / ${cardsPerRowMS});
       }
      `}
    </style>
    <section {...(customId ? { id: customId } : {})} className={`icon-text-grid ${uniqueClass} ${customClass ? customClass : ""}`}>
      <div className="icon-text-grid__container container">
        <div className="icon-text-grid__column-section">
          <div className="icon-text-grid__left-column">
            <div className="icon-text-grid__title-heading">
<RichText fieldPath="add_section_heading.heading"/>
            </div>
            <div className="icon-text-grid__content-list icon-text-grid__content-list-box">
{items.map((item,index)=>{
          const { href, target, rel } = resolveLink(item.link_field);
  return(
    <div key={index} className="icon-text-grid__content-list-items icon-text-grid__item">
           <a href={href} target={target} rel={rel}>
            <div className="icon-text-grid__icon-wrapper icon-text-grid__icon-wrapper--top">
            {/* HubSpot Icon */}
                           {item.add_icon_choice === "hubspot_icon" && item.icon_field && (
                             <Icon fieldPath={`repeater_items.add_items[${index}].icon_field`} />
                           )}

                            {/* Image Icon */}
                {item.add_icon_choice === "image" && item.image_field && (
                  <img
                    src={item.image_field.src}
                    alt={item.image_field.alt || "social icon"}
                    width={item.image_field.width}
                    height={item.image_field.height}
                    loading="lazy"
                  />
                )}
 {/* SVG Icon */}
                {item.add_icon_choice === "svg_icon" && item.svg_icon && (
                  <div
                    dangerouslySetInnerHTML={{ __html: item.svg_icon }}
                  />
                )}
                </div>
                <div className="icon-text-grid__content" dangerouslySetInnerHTML={{__html:item.add_content}}/>
                </a>
      </div>
  )
})}
            </div>
          </div>
        </div>
      </div>
    </section >
    </>
  );
};

export { fields } from "./fields.js";


export const meta = {
 "label": "Icon Text Grid",
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
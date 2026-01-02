import { RichText, Icon } from "@hubspot/cms-components";
import { useId } from "react";
export const Component = ({ fieldValues }) => {
  const orderList = fieldValues?.orderList?.orderRepeater;
  const buttonText=fieldValues?.buttonGroup.buttonText;
   const selectedButtonType = fieldValues?.buttonGroup.buttonChoice;
const buttonType=fieldValues?.buttonGroup.add_icon.btnIcon;
const image=fieldValues?.contentImg?.image;

  const customClass = fieldValues?.custom_id_class?.class;
  const customId = fieldValues?.custom_id_class?.custom_id;
const emptyString='""';

const reactId = useId();
const uniqueClass = `module_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;
  // console.log("orderList", orderList);

    // custom container Width
  const customWidth=fieldValues?.style?.customContainer?.customContainerWidth?.addWidth;
  const marginBottom=fieldValues?.style?.mainHeadingContentStyle?.marginBottom;
  const marginBottomMobile=fieldValues?.style?.mainHeadingContentStyle.marginBottomMobile;
  const maxWidth=fieldValues?.style?.mainHeadingContentStyle.maxWidth;
  const leftColumn=fieldValues?.style?.flexDivideGap?.leftColumn;
  const rightColumn=fieldValues?.style?.flexDivideGap?.rightColumn;
  const centerSpacingDs=fieldValues?.style?.flexDivideGap?.centerSpacing?.centerSpacingDesktop;
  const centerSpacingMobile=fieldValues?.style?.flexDivideGap?.centerSpacing?.centerSpacingMobile;
  const verticalAlignment=fieldValues?.style?.flexDivideGap?.columnAlignment?.columnVerticalAlignment;
  const leftSpace=fieldValues?.style?.orderListBtnIconStyle?.leftSpace;
  const imageBorderRadius=fieldValues?.style?.imageStyle?.imageBorderRadius;
const overlayColor=fieldValues?.style?.background?.bg_overlay?.overlay_color?.color;
const overlayOpacity=fieldValues?.style?.background?.bg_overlay?.opacity;

const buttonClass =
    selectedButtonType && selectedButtonType !== "select"
      ? `hs-elevate-button hs-elevate-button--${selectedButtonType}`
      : "";
  function resolveLink(linkField) {
  if (!linkField || !linkField.url) return { href: "#", target: "_self", rel: "" };

  const { href, type } = linkField.url;
  const openInNewTab = linkField.open_in_new_tab;
  const noFollow = linkField.no_follow;

  let finalHref = href || "#";
  let rel = "";
  let target = openInNewTab ? "_blank" : "_self";

  switch (type) {
    case "EMAIL_ADDRESS":
      finalHref = `mailto:${href}`;
      rel = "nofollow"; // email links should be nofollow
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
      // file downloads can open in new tab
      rel = "noopener";
      break;

    case "CONTENT":
    case "BLOG":
      // internal links → usually follow
      rel = noFollow ? "nofollow" : "";
      break;

    case "CALL_TO_ACTION":
      // CTA generated links can keep default
      rel = noFollow ? "nofollow" : "";
      break;

    case "EXTERNAL":
      // External links should be nofollow + noopener when opening in new tab
      rel = openInNewTab ? "noopener nofollow" : (noFollow ? "nofollow" : "");
      break;

    case "PAYMENT":
      rel = "nofollow";
      break;

    default:
      rel = noFollow ? "nofollow" : "";
      break;
  }

  return { href: finalHref, target, rel };
}
// Btn Link
  const linkData = resolveLink(fieldValues?.buttonGroup?.link_field);

  
// ---- Extract Dynamic Style Fields ----
const ds = fieldValues.style?.spacing?.desktop?.desktop_spacing || {};
const desktopStyle = {
  paddingTop: (ds.padding?.top?.value || 0) + (ds.padding?.top?.units || 'px'),
  paddingBottom: (ds.padding?.bottom?.value || 0) + (ds.padding?.bottom?.units || 'px'),
  paddingLeft: (ds.padding?.left?.value || 0) + (ds.padding?.left?.units || 'px'),
  paddingRight: (ds.padding?.right?.value || 0) + (ds.padding?.right?.units || 'px'),
  marginTop: ds?.margin?.top?.value + ds?.margin?.top?.units,
  marginBottom: ds?.margin?.bottom?.value + ds?.margin?.bottom?.units,
};

const ts = fieldValues.style?.spacing?.tablet?.tablet_spacing || {};
const tabletStyle = {
  paddingTop: (ts.padding?.top?.value || 0) + (ts.padding?.top?.units || 'px'),
  paddingBottom: (ts.padding?.bottom?.value || 0) + (ts.padding?.bottom?.units || 'px'),
  paddingLeft: (ts.padding?.left?.value || 0) + (ts.padding?.left?.units || 'px'),
  paddingRight: (ts.padding?.right?.value || 0) + (ts.padding?.right?.units || 'px'),
  marginTop: ts?.margin?.top?.value + ts?.margin?.top?.units,
  marginBottom: ts?.margin?.bottom?.value + ts?.margin?.bottom?.units,
};

const ms = fieldValues.style?.spacing?.mobile?.mobile_spacing || {};
const mobileStyle = {
  paddingTop: (ms.padding?.top?.value || 0) + (ms.padding?.top?.units || 'px'),
  paddingBottom: (ms.padding?.bottom?.value || 0) + (ms.padding?.bottom?.units || 'px'),
  paddingLeft: (ms.padding?.left?.value || 0) + (ms.padding?.left?.units || 'px'),
  paddingRight: (ms.padding?.right?.value || 0) + (ms.padding?.right?.units || 'px'),
  marginTop: ms?.margin?.top?.value + ms?.margin?.top?.units,
  marginBottom: ms?.margin?.bottom?.value + ms?.margin?.bottom?.units,
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

const overlayCSS = `
    background: ${overlayColor};
    opacity: ${overlayOpacity}%;
  `;
  return (
    <>
    <style>
      {`

         .image-with-content.${uniqueClass} {
         ${backgroundCSS}
         width:${customWidth}px;
          padding-top: ${desktopStyle.paddingTop};
          padding-bottom: ${desktopStyle.paddingBottom};
          padding-left: ${desktopStyle.paddingLeft};
          padding-right: ${desktopStyle.paddingRight};
           margin-top:${desktopStyle.marginTop};
      margin-bottom: ${desktopStyle.marginBottom};
        }
  @media(max-width:1024px) {
          .image-with-content.${uniqueClass} {
            padding-top: ${tabletStyle.paddingTop};
            padding-bottom: ${tabletStyle.paddingBottom};
            padding-left: ${tabletStyle.paddingLeft};
            padding-right: ${tabletStyle.paddingRight};
             margin-top:${tabletStyle.marginTop};
      margin-bottom:${tabletStyle.marginBottom};
          }

        }

        @media(max-width:767px) {
          .image-with-content.${uniqueClass} {
            padding-top: ${mobileStyle.paddingTop};
            padding-bottom: ${mobileStyle.paddingBottom};
            padding-left: ${mobileStyle.paddingLeft};
            padding-right: ${mobileStyle.paddingRight};
             margin-top:${mobileStyle.marginTop};
      margin-bottom:${mobileStyle.marginBottom};
          }
        }
     .${uniqueClass} .image-with-content{
          padding-top: 100px;
    padding-bottom: 100px;
      }
   .${uniqueClass} .image-with-content__container{
    margin: 0 auto;
    max-width: 1280px;
    padding: 0 20px;
    width: 100%;
    }

     .image-with-content.${uniqueClass},.${uniqueClass} .image-with-content__container{
    position:relative;
    }

.${uniqueClass} .image-with-content__overlay {
    position: absolute;
    ${overlayCSS};
    inset: 0;
}
    .${uniqueClass} .image-with-content__main-heading{
    margin-bottom: ${marginBottom}px;
    max-width: ${maxWidth}px ;

    }

     @media(max-width:767px){
      .${uniqueClass} .image-with-content__main-heading{
    margin-bottom: ${marginBottomMobile}px;
     }
      }
    .${uniqueClass} .image-with-content__col-section{
        display: flex;
    align-items: ${verticalAlignment};
    flex-wrap: wrap;
    justify-content: space-between;
    gap:${centerSpacingDs}px;
    }
     @media(max-width:767px){
     .${uniqueClass} .image-with-content__col-section{
gap:${centerSpacingMobile}
     }
     }

    .${uniqueClass} .image-with-content__left-col{
        flex: 0 0 ${leftColumn}%;
    max-width: ${leftColumn}%;
    }
    .${uniqueClass} .image-with-content__listing ul {
        list-style: none;
    margin: 16px 0 32px;
    padding: 0;
    }

    .${uniqueClass} .image-with-content__title-content{
        align-items: center;
    display: flex;
    padding: 0;
    }
    .${uniqueClass} .image-with-content__icon-wrapper{
        flex: 0 0 auto;
        }

       .${uniqueClass} .image-with-content__order-listing .image-with-content__title-heading .image-with-content-list_content{
            flex: 1;
    margin-left: 16px;
    }
   .${uniqueClass} .image-with-content__icon-wrapper img,.image-with-content__icon-wrapper svg,a.simple-banner__button svg , a.simple-banner__button img  {
    height:10px;
    display: block;
    object-fit: contain;
}
.${uniqueClass} a.simple-banner__button svg , a.simple-banner__button img{
height:10px;
}
.${uniqueClass} a.simple-banner__button {
    display: inline-flex;
    align-items: center;
    gap: ${leftSpace};
}

.${uniqueClass} .image-with-content__right-col{
    flex: 0 0 ${rightColumn}%;
    max-width: ${rightColumn}%;
    }

    .${uniqueClass} .image-with-content__right-image{
        border-radius: ${imageBorderRadius}px;
    overflow: hidden;
    }
 .${uniqueClass}.image-with-content__right-image>img{
display: block;
    height: auto;
    object-fit: cover;
    object-position: center;
    width: 100%;
    }
      `}
    </style>
    
      <section {...(customId ? { id: customId } : {})} className={`image-with-content ${customClass ? customClass : ''} ${uniqueClass}`}>
      
       {bg?.background_type === "bg_image" &&(
       <div className="image-with-content__overlay"></div>
       )}

        <div className="image-with-content__container content-wrapper">
          <div className="image-with-content__main-heading">
            <RichText fieldPath="mainContent.titleHeading" />
          </div>
          <div className="image-with-content__column-grid">
            <div className="image-with-content__col-section">
              <div className="image-with-content__left-col">
                <div className="image-with-content__title-heading">
                  <RichText fieldPath="addContent.subHeading" />
                </div>
              <div className="image-with-content__listing">
  {/* Move the UL outside the map */}
  <ul className="image-with-content__order-listing">
    {orderList.map((item, index) => (
      // The key goes on the LI because it is now the outermost element in the map
      <li className="image-with-content__title-content" key={index}>
        <div className="image-with-content__icon-wrapper">
          {item.listIcon === "hub-icon" && (
            <Icon
              fieldPath={`orderList.orderRepeater[${index}].iconField`}
            />
          )}

          {item.listIcon === "img-icon" && (
            <img
              src={item.imgIcon?.src}
              alt={item.imgIcon?.alt || ""}
              loading="lazy"
            />
          )}

          {item.listIcon === "svg-icon" && (
            <div
              className="image-with-content__svg-icon"
              dangerouslySetInnerHTML={{ __html: item.svgIcon }}
            />
          )}
          </div>
            <div dangerouslySetInnerHTML={{ __html: item.addContent }} />
      </li>
    ))}
  </ul>
</div>
                <div className="image-with-content__btn">
                  <a className={` simple-banner__button ${buttonClass}`}
              href={linkData.href}
              target={
               linkData.target
              }
              rel={linkData.rel}>{buttonText}  {buttonType==="hub-icon" &&(<span>
              <Icon fieldPath="buttonGroup.add_icon.icon_field"/></span>
              )} 
               </a>
                </div>
              </div>
              <div className="image-with-content__right-col">
<div className="image-with-content__right-image">
  <img src={image.src} alt={image.alt} height={image.height} width={image.width}loading={image.loading}/>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Image With Content List",
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

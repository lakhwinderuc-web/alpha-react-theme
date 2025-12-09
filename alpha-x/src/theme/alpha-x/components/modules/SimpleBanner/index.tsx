import { RichText } from "@hubspot/cms-components";
import styles from "./alpha-x-banner.module.css";
// import cx, { staticWithModule } from "../../utils/classnames.js";
import { createComponent } from "../../utils/create-component.js";
import { useId } from "react";


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
// Components
const BannerWrapper = createComponent("div");
const BannerHeading = createComponent("div");
const BannerButton = createComponent("div");



export const Component = ({ fieldValues }) => {
  const buttonText = fieldValues?.buttonGroup?.buttonText;
  const buttonEnable = fieldValues?.buttonGroup?.buttonEnable;
  const customClass = fieldValues?.customCss?.customClass;
  const customId = fieldValues?.customCss?.customId;
  const selectedButtonType = fieldValues?.buttonGroup.buttonChoice;

  //link 

  const link=fieldValues?.buttonGroup?.link_field;
  // const href=link?.url?.href;
  // const linkTarget=link?.open_in_new_tab?"blank":"self";
  // const linkRel=link?.no_follow;

    const uniqueId = useId(); 

      const instanceClass = `module-${uniqueId.replace(/:/g, '-')}`;
    console.log(uniqueId);

  const buttonClass =
    selectedButtonType && selectedButtonType !== "select"
      ? `hs-elevate-button hs-elevate-button--${selectedButtonType}`
      : "";


  // Desktop
  const ds = fieldValues.style?.spacing?.desktop?.desktop_spacing;
  // Tablet
  const ts = fieldValues.style?.spacing?.tablet?.tablet_spacing;
  // Mobile
  const ms = fieldValues.style?.spacing?.mobile?.mobile_spacing;

 

  // Button styling fields
 
const desktopStyle = {
  paddingTop: ds?.padding?.top?.value + ds?.padding?.top?.units,
  paddingBottom: ds?.padding?.bottom?.value + ds?.padding?.bottom?.units,
  paddingLeft: ds?.padding?.left?.value + ds?.padding?.left?.units,
  paddingRight: ds?.padding?.right?.value + ds?.padding?.right?.units,
  marginTop: ds?.margin?.top?.value + ds?.margin?.top?.units,
  marginBottom: ds?.margin?.bottom?.value + ds?.margin?.bottom?.units,

};
   const tabletStyle = {
  paddingTop: ts?.padding?.top?.value + ts?.padding?.top?.units,
  paddingBottom: ts?.padding?.bottom?.value + ts?.padding?.bottom?.units,
  paddingLeft: ts?.padding?.left?.value + ts?.padding?.left?.units,
  paddingRight: ts?.padding?.right?.value + ts?.padding?.right?.units,
   marginTop: ts?.margin?.top?.value + ts?.margin?.top?.units,
  marginBottom: ts?.margin?.bottom?.value + ts?.margin?.bottom?.units,
};
const mobileStyle = {
  paddingTop: ms?.padding?.top?.value + ms?.padding?.top?.units,
  paddingBottom: ms?.padding?.bottom?.value + ms?.padding?.bottom?.units,
  paddingLeft: ms?.padding?.left?.value + ms?.padding?.left?.units,
  paddingRight: ms?.padding?.right?.value + ms?.padding?.right?.units,
  marginTop: ms?.margin?.top?.value + ms?.margin?.top?.units,
  marginBottom: ms?.margin?.bottom?.value + ms?.margin?.bottom?.units,
};
 //  Background
  const bgField = fieldValues.style?.background_field;
  const bgType = bgField?.background_type;
  const gradient = bgField?.gradient_field;
  const bgImage = bgField?.background_image;
   console.log(gradient)

  let backgroundImage = "";
if (bgType === "color" && gradient) {
    const vertical = gradient.side_or_corner?.verticalSide;
    const horizontal = gradient.side_or_corner?.horizontalSide;
 
    let direction = "to bottom";
    if (vertical && horizontal) {
      direction = `to ${vertical.toLowerCase()} ${horizontal.toLowerCase()}`;
    } else if (vertical) {
      direction = vertical.toLowerCase() === "top" ? "to top" : "to bottom";
    } else if (horizontal) {
      direction = horizontal.toLowerCase() === "left" ? "to left" : "to right";
    }
 
    const rgbaColors = gradient.colors.map(c => {
      const col = c.color;
      return `rgba(${col.r}, ${col.g}, ${col.b}, ${col.a})`;
    });
 
    backgroundImage = `
      background: linear-gradient(
        ${direction},
        ${rgbaColors.join(", ")}
      );
    `;
  }

  if (bgType === "image" && bgImage?.src) {
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
    const bgPos = positionMap[bgImage.background_position] || "center center";
 backgroundImage = `background-image: url(${bgImage.src});
                     background-position: ${bgPos};
                     background-repeat: no-repeat;
                     background-size: cover;`;
   
  }

const linkData = resolveLink(fieldValues?.buttonGroup?.link_field);

  return (
    <>
    <style>
      {` 
      .${instanceClass}.simple-banner{
      ${backgroundImage}
      padding-top: ${desktopStyle.paddingTop};
      padding-bottom: ${desktopStyle.paddingBottom};
      padding-left: ${desktopStyle.paddingLeft};
      padding-right: ${desktopStyle.paddingRight}; 
       margin-top:${desktopStyle.marginTop};
      margin-bottom:${desktopStyle.marginBottom};
      }
    
      @media(max-width:1024px){
     .${instanceClass}.simple-banner{
      padding-top: ${tabletStyle.paddingTop};
      padding-bottom: ${tabletStyle.paddingBottom};
      padding-left: ${tabletStyle.paddingLeft};
      padding-right: ${tabletStyle.paddingRight};
       margin-top:${tabletStyle.marginTop};
      margin-bottom:${tabletStyle.marginBottom};
      }
      }

       @media(max-width:767px){
       .${instanceClass}.simple-banner{
      padding-top: ${mobileStyle.paddingTop};
      padding-bottom: ${mobileStyle.paddingBottom};
      padding-left: ${mobileStyle.paddingLeft};
      padding-right: ${mobileStyle.paddingRight}; 
      margin-top:${mobileStyle.marginTop};
      margin-bottom:${mobileStyle.marginBottom};
      }
      }   

      .${instanceClass} .simple-banner__button {
       padding: var(--hsElevate--spacing--16) var(--hsElevate--spacing--24);
      }
  
`}
    </style>
    <BannerWrapper
      id={customId}
      className={` ${instanceClass} simple-banner  ${customClass}` }
    >
      <div className="simple-banner__wrapper content-wrapper">
      <BannerHeading className="simple-banner__heading">
        <RichText fieldPath="headingGroup.heading" />
        {buttonEnable && (
          <BannerButton className="simple-banner__button-wrapper">
            <a
              className={` simple-banner__button ${buttonClass}`}
              href={linkData.href}
              target={
               linkData.target
              }
              rel={linkData.rel}
            >
              {" "}
              {buttonText}
            </a>
          </BannerButton>
        )}
      </BannerHeading>
      </div>
    </BannerWrapper>
    </>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Simple Banner",
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
  smart_type: "NOT_SMART",
  is_available_for_new_content: true,
};

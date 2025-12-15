import { Island, RichText } from "@hubspot/cms-components";
import Tabbing from "./Island/Tabbing.js?island";
import { useId } from "react";

export const Component = ({ fieldValues }) => {

  
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
//custom class


   const uniqueId = useId(); 
  
        const uniqueClass = `module-${uniqueId.replace(/:/g, '-')}`;

 const customClass = fieldValues?.customCss?.customClass;
  const customId = fieldValues?.customCss?.customId;
  console.log("customClass",customClass);
  console.log("customId",customId)

  // theme button styling
  const selectedButtonType = fieldValues?.buttonGroup.buttonChoice;
  const buttonEnable = fieldValues?.buttonGroup?.buttonEnable;
  const buttonText = fieldValues?.buttonGroup?.buttonText;
  const svgIcon=fieldValues?.buttonGroup?.svgIcon;

  const buttonClass =
    selectedButtonType && selectedButtonType !== "select"
      ? `hs-elevate-button hs-elevate-button--${selectedButtonType}`
      : "";

      //image field
  const image = fieldValues?.image_video?.image;
  
  //accordion
  const tabs = fieldValues?.accordionGroup?.accordion || fieldValues?.accordionGroup;

  //Spacing Field
  
  // Desktop
  const ds = fieldValues.style?.spacing?.desktop?.desktop_spacing;
  // Tablet
  const ts = fieldValues.style?.spacing?.tablet?.tablet_spacing;
  // Mobile
  const ms = fieldValues.style?.spacing?.mobile?.mobile_spacing;

 

 
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
const linkData = resolveLink(fieldValues?.buttonGroup?.link_field);

  return (
    <>
    <style>
       {`
          .image-with-accordian.${uniqueClass} {
          ${backgroundCSS}
            padding-top: ${desktopStyle.paddingTop};
            padding-bottom: ${desktopStyle.paddingBottom};
            padding-left: ${desktopStyle.paddingLeft};
            padding-right: ${desktopStyle.paddingRight};
          }
              @media(max-width:1024px) {
            .image-with-accordian.${uniqueClass} {
              padding-top: ${tabletStyle.paddingTop};
              padding-bottom: ${tabletStyle.paddingBottom};
              padding-left: ${tabletStyle.paddingLeft};
              padding-right: ${tabletStyle.paddingRight};
            }
 
          }
 
          @media(max-width:767px) {
            .image-with-accordian.${uniqueClass} {
              padding-top: ${mobileStyle.paddingTop};
              padding-bottom: ${mobileStyle.paddingBottom};
              padding-left: ${mobileStyle.paddingLeft};
              padding-right: ${mobileStyle.paddingRight};
            }
       }

 
       `}
    </style>
    <div id={customId} className={`image-with-accordian ${uniqueClass} ${customClass}`}  >
      <div className="image-with-accordian__content content-wrapper">
        <div className="image-with-accordian__accordian">
          <div className="image-with-accordian__heading-title">
            <RichText fieldPath="heading_group.heading_title" />
          </div>
          <div className="image-with-accordian__main">
            <div className="image-with-accordian__heading-content">
              <div className="image-with-accordian__left-content">
                <RichText fieldPath="heading_group.heading_content" />
              </div>
              <div className="image-with-accordian__btn">
                {buttonEnable && (
                  <a className={buttonClass}    href={linkData.href}
              target={
               linkData.target
              }
              rel={linkData.rel}>
                    {buttonText}
                    <span
                      dangerouslySetInnerHTML={{ __html: svgIcon }}
                    />
                  </a>
                )}
              </div>
              <div className="image-with-accordian__image">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="image-with-accordian__playbtn ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32.036"
                    height="35.354"
                    viewBox="0 0 32.036 35.354"
                  >
                    <path
                      id="play"
                      d="M31.513,18.914,1.275,35.719a.855.855,0,0,1-.9.069A.876.876,0,0,1,0,34.967V1.451A.879.879,0,0,1,.375.631a.853.853,0,0,1,.9.069L31.513,17.5a.738.738,0,0,1,0,1.413Z"
                      transform="translate(0 -0.532)"
                      fill="#968465"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <Island
              hydrateOn="load"
              module={Tabbing}
              moduleName="Tabbing"
              clientOnly={true}
              items={tabs}
            />
          </div>
        </div>
      </div>
    </div>
  </>

  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Image With Accordian",
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

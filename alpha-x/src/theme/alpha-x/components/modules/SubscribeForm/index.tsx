import { RichText } from "@hubspot/cms-components";
import { useId } from "react";
import { Form } from "@hubspot/cms-components";

export const Component = ({ fieldValues }) => {

    const customClass = fieldValues?.custom_id_class?.class;
    const customId = fieldValues?.custom_id_class?.custom_id;
  
  const reactId = useId();
  const uniqueClass = `module_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;
const bottomText=fieldValues?.subscribe_form?.bottom_text;
const borderRadius=fieldValues?.style?.input_field_style?.form_border_radius;
const maxWidth=fieldValues?.style?.form_style?.form_max_width?.max_width;


 const borderStyle = fieldValues?.style?.form_style?.input_field_style?.input_border_style;

 console.log("borderStyle",borderStyle)
const BorderStyling = {
  // We check if borderStyle exists AND if the specific side exists
  borderTop: borderStyle?.top?.width
    ? `${borderStyle.top.width.value}${borderStyle.top.width.units} ${borderStyle.top.style} ${borderStyle.top.color}`
    : 'none',

  borderRight: borderStyle?.right?.width
    ? `${borderStyle.right.width.value}${borderStyle.right.width.units} ${borderStyle.right.style} ${borderStyle.right.color}`
    : 'none',

  borderBottom: borderStyle?.bottom?.width
    ? `${borderStyle.bottom.width.value}${borderStyle.bottom.width.units} ${borderStyle.bottom.style} ${borderStyle.bottom.color}`
    : 'none',

  borderLeft: borderStyle?.left?.width
    ? `${borderStyle.left.width.value}${borderStyle.left.width.units} ${borderStyle.left.style} ${borderStyle.left.color}`
    : 'none',

  // Use optional chaining for opacity and provide a fallback of 1
  opacity: borderStyle?.top?.opacity !== undefined ? borderStyle.top.opacity / 100 : 1,
};

const buttonColor=fieldValues?.style?.form_style?.button_style?.button_text_color?.color;
const buttonBackgroundColor=fieldValues?.style?.form_style?.button_style?.button_background_color?.color;

console.log("buttonColor",buttonColor);
console.log("buttonBackgroundColor",buttonBackgroundColor);

// button hover
const hoverButtonColor=fieldValues?.style?.form_style?.button_style?.button_hover_style?.button_text_color.color;
const hoverButtonBackgroundColor=fieldValues?.style?.form_style?.button_style?.button_hover_style?.button_background_color.color;

// submit_button_absolute

const submitButtonAbsolute=fieldValues?.style?.form_style?.button_hover_style?.submit_button_absolute_enable;
//submitted_message_style

const submitMessageBg=fieldValues?.style?.form_style?.submitted_message_style?.background_color?.color;
 const buttonBorder = fieldValues?.style?.form_style?.button_style?.button_border;

const borderButtonStyling = {
  borderTop: buttonBorder?.top?.width
    ? `${buttonBorder.top.width.value}${buttonBorder.top.width.units} ${buttonBorder.top.style} ${buttonBorder.top.color}` 
    : 'none',
    
  borderRight: buttonBorder?.right?.width
    ? `${buttonBorder.right.width.value}${buttonBorder.right.width.units} ${buttonBorder.right.style} ${buttonBorder.right.color}` 
    : 'none',
    
  borderBottom: buttonBorder?.bottom?.width
    ? `${buttonBorder.bottom.width.value}${buttonBorder.bottom.width.units} ${buttonBorder.bottom.style} ${buttonBorder.bottom.color}` 
    : 'none',
    
  borderLeft: buttonBorder?.left?.width
    ? `${buttonBorder.left.width.value}${buttonBorder.left.width.units} ${buttonBorder.left.style} ${buttonBorder.left.color}` 
    : 'none',

  // Safely handle opacity with a fallback to 1 (full opacity)
  opacity: buttonBorder?.top?.opacity !== undefined ? buttonBorder.top.opacity / 100 : 1,
};
console.log("buttonBorder",buttonBorder)
const hoverButtonBorder = fieldValues?.style?.form_style?.button_hover_style?.button_border;
console.log("hoverButtonBorder",hoverButtonBorder)
const hoverButtonBorderStyling = {
  borderTop: hoverButtonBorder?.top?.width 
    ? `${hoverButtonBorder.top.width.value}${hoverButtonBorder.top.width.units} ${hoverButtonBorder.top.style} ${hoverButtonBorder.top.color}` 
    : 'none',
    
  borderRight: hoverButtonBorder?.right?.width 
    ? `${hoverButtonBorder.right.width.value}${hoverButtonBorder.right.width.units} ${hoverButtonBorder.right.style} ${hoverButtonBorder.right.color}` 
    : 'none',
    
  borderBottom: hoverButtonBorder?.bottom?.width 
    ? `${hoverButtonBorder.bottom.width.value}${hoverButtonBorder.bottom.width.units} ${hoverButtonBorder.bottom.style} ${hoverButtonBorder.bottom.color}` 
    : 'none',
    
  borderLeft: hoverButtonBorder?.left?.width 
    ? `${hoverButtonBorder.left.width.value}${hoverButtonBorder.left.width.units} ${hoverButtonBorder.left.style} ${hoverButtonBorder.left.color}` 
    : 'none',

  // Safely check for opacity and fallback to 1
  opacity: hoverButtonBorder?.top?.opacity !== undefined ? hoverButtonBorder.top.opacity / 100 : 1,
};

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



  return (
    <>
    <style>
      {`
       .subscribe-form.${uniqueClass} {
         ${backgroundCSS}
          padding-top: ${desktopStyle.paddingTop};
          padding-bottom: ${desktopStyle.paddingBottom};
          padding-left: ${desktopStyle.paddingLeft};
          padding-right: ${desktopStyle.paddingRight};
           margin-top:${desktopStyle.marginTop};
      margin-bottom: ${desktopStyle.marginBottom};
        }
  @media(max-width:1024px) {
          .subscribe-form.${uniqueClass} {
            padding-top: ${tabletStyle.paddingTop};
            padding-bottom: ${tabletStyle.paddingBottom};
            padding-left: ${tabletStyle.paddingLeft};
            padding-right: ${tabletStyle.paddingRight};
             margin-top:${tabletStyle.marginTop};
      margin-bottom:${tabletStyle.marginBottom};
          }

        }

        @media(max-width:767px) {
          .subscribe-form.${uniqueClass} {
            padding-top: ${mobileStyle.paddingTop};
            padding-bottom: ${mobileStyle.paddingBottom};
            padding-left: ${mobileStyle.paddingLeft};
            padding-right: ${mobileStyle.paddingRight};
             margin-top:${mobileStyle.marginTop};
      margin-bottom:${mobileStyle.marginBottom};
          }
        }

        .${uniqueClass} [data-hsfc-id=Renderer] .hsfc-Form .hsfc-TextInput,  .${uniqueClass} form input[type=email]{
        border-radius=${borderRadius};
        border-top: ${BorderStyling.borderTop};
border-right: ${BorderStyling.borderRight};
border-bottom: ${BorderStyling.borderBottom};
border-left: ${BorderStyling.borderLeft};

        }

     .${uniqueClass} .hs-button, .${uniqueClass} [data-hsfc-id=Renderer] .hsfc-Form .hsfc-Button{
           border-top: ${borderButtonStyling.borderTop} !important;
border-right: ${borderButtonStyling.borderRight}!important;;
border-bottom: ${borderButtonStyling.borderBottom}!important;;
border-left: ${borderButtonStyling.borderLeft}!important;;
    background-color: ${buttonBackgroundColor}!important;;
    color: ${buttonColor};
        } 

    .${uniqueClass} .hs-button, .${uniqueClass}  [data-hsfc-id=Renderer] .hsfc-Form .hsfc-Button:hover{
           border-top: ${hoverButtonBorderStyling.borderTop}!important;;
border-right: ${hoverButtonBorderStyling.borderRight}!important;;
border-bottom: ${hoverButtonBorderStyling.borderBottom}!important;;
border-left: ${hoverButtonBorderStyling.borderLeft}!important;;
    background-color: ${hoverButtonBackgroundColor}!important;;
    color: ${hoverButtonColor}!important;;
        } 

             body [data-hsfc-id=Renderer] .hsfc-RichText p{
                 color: ${submitMessageBg};
             }
   .${uniqueClass} .subscribe-form__wrapper {
    max-width: ${maxWidth}px;
    margin: 0 auto;
}
      
      `}


    </style>
    <div {...(customId ? { id: customId } : {})}  className={`subscribe-form subscribe-wrapper ${uniqueClass} ${customClass ? customClass : ''}`}>
      <div className="subscribe-form__container subscribe-inner__container page-center">
        <div className="subscribe-form__module-width module-width">
          <div className="subscribe-form__inner subscribe-inner-wrap">
            <div className="subscribe-form content-wrap">
<RichText fieldPath="title_content.add_content"/>
            </div>
            <div className="subscribe-form__wrapper" >
              <Form fieldPath="subscribe_form.form" />
            </div>
             {bottomText!=="" &&( <div className="subscribe-form__bottom-text">
<RichText fieldPath="subscribe_form.bottom-text"/>
              </div>)}
          </div>
        </div>
      </div>
    </div>
    </>

  );
};

export { fields } from "./fields.js";


export const meta = {
 "label": "SubscribeForm",
 "css_assets": [],
 "external_js": [],
 "global": false,
 "help_text": "",
 "content_types": [
  "ANY",
  "LANDING_PAGE",
  "SITE_PAGE",
  "BLOG_POST",
  "BLOG_LISTING",
  "EMAIL"
 ],
 "js_assets": [],
 "other_assets": [],
 "smart_type": "NOT_SMART",
 "tags": [],
 "is_available_for_new_content": true
}
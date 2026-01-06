import { RichText } from "@hubspot/cms-components";
import { useId } from "react";
import { Island } from "@hubspot/cms-components";
import successSlider from "./Island/SuccessSlider.js?island";
import SuccessSlider2 from "./Island/SuccessSlider2.js?island";
export const Component = ({ fieldValues }) => {
  const reactId = useId();
  const uniqueClass = `module_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;
   const customClass = fieldValues?.custom_id_class?.class;
      const customId = fieldValues?.custom_id_class?.custom_id;

       
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


const selectedButtonType = fieldValues?.buttonGroup.buttonChoice;
 const buttonText = fieldValues?.buttonGroup?.buttonText;

 const buttonClass =
    selectedButtonType && selectedButtonType !== "select"
      ? `hs-elevate-button hs-elevate-button--${selectedButtonType}`
      : "";

 const layOut=fieldValues?.layout_choice;
  const testimonials = fieldValues?.testimonial_content?.testimonial_inner;
  const sliderEnable = fieldValues?.style?.slider_enable;
  const autoPlayEnable = fieldValues?.style?.slider_style?.autoplay_enable;
  const autoPlaySpeed = fieldValues?.style?.slider_style?.autoplay_speed;
  // Desktop Slider
  const dotsEnableDs =
    fieldValues?.style?.slider_style?.slider_desktop?.dots_enable;
  const arrowEnableDs =
    fieldValues?.style?.slider_style?.slider_desktop?.arrows_enable;
  const slideToShowDs =
    fieldValues?.style?.slider_style?.slider_desktop?.slide_to_show;
  const slidesToScrollDs =
    fieldValues?.style?.slider_style?.slider_desktop?.slide_to_scroll;

  // Tablet Slider
  const dotsEnableTs =
    fieldValues?.style?.slider_style?.slider_tablet?.dots_enable;
  const arrowEnableTs =
    fieldValues?.style?.slider_style?.slider_tablet?.arrows_enable;
  const slideToShowTs =
    fieldValues?.style?.slider_style?.slider_tablet?.slide_to_show;
  const slidesToScrollTs =
    fieldValues?.style?.slider_style?.slider_tablet?.slide_to_scroll;

  // Mobile Slider
  const dotsEnableMs =
    fieldValues?.style?.slider_style?.slider_mobile?.dots_enable;
  const arrowEnableMs =
    fieldValues?.style?.slider_style?.slider_mobile?.arrows_enable;
  const slideToShowMs =
    fieldValues?.style?.slider_style?.slider_mobile?.slide_to_show;
  const slidesToScrollMs =
    fieldValues?.style?.slider_style?.slider_mobile?.slide_to_scroll;

  // dot styling
  const dotColor =
    fieldValues?.style?.slider_style?.dot_styling?.dot_color?.color;
  // arrow Styling
  const arrowIconColor =
    fieldValues?.style?.slider_style?.arrow_styling?.icon_color?.color;
  const arrowIconBg =
    fieldValues?.style?.slider_style?.arrow_styling?.icon_bg_color?.color;
  const arrowHoverIcon =
    fieldValues?.style?.slider_style?.arrow_styling?.arrow_hover
      ?.icon_color_hover;
  const arrowHoverBg =
    fieldValues?.style?.slider_style?.arrow_styling?.arrow_hover
      ?.icon_bg_color_hover?.color;

  // Testimonial Content Style

  const testimonialContentAllignment =
    fieldValues?.style?.testimonial_content_style
      ?.testimonial_content_alignment;
  const testiMonialContentWidth =
    fieldValues?.style?.testimonial_content_style?.testimonial_content_width;
  const clientImageSize =
    fieldValues?.style?.testimonial_content_style?.client_image_size;
  const quoteColor = fieldValues?.style?.quote_style?.quote_color.color;



  
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
  const linkData = resolveLink(fieldValues?.buttonGroup?.link_field);
  return (
    <>
      <style>
        {`


          .success-stories.${uniqueClass} {
         ${backgroundCSS}
          padding-top: ${desktopStyle.paddingTop};
          padding-bottom: ${desktopStyle.paddingBottom};
          padding-left: ${desktopStyle.paddingLeft};
          padding-right: ${desktopStyle.paddingRight};
           margin-top:${desktopStyle.marginTop};
      margin-bottom: ${desktopStyle.marginBottom};
   

        }
  @media(max-width:1024px) {
          .success-stories.${uniqueClass} {
            padding-top: ${tabletStyle.paddingTop} ;
            padding-bottom: ${tabletStyle.paddingBottom} ;
            padding-left: ${tabletStyle.paddingLeft};
            padding-right: ${tabletStyle.paddingRight};
             margin-top:${tabletStyle.marginTop};
      margin-bottom:${tabletStyle.marginBottom};
          }

        }

        @media(max-width:767px) {
          .success-stories.${uniqueClass} {
            padding-top: ${mobileStyle.paddingTop};
            padding-bottom: ${mobileStyle.paddingBottom};
            padding-left: ${mobileStyle.paddingLeft};
            padding-right: ${mobileStyle.paddingRight};
             margin-top:${mobileStyle.marginTop};
      margin-bottom:${mobileStyle.marginBottom};
          }
        }


        .${uniqueClass} .success-stories__inner{
    width: 100%;
    max-width: ${testiMonialContentWidth}px;
    margin: 0 auto;
    padding: 0 60px;
        }

        .${uniqueClass} .success-stories__item{
        margin: 0 auto;
        }

        .${uniqueClass} .success-stories__quote .svg-icon path{
        fill:${quoteColor}
        }

        .${uniqueClass} .success-stories__content{
            text-align: ${testimonialContentAllignment};

        }

        .${uniqueClass} .success-stories__client{
            align-items: center;
            display: flex;
            flex-wrap: wrap;
             gap: 20px;
            justify-content: center;
        }

            .${uniqueClass} .success-stories__client img{
               height:${clientImageSize}px;
               width:${clientImageSize}px;
                border-radius: 50%;
                margin: 20px auto;
                object-fit: cover;
        }

        .${uniqueClass} .success-stories__flex-box{
            width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
        }

        .${uniqueClass} .success-stories__heading-two{
            flex: 0 0 50%;
    max-width: 48%;
        }
                .${uniqueClass} .success-stories__content-bx{
                width:100%;
                max-width:${testiMonialContentWidth}px;
                margin: 50px;
                position:relative;
                }

                 .${uniqueClass} .layout-two .success-stories__quote .quotes{
                     background: rgba(255, 255, 255, 100%);
                     line-height: 0;
                     padding: 15px;
                     border-radius: 5px;
                     box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 14%);
                 }

                 .${uniqueClass} .layout-two .quotes svg{
                 height:25px;
                 width:25px;
                 fill: #ff4800;
                 }

                 .${uniqueClass} .success-stories-inner{
                     width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 60px;
                 }
    .${uniqueClass} .layout-two .success-stories-inner{
        padding: 0;
    text-align: left;
    }

    .${uniqueClass} .success-stories__client-wrap>.profile-inr{
        display: inline-block;
    vertical-align: middle;
    }
   
             .${uniqueClass} .success-stories__item{
                 margin: 20px;
    padding: 30px;
    background: rgba(255, 255, 255, 100%);
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 6%);
}
     .${uniqueClass} .success-stories__client{
              align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
        }

        .${uniqueClass} .layout-two .success-stories__testimonial-image profile-inr{
        padding-left:20px;
        }

.${uniqueClass} .success-stories__rating .stars{
    margin-right: 5px;
    list-style:none;
    display:flex;
}
.${uniqueClass} .success-stories__rating .stars li{
    width: 20px;
    height: 20px;
    fill: #ccc; 
}

.${uniqueClass} .success-stories__rating >.stars li.show svg {
    fill: #ffc107; /* Gold color */
}
      

        .${uniqueClass} .slick-dots{
          position: relative;
          bottom: 0;
          margin-top: 30px;
        }

.${uniqueClass} .slick-prev{
color:${arrowIconColor};
background:${arrowIconBg};
}

.${uniqueClass} .slick-prev:hover{
color:${arrowHoverIcon};
background:${arrowHoverBg};
}
.${uniqueClass} .slick-next{
color:${arrowIconColor};
background-color:${arrowIconBg};
}  

.${uniqueClass} .slick-next:hover{
color:${arrowHoverIcon};
background:${arrowHoverBg};
}

.${uniqueClass} .slick-dots li button{
        color:${dotColor}
        }

        `}
      </style>

      <div {...(customId ? { id: customId } : {})} className={`success-stories ${uniqueClass} ${customClass ? customClass : ''}`}>
        <div className="success-stories__container content-wrapper">
       
          {layOut==="layout-one" &&
          ( 
            <>
               <div className="success-stories__heading">
            <RichText fieldPath="heading_content.heading" />
          </div>
          <div className="success-stories__inner">
            <Island
              hydrateOn="load"
              module={successSlider}
              moduleName="successSlider"
              clientOnly={true}
              items={testimonials}
              slider={sliderEnable}
              autoplay={autoPlayEnable}
              autoplaySpeed={autoPlaySpeed}
              dotsEnableDs={dotsEnableDs}
              arrowEnableDs={arrowEnableDs}
              slideToShowDs={slideToShowDs}
              slidesToScrollDs={slidesToScrollDs}
              dotsEnableTs={dotsEnableTs}
              arrowEnableTs={arrowEnableTs}
              slideToShowTs={slideToShowTs}
              slidesToScrollTs={slidesToScrollTs}
              dotsEnableMs={dotsEnableMs}
              arrowEnableMs={arrowEnableMs}
              slideToShowMs={slideToShowMs}
              slidesToScrollMs={slidesToScrollMs}
            />
          </div>
        </>
        )}

          {layOut==="layout-two" && (
            <>
            <div className="success-stories__flex-box layout-two">
               <div className="success-stories__heading-two">
            <RichText fieldPath="heading_content.heading" />
        
            <div className="success-stories__cta">
              <a className={buttonClass}    href={linkData.href}
              target={
               linkData.target
              }
              rel={linkData.rel}>
                    {buttonText}
                    </a>
            </div>
              </div>
            <div className="success-stories__content-bx">
     <div className="success-stories_quote quotes">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="349.078px" height="349.078px" viewBox="0 0 349.078 349.078" 
         
         xml:space="preserve">
            <g>
              <path d="M150.299,26.634v58.25c0,7.9-6.404,14.301-14.304,14.301c-28.186,0-43.518,28.909-45.643,85.966h45.643
                       c7.9,0,14.304,6.407,14.304,14.304v122.992c0,7.896-6.404,14.298-14.304,14.298H14.301C6.398,336.745,0,330.338,0,322.447V199.455
                       c0-27.352,2.754-52.452,8.183-74.611c5.568-22.721,14.115-42.587,25.396-59.048c11.608-16.917,26.128-30.192,43.16-39.44
                       C93.886,17.052,113.826,12.333,136,12.333C143.895,12.333,150.299,18.734,150.299,26.634z M334.773,99.186
                       c7.896,0,14.305-6.407,14.305-14.301v-58.25c0-7.9-6.408-14.301-14.305-14.301c-22.165,0-42.108,4.72-59.249,14.023
                       c-17.035,9.248-31.563,22.523-43.173,39.44c-11.277,16.461-19.824,36.328-25.393,59.054c-5.426,22.166-8.18,47.266-8.18,74.605
                       v122.992c0,7.896,6.406,14.298,14.304,14.298h121.69c7.896,0,14.299-6.407,14.299-14.298V199.455
                       c0-7.896-6.402-14.304-14.299-14.304h-44.992C291.873,128.095,306.981,99.186,334.773,99.186z"></path>
            </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
          </svg>
        </div>

<div className="success-stories-inner">
             <Island
              hydrateOn="load"
              module={SuccessSlider2}
              moduleName="SuccessSlider2"
              clientOnly={true}
              items={testimonials}
              slider={sliderEnable}
              autoplay={autoPlayEnable}
              autoplaySpeed={autoPlaySpeed}
              dotsEnableDs={dotsEnableDs}
              arrowEnableDs={arrowEnableDs}
              slideToShowDs={slideToShowDs}
              slidesToScrollDs={slidesToScrollDs}
              dotsEnableTs={dotsEnableTs}
              arrowEnableTs={arrowEnableTs}
              slideToShowTs={slideToShowTs}
              slidesToScrollTs={slidesToScrollTs}
              dotsEnableMs={dotsEnableMs}
              arrowEnableMs={arrowEnableMs}
              slideToShowMs={slideToShowMs}
              slidesToScrollMs={slidesToScrollMs}
            />
            </div>
            </div>
            </div>
            </>
          )}
         
        </div>
      </div>
      
    </>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "SuccessStories",
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

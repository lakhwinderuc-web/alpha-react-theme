import { Icon, RichText } from "@hubspot/cms-components";
import { Form } from "@hubspot/cms-components";
import { useId } from "react";
export const Component = ({ fieldValues }) => {
  const items = fieldValues?.contact_info?.items || [];
  console.log("items",items)

  const reactId = useId();
    const uniqueClass = `widget_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;
  
    const customClass = fieldValues?.custom_id_class?.class;
    const customId = fieldValues?.custom_id_class?.custom_id;

    const iconColor=fieldValues?.style?.icon_style?.icon_color?.color;
    const bgColor=fieldValues?.style?.icon_style?.background_color?.color;
    const iconHoverColor=fieldValues?.style?.icon_hover?.icon_color?.color;
    const bgHoverColor=fieldValues?.style?.icon_hover?.background_color?.color;

    const enableFlexDirection=fieldValues?.style?.flex_direction_enable?.direaction_enable;

   
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
.contact-form.${uniqueClass} {
         ${backgroundCSS}
          padding-top: ${desktopStyle.paddingTop};
          padding-bottom: ${desktopStyle.paddingBottom};
          padding-left: ${desktopStyle.paddingLeft};
          padding-right: ${desktopStyle.paddingRight};
           margin-top:${desktopStyle.marginTop};
      margin-bottom: ${desktopStyle.marginBottom};
   
        }
  @media(max-width:1024px) {
          .contact-form.${uniqueClass} {
            padding-top: ${tabletStyle.paddingTop} ;
            padding-bottom: ${tabletStyle.paddingBottom} ;
            padding-left: ${tabletStyle.paddingLeft};
            padding-right: ${tabletStyle.paddingRight};
             margin-top:${tabletStyle.marginTop};
      margin-bottom:${tabletStyle.marginBottom};
          }
        }

        @media(max-width:767px) {
          .contact-form.${uniqueClass} {
            padding-top: ${mobileStyle.paddingTop};
            padding-bottom: ${mobileStyle.paddingBottom};
            padding-left: ${mobileStyle.paddingLeft};
            padding-right: ${mobileStyle.paddingRight};
             margin-top:${mobileStyle.marginTop};
      margin-bottom:${mobileStyle.marginBottom};
          }
      }

      .${uniqueClass} .page-center{
      margin: 0 auto;
      padding: 0 1.0rem;
      max-width: 77.5rem;
      }

      .${uniqueClass} .contact-form__column{
    display: flex;
    flex-wrap: wrap;
  flex-direction: ${enableFlexDirection ? "row-reverse" : "row"};
    gap: 5.0rem;
      }

      .${uniqueClass} .contact-form__contact-info{
              width: calc(50% - 2.5rem);
      }

      .${uniqueClass} .contact-form__heading{
          margin-bottom: 2.5rem;
      }
      
      .${uniqueClass} .contact-form__contact-items{
      align-items: center;
    display: inline-flex;
    justify-content: flex-start;
    width: 100%;
      }

      .${uniqueClass} .contact-form__icon-link-enable{
      position:relative;
      }
      .${uniqueClass} .contact-form__icon{
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    transition: all .35s;
    flex: 0 0 5.5rem;
    height: 5.5rem;
    width: 5.5rem;
    border-radius: 0.75rem;
    background-color:${bgColor};
      }

      .${uniqueClass} .contact-form__icon svg{
      fill:${iconColor};
      height: 1.75rem;
      }
.${uniqueClass} .contact-form__icon:hover{
background-color:${bgHoverColor}
}

     .${uniqueClass} .contact-form__icon svg:hover{
      fill:${iconHoverColor};
      }
          `}
    </style>
    <section {...(customId ? { id: customId } : {})} className={`contact-form ${uniqueClass} ${customClass ? customClass : ""}`} >
      <div className="contact-form__wrppper page-center">
        <div className="contact-form__column">
          <div className="contact-form__contact-info">
            <div className="contact-form__heading">
              <RichText fieldPath="add_heading.heading" />
            </div>
            <div className="contact-form__contact-items contact-form__icon-link-enable">
              {items.map((item, index) => (
                <div key={index} className="contact-form__contact-items">
                  <div className="contact-form__icon">
                    {item?.icon_choice === "hubspot_icon" && (
                      <Icon
                        fieldPath={`contact_info.items[${index}].icon_field`}
                      />
                    )}
                    {item?.icon_choice === "image_field" && (
                      <img
                        src={item.image_field.src}
                        width={item.icon_group.image_field.width}
                        height={item.image_field.height}
                        alt={item.image_field.alt || "Icon Image"}
                      />
                    )}
                  </div>
                  <div
                    className="contact-form__icon-title"
                    dangerouslySetInnerHTML={{ __html: item.heading }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="contact-form__form">
            {fieldValues?.image_form_group?.image_form_choice === "image" && (
              <img
                src={fieldValues?.image_form_group?.image?.src}
                width={fieldValues?.image_form_group?.image?.width}
                height={fieldValues?.image_form_group?.image?.height}
                alt={fieldValues?.image_form_group?.image?.alt}
                loading="lazy"
              />
            )}
            {fieldValues?.image_form_group?.image_form_choice === "form" &&(
              <Form fieldPath="image_form_group.form"/>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Contact Form",
  css_assets: [],
  external_js: [],
  global: false,
  help_text: "",
  content_types: ["ANY", "LANDING_PAGE", "SITE_PAGE"],
  js_assets: [],
  other_assets: [],
  smart_type: "NOT_SMART",
  tags: [],
  is_available_for_new_content: true,
};

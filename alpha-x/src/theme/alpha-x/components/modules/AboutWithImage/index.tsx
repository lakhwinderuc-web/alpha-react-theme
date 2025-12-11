import { RichText } from "@hubspot/cms-components";
import { Island } from "@hubspot/cms-components";
import Counter from "./Island/Counter.js?island";
import { useId } from "react";
export const Component = ({ fieldValues }) => {

    const reactId = useId();
  const uniqueClass = `module__${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;
  // counter
  const counters = fieldValues?.counter?.number_counter;
  const customClass = fieldValues?.customCss?.customClass;
  const customId = fieldValues?.customCss?.customId;

  //image
  const ImgSrc = fieldValues?.about_img?.image_about?.src;
  const ImgAlt = fieldValues?.about_img?.image_about?.alt;

  //spacing

  const ds = fieldValues.style?.spacing?.desktop?.desktop_spacing;
  const desktopStyle = {
    paddingTop: ds?.padding?.top?.value + ds?.padding?.top?.units,
    paddingBottom: ds?.padding?.bottom?.value + ds?.padding?.bottom?.units,
    paddingLeft: ds?.padding?.left?.value + ds?.padding?.left?.units,
    paddingRight: ds?.padding?.right?.value + ds?.padding?.right?.units,
  };

  const ts = fieldValues.style?.spacing?.tablet?.tablet_spacing;
  const tabletStyle = {
    paddingTop: ts?.padding?.top?.value + ts?.padding?.top?.units,
    paddingBottom: ts?.padding?.bottom?.value + ts?.padding?.bottom?.units,
    paddingLeft: ts?.padding?.left?.value + ts?.padding?.left?.units,
    paddingRight: ts?.padding?.right?.value + ts?.padding?.right?.units,
  };

  const ms = fieldValues.style?.spacing?.mobile?.mobile_spacing;
  const mobileStyle = {
    paddingTop: ms?.padding?.top?.value + ms?.padding?.top?.units,
    paddingBottom: ms?.padding?.bottom?.value + ms?.padding?.bottom?.units,
    paddingLeft: ms?.padding?.left?.value + ms?.padding?.left?.units,
    paddingRight: ms?.padding?.right?.value + ms?.padding?.right?.units,
  };


//background
 const bg = fieldValues.style?.background;
  let backgroundCSS = "";

  // gradient
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
.about-with-image.${uniqueClass} {
${backgroundCSS}
  padding-top: ${desktopStyle?.paddingTop || "0"};
  padding-bottom: ${desktopStyle?.paddingBottom || "0"};
  padding-left: ${desktopStyle?.paddingLeft || "0"};
  padding-right: ${desktopStyle?.paddingRight || "0"};
}

.${uniqueClass} .about-with-image__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.${uniqueClass} .about-with-image__content {
  width: 55%;
}

.${uniqueClass}.about-with-image__heading h1 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
}

.${uniqueClass}.about-with-image__heading p {
  line-height: 1.6;
  margin-bottom: 30px;
}

/* Counter layout horizontal */
.${uniqueClass} .about-with-image__counter {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-top: 30px;
}

.${uniqueClass} .about-with-image__counter-number h3 {
  font-size: 45px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
}

.${uniqueClass} .about-with-image__counter-number .counter-text {
  font-size: 12px;
  font-weight: 500;
  color: #000;
  display: block;
  margin-left: 8px;

}

/* IMAGE SECTION  EXACT DESIGN */
.${uniqueClass}.about-with-image__image-wrapper {
  width: 45%;
  position: relative;
}

.${uniqueClass}.about-with-image__image-wrapper img {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 2;
  border-radius: 4px;
}

/* Black background block behind image */
.${uniqueClass}.about-with-image__image-wrapper::before {
  content: "";
  position: absolute;
  top: -40px;
  right: -40px;
  width: 100%;
  height: 100%;
  background: #2c2c2c;
  z-index: 1;
}
/* TABLET */
@media(max-width:1024px) {
  .about-with-image.${uniqueClass} {
    padding-top: ${tabletStyle?.paddingTop || "0"};
    padding-bottom: ${tabletStyle?.paddingBottom || "0"};
    padding-left: ${tabletStyle?.paddingLeft || "0"};
    padding-right: ${tabletStyle?.paddingRight || "0"};
  }
}

/* MOBILE */
@media(max-width:767px) {
  .about-with-image.${uniqueClass} {
    padding-top: ${mobileStyle?.paddingTop || "0"};
    padding-bottom: ${mobileStyle?.paddingBottom || "0"};
    padding-left: ${mobileStyle?.paddingLeft || "0"};
    padding-right: ${mobileStyle?.paddingRight || "0"};
  }
}

`}
      </style>

      <div id={customId} className={`about-with-image ${uniqueClass} ${customClass}`}>
        <div className="about-with-image__wrapper content-wrapper">
          <div className="about-with-image__content">
            <div className="about-with-image__heading">
              <RichText fieldPath="headingGroup.heading" />
            </div>
            <div className="about-with-image__counter">
              {counters.map((counter, index) => {
                const number = counter?.counter_number;
                const showSign = counter?.counter_sign?.show_hide_counter;
                const signPosition =
                  counter?.counter_sign?.sign_position_choice;
                const sign = counter?.counter_sign?.add_sign;

                const color = counter?.number_color?.color;

                return (
                  <div className="about-with-image__counter-number" key={index}>
                    <h3 style={{ color: color }}>
                      <Island
                        hydrateOn="load"
                        module={Counter}
                        moduleName="Counter"
                        clientOnly={true}
                        value={number}
                        sign={sign} // sign like +, %, etc.
                        signPosition={signPosition} // "sign-text" or "text-sign"
                        showSign={showSign} // whether to show sign
                      />
                      <span
                        className="counter-text"
                        dangerouslySetInnerHTML={{
                          __html:
                            counter.number_text || counter.number_text.value,
                        }}
                      />
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="about-with-image__image-wrapper">
            <img src={ImgSrc} alt={ImgAlt} />
          </div>
        </div>
      </div>
    </>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "About With Image",
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

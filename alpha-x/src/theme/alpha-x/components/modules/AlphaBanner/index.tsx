import { RichText } from "@hubspot/cms-components";
import styles from "./alpha-banner.module.css";
import cx, { staticWithModule } from "../../utils/classnames.js";
import { createComponent } from "../../utils/create-component.js";
import { useId } from "react";

const swm = staticWithModule(styles);

// Components
const BannerWrapper = createComponent("div");
const BannerHeading = createComponent("div");
const BannerButton = createComponent("div");

function resolveLink(linkField) {
  const url = linkField?.url?.href || "";
  const type = linkField?.url?.type;

  if (!url) return "#";

  switch (type) {
    case "EMAIL_ADDRESS":
      return `mailto:${url}`;
    case "PHONE_NUMBER":
      return `tel:${url}`;
    case "CALL_TO_ACTION":
      return url;
    default:
      return url;
  }
}

export const Component = ({ fieldValues }) => {
  const buttonText = fieldValues?.buttonGroup?.buttonText;
  const buttonEnable = fieldValues?.buttonGroup?.buttonEnable;
  const customClass = fieldValues?.customCss?.customClass;
  const customId = fieldValues?.customCss?.customId;
  const selectedButtonType = fieldValues?.buttonGroup.buttonChoice;
    const uniqueId = useId(); 

      const instanceClass = `banner-${uniqueId.replace(/:/g, '-')}`;
    console.log(uniqueId);

  const buttonClass =
    selectedButtonType && selectedButtonType !== "select"
      ? `hs-elevate-button hs-elevate-button--${selectedButtonType}`
      : "";

  const finalHref = resolveLink(buttonText?.link_field);

  // Desktop
  const ds = fieldValues.style?.spacing?.desktop?.desktop_spacing;
  // Tablet
  const ts = fieldValues.style?.spacing?.tablet?.tablet_spacing;
  // Mobile
  const ms = fieldValues.style?.spacing?.mobile?.mobile_spacing;

  //  Background
  const bgField = fieldValues.style?.background_field;
  const bgType = bgField?.background_type;
  const gradient = bgField?.gradient_field;
  const bgImage = bgField?.background_image;

  // Button styling fields
  // const btnFont = fieldValues?.style?.button_style_group?.button_font;
  // const btnBg =
  //   fieldValues?.style?.button_style_group?.button_background?.color;
  // const btnPadding =
  //   fieldValues?.style?.button_style_group?.button_padding?.padding;
  // const btnRadius = fieldValues?.style?.button_style_group?.button_radius;

  const cssVars: React.CSSProperties = {
    "--alphaBanner-paddingTop-desktop": `${ds?.padding?.top?.value || 0}${ds?.padding?.top?.units || "px"}`,
    "--alphaBanner-paddingBottom-desktop": `${ds?.padding?.bottom?.value || 0}${ds?.padding?.bottom?.units || "px"}`,
    "--alphaBanner-paddingLeft-desktop": `${ds?.padding?.left?.value || 0}${ds?.padding?.left?.units || "px"}`,
    "--alphaBanner-paddingRight-desktop": `${ds?.padding?.right?.value || 0}${ds?.padding?.right?.units || "px"}`,
    "--alphaBanner-marginTop-desktop": `${ds?.margin?.top?.value || 0}${ds?.margin?.top?.units || "px"}`,
    "--alphaBanner-marginBottom-desktop": `${ds?.margin?.bottom?.value || 0}${ds?.margin?.bottom?.units || "px"}`,

    "--alphaBanner-paddingTop-tablet": `${ts?.padding?.top?.value || 0}${ts?.padding?.top?.units || "px"}`,
    "--alphaBanner-paddingBottom-tablet": `${ts?.padding?.bottom?.value || 0}${ts?.padding?.bottom?.units || "px"}`,
    "--alphaBanner-paddingLeft-tablet": `${ts?.padding?.left?.value || 0}${ts?.padding?.left?.units || "px"}`,
    "--alphaBanner-paddingRight-tablet": `${ts?.padding?.right?.value || 0}${ts?.padding?.right?.units || "px"}`,
    "--alphaBanner-marginTop-tablet": `${ts?.margin?.top?.value || 0}${ts?.margin?.top?.units || "px"}`,
    "--alphaBanner-marginBottom-tablet": `${ts?.margin?.bottom?.value || 0}${ts?.margin?.bottom?.units || "px"}`,

    "--alphaBanner-paddingTop-mobile": `${ms?.padding?.top?.value || 0}${ms?.padding?.top?.units || "px"}`,
    "--alphaBanner-paddingBottom-mobile": `${ms?.padding?.bottom?.value || 0}${ms?.padding?.bottom?.units || "px"}`,
    "--alphaBanner-paddingLeft-mobile": `${ms?.padding?.left?.value || 0}${ms?.padding?.left?.units || "px"}`,
    "--alphaBanner-paddingRight-mobile": `${ms?.padding?.right?.value || 0}${ms?.padding?.right?.units || "px"}`,
    "--alphaBanner-marginTop-mobile": `${ms?.margin?.top?.value || 0}${ms?.margin?.top?.units || "px"}`,
    "--alphaBanner-marginBottom-mobile": `${ms?.margin?.bottom?.value || 0}${ms?.margin?.bottom?.units || "px"}`,
    // bgType
    "--alphaBanner-bgType": bgType || "none",
    "--alphaBanner-backgroundImage": "none",
    "--alphaBanner-bgPosition": "center center",
    "--alphaBanner-bgSize": "cover",

    //Button Styling
    // "--alphaBanner-btn-font-size": `${btnFont?.size || 16}${btnFont?.size_unit || "px"}`,
    // "--alphaBanner-btn-font-family": btnFont?.font || "Inter",
    // "--alphaBanner-btn-font-color": btnFont?.color || "#ffffff",

    // "--alphaBanner-btn-bg": btnBg || "#005eff",
    // "--alphaBanner-btn-radius": `${btnRadius || 6}px`,

    // "--alphaBanner-btn-padding-top": `${btnPadding?.top?.value || 12}${btnPadding?.top?.units || "px"}`,
    // "--alphaBanner-btn-padding-bottom": `${btnPadding?.bottom?.value || 12}${btnPadding?.bottom?.units || "px"}`,
    // "--alphaBanner-btn-padding-left": `${btnPadding?.left?.value || 20}${btnPadding?.left?.units || "px"}`,
    // "--alphaBanner-btn-padding-right": `${btnPadding?.right?.value || 20}${btnPadding?.right?.units || "px"}`,
  } as React.CSSProperties;

  let backgroundImage = "none";

  if (bgType === "color" && gradient?.colors?.length) {
    let direction = "to bottom";
    if (gradient.angle !== undefined && gradient.angle !== null) {
      direction = `${gradient.angle}deg`;
    } else if (gradient.side_or_corner) {
      const v = gradient.side_or_corner.verticalSide;
      const h = gradient.side_or_corner.horizontalSide;
      if (v && h) direction = `to ${v.toLowerCase()} ${h.toLowerCase()}`;
      else if (v) direction = `to ${v.toLowerCase()}`;
      else if (h) direction = `to ${h.toLowerCase()}`;
    }

    const colorStops = gradient.colors
      .filter((c) => c?.color)
      .map((c) => {
        const { r, g, b, a } = c.color;
        return `rgba(${r},${g},${b},${a})`;
      })
      .join(", ");

    backgroundImage = `linear-gradient(${direction}, ${colorStops})`;
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

    backgroundImage = `url(${bgImage.src})`;
    cssVars["--alphaBanner-bgPosition"] = bgPos;
    cssVars["--alphaBanner-bgSize"] = bgImage.background_size || "cover";
  }

  cssVars["--alphaBanner-backgroundImage"] = backgroundImage;

  return (
    <BannerWrapper
      style={cssVars}
      id={customId}
      className={cx(swm("BannerSection"), customClass,instanceClass)}
    >
      <BannerHeading className={swm("BannerHeading")}>
        <RichText fieldPath="headingGroup.heading" />
        {buttonEnable && (
          <BannerButton className={swm("BannerButton")}>
            <a
              className={buttonClass}
              href={finalHref}
              target={
                buttonText?.link_field?.open_in_new_tab ? "_blank" : undefined
              }
              rel={buttonText?.link_field?.rel || undefined}
            >
              {" "}
              {buttonText}
            </a>
          </BannerButton>
        )}
      </BannerHeading>
    </BannerWrapper>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Alpha Banner",
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

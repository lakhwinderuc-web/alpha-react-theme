import { RichText } from "@hubspot/cms-components";
import styles from "./alpha-banner.module.css";
import { staticWithModule } from "../../utils/classnames.js";
import { createComponent } from "../../utils/create-component.js";

const swm = staticWithModule(styles);

// Components
const BannerWrapper = createComponent("div");
const BannerHeading = createComponent("div");
const BannerButton = createComponent("button");

export const Component = ({ fieldValues }) => {
  const buttonText = fieldValues?.buttonGroup?.buttonText;

  // Desktop
  const ds = fieldValues.style?.spacing?.desktop?.desktop_spacing;
  // Tablet
  const ts = fieldValues.style?.spacing?.tablet?.tablet_spacing;
  // Mobile
  const ms = fieldValues.style?.spacing?.mobile?.mobile_spacing;

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
  } as React.CSSProperties;

  return (
    <BannerWrapper style={cssVars} className={swm("BannerSection")}>
      <BannerHeading className={swm("BannerHeading")}>
        <RichText fieldPath="headingGroup.heading" />
        <BannerButton className={swm("BannerButton")}>
          {buttonText}
        </BannerButton>
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

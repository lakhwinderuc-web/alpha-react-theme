import { RichText } from "@hubspot/cms-components";
import { useId } from "react";

export const Component = ({ fieldValues }) => {
  const reactId = useId();
  const uniqueClass = `widget_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;

  const customClass = fieldValues?.custom_id_class?.class;
  const customId = fieldValues?.custom_id_class?.custom_id;
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

  return (
    <>
      <style>
        {`
   .google-map.${uniqueClass} {
          padding-top: ${desktopStyle.paddingTop};
          padding-bottom: ${desktopStyle.paddingBottom};
          padding-left: ${desktopStyle.paddingLeft};
          padding-right: ${desktopStyle.paddingRight};
           margin-top:${desktopStyle.marginTop};
      margin-bottom: ${desktopStyle.marginBottom};
        }

  @media(max-width:1024px) {
          .google-map.${uniqueClass} {
            padding-top: ${tabletStyle.paddingTop} ;
            padding-bottom: ${tabletStyle.paddingBottom} ;
            padding-left: ${tabletStyle.paddingLeft};
            padding-right: ${tabletStyle.paddingRight};
             margin-top:${tabletStyle.marginTop};
      margin-bottom:${tabletStyle.marginBottom};
          }
        }

        @media(max-width:767px) {
          .google-map.${uniqueClass} {
            padding-top: ${mobileStyle.paddingTop};
            padding-bottom: ${mobileStyle.paddingBottom};
            padding-left: ${mobileStyle.paddingLeft};
            padding-right: ${mobileStyle.paddingRight};
             margin-top:${mobileStyle.marginTop};
      margin-bottom:${mobileStyle.marginBottom};
          }
      }
          .${uniqueClass}.google-map{
              max-width: 77.5rem;
              margin: 0 auto;
              display: flex;
              flex-wrap: wrap;
              width: 100%;
          }
      `}
      </style>
      <div
        {...(customId ? { id: customId } : {})}
        className={`google-map ${uniqueClass} ${customClass ? customClass : ""} `}
      >
        <RichText fieldPath="add_map.google_map" />
      </div>
    </>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Google Maps",
  css_assets: [],
  external_js: [],
  global: false,
  help_text: "",
  content_types: ["ANY", "LANDING_PAGE", "SITE_PAGE", "BLOG_POST"],
  js_assets: [],
  other_assets: [],
  smart_type: "NOT_SMART",
  tags: [],
  is_available_for_new_content: true,
};

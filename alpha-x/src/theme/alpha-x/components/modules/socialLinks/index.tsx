import { Icon } from "@hubspot/cms-components";

/* -----------------------------
   Helper: Resolve Link
------------------------------ */
function resolveLink(linkField) {
  if (!linkField || !linkField.url) {
    return { href: "#", target: "_self", rel: "" };
  }

  const { href, type } = linkField.url;
  const openInNewTab = linkField.open_in_new_tab;
  const noFollow = linkField.no_follow;

  let finalHref = href || "#";
  let rel = "";
  let target = openInNewTab ? "_blank" : "_self";

  switch (type) {
    case "EMAIL_ADDRESS":
      finalHref = `mailto:${href}`;
      rel = "nofollow";
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
      rel = "noopener";
      break;

    case "EXTERNAL":
      rel = openInNewTab
        ? "noopener nofollow"
        : noFollow
        ? "nofollow"
        : "";
      break;

    default:
      rel = noFollow ? "nofollow" : "";
      break;
  }

  return { href: finalHref, target, rel };
}

/* -----------------------------
   Component
------------------------------ */
export const Component = ({ fieldValues }) => {
  const items = fieldValues?.social_icon?.items || [];

  return (
    <>
      <style>
        {`
          .social-links {
            display: flex;
            gap: 10px;
          }

          .social-links_icon a {
            line-height: 0;
            height: 2.1875rem;
            width: 2.1875rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.25rem;
          }

          .social-links_icon img {
            max-width: 100%;
            height: auto;
          }
        `}
      </style>

      <div className="social-links">
        {items.map((item, index) => {
          const { href, target, rel } = resolveLink(item.link_field);

          return (
            <div key={index} className="social-links_icon">
              <a href={href} target={target} rel={rel}>
                
                {/* HubSpot Icon */}
                {item.icon_choice === "hubspot_icon" && item.icon_field && (
                  <Icon fieldPath={`social_icon.items[${index}].icon_field`} />
                )}

                {/* Image Icon */}
                {item.icon_choice === "image" && item.image_field && (
                  <img
                    src={item.image_field.src}
                    alt={item.image_field.alt || "social icon"}
                    width={item.image_field.width}
                    height={item.image_field.height}
                    loading="lazy"
                  />
                )}

                {/* SVG Icon */}
                {item.icon_choice === "svg_icon" && item.svg_icon && (
                  <div
                    dangerouslySetInnerHTML={{ __html: item.svg_icon }}
                  />
                )}
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { fields } from "./fields.js";

export const meta = {
  label: "Social Links",
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
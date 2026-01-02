import { useId } from "react";
import { Island } from "@hubspot/cms-components";
import PopUpIsland from "./Island/PopUpIsland.js?island";


export const Component = ({ fieldValues, hublData }) => {
  const reactId = useId();
  const uniqueClass = `module_${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;
  const customClass = fieldValues?.custom_id_class?.class || "";
  const customId = fieldValues?.custom_id_class?.custom_id;
  const videoType = fieldValues?.video_image?.video_choice || "image";
// hublData
const {videoItems}=hublData;

  return (
    <>
      <style>
        {`
 
    .video-popup-open .${uniqueClass} .video-popup__overlay {
    opacity: 1;
    visibility: visible;
}
  .${uniqueClass} .video-popup__overlay {
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    visibility: hidden;
      transition:all 0.3s;
}
body.video-popup-open  {
    position: relative;
    overflow: hidden;
}
  .${uniqueClass} .video-popup__video-file.is-popup .video-popup__file-popup {
    transform: translate(-50%, -50%) scale(1);
    visibility: visible;
    opacity: 1;
}
.${uniqueClass} .video-popup__cross svg {
    height: 20px;
}
.${uniqueClass} .video-popup__video-file-popup img {
    width: 100%;
    display: block;
    object-fit: cover;
    object-position: center;
}
.${uniqueClass} .video-popup__cross {
    cursor: pointer;
    position: absolute;
    top: 28px;
    right: 28px;
    z-index: 2;
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
}

.${uniqueClass} .video-popup__cross svg {
    height: 24px;
    fill: #fff;
}

.${uniqueClass} .video-popup__file-popup video {
    object-fit: cover;
    object-position: center;
    display: block;
    width: 100%;
    height: 100%;
}

.${uniqueClass} .video-popup__file-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition:all 0.3s;
    max-height: calc(100vh - 30px);
    width: calc(100% - 30px);
    max-width: 1000px;
    z-index: 99;
    padding: 15px;
    overflow-y: auto;
    opacity: 0;
    visibility: hidden;
}


   .${uniqueClass} .video-popup__video-file {
   position:relative
   }
.${uniqueClass} .video-popup__embed {
    position: relative;
    padding-bottom: 50%;
}
     .${uniqueClass} .video-popup__embed iframe {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    object-fit: cover;
    width: 100%;
}
  .${uniqueClass} .video-popup__items {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.${uniqueClass} .video-popup__button {
    background-color: rgba(84, 79, 255, 100%);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    height: 84px;
    width: 84px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.3s;
}

.${uniqueClass} .video-popup__items:before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
   .${uniqueClass} .video-popup__video-file video {
    width: 100%;
    height: 100%;
    max-height: 500px;
    object-fit: cover;
    object-position: center;
}
.${uniqueClass} .video-popup__button svg {
   height: 30px;
    fill: #fff;
    margin-left: 5px;
}

.${uniqueClass} .video-popup__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.video-popup.${uniqueClass}  {
    padding: 100px 0;
}
  `}
      </style>
      <section
        {...(customId ? { id: customId } : {})}
        className={`video-popup ${customClass} ${uniqueClass}`}
        data-video-type={videoType}
      >
        <div className="video-popup__container">
      

          <div className="video-popup__items">
         
        {videoItems.map((item,index)=>(<Island
               key={index}
                module={PopUpIsland}
                hydrateOn="load"
                videoType={item.videoType}
                videoFile={item.videoFile}
                embedHtml={item.embedHtml}
                videoEmbed={item.videoEmbed}
                heading={item.heading}
                videoPoster={item.videoPoster}
                popupEnable={item.popupEnable} // true ya false
              />))}
          </div>
        </div>
      </section>
    </>
  );
};

export { fields } from "./fields.js";

export const hublDataTemplate = `
{# 1. Initialize the list to store data for all repeated items #}
{% set video_list = [] %}

{% for item in module.heading_video %}
  {# Shortcuts for nested paths within the repeater item #}
  {% set v_group = item.video_image %}
  {% set current_video_render = "" %}
  {% set current_embed_html = "" %}
  
  {# --- Handle Choice: HubSpot Video --- #}
  {% if v_group.video_choice == "hubspot_video" and v_group.videoplayer_field.player_id %}
    {% set current_video_render %}
      {% video_player "embed_player"
        player_id="{{ v_group.videoplayer_field.player_id }}",
        type="{{ v_group.videoplayer_field.player_type or 'scriptV4' }}",
        autoplay={{ v_group.videoplayer_field.autoplay }},
        loop={{ v_group.videoplayer_field.loop_video }},
        muted={{ v_group.videoplayer_field.mute_by_default }},
        full_width=True,
        conversion_asset={{ v_group.videoplayer_field.conversion_asset | tojson }}
      %}
    {% endset %}

  {# --- Handle Choice: Embed Code --- #}
  {% elif v_group.video_choice == "embed_code" %}
    {% if v_group.embed_field.source_type == "oembed" %}
      {% set current_embed_html = v_group.embed_field.oembed_response.html %}
    {% else %}
      {% set current_embed_html = v_group.embed_field.embed_html %}
    {% endif %}
  {% endif %}

  {# --- Prepare the Object for this specific Item --- #}
  {% do video_list.append({
    "videoType": v_group.video_choice,
    "videoEmbed": current_video_render,
    "embedHtml": current_embed_html,
    "popupEnable": item.popup_enable.enable,
    "heading": item.main_heading.heading,
    "videoPoster":v_group.video_thumnail.image,
    "videoFile":v_group.file_field,
  }) %}
{% endfor %}

{# 2. Final data object sent to React #}
{% set hublData = {
  'videoItems': video_list
} %}`;

export const meta = {
  label: "Repeated PopUp Video",
  css_assets: [],
  external_js: [],
  global: false,
  help_text: "",
  content_types: ["LANDING_PAGE", "SITE_PAGE"],
  js_assets: [],
  other_assets: [],
  smart_type: "NOT_SMART",
  tags: [],
  is_available_for_new_content: true,
};

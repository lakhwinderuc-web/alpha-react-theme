import { useId  } from 'react';
import { Island } from '@hubspot/cms-components';
import VideoIsland from './Island/VideoIsland.js?island' 
export const Component = ({ fieldValues,hublData }) => {
  const reactId = useId();
  
const uniqueClass = `module_${reactId.replace(/[^a-zA-Z0-9]/g, '')}`;
const customClass = fieldValues?.custom_id_class?.class || '';
const customId = fieldValues?.custom_id_class?.custom_id;
const videoType = fieldValues?.video_image?.video_choice || 'image';
const imageField = fieldValues?.video_image?.image_field;
const embedField = fieldValues?.video_image?.embed_field;
// const hubspotVideo = fieldValues?.video_image?.videoplayer_field;
// const videoFile = fieldValues?.video_image?.file_field;
// const videoPoster = fieldValues?.video_image?.video_thumnail?.image;
const {videoData}=hublData;
console.log(videoData);


const popupEnable = fieldValues?.popup_enable?.enable === true;
  return (
    <>
    <style>
 
    {
   `
   body.video-popup-open .${uniqueClass} .video-popuo__overlay{
     opacity:1;
    visibility: visible;
   }
  .${uniqueClass} .video-popuo__overlay {
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


   .${uniqueClass} .video-popup__video-file-popup {
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
  `
    }

</style>
<section
  {...(customId ? { id: customId } : {})}
  className={`video-popup ${customClass} ${uniqueClass}`}
  data-video-type={videoType}
>
  <div className="video-popup__container">
    <div
      className="video-popup__heading"
      dangerouslySetInnerHTML={{
        __html: fieldValues?.main_heading?.heading || "",
      }}
    />

    <div className="video-popup__items">
      {/* IMAGE ONLY */}
      {videoType === "image" && imageField?.src && (
        <img
          src={imageField.src}
          alt={imageField.alt || ""}
          width={imageField.width}
          height={imageField.height}
          loading="lazy"
        />
      )}

      {/* ALL VIDEO TYPES (POPUP + INLINE HANDLED IN ISLAND) */}
      {videoType !== "image" && (
        <Island
          module={VideoIsland}
          hydrateOn="load"
          uniqueClass={uniqueClass}
          videoType={videoData.videoType}
          videoFile={videoData.fileUrl}
          embedHtml={videoData.externalEmbedHtml}
          hubspotVideo={videoData.hubspotVideoHtml}
          videoPoster={videoData.poster}
          popupEnable={popupEnable}
        />
      )}
    </div>
  </div>
</section>

    </>
  );
};


export { fields } from "./fields.js";

export const hublDataTemplate = `
{# 1. Initialize empty list to store processed video data #}
{% set video_data_list = [] %}

{# Since your fields are in the 'video_image' group, we process that specific object #}
{% set item = module.video_image %}

{# Prepare variables for the different formats #}
{% set video_html = "" %}
{% set embed_html = "" %}

{# Logic for Choice: HubSpot Video #}
{% if item.video_choice == "hubspot_video" and item.videoplayer_field.player_id %}
  {% set video_html %}
    {% video_player "embed_player"
      player_id="{{ item.videoplayer_field.player_id }}",
      type="{{ item.videoplayer_field.player_type or 'scriptV4' }}",
      autoplay={{ item.videoplayer_field.autoplay }},
      loop={{ item.videoplayer_field.loop_video }},
      muted={{ item.videoplayer_field.mute_by_default }},
      full_width=True,
      conversion_asset={{ item.videoplayer_field.conversion_asset | tojson }}
    %}
  {% endset %}

{# Logic for Choice: Embed Code #}
{% elif item.video_choice == "embed_code" %}
  {% if item.embed_field.source_type == "oembed" %}
    {% set embed_html = item.embed_field.oembed_response.html %}
  {% else %}
    {% set embed_html = item.embed_field.embed_html %}
  {% endif %}
{% endif %}

{# 2. Construct the data object to send to React #}
{% do video_data_list.append({
  "videoType": item.video_choice,
  "hubspotVideoHtml": video_html,
  "externalEmbedHtml": embed_html,
  "fileUrl": item.file_field,
  "poster": item.video_thumnail.image,
}) %}

{# 3. Final object exported to the component #}
{% set hublData = {
  'videoData': video_data_list[0],
  'popupEnabled': module.popup_enable.enable,
  
} %}`;

export const meta = {
"label": "Video Layouts",
"css_assets": [],
"external_js": [],
"global": false,
"help_text": "",
"content_types": [
"LANDING_PAGE",
"SITE_PAGE"
],
"js_assets": [],
"other_assets": [],
"smart_type": "NOT_SMART",
"tags": [],
"is_available_for_new_content": true
}
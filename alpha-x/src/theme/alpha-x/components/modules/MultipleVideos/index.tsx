export const Component = ({ hublData }) => {
  const { videoItems } = hublData;
  console.log("videoItems", videoItems);

  return (
    <>
    <style>
      {`
      /* The main outer container */
.video-layout {
  display: flex;
  flex-direction: column; /* Stacks videos vertically */
  gap: 40px;             /* Space between each video div */
  width: 100%;
  max-width: 800px;      /* Adjust this to your preferred video width */
  margin: 0 auto;        /* Centers the stack on the page */
  padding: 20px 0;
  align-items:center;
  justify-content:center;

}

/* The individual div holding one video */
.video-layout__wrapper {
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background-color: #000; /* Black bars for videos that don't fit 16:9 */
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

/* Force videos to maintain a 16:9 aspect ratio */
.video-layout__player,
.video-layout__embedvideo,
.video-layout__file-video {
  width: 100% !important;
  aspect-ratio: 16 / 9;
  display: block;
}

/* Ensure Iframes (YouTube/Vimeo) fill the div completely */
.video-layout__embedvideo iframe,
.video-layout__player iframe {
  width: 100% !important;
  height: 100% !important;
  border: none;
}

/* Responsive: smaller gap on mobile */
@media (max-width: 480px) {
  .video-layout__container {
    gap: 20px;
    padding: 10px;
  }
}
      
      `}
    </style>
    <div className="video-layout">
      {videoItems.map((video, index) => (
        <div key={index} className="video-layout__wrapper">
          {video.type === "default" && video.hubspotVideoHtml && (
            <div
              className="video-layout__player"
              dangerouslySetInnerHTML={{ __html: video.hubspotVideoHtml }}
            />
          )}
          {video.type === "file" && video.fileUrl && (
            <video
              src={video.fileUrl}
              className="video-layout__file-video"
              playsInline
              loop
              controls
              width="100%"
            />
          )}
          {video.type === "embed" && video.externalEmbedHtml && (
            <div
              className="video-layout__embedvideo"
              dangerouslySetInnerHTML={{ __html: video.externalEmbedHtml }}
            />
          )}
        </div>
      ))}
    </div>
    </>

  );
};

export { fields } from "./fields.js";

export const hublDataTemplate = `
{# 1. Initialize an empty list to store processed videos #}
{% set video_list = [] %}

{% for item in module.videoGroup %}
  {% set current_video_render = "" %}
  {% set current_embed_html = "" %}

  {# Handle Choice 1: HubSpot Video Player #}
  {% if item.testVideo == "default" and item.videoplayer_field.player_id %}
    {% set current_video_render %}
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

  {# Handle Choice 2: External Embed (YouTube/Vimeo) #}
  {% elif item.testVideo == "embed" %}
    {% if item.embed_field.source_type == "oembed" %}
      {% set current_embed_html = item.embed_field.oembed_response.html %}
    {% else %}
      {% set current_embed_html = item.embed_field.embed_html %}
    {% endif %}
  {% endif %}

  {# 2. Append this specific video data to our list #}
  {% do video_list.append({
    "type": item.testVideo,
    "hubspotVideoHtml": current_video_render,
    "externalEmbedHtml": current_embed_html,
    "fileUrl": item.file_field
  }) %}
{% endfor %}

{# 3. Send the entire array to your React component #}
{% set hublData = {
  'videoItems': video_list
} %}`;

export const meta = {
  label: "Multiple Videos",
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

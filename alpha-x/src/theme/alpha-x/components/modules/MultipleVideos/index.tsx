export const Component = ({ fieldValues, hublData }) => {
  const videoType = fieldValues?.testVideo;
  const fileVideo = fieldValues?.file_field;
  const embedVideo = fieldValues?.embed_field;
  const { videoEmbed, embedHtml } = hublData;
  console.log(embedVideo);

  return (
    <div className="videoLayout">
      {videoType === "default" && (
        <div
          className="video-player"
          dangerouslySetInnerHTML={{ __html: videoEmbed }}
        />
      )}

      {videoType === "file" && (
        <video src={fileVideo} playsInline loop controls />
      )}

      {videoType === "embed" && (
        <div
          className="embed-video"
          dangerouslySetInnerHTML={{
            __html: embedHtml,
          }}
        />
      )}
    </div>
  );
};

export { fields } from "./fields.js";

export const hublDataTemplate = `
   {% if module.videoplayer_field.player_id %}
    {% set videoEmbed %}
      {% video_player "embed_player"
        player_id="{{ module.videoplayer_field.player_id }}",
        type="{{ module.videoplayer_field.player_type or 'scriptV4' }}",
        autoplay={{ module.videoplayer_field.autoplay }},
        hidden_controls={{ module.videoplayer_field.hide_control }},
        loop={{ module.videoplayer_field.loop_video }},
        muted={{ module.videoplayer_field.mute_by_default }},
        full_width=True,
        width={{ module.videoplayer_field.width }},
        height={{ module.videoplayer_field.height }},
        conversion_asset={{ module.videoplayer_field.conversion_asset | tojson }}
      %}
    {% endset %}
    {% set hasVideo = true %}
  {% else %}
    {% set videoEmbed = "" %}
    {% set hasVideo = false %}
  {% endif %}

{# 2. Handle Embed Field (The fix for your issue) #}
  {% set embedHtml = "" %}
  {% if module.embed_field.source_type == "oembed" %}
    {% set embedHtml = module.embed_field.oembed_response.html %}
  {% elif module.embed_field.source_type == "html" %}
    {% set embedHtml = module.embed_field.embed_html %}
  {% endif %}

  {# Combine all data for React component #}
  {% set hublData = {
    'videoEmbed': videoEmbed,
    'hasVideo': hasVideo,
    'embedHtml': embedHtml
  } %}
`;

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

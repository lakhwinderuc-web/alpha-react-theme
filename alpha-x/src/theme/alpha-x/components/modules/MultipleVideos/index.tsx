import { RichText } from "@hubspot/cms-components";

export const Component = ({ fieldValues  }) => {
  const videoType = fieldValues?.testVideo;
  const fileVideo = fieldValues?.file_field;
  const embedVideo = fieldValues?.embed_field;
console.log('videoType:', videoType);
console.log("video",fieldValues.videoplayer_field);
  return (
    <div className="videoLayout">

   {videoType === "default" && (
<RichText fieldPath="videoplayer_field"
  />
)}


      {videoType === "file" && (
       <video
      src={fileVideo}
      playsInline
      loop
      controls
    />
      )}

     {videoType === "embed" && embedVideo && (
  <div className="embed-video">
    {embedVideo.source_type === "oembed" &&
      embedVideo.oembed_response?.html && (
        <div
          dangerouslySetInnerHTML={{
            __html: embedVideo.oembed_response.html,
          }}
        />
      )}

    {embedVideo.source_type === "html" &&
      embedVideo.html && (
        <div
          dangerouslySetInnerHTML={{
            __html: embedVideo.html,
          }}
        />
      )}
  </div>
)}
    </div>
  );
};

export { fields } from "./fields.js";


export const meta = {
  "label": "Multiple Videos",
  "css_assets": [],
  "external_js": [],
  "global": false,
  "help_text": "",
  "content_types": [
    "ANY",
    "LANDING_PAGE",
    "SITE_PAGE",
    "BLOG_POST",
    "BLOG_LISTING"
  ],
  "js_assets": [],
  "other_assets": [],
  "smart_type": "NOT_SMART",
  "tags": [],
  "is_available_for_new_content": true
};
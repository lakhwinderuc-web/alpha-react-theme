import { useId } from 'react';
export const Component = ({ fieldValues }) => {
  const reactId = useId();
  const customClass = fieldValues?.custom_id_class?.class || '';
  const customId = fieldValues?.custom_id_class?.custom_id;
  const uniqueClass = `module_${reactId.replace(/[^a-zA-Z0-9]/g, '')}`;
const videoType = fieldValues?.video_image?.video_choice || 'image';
const imageField = fieldValues?.video_image?.image_field;
const embedField = fieldValues?.video_image?.embed_field;
const hubspotVideo = fieldValues?.video_image?.videoplayer_field;
const videoFile = fieldValues?.video_image?.file_field;
const videoPoster = fieldValues?.video_image?.video_thumnail?.image;
const DEFAULT_IFRAME = `<iframe 
                                                      width="560" 
                                                      height="315" 
                                                      src="https://www.youtube.com/embed/D0UnqGm_miA?si=Qt4aAMk2pZluYT3F" 
                                                      title="YouTube video player" 
                                                      frameborder="0" 
                                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                      referrerpolicy="strict-origin-when-cross-origin" 
                                                      allowfullscreen>
                                                    </iframe>`;
 

  return (
    <>
    <style>
 
    {
   `
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
            __html: fieldValues?.main_heading?.heading || '',
          }}
        />

        <div className="video-popup__items">

          {/* IMAGE */}
          {videoType === 'image' && imageField?.src && (
            <div className='video-popup__image'>
            <img
              src={imageField.src}
              alt={imageField.alt || ''}
              width={imageField.width}
              height={imageField.height}
              loading={imageField.loading || 'lazy'}
            />
            </div>
          )}

          {/* EMBED */}
{videoType === "embed_code" && embedField && (
  <div
    className="video-popup__embed"
    dangerouslySetInnerHTML={{
      __html:
        embedField.source_type === "html"
          ? embedField.html
          : embedField.oembed_response?.html || DEFAULT_IFRAME
    }}
  />
)}


     
  {/* HUBSPOT VIDEO */}
  
{videoType === 'hubspot_video' && hubspotVideo?.player_id && (
  <div
    className="video-popup__hubspot hs-video-widget"
    data-player-id={hubspotVideo.player_id}
    data-width={hubspotVideo.width || 1920}
    data-height={hubspotVideo.height || 1000}
  />
)}
    {/* FILE VIDEO */}
{videoType === 'file' && videoFile && (

  <div className="video-popup__video-file">
    <video
      className="video-popup__file"
      src={videoFile}
      poster={videoPoster?.src}
      playsInline
      loop
    />
     {/* PLAY BUTTON (common UI) */}
          <div className="video-popup__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              aria-hidden="true"
            >
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            </svg>
          </div>
  </div>
)}

        </div>
      </div>
    </section>
    </>
  );
};


export { fields } from "./fields.js";


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
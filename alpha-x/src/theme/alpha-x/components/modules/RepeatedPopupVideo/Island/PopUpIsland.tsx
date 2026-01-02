import { useRef, useEffect, useState } from "react";

export default function PopUpIsland({
  videoFile,
  videoPoster,
  popupEnable,
  videoEmbed,
  embedHtml,
  videoType,
  heading,
}) 

{
  const videoRef = useRef(null);
  const playButtonRef = useRef(null);
  const videoSectionRef = useRef(null);
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => {
    setPopupOpen(false);
    videoRef.current?.pause();
  };

  // Add/remove body class for overlay
  useEffect(() => {
    if (popupEnable && popupOpen) {
      document.body.classList.add("video-popup-open");
    } else {
      document.body.classList.remove("video-popup-open");
    }

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("video-popup-open");
    };
  }, [popupEnable, popupOpen]);

  useEffect(() => {
    const videoEl = videoRef.current;
    const playIcon = playButtonRef.current;
    const videoSection = videoSectionRef.current;

    // We only attach listeners for local "file" types
    if (videoType !== "file" || !videoEl || !playIcon || !videoSection) return;

    const onPlay = () => {
      videoSection.classList.add("video_played");
      playIcon.style.display = "none";
      videoEl.setAttribute("controls", "true");
    };

    const onPause = () => {
      videoSection.classList.remove("video_played");
      playIcon.style.display = "flex";
    };

    videoEl.addEventListener("play", onPlay);
    videoEl.addEventListener("pause", onPause);

    return () => {
      videoEl.removeEventListener("play", onPlay);
      videoEl.removeEventListener("pause", onPause);
    };
  }, [popupOpen, videoType]); // Add these here

  return (
    <>
      <div
        className="video-popup__heading"
        dangerouslySetInnerHTML={{ __html: heading }}
      />

      <div
        className={`video-popup__video-file ${popupEnable ? "is-popup" : "is-inline"}`}
        ref={videoSectionRef}
        // style={{ position: 'relative' }} // Add this inline style
      >
        {popupEnable ? (
          <>
            <img
              src={videoPoster?.src}
              alt={videoPoster?.alt || ""}
              height={videoPoster?.height}
              width={videoPoster?.width}
              className="video-popup__poster"
            />
           
              <div
                className="video-popup__button"
                ref={playButtonRef}
                onClick={
                  popupEnable ? openPopup : () => videoRef.current?.play()
                }
              >
                <svg viewBox="0 0 448 512" aria-hidden="true">
                  <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                </svg>
              </div>
        

            {popupOpen && (
              <div className="video-popup__file-popup">
                <div className="video-popup__cross" onClick={closePopup}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                  </svg>
                </div>
                {videoType === "file" && (
                  <video
                    className="video-popup__file"
                    ref={videoRef}
                    src={videoFile}
                    playsInline
                    loop
                    controls
                    autoPlay
                  />
                )}

                {videoType === "hubspot_video" && videoEmbed && (
                  <div
                    className="video-popup__hubspot hs-video-widget"
                    dangerouslySetInnerHTML={{ __html: videoEmbed }}
                  />
                )}

                {videoType === "embed_code" && embedHtml && (
                  <div
                    className="video-popup__embed"
                    dangerouslySetInnerHTML={{ __html: embedHtml }}
                  />
                )}
              </div>
            )}
            <div className="video-popup__overlay"></div>
          </>
        ) : (
          <>
            {videoType === "file" && (
              <>
               
           
             <div className="video-popup__button" ref={playButtonRef} onClick={() => videoRef.current?.play()}>
            <svg viewBox="0 0 448 512" aria-hidden="true">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"/>
            </svg>
          </div>
              <video
                className="video-popup__file"
                ref={videoRef}
                src={videoFile.src}
                poster={videoPoster.src}
                playsInline
              />
              </>
            )}

            {videoType === "hubspot_video" && videoEmbed && (
              <div
                className="video-popup__hubspot hs-video-widget"
                dangerouslySetInnerHTML={{ __html: videoEmbed }}
              />
            )}

            {videoType === "embed_code" && embedHtml && (
              <div
                className="video-popup__embed"
                dangerouslySetInnerHTML={{ __html: embedHtml }}
              />
            )}
      
          </>
        )}
      </div>
    </>
  );
}

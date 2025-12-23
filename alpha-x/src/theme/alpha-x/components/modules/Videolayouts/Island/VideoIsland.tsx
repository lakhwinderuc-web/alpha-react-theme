import { useRef, useEffect, useState } from "react";

export default function VideoIsland({
  videoType,
  videoFile,
  embedHtml,
  hubspotVideo,
  videoPoster,
  popupEnable,
}) {
  const videoRef = useRef(null);
  const playButtonRef = useRef(null);
  const videoSectionRef = useRef(null);
  const [popupOpen, setPopupOpen] = useState(false);

  /* --------------------------------------------------
     EARLY EXIT
     popup OFF + non-file video → render nothing
  -------------------------------------------------- */
  if (!popupEnable && videoType !== "file") {
    return null;
  }

  /* --------------------------------------------------
     HANDLERS
  -------------------------------------------------- */
  const handlePlayClick = () => {
    if (popupEnable) {
      setPopupOpen(true);
    } else {
      videoRef.current?.play();
    }
  };

  const closePopup = () => {
    setPopupOpen(false);
    videoRef.current?.pause();
  };

  /* --------------------------------------------------
     BODY CLASS (POPUP MODE)
  -------------------------------------------------- */
  useEffect(() => {
    if (popupEnable && popupOpen) {
      document.body.classList.add("video-popup-open");
    } else {
      document.body.classList.remove("video-popup-open");
    }

    return () => document.body.classList.remove("video-popup-open");
  }, [popupEnable, popupOpen]);

  /* --------------------------------------------------
     INLINE FILE VIDEO CONTROLS
  -------------------------------------------------- */
  useEffect(() => {
    if (popupEnable || videoType !== "file") return;

    const videoEl = videoRef.current;
    const playIcon = playButtonRef.current;
    const videoSection = videoSectionRef.current;

    if (!videoEl || !playIcon || !videoSection) return;

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
  }, [popupEnable, videoType]);

  /* --------------------------------------------------
     RENDER
  -------------------------------------------------- */
  return (
    <div
      className={`video-popup__video-file ${
        popupEnable ? "is-popup" : "is-inline"
      }`}
      ref={videoSectionRef}
    >
      {/* INLINE FILE VIDEO (POPUP OFF) */}
      {!popupEnable && videoType === "file" && videoFile && (
        <video
          ref={videoRef}
          src={videoFile}
          poster={videoPoster?.src}
          playsInline
        />
      )}

      {/* POSTER (POPUP ON) */}
      {popupEnable && (
        <img
          src={videoPoster?.src}
          alt={videoPoster?.alt || ""}
          width={videoPoster?.width}
          height={videoPoster?.height}
          className="video-popup__poster"
        />
      )}

      {/* PLAY BUTTON */}
      <div
        className="video-popup__button"
        ref={playButtonRef}
        onClick={handlePlayClick}
        aria-label="Play video"
      >
        <svg viewBox="0 0 448 512" aria-hidden="true">
          <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
        </svg>
      </div>

      {/* POPUP */}
      {popupEnable && popupOpen && (
        <div className="video-popup__file-popup">
          <div
            className="video-popup__cross"
            onClick={closePopup}
            aria-label="Close video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </div>

          {/* FILE VIDEO */}
          {videoType === "file" && videoFile && (
            <video
              ref={videoRef}
              src={videoFile}
              playsInline
              controls
              autoPlay
            />
          )}

          {/* EMBED VIDEO */}
          {videoType === "embed_code" && embedHtml && (
            <div
              className="video-popup__embed"
              dangerouslySetInnerHTML={{ __html: embedHtml }}
            />
          )}

          {/* HUBSPOT VIDEO */}
          {videoType === "hubspot_video" && hubspotVideo?.player_id && (
            <div
              className="hs-video-widget"
              data-player-id={hubspotVideo.player_id}
              data-width={hubspotVideo.width || 1920}
              data-height={hubspotVideo.height || 1080}
            />
          )}
        </div>
      )}

      {/* OVERLAY */}
      {popupEnable && <div className="video-popuo__overlay" />}
    </div>
  );
}

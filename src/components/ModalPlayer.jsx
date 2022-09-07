import React, { memo, useCallback } from "react";
import MusicContext from "../data/AppContext";

const ModalPlayer = memo(({ id, visibility, type }) => {
  const url = `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`;
  const { setShowFrame } = MusicContext();
  const hidePlayer = useCallback(() => {
    setShowFrame(false);
  });
  if (visibility) {
    return (
      <div className="modal">
        <div className="hide" onClick={hidePlayer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Close Circle</title>
            <path
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
              fill="none"
              stroke="currentColor"
              strokeLinecap={10}
              strokeWidth={32}
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M320 320L192 192M192 320l128-128"
            />
          </svg>
        </div>
        <iframe
          src={url}
          width="100%"
          height={380}
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    );
  }
  return null;
});

export default ModalPlayer;

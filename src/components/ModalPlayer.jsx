import React, { memo } from "react";

const ModalPlayer = memo(({ id, visibility }) => {
  if (visibility) {
    return (
      <div className="modal">
        <iframe
          style={{
            borderRadius: 12 + "px",
          }}
          src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
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

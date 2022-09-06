import React, { memo } from "react";

const ModalPlayer = memo(({ id, visibility, type }) => {
  const url = `https://open.spotify.com/embed/${type}/${id}?utm_source=generator`;
  console.log(url);
  if (visibility) {
    return (
      <div className="modal">
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

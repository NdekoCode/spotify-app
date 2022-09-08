import React from "react";
const CardSkeleton = () => {
  return (
    <>
      <div className="card is-loading">
        <div className="card-img skeleton-anim"></div>
        <div className="card-content">
          <h3 className="title skeleton-title skelon-anim"></h3>
          <p className="text skeleton-text skelon-anim"></p>
          <p className="text skeleton-text skelon-anim"></p>
          <p className="text skeleton-text skelon-anim"></p>
        </div>
      </div>
      <div className="card is-loading">
        <div className="card-img">
          <img />
        </div>
        <div className="card-content">
          <h2 className="title"></h2>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;

import React from "react";
const CardSkeleton = () => {
  return (
    <>
      <div class="card is-loading">
        <div class="card-img skeleton-anim"></div>
        <div class="card-content">
          <h3 class="title skeleton-title skelon-anim"></h3>
          <p class="text skeleton-text skelon-anim"></p>
          <p class="text skeleton-text skelon-anim"></p>
          <p class="text skeleton-text skelon-anim"></p>
        </div>
      </div>
      <div class="card is-loading">
        <div class="card-img">
          <img />
        </div>
        <div class="card-content">
          <h2 class="title"></h2>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default CardSkeleton;

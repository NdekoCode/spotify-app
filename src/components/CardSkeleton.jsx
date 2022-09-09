/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';

function CardSkeleton() {
  return (
    <>
      <div className="card is-loading">
        <div className="card-img skeleton-anim" />
        <div className="card-content">
          <h3 className="title skeleton-title skelon-anim" />
          <p className="text skeleton-text skelon-anim" />
          <p className="text skeleton-text skelon-anim" />
          <p className="text skeleton-text skelon-anim" />
        </div>
      </div>
      <div className="card is-loading">
        <div className="card-img">
          <img alt="" />
        </div>
        <div className="card-content">
          <h2 className="title" />
          <p />
        </div>
      </div>
    </>
  );
}

export default CardSkeleton;

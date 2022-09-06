import React from "react";
import { catString } from "../data/utilsFunc";
import CardDetails from "./CardDetails";

const AlbumsData = ({ albumItems }) => {
  if (albumItems !== undefined && albumItems !== null) {
    return (
      <main className="grid place-items-center mt-5 p-5">
        <div>
          <h2 className="title text-4xl text-gray-800 font-black">
            Suggest Albums
          </h2>
          <section className="grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-2 gap-4">
            {albumItems.map(
              (
                { artists, images, name, total_tracks, release_date },
                index
              ) => (
                <CardDetails
                  artists={artists}
                  name={catString(name)}
                  images={images}
                  total_tracks={total_tracks}
                  release_date={release_date}
                  key={index}
                />
              )
            )}
          </section>
        </div>
      </main>
    );
  }
};

export default AlbumsData;

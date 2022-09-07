import React from "react";

const TrackView = () => {
  return (
    <div className="px-8 lg:ml-48 lg:px-20 lg:py-6 bg-black text-gray-100 min-h-screen overflow-hidden">
      <div className="py-24 ">
        <div>
          <div className="flex items-start">
            <div className="w-3/12">
              <img
                src="https://i.scdn.co/image/ab67616d00001e02b6d4478c6f91f1cb2d326c78"
                alt="album"
                className="object-cover w-full"
              />
            </div>
            <div className="ml-4 w-9/12">
              <h2 className="text-white text-lg lg:text-4xl">
                Whatever You Like
              </h2>
              <h4 className="text-gray-600 text-base lg:text-2xl mt-1 truncate">
                T.I. ⋄ Paper Trail
              </h4>
              <a
                className="mt-3 text-xs md:text-sm inline-block rounded-full px-2 md:px-3 bg-spotify text-white py-1 md:py-2"
                href="https://open.spotify.com/track/1IAzD1muglOxOcPbUHs70R"
                target="_blank"
                rel="noreferrer"
              >
                Play on Spotify
              </a>
            </div>
          </div>
          <div className="graph mt-16 w-full">
            <h3 className="text-2xl heading mb-8">Track Features</h3>
            <div className="">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                  <div className="" />
                </div>
                <div className="chartjs-size-monitor-shrink">
                  <div className="" />
                </div>
              </div>
              <canvas
                height={400}
                width={1205}
                style={{ display: "block", width: 1205, height: 400 }}
                className="chartjs-render-monitor"
              />
            </div>
            <div className="mt-16 ">
              <h3 className="text-2xl heading mb-5">Features Description</h3>
              <div className=" mb-6">
                <h3 className="text-gray-300">Danceability</h3>
                <p className="text-gray-600">
                  Danceability describes how suitable a track is for dancing.{" "}
                </p>
              </div>
              <div className=" mb-6">
                <h3 className="text-gray-300">Acousticness</h3>
                <p className="text-gray-600">
                  High value represents high confidence that the track is
                  acoustic.
                </p>
              </div>
              <div className=" mb-6">
                <h3 className="text-gray-300">Energy</h3>
                <p className="text-gray-600">
                  Energy represents a perceptual measure of intensity and
                  activity. Typically, energetic tracks feel fast, loud, and
                  noisy.
                </p>
              </div>
              <div className=" mb-6">
                <h3 className="text-gray-300">Instrumentalness</h3>
                <p className="text-gray-600">
                  Predicts whether a track contains no vocals. “Ooh” and “aah”
                  sounds are treated as instrumental in this context. Rap or
                  spoken word tracks are clearly “vocal”. High value represents
                  the greater likelihood the track contains no vocal content.
                </p>
              </div>
              <div className=" mb-6">
                <h3 className="text-gray-300">Liveness</h3>
                <p className="text-gray-600">
                  Detects the presence of an audience in the recording. Higher
                  liveness values represent an increased probability that the
                  track was performed live.
                </p>
              </div>
              <div className=" mb-6">
                <h3 className="text-gray-300">Valence</h3>
                <p className="text-gray-600">
                  A measure of the musical positiveness conveyed by a track.
                  Tracks with high valence sound more positive (e.g. happy,
                  cheerful, euphoric), while tracks with low valence sound more
                  negative (e.g. sad, depressed, angry).
                </p>
              </div>
              <div className=" mb-6">
                <h3 className="text-gray-300">Speechiness</h3>
                <p className="text-gray-600">
                  Speechiness detects the presence of spoken words in a track.
                  The more exclusively speech-like the recording (e.g. talk
                  show, audio book, poetry), the higher the attribute value.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackView;

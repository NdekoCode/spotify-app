import React from "react";

const CardArtist = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto">
        <div className="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
          <div className="h-48 overflow-visible w-1/2">
            <img
              className="rounded-3xl shadow-lg"
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2 space-y-4">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold">
                Sweet Tooth: El niño ciervo
              </h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">7.2</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Series</div>
              <div className="text-lg text-gray-800">2019</div>
            </div>
            <p className=" text-gray-400 max-h-40 overflow-y-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex text-2xl font-bold text-a">$83.90</div>
          </div>
        </div>
      </div>
      <>
        {/* component */}
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
            <div className="relative mb-6">
              <img
                className="w-full"
                src="https://unsplash.com/photos/PElJMFWV3kk/download?force=true&w=640"
                alt="Profile picture"
              />
              <div
                className="text-center absolute w-full"
                style={{ bottom: "-30px" }}
              >
                <div className="mb-10">
                  <p className="text-white tracking-wide uppercase text-lg font-bold">
                    Witch
                  </p>
                  <p className="text-gray-400 text-sm">@witch_forever</p>
                </div>
                <button className="btn-m p-4 rounded-full transition ease-in duration-200 focus:outline-none">
                  <svg
                    viewBox="0 0 20 20"
                    enableBackground="new 0 0 20 20"
                    className="w-6 h-6"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
               C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
               C15.952,9,16,9.447,16,10z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="py-10 px-6 text-center tracking-wide grid grid-cols-3 gap-6">
              <div className="posts">
                <p className="text-lg">324</p>
                <p className="text-gray-400 text-sm">Posts</p>
              </div>
              <div className="followers">
                <p className="text-lg">7542</p>
                <p className="text-gray-400 text-sm">Followers</p>
              </div>
              <div className="following">
                <p className="text-lg">295</p>
                <p className="text-gray-400 text-sm">Following</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default CardArtist;

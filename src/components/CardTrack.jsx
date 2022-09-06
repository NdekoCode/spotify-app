import React from "react";

const CardTrack = () => {
  return (
    <div className="card-track ounded-2xl bg-white shadow-lg cursor-pointer min-w-max">
      <div className="group relative h-60 flex flex-col items-center justify-center">
        <img
          className="block rounded-full h-40 w-40 shadow-2xl"
          src="https://images.unsplash.com/photo-1576863514292-542ef379c13b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt="Image"
        />
        <div className="absolute h-40 w-40 bg-gray-800 bg-opacity-0 group-hover:bg-opacity-60 flex items-center rounded-full group-hover:opacity-100 transition duration-300 justify-evenly">
          <button
            // onClick={showPlayer}
            className="hover:scale-110 text-green-500 opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              fill="currentColor"
              className="bi bi-play-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-1">
        <h3 className="text-gray-600 text-lg font-semibold">Artist</h3>
        <p className="text-gray-400">Description</p>
      </div>
    </div>
  );
};

export default CardTrack;

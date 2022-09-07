import React, { useCallback, useState } from "react";
import MusicContext from "../data/AppContext";
import useFetch from "../data/hookFunc";

const Search = () => {
  const {
    setting,
    searchUser,
    dataSongs,
    setDataSong,
    isLoading,
    setIsLoading,
    setSearchUser,
  } = MusicContext();
  const [input, setInput] = useState("");
  const url = `https://api.spotify.com/v1/search?q=${searchUser}&type=album,track,artist,playlist,show,episode&include_external=audio?limit=15`;
  const [data, loading] = useFetch(
    url,
    dataSongs,
    setting.authorize_token,
    isLoading
  );

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      setSearchUser(input);
      setDataSong(data);
      setIsLoading(loading);
    },
    [input, data, isLoading]
  );
  const handleChange = useCallback(({ target }) => {
    setInput(target.value);
    setSearchUser(target.value);
  });
  return (
    <form className="flex items-center basis-1/2" onSubmit={handleSubmit}>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full flex items-center">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg rounded-tr-none rounded-br-none focus:ring-blue-500 focus:border-blue-500 block w-full min-w-max p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 duration-300 outline-none border-r-0 border-r-none"
          placeholder="Search"
          value={input}
          onChange={handleChange}
          required=""
        />

        <button
          type="submit"
          className="p-2.5 text-sm font-medium  text-gray-600 hover:text-gray-50 rounded-lg rounded-tl-none rounded-bl-none border border-l-none hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-300"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
};

export default Search;

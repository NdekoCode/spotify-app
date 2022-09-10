import React, { useCallback, useEffect, useState } from 'react';
import MusicContext from '../data/AppContext';
import { findAndSetData } from '../data/getData';

const Search = () => {
  const {
    setting,
    searchUser,
    setDataSong,
    setIsLoading,
    isLoading,
    setSearchUser,
  } = MusicContext();
  const [input, setInput] = useState(searchUser);
  const params = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: setting.authorize_token,
    },
  };
  const url = `https://api.spotify.com/v1/search?q=${searchUser}&type=album,track,artist,playlist,show,episode&include_external=audio?limit=15`;
  const searchData = () => {
    console.log(url);
    (async () => {
      const response = await fetch(url, params);
      const responseData = await response.json();
      if (response.ok) {
        setIsLoading(false);
        setDataSong(responseData);
      } else {
        setIsLoading(false);
      }
    })();
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSearchUser(input.trim());
    if (input.length > 1 && searchUser.length > 1) {
      searchData();
    }
  };
  const handleChange = useCallback(({ target }) => {
    const value = target.value.trim();
    setInput(value);
    setSearchUser(value);

    if (input.length > 0 && searchUser.length > 0) {
      searchData();
    }
  });
  useEffect(() => {
    if (input.length > 0 && searchUser.length > 0) {
      searchData();
    }
  }, [input, searchUser]);
  return (
    <form
      className="flex items-center basis-full md:basis-1/2"
      onSubmit={handleSubmit}
    >
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full flex items-center">
        <input
          type="search"
          id="simple-search"
          className="bg-gray-500 border-gray-300 text-gray-100 text-sm rounded-lg rounded-tr-none rounded-br-none focus:ring-blue-500 focus:border-blue-500 block w-full min-w-max p-2.5  dark:bg-gray-700 placeholder:text-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 duration-300 outline-none border-r-0 border-r-none"
          placeholder="Search"
          value={input}
          onChange={handleChange}
          required=""
        />

        <button
          type="submit"
          className="p-2.5 text-sm font-medium  text-gray-300 hover:text-gray-50 rounded-lg rounded-tl-none rounded-bl-none border-l-none hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-300"
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

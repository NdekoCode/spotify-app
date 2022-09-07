import React from "react";
import Sidebar from "./Sidebar";

const FakeApp = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="px-8 lg:ml-48 lg:px-20 lg:py-6 bg-black text-gray-100 min-h-screen overflow-hidden">
        <div className="flex flex-col">
          <div className="flex justify-around md:justify-end pt-8 order-last md:order-first mb-20 md:mb-0">
            <div className="flex items-center">
              <div className="flex items-center mr-4 text-gray-600 hover:text-gray-400 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={19}
                  className="w-5 h-5 fill-current transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <title>Home</title>
                  <path d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z" />
                  <path d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z" />
                </svg>
                <a
                  target="blank"
                  className="ml-2 text-sm"
                  href="https://github.com/drkPrince/spotify-profile"
                >
                  Home
                </a>
              </div>
              <button className="text-gray-600 hover:text-gray-400">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    width={13}
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M5 11h8v2H5v3l-5-4 5-4v3zm-1 7h2.708a8 8 0 1 0 0-12H4A9.985 9.985 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4z" />
                  </svg>
                  <h2 className="ml-2 text-sm">Logout</h2>
                </div>
              </button>
            </div>
          </div>
          <main className="py-8 md:pb-12">
            <div className="py-10">
              <h1 className="text-center text-3xl sm:text-4xl lg:text-4xl">
                <span className="text-gray-500">Hi, </span>
                <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text">
                  Arick Bulakali.
                </span>
                <span>👋</span>
              </h1>
            </div>
            <div className="mt-10 md:mt-24">
              <h2 className="text-2xl heading text-center sm:text-left ">
                Artists you love the most
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-4 gap-y-2">
                <a
                  className="bg-gradient-to-b from-gray-900 to-black mr-3 md:mr-6 mt-4 w-36 md:w-40 h-44 flex justify-center items-center text-gray-500 hover:text-gray-200 rounded"
                  href="/artist"
                >
                  <h2>See More</h2>
                </a>
              </div>
            </div>
            <div className="mt-10 md:mt-20">
              <h2 className="text-2xl heading text-center sm:text-left ">
                Your most favourite tracks of all time
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-x-8  gap-y-2">
                <a href="/track/1IAzD1muglOxOcPbUHs70R">
                  <div className="bg-card pb-1.5 mr-3 md:mr-6 mt-4 w-36 md:w-40 shadow-2xl rounded-sm transition-transform duration-200 transform hover:scale-105">
                    <div className="px-4">
                      <div className="image pt-4 opacity-75">
                        <img
                          src="https://i.scdn.co/image/ab67616d00001e02b6d4478c6f91f1cb2d326c78"
                          alt=""
                          className="w-32 h-32 object-cover"
                        />
                      </div>
                      <div className="w-32">
                        <h3 className="mt-1 text-gray-400 truncate">
                          Whatever You Like
                        </h3>
                        <div className="text-sm text-gray-700 mb-2">
                          <h3 className="truncate">T.I.</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/track/6L6lwZwGzn6WWqeLbONWZf">
                  <div className="bg-card pb-1.5 mr-3 md:mr-6 mt-4 w-36 md:w-40 shadow-2xl rounded-sm transition-transform duration-200 transform hover:scale-105">
                    <div className="px-4">
                      <div className="image pt-4 opacity-75">
                        <img
                          src="https://i.scdn.co/image/ab67616d00001e02caf2e6bf6b01a261d23822a4"
                          alt=""
                          className="w-32 h-32 object-cover"
                        />
                      </div>
                      <div className="w-32">
                        <h3 className="mt-1 text-gray-400 truncate">Bloqué</h3>
                        <div className="text-sm text-gray-700 mb-2">
                          <h3 className="truncate">Fally Ipupa</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/track/7GcphTvAmcb6GdoYjN4N8O">
                  <div className="bg-card pb-1.5 mr-3 md:mr-6 mt-4 w-36 md:w-40 shadow-2xl rounded-sm transition-transform duration-200 transform hover:scale-105">
                    <div className="px-4">
                      <div className="image pt-4 opacity-75">
                        <img
                          src="https://i.scdn.co/image/ab67616d00001e022488e22b1bbe6b321942864e"
                          alt=""
                          className="w-32 h-32 object-cover"
                        />
                      </div>
                      <div className="w-32">
                        <h3 className="mt-1 text-gray-400 truncate">
                          S U I S - M O I
                        </h3>
                        <div className="text-sm text-gray-700 mb-2">
                          <h3 className="truncate">Fally Ipupa, Tayc</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/track/0SZrATAQWfdDuufR76mi7Q">
                  <div className="bg-card pb-1.5 mr-3 md:mr-6 mt-4 w-36 md:w-40 shadow-2xl rounded-sm transition-transform duration-200 transform hover:scale-105">
                    <div className="px-4">
                      <div className="image pt-4 opacity-75">
                        <img
                          src="https://i.scdn.co/image/ab67616d00001e023a051f0234fa9cbc491ad2dd"
                          alt=""
                          className="w-32 h-32 object-cover"
                        />
                      </div>
                      <div className="w-32">
                        <h3 className="mt-1 text-gray-400 truncate">
                          Still Fly
                        </h3>
                        <div className="text-sm text-gray-700 mb-2">
                          <h3 className="truncate">Big Tymers</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/track/31kUJ6TBHOICknBrFugOvI">
                  <div className="bg-card pb-1.5 mr-3 md:mr-6 mt-4 w-36 md:w-40 shadow-2xl rounded-sm transition-transform duration-200 transform hover:scale-105">
                    <div className="px-4">
                      <div className="image pt-4 opacity-75">
                        <img
                          src="https://i.scdn.co/image/ab67616d00001e027454c8b62e42e482d06e022f"
                          alt=""
                          className="w-32 h-32 object-cover"
                        />
                      </div>
                      <div className="w-32">
                        <h3 className="mt-1 text-gray-400 truncate">
                          Winner (feat. Justin Timberlake &amp; T.I.)
                        </h3>
                        <div className="text-sm text-gray-700 mb-2">
                          <h3 className="truncate">
                            Jamie Foxx, Justin Timberlake, T.I.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/track/6XAA7T9VHcqKQSzjmXAJ8o">
                  <div className="bg-card pb-1.5 mr-3 md:mr-6 mt-4 w-36 md:w-40 shadow-2xl rounded-sm transition-transform duration-200 transform hover:scale-105">
                    <div className="px-4">
                      <div className="image pt-4 opacity-75">
                        <img
                          src="https://i.scdn.co/image/ab67616d00001e02128b948ac9a26c14269282d4"
                          alt=""
                          className="w-32 h-32 object-cover"
                        />
                      </div>
                      <div className="w-32">
                        <h3 className="mt-1 text-gray-400 truncate">
                          That's All She Wrote
                        </h3>
                        <div className="text-sm text-gray-700 mb-2">
                          <h3 className="truncate">T.I., Eminem</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/track/1m519DBMMI8x3EPGzSCBki">
                  <div className="bg-card pb-1.5 mr-3 md:mr-6 mt-4 w-36 md:w-40 shadow-2xl rounded-sm transition-transform duration-200 transform hover:scale-105">
                    <div className="px-4">
                      <div className="image pt-4 opacity-75">
                        <img
                          src="https://i.scdn.co/image/ab67616d00001e029a5b3a803e584e48ff2486d3"
                          alt=""
                          className="w-32 h-32 object-cover"
                        />
                      </div>
                      <div className="w-32">
                        <h3 className="mt-1 text-gray-400 truncate">
                          Tant pis (feat. Dadju)
                        </h3>
                        <div className="text-sm text-gray-700 mb-2">
                          <h3 className="truncate">Dry, Dadju</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/track/4sgnTQggcrgn2F8RFjShaH">
                  <div className="bg-card pb-1.5 mr-3 md:mr-6 mt-4 w-36 md:w-40 shadow-2xl rounded-sm transition-transform duration-200 transform hover:scale-105">
                    <div className="px-4">
                      <div className="image pt-4 opacity-75">
                        <img
                          src="https://i.scdn.co/image/ab67616d00001e023cc8ceca99e45ce4984eab3b"
                          alt=""
                          className="w-32 h-32 object-cover"
                        />
                      </div>
                      <div className="w-32">
                        <h3 className="mt-1 text-gray-400 truncate">
                          Mafuzzy Style
                        </h3>
                        <div className="text-sm text-gray-700 mb-2">
                          <h3 className="truncate">Dadju</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="/track/6VIP3K7z1R5t7FWirkqc3U">
                  <div className="bg-card pb-1.5 mr-3 md:mr-6 mt-4 w-36 md:w-40 shadow-2xl rounded-sm transition-transform duration-200 transform hover:scale-105">
                    <div className="px-4">
                      <div className="image pt-4 opacity-75">
                        <img
                          src="https://i.scdn.co/image/ab67616d00001e02926dbcf60c7126b8db67e2da"
                          alt=""
                          className="w-32 h-32 object-cover"
                        />
                      </div>
                      <div className="w-32">
                        <h3 className="mt-1 text-gray-400 truncate">
                          Déjà trouvé
                        </h3>
                        <div className="text-sm text-gray-700 mb-2">
                          <h3 className="truncate">Dadju</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="bg-gradient-to-b from-gray-900 to-black mr-3 md:mr-6 mt-4 w-36 md:w-40 h-44 flex justify-center items-center text-gray-500 hover:text-gray-200 rounded"
                  href="/track"
                >
                  <h2>See More</h2>
                </a>
              </div>
            </div>
            <div className="mt-10 md:mt-20 w-centerull sm:justify-start">
              <h2 className="text-2xl heading text-center sm:text-left ">
                Recently played tracks
              </h2>
              <div className="mt-1 w-full">
                <div className="table flex justify-between w-full">
                  <div className="w-4/4 lg:w-auto flex justify-between text-gray-700 mb-4 tracking-wider text-sm border-gray-800 sticky top-0 pt-8 bg-black border-bottom">
                    <div className="w-12/12 lg:w-7/12 text-left">TRACK</div>
                    <div className="w-4/12 hidden lg:block text-left">
                      ALBUM
                    </div>
                    <div className="w-1/12 hidden lg:block text-left">
                      DURATION
                    </div>
                  </div>
                  <span className="inline-block w-full">
                    <div className="lg:flex text-gray-400 justify-between w-full object-contain">
                      <div className="w-8/12 lg:w-7/12 truncate">
                        <a href="/track/5YF3QXyV0uotxdTrYq64ZK">
                          <div className="w-full flex items-start mb-7 w-full pr-8 truncate overflow-hidden">
                            <div className="hidden sm:block sm:w-12 sm:h-12 overflow-hidden rounded-full">
                              <img
                                src="https://i.scdn.co/image/ab67616d00001e02fd1ad7c3b43f2786143478b2"
                                alt="track"
                                className="object-cover"
                              />
                            </div>
                            <div className="ml-4 truncate">
                              <h4 className="text-gray-400 hover:text-white truncate">
                                I'm a King - Remix
                              </h4>
                              <h3 className="text-sm text-gray-700 truncate">
                                T.I., The Game, P$C
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="w-4/12 hidden lg:block pr-4">
                        Purple City Byrdgang: Hatin' from the Sideline
                      </div>
                      <div className="w-1/12 hidden lg:block">1:27</div>
                    </div>
                    <div className="lg:flex text-gray-400 justify-between w-full object-contain">
                      <div className="w-8/12 lg:w-7/12 truncate">
                        <a href="/track/5gVCfYmQRPy1QJifP8f5gg">
                          <div className="w-full flex items-start mb-7 w-full pr-8 truncate overflow-hidden">
                            <div className="hidden sm:block sm:w-12 sm:h-12 overflow-hidden rounded-full">
                              <img
                                src="https://i.scdn.co/image/ab67616d00001e025933f866f476745a144740c4"
                                alt="track"
                                className="object-cover"
                              />
                            </div>
                            <div className="ml-4 truncate">
                              <h4 className="text-gray-400 hover:text-white truncate">
                                Fall In Love
                              </h4>
                              <h3 className="text-sm text-gray-700 truncate">
                                Bailey Zimmerman
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="w-4/12 hidden lg:block pr-4">
                        Fall In Love
                      </div>
                      <div className="w-1/12 hidden lg:block">3:52</div>
                    </div>
                    <div className="lg:flex text-gray-400 justify-between w-full object-contain">
                      <div className="w-8/12 lg:w-7/12 truncate">
                        <a href="/track/2sAoh53SDx1bbdF0gdqgf0">
                          <div className="w-full flex items-start mb-7 w-full pr-8 truncate overflow-hidden">
                            <div className="hidden sm:block sm:w-12 sm:h-12 overflow-hidden rounded-full">
                              <img
                                src="https://i.scdn.co/image/ab67616d00001e02e1a1ae6b5789a6f0583f4bbc"
                                alt="track"
                                className="object-cover"
                              />
                            </div>
                            <div className="ml-4 truncate">
                              <h4 className="text-gray-400 hover:text-white truncate">
                                Micasa
                              </h4>
                              <h3 className="text-sm text-gray-700 truncate">
                                Christopher Muneza
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="w-4/12 hidden lg:block pr-4">Micasa</div>
                      <div className="w-1/12 hidden lg:block">4:30</div>
                    </div>
                    <div className="lg:flex text-gray-400 justify-between w-full object-contain">
                      <div className="w-8/12 lg:w-7/12 truncate">
                        <a href="/track/13BVU634EX7PqtRoKj0ZWZ">
                          <div className="w-full flex items-start mb-7 w-full pr-8 truncate overflow-hidden">
                            <div className="hidden sm:block sm:w-12 sm:h-12 overflow-hidden rounded-full">
                              <img
                                src="https://i.scdn.co/image/ab67616d00001e026df7a86f1208df4767bc61ef"
                                alt="track"
                                className="object-cover"
                              />
                            </div>
                            <div className="ml-4 truncate">
                              <h4 className="text-gray-400 hover:text-white truncate">
                                Nibido
                              </h4>
                              <h3 className="text-sm text-gray-700 truncate">
                                Christopher Muneza
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="w-4/12 hidden lg:block pr-4">Nibido</div>
                      <div className="w-1/12 hidden lg:block">4:25</div>
                    </div>
                    <div className="lg:flex text-gray-400 justify-between w-full object-contain">
                      <div className="w-8/12 lg:w-7/12 truncate">
                        <a href="/track/5uCiNprPNbFsE3OLCWLz3M">
                          <div className="w-full flex items-start mb-7 w-full pr-8 truncate overflow-hidden">
                            <div className="hidden sm:block sm:w-12 sm:h-12 overflow-hidden rounded-full">
                              <img
                                src="https://i.scdn.co/image/ab67616d00001e02b6d4478c6f91f1cb2d326c78"
                                alt="track"
                                className="object-cover"
                              />
                            </div>
                            <div className="ml-4 truncate">
                              <h4 className="text-gray-400 hover:text-white truncate">
                                56 Bars
                              </h4>
                              <h3 className="text-sm text-gray-700 truncate">
                                T.I.
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="w-4/12 hidden lg:block pr-4">
                        Paper Trail
                      </div>
                      <div className="w-1/12 hidden lg:block">3:04</div>
                    </div>
                    <div className="lg:flex text-gray-400 justify-between w-full object-contain">
                      <div className="w-8/12 lg:w-7/12 truncate">
                        <a href="/track/0mBP9X2gPCuapvpZ7TGDk3">
                          <div className="w-full flex items-start mb-7 w-full pr-8 truncate overflow-hidden">
                            <div className="hidden sm:block sm:w-12 sm:h-12 overflow-hidden rounded-full">
                              <img
                                src="https://i.scdn.co/image/ab67616d00001e021c069c836dc6cd5b34c310fe"
                                alt="track"
                                className="object-cover"
                              />
                            </div>
                            <div className="ml-4 truncate">
                              <h4 className="text-gray-400 hover:text-white truncate">
                                Left and Right (Feat. Jung Kook of BTS)
                              </h4>
                              <h3 className="text-sm text-gray-700 truncate">
                                Charlie Puth, Jung Kook, BTS
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="w-4/12 hidden lg:block pr-4">
                        Left and Right (Feat. Jung Kook of BTS)
                      </div>
                      <div className="w-1/12 hidden lg:block">2:34</div>
                    </div>
                    <div className="lg:flex text-gray-400 justify-between w-full object-contain">
                      <div className="w-8/12 lg:w-7/12 truncate">
                        <a href="/track/71W3QAAn1fFFOZUzYElwv9">
                          <div className="w-full flex items-start mb-7 w-full pr-8 truncate overflow-hidden">
                            <div className="hidden sm:block sm:w-12 sm:h-12 overflow-hidden rounded-full">
                              <img
                                src="https://i.scdn.co/image/ab67616d00001e022e62c3d985b328967a574e6b"
                                alt="track"
                                className="object-cover"
                              />
                            </div>
                            <div className="ml-4 truncate">
                              <h4 className="text-gray-400 hover:text-white truncate">
                                Wowe
                              </h4>
                              <h3 className="text-sm text-gray-700 truncate">
                                Christopher Muneza, Butera Knowless
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="w-4/12 hidden lg:block pr-4">Muneza</div>
                      <div className="w-1/12 hidden lg:block">4:25</div>
                    </div>
                    <div className="lg:flex text-gray-400 justify-between w-full object-contain">
                      <div className="w-8/12 lg:w-7/12 truncate">
                        <a href="/track/4xkOaSrkexMciUUogZKVTS">
                          <div className="w-full flex items-start mb-7 w-full pr-8 truncate overflow-hidden">
                            <div className="hidden sm:block sm:w-12 sm:h-12 overflow-hidden rounded-full">
                              <img
                                src="https://i.scdn.co/image/ab67616d00001e026ca5c90113b30c3c43ffb8f4"
                                alt="track"
                                className="object-cover"
                              />
                            </div>
                            <div className="ml-4 truncate">
                              <h4 className="text-gray-400 hover:text-white truncate">
                                'Till I Collapse
                              </h4>
                              <h3 className="text-sm text-gray-700 truncate">
                                Eminem, Nate Dogg
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="w-4/12 hidden lg:block pr-4">
                        The Eminem Show
                      </div>
                      <div className="w-1/12 hidden lg:block">4:58</div>
                    </div>
                    <div className="lg:flex text-gray-400 justify-between w-full object-contain">
                      <div className="w-8/12 lg:w-7/12 truncate">
                        <a href="/track/3jlbL2OTD5YmIunYzgQTAN">
                          <div className="w-full flex items-start mb-7 w-full pr-8 truncate overflow-hidden">
                            <div className="hidden sm:block sm:w-12 sm:h-12 overflow-hidden rounded-full">
                              <img
                                src="https://i.scdn.co/image/ab67616d00001e02b6d4478c6f91f1cb2d326c78"
                                alt="track"
                                className="object-cover"
                              />
                            </div>
                            <div className="ml-4 truncate">
                              <h4 className="text-gray-400 hover:text-white truncate">
                                Live Your Life
                              </h4>
                              <h3 className="text-sm text-gray-700 truncate">
                                T.I., Rihanna
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="w-4/12 hidden lg:block pr-4">
                        Paper Trail
                      </div>
                      <div className="w-1/12 hidden lg:block">5:39</div>
                    </div>
                    <div className="lg:flex text-gray-400 justify-between w-full object-contain">
                      <div className="w-8/12 lg:w-7/12 truncate">
                        <a href="/track/7bfyiDdQZoUgSK36L6uhGB">
                          <div className="w-full flex items-start mb-7 w-full pr-8 truncate overflow-hidden">
                            <div className="hidden sm:block sm:w-12 sm:h-12 overflow-hidden rounded-full">
                              <img
                                src="https://i.scdn.co/image/ab67616d00001e02d5fa46459e5489190606f47f"
                                alt="track"
                                className="object-cover"
                              />
                            </div>
                            <div className="ml-4 truncate">
                              <h4 className="text-gray-400 hover:text-white truncate">
                                King Back
                              </h4>
                              <h3 className="text-sm text-gray-700 truncate">
                                T.I.
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="w-4/12 hidden lg:block pr-4">King</div>
                      <div className="w-1/12 hidden lg:block">4:13</div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FakeApp;
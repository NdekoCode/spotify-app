import React, { memo, useEffect } from 'react';
import Sidebar from './Sidebar';
import MusicContext from '../data/AppContext';
import ModalPlayer from './ModalPlayer';
import UserData from './UserData';
import GreetUser from './GreetUser';
import Search from './Search';
import { useNavigate } from 'react-router-dom';
import { getDataStorage } from '../data/utilsFunc';

const MusicApp = memo(({ children }) => {
  const { idSong, userIsConnect, showFrame, typePlay } = MusicContext();
  const navigate = useNavigate();
  const user = getDataStorage('userData');
  console.log(user);
  useEffect(() => {
    if (!userIsConnect) {
      navigate('/login');
    }
  }, [userIsConnect]);
  return (
    <>
      <ModalPlayer id={idSong} visibility={showFrame} type={typePlay} />

      <div className="App bg-app">
        <Sidebar />
        <div className="px-4 lg:ml-48 lg:py-5 bg-black text-gray-100 min-h-screen overflow-hidden">
          <div className="flex flex-col">
            <div className="flex justify-center pt-5 flex-wrap md:flex-nowrap items-center flex-row-reverse md:justify-between">
              <UserData />
              <Search />
            </div>
            <main className="py-8 md:pb-12">
              <div className="py-10">
                <GreetUser user={user?.username} />
              </div>
              <div className="mt-10 md:mt-20 w-centerull sm:justify-start">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
});

export default MusicApp;

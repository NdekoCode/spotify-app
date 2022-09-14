import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/App.css';
import './assets/css/custom.css';
import routes from './routes/routes';
import MusicContext from './data/AppContext';
import { CLIENT_ID, CLIENT_SECRET } from './data/secureData';
import { verifyUserConnect } from './data/utilsFunc';

function App() {
  const { setSetting, setUserIsConnect } = MusicContext();
  useEffect(() => {
    setUserIsConnect(verifyUserConnect());
    (async () => {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          // Considerer comme un formulaire HTML
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
      });
      const responseData = await response.json();
      const { access_token, token_type } = responseData;
      setSetting((setting) => ({
        ...setting,
        token: access_token,
        authorize_token: `${token_type} ${access_token}`,
      }));
    })();
  }, [setSetting]);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} exact path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

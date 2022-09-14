import React from 'react';
import ReactDOM from 'react-dom/client';
import { ContextProvider } from './data/AppContext';
import App from './App';
import './assets/css/index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
);

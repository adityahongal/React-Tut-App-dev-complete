import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './Profile.js';
import Gallery from './Gallery.js';

// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Gallery />
    <Profile />
  </React.StrictMode>
);


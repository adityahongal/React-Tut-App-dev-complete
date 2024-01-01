import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './profile.js';
import Gallery from './gallery.js';

// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Gallery />
    <Profile />
  </React.StrictMode>
);


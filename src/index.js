import React from 'react';
import ReactDOM from 'react-dom/client';
// import Profile from './profile.js';
// import Gallery from './gallery.js';
// import TodoList from './javascript-in-JSX.js';
import Profile from './passing-props-to-children';
// import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Gallery /> */}
    {/* <Profile /> */}
    {/* <TodoList /> */}
    <Profile/>
  </React.StrictMode>
);


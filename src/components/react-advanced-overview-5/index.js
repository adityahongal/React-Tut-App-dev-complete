// REACT ADVANCED - ESCAPE HATCHES - OVERVIEW

// Separating events from Effects 

// Event handlers only re-run when you perform the same interaction again. 
// Unlike event handlers, Effects re-synchronize if any of the values they read, like props or state, 
// are different than during last render. 
// Sometimes, you want a mix of both behaviors: an Effect that re-runs in response to some values but not others.

// All code inside Effects is reactive. 
// It will run again if some reactive value it reads has changed due to a re-render. 
// For example, this Effect will re-connect to the chat if either roomId or theme have changed:

// import { useState, useEffect } from 'react';
// import { createConnection, sendMessage } from './chat.js';
// import { showNotification } from './notifications.js';

// const serverUrl = 'https://localhost:1234';

// function ChatRoom({ roomId, theme }) {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.on('connected', () => {
//       showNotification('Connected!', theme);
//     });
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId, theme]);

//   return <h1>Welcome to the {roomId} room!</h1>
// }

// export default function ReactAdvancedOverviewFive() {
//   const [roomId, setRoomId] = useState('general');
//   const [isDark, setIsDark] = useState(false);
//   return (
//     <>
//       <label>
//         Choose the chat room:{' '}
//         <select
//           value={roomId}
//           onChange={e => setRoomId(e.target.value)}
//         >
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           checked={isDark}
//           onChange={e => setIsDark(e.target.checked)}
//         />
//         Use dark theme
//       </label>
//       <hr />
//       <ChatRoom
//         roomId={roomId}
//         theme={isDark ? 'dark' : 'light'} 
//       />
//     </>
//   );
// }

// This is not ideal. You want to re-connect to the chat only if the roomId has changed. 
// Switching the theme shouldn’t re-connect to the chat! 
// Moving the code reading theme out of our Effect into an Effect Event:

import { useState, useEffect } from 'react';
import { experimental_useEffectEvent as useEffectEvent } from 'react';
import { createConnection, sendMessage } from './chat.js';
import { showNotification } from './notifications.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId, theme }) {
  const onConnected = useEffectEvent(() => {
    showNotification('Connected!', theme);
  });

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      onConnected();
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>
}

export default function ReactAdvancedOverviewFive() {
  const [roomId, setRoomId] = useState('general');
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <hr />
      <ChatRoom
        roomId={roomId}
        theme={isDark ? 'dark' : 'light'} 
      />
    </>
  );
}

// Code inside Effect Events isn’t reactive, so changing the theme no longer makes your Effect re-connect.

// This section describes an experimental API that has not yet been released in a stable version of React.

// Code is not working properly
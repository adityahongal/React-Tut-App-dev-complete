// REACT ADVANCED - ESCAPE HATCHES - OVERVIEW

// Removing Effect dependencies 

// When you write an Effect, the linter will verify that you’ve included every reactive value (like props and state) 
// that the Effect reads in the list of your Effect’s dependencies. 
// This ensures that your Effect remains synchronized with the latest props and state of your component. 
// Unnecessary dependencies may cause your Effect to run too often, or even create an infinite loop. 
// The way you remove them depends on the case.

// For example, this Effect depends on the options object which gets re-created every time you edit the input:

// import { useState, useEffect } from 'react';
// import { createConnection } from './chat.js';

// const serverUrl = 'https://localhost:1234';

// function ChatRoom({ roomId }) {
//   const [message, setMessage] = useState('');

//   const options = {
//     serverUrl: serverUrl,
//     roomId: roomId
//   };

//   useEffect(() => {
//     const connection = createConnection(options);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [options]);

//   return (
//     <>
//       <h1>Welcome to the {roomId} room!</h1>
//       <input value={message} onChange={e => setMessage(e.target.value)} />
//     </>
//   );
// }

// export default function App() {
//   const [roomId, setRoomId] = useState('general');
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
//       <hr />
//       <ChatRoom roomId={roomId} />
//     </>
//   );
// }

// You don’t want the chat to re-connect every time you start typing a message in that chat. 
// To fix this problem, move creation of the options object inside the Effect so that the Effect only depends on the roomId string:

import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={e => setMessage(e.target.value)} />
    </>
  );
}

export default function ReactAdvancedOverviewSix() {
  const [roomId, setRoomId] = useState('general');
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
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}


// CHECK CONSOLE IN BROWSER FOR LOG
// REACT ADVANCED - ESCAPE HATCHES - OVERVIEW

// Lifecycle of reactive effects 

// Effects have a different lifecycle from components. 
// Components may mount, update, or unmount. 
// An Effect can only do two things: to start synchronizing something, and later to stop synchronizing it. 
// This cycle can happen multiple times if your Effect depends on props and state that change over time.

// This Effect depends on the value of the roomId prop. 
// Props are reactive values, which means they can change on a re-render. 
// Notice that the Effect re-synchronizes (and re-connects to the server) if roomId changes:

import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

const serverUrl = 'https://localhost:1234';

function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return <h1>Welcome to the {roomId} room!</h1>;
}

export default function ReactAdvancedOverviewFour() {
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


// Check Browser Console for log
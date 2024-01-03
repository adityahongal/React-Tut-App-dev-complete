//  if you would like to update the same state variable multiple times before the next render, 
// instead of passing the next state value like setNumber(number + 1), 
// you can pass a function that calculates the next state based on the previous one in the queue, 
// like setNumber(n => n + 1). It is a way to tell React to “do something with the state value” instead of just replacing it.

import { useState } from 'react';

export default function SeriesOfStateUpdates() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(n => n + 1);                                          // was setNumber(number + 1) which doens't work
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>+3</button>
    </>
  )
}

// This is how it works

// queued update	n	returns
// n => n + 1	    0	0 + 1 = 1
// n => n + 1	    1	1 + 1 = 2
// n => n + 1	    2	2 + 1 = 3
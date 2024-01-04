// UPDATING ARRAYS WITHOUT MUTATION - REPLACEMENT

// Replacing items in an array 

// It is particularly common to want to replace one or more items in an array. 
// Assignments like arr[0] = 'bird' are mutating the original array, so instead you’ll want to use map for this as well.

// To replace an item, create a new array with map. 
// Inside your map call, you will receive the item index as the second argument. 
// Use it to decide whether to return the original item (the first argument) or something else:

import { useState } from 'react';

let initialCounters = [
  0, 0, 0
];

export default function WithoutMutateArrayReplace() {
  const [counters, setCounters] = useState(
    initialCounters
  );

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCounters(nextCounters);
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button onClick={() => {
            handleIncrementClick(i);
          }}>+1</button>
        </li>
      ))}
    </ul>
  );
}

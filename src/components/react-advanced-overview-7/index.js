// REACT ADVANCED - ESCAPE HATCHES - OVERVIEW

// Reusing logic with custom Hooks 

// React comes with built-in Hooks like useState, useContext, and useEffect. 
// Sometimes, you’ll wish that there was a Hook for some more specific purpose: 
// for example, to fetch data, to keep track of whether the user is online, or to connect to a chat room. 
// To do this, you can create your own Hooks for your application’s needs.

// In this example, the usePointerPosition custom Hook tracks the cursor position, 
// while useDelayedValue custom Hook returns a value that’s “lagging behind” the value you passed by a certain number of milliseconds. 
// Move the cursor over the sandbox preview area to see a moving trail of dots following the cursor:

import { usePointerPosition } from './usePointerPosition.js';
import { useDelayedValue } from './useDelayedValue.js';

export default function ReactAdvancedOverviewSeven() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100); 
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos4, 50);
  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

function Dot({ position, opacity }) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  );
}

// Resetting State at the Same Position

// Option 2: Resetting state with a key 

// You might have seen keys when rendering lists. Keys aren’t just for lists! 
// You can use keys to make React distinguish between any components. 
// By default, React uses order within the parent (“first counter”, “second counter”) to discern between components. 
// But keys let you tell React that this is not just a first counter, or a second counter, 
// but a specific counter—for example, Taylor’s counter. This way, React will know Taylor’s counter wherever it appears in the tree!

// In this example, the two <Counter />s don’t share state even though they appear in the same place in JSX:

import { useState } from 'react';
import './styles.css'

export default function ResettingStateSamePositionTwo() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? (
        <Counter key="Taylor" person="Taylor" />
      ) : (
        <Counter key="Sarah" person="Sarah" />
      )}
      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
  );
}

function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{person}'s score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}

// Switching between Taylor and Sarah does not preserve the state. This is because you gave them different keys:

// {isPlayerA ? (
//     <Counter key="Taylor" person="Taylor" />
//   ) : (
//     <Counter key="Sarah" person="Sarah" />
//   )}

// Specifying a key tells React to use the key itself as part of the position, 
// instead of their order within the parent. 
// This is why, even though you render them in the same place in JSX, 
// React sees them as two different counters, and so they will never share state. 
// Every time a counter appears on the screen, its state is created. 
// Every time it is removed, its state is destroyed. 
// Toggling between them resets their state over and over.

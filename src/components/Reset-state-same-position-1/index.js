// Resetting state at the same position 

// By default, React preserves state of a component while it stays at the same position. 
// Usually, this is exactly what you want, so it makes sense as the default behavior. 
// But sometimes, you may want to reset a component’s state.

// Consider this app that lets two players keep track of their scores during each turn:

// import { useState } from 'react';

// export default function Scoreboard() {
//   const [isPlayerA, setIsPlayerA] = useState(true);
//   return (
//     <div>
//       {isPlayerA ? (
//         <Counter person="Taylor" />
//       ) : (
//         <Counter person="Sarah" />
//       )}
//       <button onClick={() => {
//         setIsPlayerA(!isPlayerA);
//       }}>
//         Next player!
//       </button>
//     </div>
//   );
// }

// function Counter({ person }) {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{person}'s score: {score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }

// Currently, when you change the player, the score is preserved. 
// The two Counters appear in the same position, so React sees them as the same Counter whose person prop has changed.

// But conceptually, in this app they should be two separate counters. 
// They might appear in the same place in the UI, but one is a counter for Taylor, and another is a counter for Sarah.

// There are two ways to reset state when switching between them:

// 1. Render components in different positions
// 2.Give each component an explicit identity with key

// Option 1: Rendering a component in different positions 

// If you want these two Counters to be independent, you can render them in two different positions:

import { useState } from 'react';
import "./styles.css";
export default function ResettingStateSamePositionOne() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA &&
        <Counter person="Taylor" />
      }
      {!isPlayerA &&
        <Counter person="Sarah" />
      }
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

// Initially, isPlayerA is true. So the first position contains Counter state, and the second one is empty.

// When you click the “Next player” button the first position clears but the second one now contains a Counter.

// Each Counter’s state gets destroyed each time it’s removed from the DOM. This is why they reset every time you click the button.

// This solution is convenient when you only have a few independent components rendered in the same place. 

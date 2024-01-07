// PRESERVING THE STATE

// State is tied to a position in the render tree 

// React builds render trees for the component structure in your UI.

// When you give a component state, you might think the state “lives” inside the component. 
// But the state is actually held inside React. 
// React associates each piece of state it’s holding with the correct component by where that component sits in the render tree.

// In React, each component on the screen has fully isolated state. 
// For example, if you render two Counter components side by side, each of them will get its own, independent, score and hover states.

// Try clicking both counters and notice they don’t affect each other in below example:

// import { useState } from 'react';

// export default function PreservingStateOne() {
//   return (
//     <div>
//       <Counter />
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
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
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }

// As you can see, when one counter is updated, only the state for that component is updated

// React will keep the state around for as long as you render the same component at the same position in the tree. 
// To see this, increment both counters, then remove the second component by unchecking “Render the second counter” checkbox, 
// and then add it back by ticking it again in below example:

import { useState } from 'react';

export default function PreservingStateOne() {
  const [showB, setShowB] = useState(true);
  return (
    <div>
      <Counter />
      {showB && <Counter />} 
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={e => {
            setShowB(e.target.checked)
          }}
        />
        Render the second counter
      </label>
    </div>
  );
}

function Counter() {
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
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}

// Notice how the moment you stop rendering the second counter, its state disappears completely. 
// That’s because when React removes a component, it destroys its state.

// When you tick “Render the second counter”, a second Counter and its state are initialized from scratch (score = 0) and added to the DOM.

// React preserves a component’s state for as long as it’s being rendered at its position in the UI tree. 
// If it gets removed, or a different component gets rendered at the same position, React discards its state.
// // Choosing the State Structure

// // Structuring state well can make a difference between a component that is pleasant to modify and debug, 
// // and one that is a constant source of bugs.

// Principles for structuring state 

// When you write a component that holds some state, you’ll have to make choices about how many state variables to use 
// and what the shape of their data should be. 
// While it’s possible to write correct programs even with a suboptimal state structure, 
// there are a few principles that can guide you to make better choices:

// 1. Group related state. If you always update two or more state variables at the same time, consider merging them into a single state variable.
// 2. Avoid contradictions in state. When the state is structured in a way that several pieces of state may contradict and “disagree” with each other, you leave room for mistakes. Try to avoid this.
// 3. Avoid redundant state. If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state.
// 4. Avoid duplication in state. When the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.
// 5. Avoid deeply nested state. Deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.

// Group related state 

// You might sometimes be unsure between using a single or multiple state variables.

// Should you do this?

// const [x, setX] = useState(0);
// const [y, setY] = useState(0);

// Or this?

// const [position, setPosition] = useState({ x: 0, y: 0 });

// Technically, you can use either of these approaches. 
// But if some two state variables always change together, 
// it might be a good idea to unify them into a single state variable. 
// Then you won’t forget to always keep them in sync, 
// like in this example where moving the cursor updates both coordinates of the red dot:

import { useState } from 'react';

export default function GroupRelatedState() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  )
}

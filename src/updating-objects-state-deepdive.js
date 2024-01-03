// Treat state as read-only 
// In other words, you should treat any JavaScript object that you put into state as read-only.

// This example holds an object in state to represent the current pointer position. 
// The red dot is supposed to move when you touch or move the cursor over the preview area. 
// But the dot stays in the initial position:

// import { useState } from 'react';

// export default function UpdatingObjectStateDeep() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });
//   return (
//     <div
//       onPointerMove={e => {
//         position.x = e.clientX;
//         position.y = e.clientY;
//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'red',
//         borderRadius: '50%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         top: -10,
//         width: 20,
//         height: 20,
//       }} />
//     </div>
//   );
// }

// The problem is with this bit of code.

// onPointerMove={e => {
//   position.x = e.clientX;
//   position.y = e.clientY;
// }}

// This code modifies the object assigned to position from the previous render. 
// But without using the state setting function, React has no idea that object has changed. 
// So React does not do anything in response. 
// It’s like trying to change the order after you’ve already eaten the meal. 
// While mutating state can work in some cases, we don’t recommend it. 
// You should treat the state value you have access to in a render as read-only.

// To actually trigger a re-render in this case, create a new object and pass it to the state setting function:

// onPointerMove={e => {
//   setPosition({
//     x: e.clientX,
//     y: e.clientY
//   });
// }}


// With setPosition, you’re telling React:

// 1. Replace position with this new object
// 2. And render this component again

// Notice how the red dot now follows your pointer when you touch or hover over the preview area

import { useState } from 'react';

export default function UpdatingObjectStateDeep() {
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
  );
}

// PRESERVING THE STATE

// Same component at the same position preserves state 

// In this example, there are two different <Counter /> tags:

// import { useState } from 'react';

// export default function PreservingStateTwo() {
//   const [isFancy, setIsFancy] = useState(false);
//   return (
//     <div>
//       {isFancy ? (
//         <Counter isFancy={true} /> 
//       ) : (
//         <Counter isFancy={false} /> 
//       )}
//       <label>
//         <input
//           type="checkbox"
//           checked={isFancy}
//           onChange={e => {
//             setIsFancy(e.target.checked)
//           }}
//         />
//         Use fancy styling
//       </label>
//     </div>
//   );
// }

// function Counter({ isFancy }) {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }
//   if (isFancy) {
//     className += ' fancy';
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

// When you tick or clear the checkbox, the counter state does not get reset. 
// Whether isFancy is true or false, you always have a <Counter /> as the first child of the div returned from the root App component.

// It’s the same component at the same position, so from React’s perspective, it’s the same counter.

//  CHECK FOR FOLDER IN './components/preserved-state-2/' for styled output

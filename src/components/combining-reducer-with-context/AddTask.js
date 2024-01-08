// import { useState } from 'react';

// export default function AddTask({ onAddTask }) {
//   const [text, setText] = useState('');
//   return (
//     <>
//       <input
//         placeholder="Add task"
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <button onClick={() => {
//         setText('');
//         onAddTask(text);
//       }}>Add</button>
//     </>
//   )
// }

// UPDATED CODE

import { useState, useContext } from 'react';
import { TasksDispatchContext } from './TasksContext.js';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        }); 
      }}>Add</button>
    </>
  );
}

let nextId = 3;

// Extracting State Logic into a Reducer

// Components with many state updates spread across many event handlers can get overwhelming. 
// For these cases, you can consolidate all the state update logic outside your component in a single function, called a reducer.

// Consolidate state logic with a reducer 

// As your components grow in complexity, 
// it can get harder to see at a glance all the different ways in which a component’s state gets updated. 

// For example, the TaskApp component below holds an array of tasks in state and 
// uses three different event handlers to add, remove, and edit tasks:

// import { useState } from 'react';
// import AddTask from './AddTask.js';
// import TaskList from './TaskList.js';

// export default function TaskApp() {
//   const [tasks, setTasks] = useState(initialTasks);

//   function handleAddTask(text) {
//     setTasks([
//       ...tasks,
//       {
//         id: nextId++,
//         text: text,
//         done: false,
//       },
//     ]);
//   }

//   function handleChangeTask(task) {
//     setTasks(
//       tasks.map((t) => {
//         if (t.id === task.id) {
//           return task;
//         } else {
//           return t;
//         }
//       })
//     );
//   }

//   function handleDeleteTask(taskId) {
//     setTasks(tasks.filter((t) => t.id !== taskId));
//   }

//   return (
//     <>
//       <h1>Prague itinerary</h1>
//       <AddTask onAddTask={handleAddTask} />
//       <TaskList
//         tasks={tasks}
//         onChangeTask={handleChangeTask}
//         onDeleteTask={handleDeleteTask}
//       />
//     </>
//   );
// }

// let nextId = 3;
// const initialTasks = [
//   {id: 0, text: 'Visit Kafka Museum', done: true},
//   {id: 1, text: 'Watch a puppet show', done: false},
//   {id: 2, text: 'Lennon Wall pic', done: false},
// ];

// Each of its event handlers calls setTasks in order to update the state. 
// As this component grows, so does the amount of state logic sprinkled throughout it. 
// To reduce this complexity and keep all your logic in one easy-to-access place, 
// you can move that state logic into a single function outside your component, called a “reducer”.

// Reducers are a different way to handle state. 

// You can migrate from useState to useReducer in three steps:

// 1. Move from setting state to dispatching actions.
// 2. Write a reducer function.
// 3. Use the reducer from your component.

// The useReducer Hook is similar to useState—
// you must pass it an initial state and it returns a stateful value and a way to set state (in this case, the dispatch function). 
// But it’s a little different.

// The useReducer Hook takes two arguments:

// 1. A reducer function
// 2. An initial state

// And it returns:

// 1. A stateful value
// 2. A dispatch function (to “dispatch” user actions to the reducer)

import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import tasksReducer from './tasksReducer.js';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

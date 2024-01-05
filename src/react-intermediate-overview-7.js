// Scaling up with reducer and context 

// Reducers let you consolidate a component’s state update logic. 
// Context lets you pass information deep down to other components. 
// You can combine reducers and context together to manage state of a complex screen.

// With this approach, a parent component with complex state manages it with a reducer. 
// Other components anywhere deep in the tree can read its state via context. 
// They can also dispatch actions to update that state.

import AddTask from './components/react-intermediate-overview-7-AddTask.js';
import TaskList from './components/react-intermediate-overview-7-TaskList.js';
import { TasksProvider } from './components/react-intermediate-overview-7-TasksContext.js';

export default function ReactIntermediateOverviewSeven() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}

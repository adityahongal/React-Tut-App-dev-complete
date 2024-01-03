// React commits changes to the DOM 

// After rendering (calling) your components, React will modify the DOM.

// 1. For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
// 2. For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.

// For example, here is a component that re-renders with different props passed from its parent every second. 
// Notice how you can add some text into the <input>, updating its value, but the text doesn’t disappear when the component re-renders:

export default function ReactCommitsDOM({ time }) {
    return (
      <>
        <h1>{time}</h1>
        <input />
      </>
    );
  }

// This works because during this last step, React only updates the content of <h1> with the new time. 
// It sees that the <input> appears in the JSX in the same place as last time, so React doesn’t touch the <input>—or its value!
  
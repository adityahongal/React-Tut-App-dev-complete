// ESCAPE HATCHES

// Referencing Values with Refs

// When you want a component to “remember” some information, 
// but you don’t want that information to trigger new renders, you can use a ref.

// Adding a ref to your component 

// You can add a ref to your component by importing the useRef Hook from React:

// import { useRef } from 'react';

// Inside your component, call the useRef Hook and pass the initial value that you want to reference as the only argument. 
// For example, here is a ref to the value 0:

// const ref = useRef(0);

// useRef returns an object like this:

// { 
//   current: 0 // The value you passed to useRef
// }

// You can access the current value of that ref through the ref.current property. 
// This value is intentionally mutable, meaning you can both read and write to it. 
// It’s like a secret pocket of your component that React doesn’t track. 
// (This is what makes it an “escape hatch” from React’s one-way data flow—more on that below!)

// Here, a button will increment ref.current on every click:

import { useRef } from 'react';

export default function AddingRefToComponent() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}


// The ref points to a number, but, like state, you could point to anything: a string, an object, or even a function. 
// Unlike state, ref is a plain JavaScript object with the current property that you can read and modify.

// Note that the component doesn’t re-render with every increment. 
// Like state, refs are retained by React between re-renders. 
// However, setting state re-renders a component. Changing a ref does not!
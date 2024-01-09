// Manipulating the DOM with Refs

// React automatically updates the DOM to match your render output, 
// so your components won’t often need to manipulate it. 
// However, sometimes you might need access to the DOM elements managed by React—
// for example, to focus a node, scroll to it, or measure its size and position. 
// There is no built-in way to do those things in React, so you will need a ref to the DOM node.

// Getting a ref to the node 

// To access a DOM node managed by React, first, import the useRef Hook:

// import { useRef } from 'react';

// Then, use it to declare a ref inside your component:

// const myRef = useRef(null);

// Finally, pass your ref as the ref attribute to the JSX tag for which you want to get the DOM node:

// <div ref={myRef}>

// The useRef Hook returns an object with a single property called current. 
// Initially, myRef.current will be null. When React creates a DOM node for this <div>, 
// React will put a reference to this node into myRef.current. 
// You can then access this DOM node from your event handlers and use the built-in browser APIs defined on it.

// You can use any browser APIs, for example:

// myRef.current.scrollIntoView();

// Example: Focusing a text input 

// In this example, clicking the button will focus the input:

import { useRef } from 'react';

export default function ManipulatingDOMRefOne() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}

// To implement this:

// 1. Declare inputRef with the useRef Hook.
// 2. Pass it as <input ref={inputRef}>. This tells React to put this <input>’s DOM node into inputRef.current.
// 3. In the handleClick function, read the input DOM node from inputRef.current and call focus() on it with inputRef.current.focus().
// 4. Pass the handleClick event handler to <button> with onClick.
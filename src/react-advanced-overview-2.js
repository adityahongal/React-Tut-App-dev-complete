// Escape Hatches overview

// Manipulating the DOM with refs 

// React automatically updates the DOM to match your render output, 
// so your components won’t often need to manipulate it. 
// However, sometimes you might need access to the DOM elements managed by React—
// for example, to focus a node, scroll to it, or measure its size and position. 
// There is no built-in way to do those things in React, so you will need a ref to the DOM node. 

// For example, clicking the button will focus the input using a ref:

import { useRef } from 'react';

export default function ReactAdvancedOverviewTwo() {
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

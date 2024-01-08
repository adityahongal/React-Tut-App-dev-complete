// Escape Hatches

// Some of your components may need to control and synchronize with systems outside of React. 
// For example, you might need to focus an input using the browser API, 
// play and pause a video player implemented without React, or connect and listen to messages from a remote server. 
// In this chapter, the escape hatches that let you “step outside” React and connect to external systems. 
// Most of your application logic and data flow should not rely on these features.

// Referencing values with refs 

// When you want a component to “remember” some information, 
// but you don’t want that information to trigger new renders, 
// you can use a ref:

// const ref = useRef(0);

// Like state, refs are retained by React between re-renders. However, setting state re-renders a component. 
// Changing a ref does not! You can access the current value of that ref through the ref.current property.

import { useRef } from 'react';

export default function ReactAdvancedOverviewOne() {
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

// A ref is like a secret pocket of your component that React doesn’t track. 
// For example, you can use refs to store timeout IDs, DOM elements, and other objects that don’t impact the component’s rendering output.
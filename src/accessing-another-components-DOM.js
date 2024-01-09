// Accessing another component’s DOM nodes 

// When you put a ref on a built-in component that outputs a browser element like <input />, 
// React will set that ref’s current property to the corresponding DOM node (such as the actual <input /> in the browser).

// However, if you try to put a ref on your own component, like <MyInput />, by default you will get null. 
// Here is an example demonstrating it. Notice how clicking the button does not focus the input:

// import { useRef } from 'react';

// function MyInput(props) {
//   return <input {...props} />;
// }

// export default function MyForm() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <MyInput ref={inputRef} />
//       <button onClick={handleClick}>
//         Focus the input
//       </button>
//     </>
//   );
// }

// This happens because by default React does not let a component access the DOM nodes of other components. 
// Not even for its own children! This is intentional. 
// Refs are an escape hatch that should be used sparingly. 
// Manually manipulating another component’s DOM nodes makes your code even more fragile.

// Instead, components that want to expose their DOM nodes have to opt in to that behavior. 
// A component can specify that it “forwards” its ref to one of its children. Here’s how MyInput can use the forwardRef API:

// const MyInput = forwardRef((props, ref) => {
//   return <input {...props} ref={ref} />;
// });

// This is how it works:

// 1. <MyInput ref={inputRef} /> tells React to put the corresponding DOM node into inputRef.current. 
//    However, it’s up to the MyInput component to opt into that—by default, it doesn’t.
// 2. The MyInput component is declared using forwardRef. 
//    This opts it into receiving the inputRef from above as the second ref argument which is declared after props.
// 3. MyInput itself passes the ref it received to the <input> inside of it.

// Now clicking the button to focus the input works:

import { forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

export default function AccesingAnotherComponentsDOM() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}

// // How to write an Effect 

// // To write an Effect, follow these three steps:

// // 1. Declare an Effect. By default, your Effect will run after every render.
// // 2. Specify the Effect dependencies. Most Effects should only re-run when needed rather than after every render. 
// //    For example, a fade-in animation should only trigger when a component appears. 
// //    Connecting and disconnecting to a chat room should only happen when the component appears and disappears, 
// //    or when the chat room changes.
// // 3. Add cleanup if needed. Some Effects need to specify how to stop, undo, or clean up whatever they were doing. 
// //    For example, “connect” needs “disconnect”, “subscribe” needs “unsubscribe”, and “fetch” needs either “cancel” or “ignore”. 

// Step 1: Declare an Effect 

// To declare an Effect in your component, import the useEffect Hook from React:

// import { useEffect } from 'react';

// Then, call it at the top level of your component and put some code inside your Effect:

// function MyComponent() {
//   useEffect(() => {
//     // Code here will run after *every* render
//   });
//   return <div />;
// }

// Every time your component renders, React will update the screen and then run the code inside useEffect. 
// In other words, useEffect “delays” a piece of code from running until that render is reflected on the screen.

// By wrapping the DOM update in an Effect, you let React update the screen first. Then your Effect runs.

// When your VideoPlayer component renders (either the first time or if it re-renders), a few things will happen. 
// First, React will update the screen, ensuring the <video> tag is in the DOM with the right props. 
// Then React will run your Effect. Finally, your Effect will call play() or pause() depending on the value of isPlaying.

// Press Play/Pause multiple times and see how the video player stays synchronized to the isPlaying value:

import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return <video ref={ref} src={src} loop playsInline />;
}

export default function HowToWriteEffectOne() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}

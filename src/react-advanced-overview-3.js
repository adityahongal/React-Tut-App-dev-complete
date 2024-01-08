// Escape Hatches Overview

// Synchronizing with Effects 

// Some components need to synchronize with external systems.
// For example, you might want to control a non-React component based on the React state, 
// set up a server connection, or send an analytics log when a component appears on the screen. 
// Unlike event handlers, which let you handle particular events, 
// Effects let you run some code after rendering. 
// Use them to synchronize your component with a system outside of React.

// Press Play/Pause a few times and see how the video player stays synchronized to the isPlaying prop value:

import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline />;
}

export default function ReactAdvancedOverviewThree() {
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

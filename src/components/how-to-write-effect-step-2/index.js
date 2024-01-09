// HOW TO WRITE A EFFECT

// Step 2: Specify the Effect dependencies 

// By default, Effects run after every render. Often, this is not what you want:

// 1. Sometimes, it’s slow. 
//    Synchronizing with an external system is not always instant, 
//    so you might want to skip doing it unless it’s necessary. 
//    For example, you don’t want to reconnect to the chat server on every keystroke.
// 2. Sometimes, it’s wrong. 
//    For example, you don’t want to trigger a component fade-in animation on every keystroke. 
//    The animation should only play once when the component appears for the first time.

// Now all dependencies are declared, so there is no error. 
// Specifying [isPlaying] as the dependency array tells React that it should skip re-running your Effect -
// - if isPlaying is the same as it was during the previous render. 
// With this change, typing into the input doesn’t cause the Effect to re-run, but pressing Play/Pause does:

import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      console.log('Calling video.play()');
      ref.current.play();
    } else {
      console.log('Calling video.pause()');
      ref.current.pause();
    }
  }, [isPlaying]);

  return <video ref={ref} src={src} loop playsInline />;
}

export default function HowToWriteEffectTwo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');
  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
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

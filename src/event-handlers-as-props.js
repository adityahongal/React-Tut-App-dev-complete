// Passing event handlers as props 

// Often you’ll want the parent component to specify a child’s event handler. 
// Consider buttons: depending on where you’re using a Button component, 
// you might want to execute a different function—perhaps one plays a movie and another uploads an image.

// To do this, pass a prop the component receives from its parent as the event handler like so

function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }
  
  function PlayButton({ movieName }) {
    function handlePlayClick() {
      alert(`Playing ${movieName}!`);
    }
  
    return (
      <Button onClick={handlePlayClick}>
        Play "{movieName}"
      </Button>
    );
  }
  
  function UploadButton() {
    return (
      <Button onClick={() => alert('Uploading!')}>
        Upload Image
      </Button>
    );
  }
  
  export default function ToolbarProps() {
    return (
      <div>
        <PlayButton movieName="K.G.F. 1" />
        <UploadButton />
      </div>
    );
  }
  
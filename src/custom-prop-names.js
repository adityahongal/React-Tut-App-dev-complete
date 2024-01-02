// Naming event handler props

// Built-in components like <button> and <div> only support browser event names like onClick. 
// However, when you’re building your own components, you can name their event handler props any way that you like.
// By convention, event handler props should start with on, followed by a capital letter.


export default function CustomEventHandlerNames() {
    return (
      <Toolbar
        onPlayMovie={() => alert('Playing!')}
        onUploadImage={() => alert('Uploading!')}
      />
    );
  }
  
  function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
      <div>
        <Button onClick={onPlayMovie}>
          Play Movie
        </Button>
        <Button onClick={onUploadImage}>
          Upload Image
        </Button>
      </div>
    );
  }
  
  function Button({ onClick, children }) {
    return (
      <button onClick={onClick}>
        {children}
      </button>
    );
  }
  
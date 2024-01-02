// Stopping Propagation

// Event handlers receive an event object as their only argument.
// By convention, it’s usually called e, which stands for “event”.
// You can use this object to read information about the event.

// That event object also lets you stop the propagation.
// If you want to prevent an event from reaching parent components, you need to call e.stopPropagation() like this Button component does:

// Simple code example to explain how this works

// function Button({ onClick, children }) {
//     return (
//       <button onClick={e => {
//         e.stopPropagation();
//         onClick();
//       }}>
//         {children}
//       </button>
//     );
//   }

//   export default function StoppingEventPropagation() {
//     return (
//       <div className="Toolbar" onClick={() => {
//         alert('You clicked on the toolbar!');
//       }}>
//         <Button onClick={() => alert('Playing!')}>
//           Play Movie
//         </Button>
//         <Button onClick={() => alert('Uploading!')}>
//           Upload Image
//         </Button>
//       </div>
//     );
//   }

// Same Code with simple inline CSS styles

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function StoppingEventPropagation() {
  const toolbarStyle = {
    backgroundColor: "#BC13FE", // You can change the color as needed
    color: "#fff", // Text color
    padding: "10px", // Padding for better visibility
    cursor: "pointer", // Change cursor on hover
  };

  return (
    <div
      className="Toolbar"
      style={toolbarStyle}
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <Button onClick={() => alert("Playing!")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}

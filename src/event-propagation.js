// Event Propagation

// Event handlers will also catch events from any children your component might have. 
// We say that an event “bubbles” or “propagates” up the tree: 
// it starts with where the event happened, and then goes up the tree.

// This <div> contains two buttons. Both the <div> and each button have their own onClick handlers.

// If you click on either button, its onClick will run first, 
// followed by the parent <div>’s onClick. 
// So two messages will appear. 
// If you click the toolbar itself, only the parent <div>’s onClick will run.

// Simple code example for event propagation

// export default function EventPropagation() {
//     return (
//       <div className="Toolbar" onClick={() => {
//         alert('You clicked on the toolbar!');
//       }}>
//         <button onClick={() => alert('Playing!')}>
//           Play Movie
//         </button>
//         <button onClick={() => alert('Uploading!')}>
//           Upload Image
//         </button>
//       </div>
//     );
//   }


//   With Simple CSS to highlight the toolbar

export default function Toolbar() {
    return (
      <div
        className="Toolbar"
        style={{
          background: '#BC13FE', // Example background color
          color: '#fff', // Example text color
          padding: '10px', // Example padding
          cursor: 'pointer', // Example cursor style
        }}
        onClick={() => {
          alert('You clicked on the toolbar!');
        }}
      >
        <button onClick={() => alert('Playing!')}>
          Play Movie
        </button>
        <button onClick={() => alert('Uploading!')}>
          Upload Image
        </button>
      </div>
    );
  }
  
  

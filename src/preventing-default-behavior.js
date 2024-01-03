// Preventing Default Behavior

// Some browser events have default behavior associated with them. 
// For example, Below a <form> submit event, which happens when a button inside of it is clicked, will reload the whole page by default:

// export default function Signup() {
//     return (
//       <form onSubmit={() => alert('Submitting!')}>
//         <input />
//         <button>Send</button>
//       </form>
//     );
//   }

// We can call e.preventDefault() on the event object to stop this from happening:

export default function Signup() {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert('Submitting!');
      }}>
        <input />
        <button>Send</button>
      </form>
    );
  }


// Don’t confuse e.stopPropagation() and e.preventDefault(). They are both useful, but are unrelated:

// e.stopPropagation() stops the event handlers attached to the tags above from firing.
// e.preventDefault() prevents the default browser behavior for the few events that have it
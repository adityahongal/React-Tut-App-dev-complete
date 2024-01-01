// JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. 
// Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. 
// In this situation, you can use curly braces in your JSX to “open a window” to JavaScript:


const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  
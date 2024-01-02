// JSX is a special way of writing JavaScript. That means it’s possible to use JavaScript inside it—with curly braces { }. 

// Where to use curly braces 
// You can only use curly braces in two ways inside JSX:

// 1. As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. Zara's To Do List</{tag}> will not.

// 2. As attributes immediately following the = sign: src={avatar} will read the avatar variable, but src="{avatar}" will pass the string "{avatar}".

export default function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    return (
      <img
        className="avatar"
        src={avatar}
        alt={description}
      />
    );
  }
  
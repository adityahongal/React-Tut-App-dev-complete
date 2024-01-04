// UPDATING ARRAYS WITHOUT MUTATION

// ADDING TO AN ARRAY

// push() will mutate an array, which you don’t want:
// import { useState } from 'react';

// let nextId = 0;

// export default function NoMutateArrayAdding() {
//   const [name, setName] = useState('');
//   const [artists, setArtists] = useState([]);

//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         artists.push({
//           id: nextId++,
//           name: name,
//         });
//       }}>Add</button>
//       <ul>
//         {artists.map(artist => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// Instead, create a new array which contains the existing items and a new item at the end. 
// There are multiple ways to do this, but the easiest one is to use the ... array spread syntax:

// setArtists( // Replace the state
//   [ // with a new array
//     ...artists, // that contains all the old items
//     { id: nextId++, name: name } // and one new item at the end
//   ]
// );

// Now it works correctly:

import { useState } from 'react';

let nextId = 0;

export default function NoMutateArrayAdding() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

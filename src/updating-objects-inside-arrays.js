// Updating objects inside arrays 

// Objects are not really located “inside” arrays. 
// They might appear to be “inside” in code, but each object in an array is a separate value, to which the array “points”.
// Another person’s artwork list may point to the same element of the array!

// When updating nested state, you need to create copies from the point where you want to update, 
// and all the way up to the top level. 
// Let’s see how this works.

// In this example, two separate artwork lists have the same initial state. 
// They are supposed to be isolated, but because of a mutation, 
// their state is accidentally shared, and checking a box in one list affects the other list:

// import { useState } from 'react';

// let nextId = 3;
// const initialList = [
//   { id: 0, title: 'Big Bellies', seen: false },
//   { id: 1, title: 'Lunar Landscape', seen: false },
//   { id: 2, title: 'Terracotta Army', seen: true },
// ];

// export default function UpdatingObjectsInsideArrays() {
//   const [myList, setMyList] = useState(initialList);
//   const [yourList, setYourList] = useState(
//     initialList
//   );

//   function handleToggleMyList(artworkId, nextSeen) {
//     const myNextList = [...myList];
//     const artwork = myNextList.find(
//       a => a.id === artworkId
//     );
//     artwork.seen = nextSeen;
//     setMyList(myNextList);
//   }

//   function handleToggleYourList(artworkId, nextSeen) {
//     const yourNextList = [...yourList];
//     const artwork = yourNextList.find(
//       a => a.id === artworkId
//     );
//     artwork.seen = nextSeen;
//     setYourList(yourNextList);
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList
//         artworks={myList}
//         onToggle={handleToggleMyList} />
//       <h2>Your list of art to see:</h2>
//       <ItemList
//         artworks={yourList}
//         onToggle={handleToggleYourList} />
//     </>
//   );
// }

// function ItemList({ artworks, onToggle }) {
//   return (
//     <ul>
//       {artworks.map(artwork => (
//         <li key={artwork.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={e => {
//                 onToggle(
//                   artwork.id,
//                   e.target.checked
//                 );
//               }}
//             />
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }


// The problem is in code like this:

// const myNextList = [...myList];
// const artwork = myNextList.find(a => a.id === artworkId);
// artwork.seen = nextSeen; // Problem: mutates an existing item
// setMyList(myNextList);

// Although the myNextList array itself is new, 
// the items themselves are the same as in the original myList array. 
// So changing artwork.seen changes the original artwork item. 
// That artwork item is also in yourList, which causes the bug. 
// Bugs like this can be difficult to think about, but thankfully they disappear if you avoid mutating state.

// You can use map to substitute an old item with its updated version without mutation.

// Here, ... is the object spread syntax used to create a copy of an object.

// With this approach, none of the existing state items are being mutated, and the bug is fixed:

import { useState } from 'react';

let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function UpdatingObjectsInsideArrays() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList.map(artwork => {
      if (artwork.id === artworkId) {
        // Create a *new* object with changes
        return { ...artwork, seen: nextSeen };
      } else {
        // No changes
        return artwork;
      }
    }));
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList.map(artwork => {
      if (artwork.id === artworkId) {
        // Create a *new* object with changes
        return { ...artwork, seen: nextSeen };
      } else {
        // No changes
        return artwork;
      }
    }));
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList
        artworks={myList}
        onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList
        artworks={yourList}
        onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }) {
  return (
    <ul>
      {artworks.map(artwork => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={e => {
                onToggle(
                  artwork.id,
                  e.target.checked
                );
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}


// In general, you should only mutate objects that you have just created. 
// If you were inserting a new artwork, you could mutate it, 
// but if you’re dealing with something that’s already in state, you need to make a copy.
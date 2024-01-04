// UPDATING ARRAYS WITHOUT MUTATION

// Removing from an array 

// The easiest way to remove an item from an array is to filter it out. 
// In other words, you will produce a new array that will not contain that item. 
// To do this, use the filter method, for example:

import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function WithoutMutateArrayDelete() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}


// Click the “Delete” button a few times, and look at its click handler.

// setArtists(
//   artists.filter(a => a.id !== artist.id)
// );

// Here, artists.filter(a => a.id !== artist.id) means “create an array that consists of those artists whose IDs are different from artist.id”. 
// In other words, each artist’s “Delete” button will filter that artist out of the array, 
// and then request a re-render with the resulting array. 
// Note that filter does not modify the original array.
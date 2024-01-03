// Updating a nested object 

// Consider a nested object structure like this:

// const [person, setPerson] = useState({
//   name: 'Niki de Saint Phalle',
//   artwork: {
//     title: 'Blue Nana',
//     city: 'Hamburg',
//     image: 'https://i.imgur.com/Sd1AgUOm.jpg',
//   }
// });

// If you wanted to update person.artwork.city, it’s clear how to do it with mutation:

// person.artwork.city = 'New Delhi';


// But in React, you treat state as immutable! In order to change city, you would first need to produce the new artwork object (pre-populated with data from the previous one), and then produce the new person object which points at the new artwork:

// const nextArtwork = { ...person.artwork, city: 'New Delhi' };
// const nextPerson = { ...person, artwork: nextArtwork };
// setPerson(nextPerson);

// Or, written as a single function call:

// setPerson({
//   ...person, // Copy other fields
//   artwork: { // but replace the artwork
//     ...person.artwork, // with the same one
//     city: 'New Delhi' // but in New Delhi!
//   }
// });

// This gets a bit wordy, but it works fine for many cases:

import { useState } from 'react';

export default function UpdatingNestedObjects() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }

  return (
    <>
      <label>
        Name:
        <input
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img 
        src={person.artwork.image} 
        alt={person.artwork.title}
      />
    </>
  );
}

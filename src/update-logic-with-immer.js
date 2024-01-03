// Writing concise update logic with Immer 

// If your state is deeply nested, you might want to consider flattening it. 
// But, if you don’t want to change your state structure, you might prefer a shortcut to nested spreads. 
// Immer is a popular library that lets you write using the convenient but mutating syntax and takes care of producing the copies for you. 
// With Immer, the code you write looks like you are “breaking the rules” and mutating an object:

// updatePerson(draft => {
//   draft.artwork.city = 'Lagos';
// });

// But unlike a regular mutation, it doesn’t overwrite the past state!

// How does Immer work?

// The "draft" provided by Immer is a special type of object, called a Proxy, that “records” what you do with it. 
// This is why you can mutate it freely as much as you like! 
// Under the hood, Immer figures out which parts of the draft have been changed, and produces a completely new object that contains your edits.

import { useImmer } from 'use-immer';

export default function ImmerExample() {
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e) {
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e) {
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e) {
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e) {
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
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

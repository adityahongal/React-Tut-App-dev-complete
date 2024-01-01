// Rendering lists

// You will often want to display multiple similar components from a collection of data. 
// You can use JavaScript’s filter() and map() with React to filter and transform your array of data into an array of components.

// For each array item, you will need to specify a key. Usually, you will want to use an ID from the database as a key. 
// Keys let React keep track of each item’s place in the list even if the list changes.

import { people } from './rendering-lists-overview-data-component.js';
import { getImageUrl } from './rendering-lists-overview-utils-component.js';

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

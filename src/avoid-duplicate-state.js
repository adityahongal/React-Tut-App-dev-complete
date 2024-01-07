// Choosing State Structure

// Avoid duplication in state 

// import { useState } from 'react';

// const initialItems = [
//   { title: 'pretzels', id: 0 },
//   { title: 'crispy seaweed', id: 1 },
//   { title: 'granola bar', id: 2 },
// ];

// export default function AvoidDuplicateState() {
//   const [items, setItems] = useState(initialItems);
//   const [selectedItem, setSelectedItem] = useState(
//     items[0]
//   );

//   function handleItemChange(id, e) {
//     setItems(items.map(item => {
//       if (item.id === id) {
//         return {
//           ...item,
//           title: e.target.value,
//         };
//       } else {
//         return item;
//       }
//     }));
//   }

//   return (
//     <>
//       <h2>What's your travel snack?</h2> 
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             <input
//               value={item.title}
//               onChange={e => {
//                 handleItemChange(item.id, e)
//               }}
//             />
//             {' '}
//             <button onClick={() => {
//               setSelectedItem(item);
//             }}>Choose</button>
//           </li>
//         ))}
//       </ul>
//       <p>You picked {selectedItem.title}.</p>
//     </>
//   );
// }

// Notice how if you first click “Choose” on an item and then edit it, 
// the input updates but the label at the bottom does not reflect the edits. 
// This is because you have duplicated state, and you forgot to update selectedItem.

// Although you could update selectedItem too, an easier fix is to remove duplication. 
// In this example, instead of a selectedItem object (which creates a duplication with objects inside items),
// you hold the selectedId in state, and then get the selectedItem by searching the items array for an item with that ID:

import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

export default function AvoidDuplicateState() {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(item =>
    item.id === selectedId
  );

  function handleItemChange(id, e) {
    setItems(items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          title: e.target.value,
        };
      } else {
        return item;
      }
    }));
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={e => {
                handleItemChange(item.id, e)
              }}
            />
            {' '}
            <button onClick={() => {
              setSelectedId(item.id);
            }}>Choose</button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}.</p>
    </>
  );
}

// Resetting a form with a key 

// Resetting state with a key is particularly useful when dealing with forms.

// In this chat app, the <Chat> component contains the text input state:

// import { useState } from 'react';
// import Chat from './Chat.js';
// import ContactList from './ContactList.js';

// export default function ResettingFormWithKey() {
//   const [to, setTo] = useState(contacts[0]);
//   return (
//     <div>
//       <ContactList
//         contacts={contacts}
//         selectedContact={to}
//         onSelect={contact => setTo(contact)}
//       />
//       <Chat contact={to} />
//     </div>
//   )
// }

// const contacts = [
//   { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
//   { id: 1, name: 'Alice', email: 'alice@mail.com' },
//   { id: 2, name: 'Bob', email: 'bob@mail.com' }
// ];

// Try entering something into the input, and then press “Alice” or “Bob” to choose a different recipient. 
// You will notice that the input state is preserved because the <Chat> is rendered at the same position in the tree.

// In many apps, this may be the desired behavior, but not in a chat app! 
// You don’t want to let the user send a message they already typed to a wrong person due to an accidental click. 

// To fix it, add a key:

// <Chat key={to.id} contact={to} />

// This ensures that when you select a different recipient, 
// the Chat component will be recreated from scratch, including any state in the tree below it. 
// React will also re-create the DOM elements instead of reusing them.

// Now switching the recipient always clears the text field:

import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

export default function ResettingFormWithKey() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
    </div>
  )
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

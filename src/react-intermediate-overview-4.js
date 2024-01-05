// // // Preserving and resetting state 

// // // When you re-render a component, React needs to decide which parts of the tree to keep (and update), 
// // // and which parts to discard or re-create from scratch. In most cases, React’s automatic behavior works well enough.

// // However, sometimes this is not what you want. 
// // In this chat app, typing a message and then switching the recipient does not reset the input. 
// // This can make the user accidentally send a message to the wrong person

// React lets you override the default behavior, 
// and force a component to reset its state by passing it a different key, like <Chat key={email} />. 

// This tells React that if the recipient is different, 
// it should be considered a different Chat component that needs to be re-created from scratch with the new data (and UI like inputs).
//  Now switching between the recipients resets the input field—even though you render the same component.

import { useState } from 'react';
import Chat from './react-intermediate-overview-4-Chat.js';
import ContactList from './react-intermediate-overview-4-ContactList.js';

export default function ReactIntermediateOverviewFour() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat key={to.email} contact={to} />
    </div>
  )
}

const contacts = [
  { name: 'Taylor', email: 'taylor@mail.com' },
  { name: 'Alice', email: 'alice@mail.com' },
  { name: 'Bob', email: 'bob@mail.com' }
];

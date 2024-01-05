// Choosing the state structure

// Structuring state well can make a difference between a component that is pleasant to modify and debug, 
// and one that is a constant source of bugs. 
// The most important principle is that state shouldn’t contain redundant or duplicated information. 
// If there’s unnecessary state, it’s easy to forget to update it, and introduce bugs!

// For example, this form has a redundant fullName state variable:

// import { useState } from 'react';

// export default function ReactIntermediateOverviewTwo() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [fullName, setFullName] = useState('');

//   function handleFirstNameChange(e) {
//     setFirstName(e.target.value);
//     setFullName(e.target.value + ' ' + lastName);
//   }

//   function handleLastNameChange(e) {
//     setLastName(e.target.value);
//     setFullName(firstName + ' ' + e.target.value);
//   }

//   return (
//     <>
//       <h2>Let’s check you in</h2>
//       <label>
//         First name:{' '}
//         <input
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:{' '}
//         <input
//           value={lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <p>
//         Your ticket will be issued to: <b>{fullName}</b>
//       </p>
//     </>
//   );
// }

// You can remove it and simplify the code by calculating fullName while the component is rendering:

import { useState } from 'react';

export default function ReactIntermediateOverviewTwo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

// This might seem like a small change, but many bugs in React apps are fixed this way.
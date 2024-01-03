// Copying Objects with Spread Syntax

// often, you will want to include existing data as a part of the new object you’re creating. 
// For example, you may want to update only one field in a form, but keep the previous values for all other fields.

// These input fields don’t work because the onChange handlers mutate the state:

// import { useState } from 'react';

// export default function SpreadSyntaxForm() {
//     const [person, setPerson] = useState({
//       firstName: 'Barbara',
//       lastName: 'Hepworth',
//       email: 'bhepworth@sculpture.com'
//     });
  
//     function handleFirstNameChange(e) {
//       person.firstName = e.target.value;
//     }
  
//     function handleLastNameChange(e) {
//       person.lastName = e.target.value;
//     }
  
//     function handleEmailChange(e) {
//       person.email = e.target.value;
//     }
  
//     return (
//       <>
//         <label>
//           First name:
//           <input
//             value={person.firstName}
//             onChange={handleFirstNameChange}
//           />
//         </label>
//         <label>
//           Last name:
//           <input
//             value={person.lastName}
//             onChange={handleLastNameChange}
//           />
//         </label>
//         <label>
//           Email:
//           <input
//             value={person.email}
//             onChange={handleEmailChange}
//           />
//         </label>
//         <p>
//           {person.firstName}{' '}
//           {person.lastName}{' '}
//           ({person.email})
//         </p>
//       </>
//     );
//   }
  

// For example, this line mutates the state from a past render:

// person.firstName = e.target.value;

// The reliable way to get the behavior you’re looking for is to create a new object and pass it to setPerson. 
// But here, you want to also copy the existing data into it because only one of the fields has changed:

// setPerson({
//   firstName: e.target.value, // New first name from the input
//   lastName: person.lastName,
//   email: person.email
// });

// You can use the ... object spread syntax so that you don’t need to copy every property separately.

// setPerson({
//   ...person, // Copy the old fields
//   firstName: e.target.value // But override this one
// });

// Now the form works!

import { useState } from 'react';

export default function SpreadSyntaxForm() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    });
  }

  return (
    <>
      <label>
        First name:
        <input
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        Email:
        <input
          value={person.email}
          onChange={handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </p>
    </>
  );
}

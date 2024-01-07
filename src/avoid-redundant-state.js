// Choosing State Structure

// Avoid redundant state

// If you can calculate some information from the component’s props or its existing state variables during rendering,
// you should not put that information into that component’s state.

// For example, take this form. It works, but can you find redundant state in it -

// export default function Form() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [fullName, setFullName] = useState(''); }

// This form has three state variables: firstName, lastName, and fullName.

// However, fullName is redundant.
// You can always calculate fullName from firstName and lastName during render, so remove it from state.

// This is how you can do it:

import { useState } from "react";

export default function AvoidRedundantState() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const fullName = firstName + " " + lastName;

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
        First name: <input value={firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}

// Here, fullName is not a state variable. Instead, it’s calculated during render:

// const fullName = firstName + ' ' + lastName;

// As a result, the change handlers don’t need to do anything special to update it. 
// When you call setFirstName or setLastName, you trigger a re-render, 
// and then the next fullName will be calculated from the fresh data.
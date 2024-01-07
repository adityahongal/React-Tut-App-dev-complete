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


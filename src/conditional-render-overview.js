// Conditional rendering 

// Your components will often need to display different things depending on different conditions. 
// In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

// In this example, the JavaScript && operator is used to conditionally render a checkmark:


function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}                                    {/*  Can also be written as {isPacked ? name + ' ✔' : name} */}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}

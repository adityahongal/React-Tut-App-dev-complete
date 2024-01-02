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
      <h1>L K Subramanya's Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Riding Gear"
        />
        <Item
          isPacked={true}
          name="Helmet with clear visor"
        />
        <Item
          isPacked={false}
          name="Chain Lube"
        />
      </ul>
    </section>
  );
}






// In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
// In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
// The shortcuts are common, but you don’t have to use them if you prefer plain "if".
// Using Double Curlies

// In addition to strings, numbers, and other JavaScript expressions, you can even pass objects in JSX. 
// Therefore, to pass a JS object in JSX, you must wrap the object in another pair of curly braces: person={{ name: "Hedy Lamarr", inventions: 5 }}.

// You may see this with inline CSS styles in JSX below. 



export default function DoubleCurlies() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
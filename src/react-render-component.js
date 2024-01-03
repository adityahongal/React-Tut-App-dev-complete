// React renders your components 

// After you trigger a render, React calls your components to figure out what to display on screen. 
// “Rendering” is React calling your components.

// 1. On initial render, React will call the root component.
// 2. For subsequent renders, React will call the function component whose state update triggered the render.

// In the following example, React will call RenderReact() and  Image() several times.

export default function RenderReact() {
    return (
      <section>
        <h1>Inspiring Sculptures</h1>
        <Image />
        <Image />
        <Image />
      </section>
    );
  }
  
  function Image() {
    return (
      <img
        src="https://i.imgur.com/ZF6s192.jpg"
        alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
      />
    );
  }
  
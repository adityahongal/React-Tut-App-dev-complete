// The process of requesting and serving UI has three steps:

// 1-  Triggering a render (delivering the guest’s order to the kitchen)
// 2 - Rendering the component (preparing the order in the kitchen)
// 3 - Committing to the DOM (placing the order on the table)

// Triggering the render

// There are two reasons for a component to render:

// 1. It’s the component’s initial render.
// 2. The component’s (or one of its ancestors’) state has been updated.

// Initial render 
// When your app starts, you need to trigger the initial render. 
// Frameworks and sandboxes sometimes hide this code, 
// but it’s done by calling createRoot with the target DOM node, and then calling its render method with your component

export default function TriggerRender() {
    return (
      <img
        src="https://i.imgur.com/ZF6s192.jpg"
        alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"
      />
    );
  }
  
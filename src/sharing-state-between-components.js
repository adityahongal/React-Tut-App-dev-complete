// Sharing State Between Components

// Sometimes, you want the state of two components to always change together. 
// To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. 
// This is known as lifting state up, and it’s one of the most common things you will do writing React code.

// Lifting state up by example 

// In this example, a parent Accordion component renders two separate Panels:

// --> Accordion
//     1. Panel
//     2. Panel

// Each Panel component has a boolean isActive state that determines whether its content is visible.

// Press the Show button for both panels:

// import { useState } from 'react';

// function Panel({ title, children }) {
//     const [isActive, setIsActive] = useState(false);
//     return (
//       <section className="panel">
//         <h3>{title}</h3>
//         {isActive ? (
//           <p>{children}</p>
//         ) : (
//           <button onClick={() => setIsActive(true)}>
//             Show
//           </button>
//         )}
//       </section>
//     );
//   }
  
//   export default function SharingStateBetweenComponents() {
//     return (
//       <>
//         <h2>Almaty, Kazakhstan</h2>
//         <Panel title="About">
//           With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
//         </Panel>
//         <Panel title="Etymology">
//           The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
//         </Panel>
//       </>
//     );
//   }

// Notice how pressing one panel’s button does not affect the other panel—they are independent.

// But now let’s say you want to change it so that only one panel is expanded at any given time. With that design, expanding the second panel should collapse the first one. How would you do that?

// To coordinate these two panels, you need to “lift their state up” to a parent component in three steps:

// 1. Remove state from the child components.
// 2. Pass hardcoded data from the common parent.
// 3. Add state to the common parent and pass it down together with the event handlers.

// This will allow the "SharingStateBetweenComponents" (changed name from accordion) component to coordinate both Panels and only expand one at a time.

import { useState } from 'react';

export default function SharingStateBetweenComponents() {                    // Changed name from Accordion() to SharingStateBetweenComponents()
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

// Passing Data Deeply with Context

// Usually, you will pass information from a parent component to a child component via props. 
// But passing props can become verbose and inconvenient if you have to pass them through many components in the middle, 
// or if many components in your app need the same information. 
// Context lets the parent component make some information available to any component in the tree below it—
// no matter how deep—without passing it explicitly through props.

// Context: an alternative to passing props 

// Context lets a parent component provide data to the entire tree below it. 
// There are many uses for context. Here is one example. 
// Consider this Heading component that accepts a level for its size:

// import Heading from './Heading.js';
// import Section from './Section.js';

// export default function Page() {
//   return (
//     <Section>
//       <Heading level={1}>Title</Heading>
//       <Heading level={2}>Heading</Heading>
//       <Heading level={3}>Sub-heading</Heading>
//       <Heading level={4}>Sub-sub-heading</Heading>
//       <Heading level={5}>Sub-sub-sub-heading</Heading>
//       <Heading level={6}>Sub-sub-sub-sub-heading</Heading>
//     </Section>
//   );
// }

// Currently, you pass the level prop to each <Heading> separately

// It would be nice if you could pass the level prop to the <Section> component instead and remove it from the <Heading>. 
// This way you could enforce that all headings in the same section have the same size:

// <Section level={3}>
//  <Heading>About</Heading>
//  <Heading>Photos</Heading>
//  <Heading>Videos</Heading>
// </Section>

// But how can the <Heading> component know the level of its closest <Section>? 
// That would require some way for a child to “ask” for data from somewhere above in the tree.

// You can’t do it with props alone. 
// This is where context comes into play. You will do it in three steps:

// 1. Create a context. (You can call it LevelContext, since it’s for the heading level.)
// 2. Use that context from the component that needs the data. (Heading will use LevelContext.)
// 3. Provide that context from the component that specifies the data. (Section will provide LevelContext.)

// Context lets a parent—even a distant one!—provide some data to the entire tree inside of it.

import Heading from './Heading.js';
import Section from './Section.js';
import './styles.css'

export default function PassingDataDeeplyWithContext() {
  return (
    <Section level={1}>
      <Heading>Title</Heading>
      <Section level={2}>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section level={3}>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section level={4}>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

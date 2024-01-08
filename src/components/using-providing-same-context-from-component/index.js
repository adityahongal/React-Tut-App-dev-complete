// PASSING DATA DEEPLY USING CONTEXT

// Using and providing context from the same component 

// Currently, you still have to specify each section’s level manually:

// export default function Page() {
//   return (
//     <Section level={1}>
//       ...
//       <Section level={2}>
//         ...
//         <Section level={3}>
//           ...)}

// Since context lets you read information from a component above,
//  each Section could read the level from the Section above, and pass level + 1 down automatically. 
// Here is how you could do it:

// With this change, you don’t need to pass the level prop either to the <Section> or to the <Heading>:

import Heading from './Heading.js';
import Section from './Section.js';

export default function UsingProvidingContextSameComponent() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

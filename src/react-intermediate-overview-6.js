// Passing data deeply with context 

// Usually, you will pass information from a parent component to a child component via props. 
// But passing props can become inconvenient if you need to pass some prop through many components, 
// or if many components need the same information. 

// Context lets the parent component make some information available to any component in the tree below it—
// no matter how deep it is—without passing it explicitly through props.

// Here, the Heading component determines its heading level by “asking” the closest Section for its level. 
// Each Section tracks its own level by asking the parent Section and adding one to it. 
// Every Section provides information to all components below it without passing props—it does that through context.


import Heading from './components/react-intermediate-overview-6-Heading.js';
import Section from './components/react-intermediate-overview-6-section.js';

export default function ReactIntermediateOverviewSix() {
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

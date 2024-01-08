// Pasing Data Deeply using Context

// Context passes through intermediate components 

// You can insert as many components as you like between the component that provides context and the one that uses it. 
// This includes both built-in components like <div> and components you might build yourself.

// In this example, the same Post component (with a dashed border) is rendered at two different nesting levels. 
// Notice that the <Heading> inside of it gets its level automatically from the closest <Section>:

import Heading from './Heading.js';
import Section from './Section.js';
import './styles.css';

export default function ContextPassesIntermediateComponents() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post
        title="Hello traveller!"
        body="Read about my adventures."
      />
      <AllPosts />
    </Section>
  );
}

function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}

function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post
        title="Flavors of Lisbon"
        body="...those pastéis de nata!"
      />
      <Post
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!"
      />
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}

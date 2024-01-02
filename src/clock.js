// How props change over time

// This example illustrates that a component may receive different props over time. 
// Props are not always static! 
// Here, the time prop changes every second, and the color prop changes when you select another color. 
// Props reflect a component’s data at any point in time, rather than only in the beginning.

import React from 'react';

export default function Clocky({ color, time }) {
    return (
      <h1 style={{ color: color }}>
        {time}
      </h1>
    );
  }
  
import React from "react";

function ConditionalComponent({ condition }) {
  if (condition) {
    return <p>Your Condition is true.</p>;
  }
  return <p>Here's your content.</p>;
}

export default ConditionalComponent;

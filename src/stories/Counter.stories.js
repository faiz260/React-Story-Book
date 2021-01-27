import React, { useState } from "react";
import Counter from "../Components/Counter";

export default {
  title: "Counter",
  component: Counter,
};

export function CounterStory() {
  return (
    <div>
      <Counter />
    </div>
  );
}

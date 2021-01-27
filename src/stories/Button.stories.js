import React from "react";
import Button from "../Components/Button";

export default{
    title: 'Button Story',
    component: Button
};

export function ButtonStory() {
  return <div>
      <Button onClick={()=>alert("Pressed!")} value="Click me!" />
  </div>;
}

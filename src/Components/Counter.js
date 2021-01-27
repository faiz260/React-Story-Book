import React, { useState } from "react";
import Text from "./Text";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter</h1>
      <Text value={`The initial value of the counter is: ${count}`} />
      <Button value="Increment" onClick={handleIncrement}/>
      <Button value="Decrement" onClick={handleDecrement}/>
    </div>
  );
}

export default Counter;

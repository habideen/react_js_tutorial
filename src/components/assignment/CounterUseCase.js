import React, { useState } from "react";

function CounterUseState() {
  const [count, setCounter] = useState(0);

  const increment = () => setCounter(count + 1);
  const decrement = () => setCounter(count - 1);

  return (
    <div>
      <h1>Counter Using useCase</h1>
      <p>Counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterUseState;

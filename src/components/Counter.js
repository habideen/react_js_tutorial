import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    alert(`Click again! Count is ${count+1}.`);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* <button onClick={() => setCount(count +1)}>Click me</button> */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Counter;

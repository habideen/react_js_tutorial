import React, { useState, useCallback } from "react";

const Button = React.memo(({ handleClick }) => {
  console.log("Button rendered");
  return <button onClick={handleClick}>Click Me</button>;
});

function UseCallback() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button handleClick={increment} />
    </div>
  );
}

export default UseCallback;

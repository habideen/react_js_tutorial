import React, { useState } from "react";

const Child = React.memo(({ value }) => {
  console.log("Child rendered");
  return <p>Value: {value}</p>;
});

function ReactMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child value={count} />
      <input onChange={(e) => setText(e.target.value)} value={text} />
    </div>
  );
}

export default ReactMemo;
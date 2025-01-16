import React, { useState, useMemo } from "react";

function ExpensiveCalculation({ num }) {
  const result = useMemo(() => {
    console.log("Calculating");
    return num * 2;
  }, [num]);

  return <p>Result: {result}</p>;
}

function UseMemoUseCallback() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <ExpensiveCalculation num={number} />
    </div>
  );
}

export default UseMemoUseCallback;

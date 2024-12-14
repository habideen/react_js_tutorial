import React, { useState } from "react";

function DerivedState() {
  const [price, setPrice] = useState(100);
  const [taxRate, setTaxRate] = useState(0.2);

  const totalPrice = price + price * taxRate; // Derived state

  // totalPrice is also affected when price increases
  const increment = () => {
    setPrice(price + 1);
  };

  return (
    <div>
      <p>Price Calculator: ${price}</p>
      <p>Total Price (including tax): ${totalPrice}</p>
      <button onClick={increment}>Increase price by 2</button>
    </div>
  );
}

export default DerivedState;

import React, { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
      setName(event.target.value);
  };

  return (
    <div>
      <h1>Controlled Input Form</h1>
      <input type="text" value={name} onChange={handleChange} />
      <p>You entered: {name}</p>
    </div>
  );
}

export default SimpleForm;

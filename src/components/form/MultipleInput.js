import React, { useState } from "react";

function MultipleInput() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <h1>Multiple Inputs</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
        </div>
        <div>
          <label for="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Enter your last name"
          />
        </div>
        <div>
          <label for="email">Last Name:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address e.g. abc@xyz.com"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {isSubmitted && (
        <div>
          <h3>Form Result</h3>
          <p>First Name: {formData.first_name}</p>
          <p>Last Name: {formData.last_name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
}

export default MultipleInput;

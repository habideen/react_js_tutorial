import React, { useState } from "react";

function MultipleFormValidatin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    if (id === "name") {
      setError((prev) => ({
        name: value.length < 3 ? "The name length must be greater than 3" : "",
      }));
    } else if (id === "email") {
      setError((prev) => ({
        email: !validateEmail(value) ? "The email is invalid" : "",
      }));
    } else if (id === "password") {
      setError((prev) => ({
        password:
          value.length < 6 ? "The password length must be greater than 6" : "",
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!error.name && !error.email && !error.password) {
      alert(`Form submitted:
      Name: ${formData.name}
      Email: ${formData.email}
      Password: ${formData.password}`);
    }
  };

  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="E.g. Akinlaju"
          />
          {error.name && <p style={{ color: "red" }}>{error.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E.g. abc@xyz.co"
          />
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="E.g. ****"
          />
          {error.password && <p style={{ color: "red" }}>{error.password}</p>}
        </div>
        <button
          type="submit"
          disabled={
            !formData.name ||
            !formData.email ||
            !formData.password ||
            error.name ||
            error.email ||
            error.password
          }
          style={{ display: "block", marginTop: "10px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MultipleFormValidatin;

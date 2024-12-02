import React, {useState} from 'react';

function FormValidatin() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setError('Invalid email address');
    } else {
      setError('');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!error) {
      alert(`Email submitted: ${email}`);
    }
  }


  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label for="email">Email: </label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="E.g. abc@xyz.co"
          />
          {error && <p style={{color: 'red'}}>{error}</p>}
          <button type="submit" disabled={!!error} style={{display: 'block', marginTop: '10px'}}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormValidatin;
import React from "react";

function UncontrolledForm() {
  const inputRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Input Value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h1>Uncontrolled Input Example</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} placeholder="Enter a value" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;

import React from 'react';

function InlineStyle() {
  const divStyle = {
    color: 'white',
    backgroundColor: 'blue',
    padding: '20px',
    borderRadius: '5px'
  }

  return (
    <div style={divStyle}>
      <h1>Inline Styles in React</h1>
    </div>
  );
}

export default InlineStyle;
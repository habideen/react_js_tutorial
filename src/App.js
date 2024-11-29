import './App.css';

function App() {
  const name = "Habideen Ibrahim";
  const greeting = "Hello, " + name + "!";

  return (
    <div>
      <h1>{greeting}</h1>
      <p>Welcome to learning JSX in React.</p>
      <p>The sum of 10 and 20 is {10 + 20}</p>
    </div>  
  );
}

export default App;

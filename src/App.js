import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';

function App() {
  const name = "Habideen Ibrahim";
  const greeting = "Hello, " + name + "!";

  return (
    <div>
      <h1>{greeting}</h1>
      <p>Welcome to learning JSX in React.</p>
      <p>The sum of 10 and 20 is {10 + 20}</p>
      
      <Greeting name="Habideen from props" age="23" />
      <Counter />
    </div>  
  );
}

export default App;

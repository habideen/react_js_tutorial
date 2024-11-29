import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Form from './components/Form';
import CheckAuth from './components/CheckAuth';

function App() {
  const name = "Habideen Ibrahim";
  const greeting = "Hello, " + name + "!";

  return (
    <div>
      <CheckAuth />
      <h1>{greeting}</h1>
      <p>Welcome to learning JSX in React.</p>
      <p>The sum of 10 and 20 is {10 + 20}</p>
      
      <Greeting name="Habideen from props" age="23" />
      <Counter />
      <Form />
    </div>  
  );
}

export default App;

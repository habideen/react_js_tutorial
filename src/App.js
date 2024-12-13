import { useState, useEffect } from "react";
import "./App.css";
import StyledComponent from "./components/style/StyledComponent";
import LifeCycle from "./components/lifecycle/LifeCycle";
import AppContext from "./components/context/AppContext";
// import InlineStyle from "./components/style/Inline";
// import ExternalCSS from "./components/style/ExternalCSS";
// import UncontrolledForm from "./components/form/UncontrolledForm";
// import MultipleFormValidatin from "./components/form/MultipleFormValidation";
// import MultipleInput from "./components/form/MultipleInput";
// import FormValidatin from "./components/form/FormValidation";
// import SimpleForm from "./components/form/SimpleForm";
// import Greeting from "./components/Greeting";
// import Counter from "./components/Counter";
// import Form from "./components/form/FormSubmission";
// import CheckAuth from "./components/CheckAuth";
// import ItemMap from "./components/ItemMap";

function content() {
  // const name = "Habideen Ibrahim";
  // const greeting = "Hello, " + name + "!";

  return (
    <div>
      {/* <CheckAuth />
      <h1>{greeting}</h1>
      <p>Welcome to learning JSX in React.</p>
      <p>The sum of 10 and 20 is {10 + 20}</p>

      <Greeting name="Habideen from props" age="23" />
      <Counter />
      <FormSubmission />
      <ItemMap />
      <SimpleForm />
      <MultipleInput />
      <FormValidatin />
      <UncontrolledForm />
      <MultipleFormValidatin />
      <InlineStyle />
      <ExternalCSS />
      <StyledComponent /> */}
      {/* <LifeCycle /> */}
      <AppContext />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return <>{isLoading ? <p>Loading...</p> : content()}</>;
}

export default App;

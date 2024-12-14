import React, { createContext, useReducer, useContext } from "react";

const ThemeContext = createContext();

const initialState = { theme: "light" };

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error();
  }
}

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

function App() {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <div style={{ background: state.theme === "light" ? "#fff" : "#333" }}>
      <p>Current Theme: {state.theme}</p>
      <button onClick={() => dispatch({ type: "toggle" })}>Toggle Theme</button>
    </div>
  );
}

export default function UseRenderContextTheme() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

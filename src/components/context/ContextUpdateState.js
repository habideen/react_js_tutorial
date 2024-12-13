import React, { useState } from "react";
import ThemeContext from "./CreateSimple";

function ContextUpdateState() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () =>
          setTheme((prev) => (prev === "light" ? "dark" : "light")),
      }}
    >
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}

export default ContextUpdateState;

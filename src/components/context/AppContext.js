import React, { useContext } from "react";
import ThemeContext from "./CreateSimple";

// function Toolbar() {
//   const theme = useContext(ThemeContext);
//   return <div>Current theme: {theme}</div>;
// }

function Toolbar() {
  return (
    <ThemeContext.Consumer>
      {(theme) => <div>Current theme: {theme}</div>}
    </ThemeContext.Consumer>
  );
}

function AppContext() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default AppContext;

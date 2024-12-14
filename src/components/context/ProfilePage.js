import React, {useContext} from 'react';
import { UserContext } from './UserContext';
import { ThemeContext } from "./ThemeContext";

function ProfilePage() {
  const {user} = useContext(UserContext);
  const {isDarkMode, toggleTheme} = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: isDarkMode ? "#333" : "#eee",
    color: isDarkMode ? "#fff" : "#000",
    padding: "20px",
    borderRadius: "10px",
  }

  return (
    <div style={themeStyles}>
      <h1>Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <button
        onClick={toggleTheme}
      >Swith to {isDarkMode ? "Light" : "Dark"} mode</button>
    </div>
  );
}

export default ProfilePage;
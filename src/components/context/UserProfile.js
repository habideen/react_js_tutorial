import React from 'react';
import ProfilePage from "./ProfilePage";
import { UserProvider } from "./UserContext";
import { ThemeProvider } from "./ThemeContext";

function UserProfile() {
  return (
    <ThemeProvider>
      <UserProvider>
        <ProfilePage />
      </UserProvider>
    </ThemeProvider>
  );
}

export default UserProfile;
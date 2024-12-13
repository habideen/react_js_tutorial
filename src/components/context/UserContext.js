import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    name: "Habideen Ibrahim Akinlara",
    email: "habideenibrahim@gmail.com",
  });

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

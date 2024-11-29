import React, { useState } from "react";

function renderContent(isLoggedIn, toggleLogin) {
  return (
    <>
      <h1>{isLoggedIn ? "Welcome back!" : "Please log in."}</h1>
      {isLoggedIn && <h2>We are really excited to have you back.</h2>}
      <button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </>
  );
}

function CheckAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return <div>{renderContent(isLoggedIn, toggleLogin)}</div>;
}

export default CheckAuth;

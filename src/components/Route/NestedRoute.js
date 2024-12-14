import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Profile() {
  return <h1>Profile Page</h1>;
}

function Settings() {
  return <h1>Settings Page</h1>;
}

function NestedRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NestedRoute;

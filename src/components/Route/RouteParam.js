import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <p>User ID: {id}</p>;
}

function RouteParam() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteParam;

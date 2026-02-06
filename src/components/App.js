import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/item/:id" element={<DetailPage />} />
    </Routes>
  );
}

export default App;

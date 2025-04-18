import React from "react";
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DayPage from "./Pages/DayPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DayPage />} />
          <Route path="/:day" element={<DayPage />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;

import React from "react";
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DayPage from "./Pages/DayPage";
import Today from "./Components/Today";
import Timings from "./Pages/Timings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/timings" element={<Timings />} />
          <Route path="/:day" element={<DayPage />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  );
}

export default App;

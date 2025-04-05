import React from "react";
import "./App.css";

const days = ["M", "T", "W", "T", "F", "S", "S"];

function App() {
  return (
    <div className="app">
      <div className="center-fade"></div>
      <div className="overlay" />
      <div className="sidebar">
        {days.map((day, index) => (
          <div key={index} className="day">
            {day}
          </div>
        ))}
      </div>
      <div className="main">
        <div className="content">
          <h1 className="title">MESS TIMINGS</h1>
          <div className="card-container">
            <div className="meal-card">
              <div>Breakfast</div>
              <p className="meal-time">
                07:30 AM - 09:30 AM<br />
                08:00 AM - 10:00 AM<br />
                (Sundays and Holidays)
              </p>
            </div>

            <div className="meal-card">
              <div>Lunch</div>
              <p className="meal-time">
                11:30 AM - 01:30 PM<br />
                12:00 PM - 02:00 PM<br />
                (Sundays and Holidays)
              </p>
            </div>

            <div className="meal-card">
              <div>Dinner</div>
              <p className="meal-time">
                07:00 PM - 09:00 PM<br />
                (08:45PM Last Entry Time)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

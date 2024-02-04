import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./LiveCalendar.css";

const LiveCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="live-calendar-container">
      <div className="live-time">{time.toLocaleTimeString()}</div>
      <div className="live-date">{time.toDateString()}</div>
      <div className="calendar-container mx-auto flex items-center justify-center">
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
};

export default LiveCalendar;

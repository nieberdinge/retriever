import Activity from "./Activity";
import React from "react";

function Calendar() {
  return <div className="calendar">{createCalendar()}</div>;
}

function createCalendar() {
  const days = [];
  for (let i = 0; i < 31; i++) {
    days.push(<Activity key={i} day={i + 1} />);
  }
  return days;
}

export default Calendar;

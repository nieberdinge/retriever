import Activity from "./Activity";
import React from "react";

function Calendar() {
  return <div className="calendar">{createCalendar()}</div>;
}

function createCalendar() {
  const days = [];
  let prevMonday = new Date();
  prevMonday.setDate(prevMonday.getDate() - ((prevMonday.getDay() + 6) % 7));

  for (let i = 0; i < 31; i++) {
    days.push(
      <Activity
        key={i}
        day={new Date(prevMonday.setDate(prevMonday.getDate() + i))}
      />
    );
  }
  return days;
}

export default Calendar;
